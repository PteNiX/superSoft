import React from 'react';
import './ServicesList.css';

const services: string[] = [
    'Custom Software Development',
    'Cybersecurity Consulting',
    'Mobile App Development',
    'E-commerce Integration',
    'SEO Services'
];

const ServicesList: React.FC = () => {
    return (
        <section id="services" className="services-list">
            <h2 className="services-title">Our Services</h2>
            <ul className="services-ul">
                {services.map((service, index) => (
                    <li key={index} className="service-item">{service}</li>
                ))}
            </ul>
        </section>
    );
};

export default ServicesList;