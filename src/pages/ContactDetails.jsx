import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import { Link } from 'react-router-dom'

export class ContactDetails extends Component {

    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    loadContact = async () => {
        try {
            const contact = await contactService.getContactById(this.props.match.params.id)
            console.log('contact', contact)
            this.setState({ contact })
        } catch (err) {
            console.log('err:', err)
        }
    }

    onBack = () => {
        this.props.history.push('/contact')
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        const contactStyle = `https://robohash.org/${contact._id}`
        return (
            <section className='details-container text-center'>
                <h1>Details:</h1>
                <div className='details flex text-center auto-center'>
                    <img src={contactStyle}/>
                    <section className="info text-center">
                        <h2>{contact.name}</h2>
                        <h4>{contact.email}</h4>
                        <h4>{contact.phone}</h4>
                    </section>
                    
                </div>
                <button onClick={this.onBack}>Back</button>
            </section>

        )
    }
}