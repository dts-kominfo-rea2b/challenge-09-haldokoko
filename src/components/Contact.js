// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
    const {data} = props;
    return (
        <div className='box'>
            <aside>
            <div className='itemPhoto'>
                <img src={data.photo} ></img>
            </div></aside>
            <div>
                <h3>{data.name}</h3>
                
                <p>{data.phone}</p>
            
                <p>{data.email}</p>
            </div>
        </div>        
    )
}

export default Contact;