import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/contact', { name, email, message });
            setResponseMessage(response.data);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            setResponseMessage('Error sending message');
        }
    };

    return (
        <div>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default ContactForm;
