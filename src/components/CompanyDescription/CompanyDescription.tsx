import React from 'react';
import './CompanyDescription.css';

const CompanyDescription: React.FC = () => {
    return (
        <section id="description" className="company-description">
            <h2>About Our Company</h2>
            <p className="company-text">
            We are an IT outsourcing company specializing in developing and managing websites in the tourism industry.
            </p>
        </section>
    );
};

export default CompanyDescription;