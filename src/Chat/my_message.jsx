import React from "react";

export default function My_message({ image, message }) {
    return (<div className="chat-message">
        <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{message.text}</span></div>
            </div>
            <img src={image} alt="My profile" className="w-6 h-6 rounded-full order-2" />
        </div>
    </div>);
}

