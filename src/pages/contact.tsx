import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import "./contact.css"; // Include the updated styles

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [showModal, setShowModal] = useState(false); // State for showing the modal
    const [isLoading, setIsLoading] = useState(false); // State to show loading state

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Web3Forms API endpoint and your form's unique Web3Forms API key
        const API_URL = "https://api.web3forms.com/submit";
        const API_KEY = "ad447380-018a-4c3c-8994-de1226f9dc00"; // Replace with your API key

        const formPayload = new FormData();
        formPayload.append("name", formData.name);
        formPayload.append("email", formData.email);
        formPayload.append("message", formData.message);
        formPayload.append("apikey", API_KEY);

        try {
            const response = await axios.post(API_URL, formPayload, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.status === 200) {
                setShowModal(true); // Show the modal after successful submission
                setFormData({ name: "", email: "", message: "" }); // Clear form after submission
            }
        } catch (error) {
            console.error("Error submitting the form: ", error);
            alert("There was an error submitting your form. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const closeModal = () => {
        setShowModal(false); // Close modal
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="YOUR NAME"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="YOUR EMAIL"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="WRITE YOUR MESSAGE"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                </button>
            </form>

            {/* Modal for success */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="checkmark-circle">
                            <div className="checkmark-container">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="50"
                                    height="50"
                                    fill="none"
                                    stroke="#003176"
                                    strokeWidth="2"
                                >
                                    <path
                                        fill="none"
                                        d="M5 13l4 4L19 7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="checkmark-path"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p className="sent-message">Sent</p>
                        <button onClick={closeModal} className="close-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
