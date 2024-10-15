import React from 'react';
import './ContactInfo.css';

const ContactInfo: React.FC = () => {
    return (
        <section id="contact" className="contact-info">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-container">
            <p  className="contact-text"> <img src="src/assets/email.png" alt="Email Icon" className="contact-icon" />Email: supersoft@company.com</p>
            <p  className="contact-text"><img src="src/assets/address.png" alt="Email Icon" className="contact-icon" />Address: Brest, 28 July St., 3  </p>
            <p  className="contact-text"><img src="src/assets/phone.png" alt="Email Icon" className="contact-icon" />Phone: +375 (33) 545 67 90</p>
            </div>
        </section>
    );
};

export default ContactInfo;