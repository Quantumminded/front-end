import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import classnames from 'classnames';
import SideBar from './SideBar';
import { client } from './utils/client.mjs';
import useContextHook from './utils/customContextHook';
import ChatInside from './Chat/ChatInside';

const Messages = () => {
    const { token } = useContextHook()
    const [activeChats, setActiveChats] = useState([
        { id: 'chat1', name: 'Chat 1', messages: [{ id: 2, text: "test2123" }, { id: 2, text: "test2123" }, { id: 2, text: "test2123" }, { id: 2, text: "test2123" }, { id: 2, text: "test2123" }] },
        { id: 'chat2', name: 'Chat 2', messages: [] },
        { id: 'chat3', name: 'Chat 3', messages: [] }
    ]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [socket, setSocket] = useState(null);
    const [input, setInput] = useState('');

    useEffect(() => {

        const socket = io();
        socket.connect()
        console.log(socket)
        setSocket(socket);
        socket.on("connect", () => {
            console.log(socket.connected); // true
        });

        socket.on("disconnect", () => {
            console.log(socket.connected); // false
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
        };
    }, []);

    const handleSelectChat = (chat) => {
        setSelectedChat(chat);
        socket.emit('join', chat.id);
    }

    useEffect(() => {
        if (socket && selectedChat) {
            socket.on(`chat:${selectedChat.id}`, (message) => {
                // Update the selectedChat's messages
                setSelectedChat((prevChat) => {
                    return {
                        ...prevChat,
                        messages: [...prevChat.messages, message]
                    }
                });
            });
        }
    }, [socket, selectedChat]);

    const handleSendMessage = (event) => {

        event.preventDefault();
        if (socket && selectedChat && input) {
            client(token).post('/user/chat', { messages: input, name: "testname" }).then(res => console.log(res))
            socket.emit(`chat:${selectedChat.id}`, { text: input });
            setInput('');
        }
    }

    return (
        <div className="flex h-screen">
            <SideBar />
            <div className="w-1/3 bg-gray-200 p-4">
                {activeChats.map((chat) => (
                    <div
                        key={chat.id}
                        className={classnames("p-2 cursor-pointer", { "bg-gray-300": chat === selectedChat })}
                        onClick={() => handleSelectChat(chat)}
                    >
                        {chat.name}
                    </div>
                ))}
            </div>
            <div className="w-2/3 bg-white p-4">

                <ChatInside />
                {/* {selectedChat && (
                    <>
                        <div className="mb-4 chat-start">
                            {selectedChat.messages.map((message) => (
                                <div key={message.id} className=" chat-bubble">{message.text}</div>
                            ))}
                        </div>
                        <form onSubmit={handleSendMessage} className="absolute bottom-0 flex">
                            <input
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                className="border rounded p-2 w-full"
                                type="text"
                                placeholder="Type your message here..."
                            />
                            <button className="bg-blue-500 text-white rounded p-2 ml-2">Send</button>
                        </form>
                    </>
                )} */}
            </div>
        </div>
    );
};

export default Messages;