import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import classnames from 'classnames';
import SideBar from './SideBar';
import { client } from './utils/client.mjs';
import useContextHook from './utils/customContextHook';
import ChatInside from './Chat/ChatInside';

const Messages = () => {
    const { token, user } = useContextHook()
    const [activeChats, setActiveChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);


    useEffect(() => {
        client(token).get('/chat').then(({ data }) => setActiveChats(data))
    }, []);

    if (user)
        return (
            <div className="flex h-screen">
                <SideBar />
                <div className="w-1/3 bg-gray-200 p-4 flex flex-col-reverse place-content-start">
                    {activeChats.map((chat) => {
                        const formatDate = (created_at) => {
                            const date = new Date(created_at);
                            const day = date.getDate().toString().padStart(2, '0');
                            const month = (date.getMonth() + 1).toString().padStart(2, '0');
                            const year = date.getFullYear();
                            const hour = date.getHours().toString().padStart(2, '0');
                            const minutes = date.getMinutes().toString().padStart(2, '0');
                            const formattedDate = `${day}-${month}-${year} ${hour}:${minutes}`;
                            return formattedDate
                        }
                        return (
                            <div
                                key={chat.id}
                                className={classnames("p-2 cursor-pointer hover:bg-gray-300", { "bg-gray-300": chat === selectedChat })}
                                onClick={() => setSelectedChat(chat)}
                            >
                                {(chat.firstname == user.firstname) ? <><div class="flex items-center space-x-4">
                                    <img class="w-10 h-10 rounded-full object-cover" src={chat.createdby_image} alt={chat.createdby_firstname} />
                                    <div class="font-medium dark:text-white">
                                        <div>{`${chat.createdby_firstname} ${chat.createdby_lastname}`}</div>
                                        <div class="text-sm text-gray-500 dark:text-gray-400">{formatDate(chat.created_at)}</div>
                                    </div>
                                </div></> : <div class="flex items-center space-x-4">
                                    <img class="w-10 h-10 rounded-full object-cover" src={chat.image} alt={chat.firstname} />
                                    <div class="font-medium dark:text-white">
                                        <div>{`${chat.firstname} ${chat.lastname}`}</div>
                                        <div class="text-sm text-gray-500 dark:text-gray-400">{formatDate(chat.created_at)}</div>
                                    </div>
                                </div>}

                            </div>
                        )
                    })}
                </div>
                <div className="w-2/3 bg-white p-4">
                    {selectedChat && <ChatInside selectedChat={selectedChat} />}

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