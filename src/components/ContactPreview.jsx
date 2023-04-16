import React from 'react'
import { Link } from 'react-router-dom'
//<article style={contactStyle} className='contact-preview'>

export function ContactPreview({ contact }) {

    //const contactStyle = { backgroundImage: `url(https://robohash.org/${contact._id})` }
    const contactStyle = `https://robohash.org/${contact._id}`
    return (
        <section className="preview flex column text-center">
            <Link to={`/contact/${contact._id}`}>
                <img src={contactStyle}/>
            </Link>
            <section className="info text-center">
                <h2 className="h2">{contact.name}</h2>
            </section>
        </section>
    )
}