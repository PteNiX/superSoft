import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CompanyDescription from './components/CompanyDescription/CompanyDescription';
import ServicesList from './components/ServicesList/ServicesList';
import ContactInfo from './components/ContactInfo/ContactInfo';

const App: React.FC = () => {

  return (
    <div className='main'>
    <Header />
    <CompanyDescription />
    <ServicesList />
    <ContactInfo />
</div>
  )
}

export default App
