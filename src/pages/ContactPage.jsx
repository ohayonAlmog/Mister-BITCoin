import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import { ContactList } from '../components/ContactList'

export class ContactPage extends Component {

    state = {
        contacts: null
    }

    componentDidMount() {
        this.loadContacts()
    }

    loadContacts = async () => {
        try {
            const contacts = await contactService.getContacts()
            this.setState({ contacts })
        } catch (err) {
            console.log('err:', err)
        }
    }

    onBack = () => {
        this.props.history.push('/')
    }

    render() {
        const { contacts } = this.state
        if (!contacts) return <div>Loading...</div>
        return (
            <section className='list-container text-center'>
                <ContactList contacts={contacts}/>
                <button onClick={this.onBack}>Back</button>
            </section>

        )
    }
}