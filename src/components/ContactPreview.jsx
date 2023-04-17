import React from 'react'
import { Link } from 'react-router-dom'
//<article style={contactStyle} className='contact-preview'>

export function ContactPreview({ contact, onRemoveContact}) {

    //const contactStyle = { backgroundImage: `url(https://robohash.org/${contact._id})` }
    const contactStyle = `https://robohash.org/${contact._id}`
    return (
        <section className="preview flex column text-center">
            <span onClick={() => onRemoveContact(contact._id)}><i className="fa-solid fa-trash-can fa-beat-fade"></i></span>
            <Link to={`/contact/${contact._id}`}>
                <img src={contactStyle}/>
            </Link>
            <section className="info text-center">
                <h2 className="h2">{contact.name}</h2>
            </section>
        </section>
    )
}