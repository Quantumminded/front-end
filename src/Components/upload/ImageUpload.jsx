import React, { useRef } from 'react';
import { client } from '../../utils/client.mjs';


const ImageUpload = () => {
    const fileInput = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const file = fileInput.current.files[0];

        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        client()
            .post('/upload', formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
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
