import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import contactBG from '../../assets/contact/banner.jpg'
import Location from './Location';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>
            <Cover img={contactBG} title={"Contact Us"}></Cover>
            <Location></Location>
            <ContactForm></ContactForm>

        </div>
    );
};

export default Contact;