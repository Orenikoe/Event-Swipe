import React from 'react';
import { subscribeFormFields } from '../../data/app-data';
import Form from '../Form/Form';

const Subscribe = () => {
		return (
            <>
            <h1>Subscribe</h1>
            <Form data={subscribeFormFields} />
            </>

        )
            
};

export default Subscribe;
