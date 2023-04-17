import { ContactPreview } from "./ContactPreview"

export function ContactList({ contacts, onRemoveContact }) {

    return (
        <section className='contact-list'>
            <h1>Contacts:</h1>
            <section className="list simple-cards-grid text-center">
                {contacts.map(contact =>
                    <ContactPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact}/>
                )}
            </section>
        </section>
    )
}