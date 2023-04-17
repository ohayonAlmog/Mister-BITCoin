import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import { ContactList } from '../components/ContactList'
import { ContactFilter } from '../components/ContactFilter'

export class ContactPage extends Component {

    state = {
        contacts: null,
        filterBy: {
            name: '',
            email: '',
            phone: ''
        }
    }

    componentDidMount() {
        this.loadContacts()
    }

    loadContacts = async () => {
        try {
            const contacts = await contactService.getContacts(this.state.filterBy)
            this.setState({ contacts })
        } catch (err) {
            console.log('err:', err)
        }
    }

    onBack = () => {
        this.props.history.push('/')
    }

    onRemoveContact = async (contactId) => {
        try {
            await contactService.deleteContact(contactId)
            this.setState(({ contacts }) => ({
                contacts: contacts.filter(contact => contact._id !== contactId)
            }))
        } catch (error) {
            console.log('error:', error)
        }
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy: { ...filterBy } }, this.loadContacts)
    }

    render() {
        const { contacts, filterBy } = this.state
        if (!contacts) return <div>Loading...</div>
        return (
            <section className='list-container text-center'>
                <h1>Search:</h1>
                <ContactFilter filterBy={filterBy} onChangeFilter={this.onChangeFilter}/>
                <ContactList contacts={contacts} onRemoveContact={this.onRemoveContact}/>
                <button onClick={this.onBack}>Back</button>
            </section>

        )
    }
}