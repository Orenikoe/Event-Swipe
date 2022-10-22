import React from 'react';
import { subscribeFormFields } from '../../data/app-data';
import { BackgroundPages } from '../../data/app-data';
import FormBackground from '../Backgrounds/FormBackground/FormBackground';
import Form from '../Form/Form';

const Subscribe = () => {
    const [page] = BackgroundPages.filter(page => {
        return page.title === 'Subscribe'
      })

		return (
            <>
            <FormBackground data={page}/>
            <Form data={subscribeFormFields} />
            </>

        )
            
};

export default Subscribe;
