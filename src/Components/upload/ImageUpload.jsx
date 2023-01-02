import React, { useRef } from 'react';
import { client } from '../../utils/client.mjs';
import useContextHook from '../../utils/customContextHook.js';
import toastMessage from '../notification/toastMessage.js';
const ImageUpload = () => {
    const fileInput = useRef(null);
    const { token } = useContextHook()
    const handleSubmit = (event) => {
        event.preventDefault();

        const file = fileInput.current.files[0];

        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        client(token)
            .post('/upload', formData)
            .then((response) => {
                toastMessage("info", response.data);
            })
            .catch((error) => {
                toastMessage("warning", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" ref={fileInput} accept="image/*" />
            <button type="submit">Upload</button>
        </form>
    );
};

export default ImageUpload;
