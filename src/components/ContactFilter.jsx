import React, { Component } from 'react'

export class ContactFilter extends Component {

    state = {
        filterBy: null
    }

    componentDidMount() {
        this.setState({ filterBy: { ...this.props.filterBy } })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState(
            ({ filterBy }) => ({ filterBy: { ...filterBy, [field]: value } }),
            () => this.props.onChangeFilter(this.state.filterBy)
        )
    }

    render() {
        if (!this.state.filterBy) return <div>Loading...</div>
        const { filterBy } = this.state
        const { name, email, phone } = filterBy

        return (
            <form className='contact-filter flex auto-center space-around'>
                <section className="form__group field flex">
                    <input onChange={this.handleChange} value={name} type="text" placeholder="Name" name="name" id="name" className="form__field"/>
                    <label htmlFor="name" className="form__label">Name</label>
                </section>
                <section className="form__group field flex">
                    <input onChange={this.handleChange} value={email} type="text" placeholder="Email" name="email" id="email" className="form__field"/>
                    <label htmlFor="email" className="form__label">Email</label>
                </section>
                <section className="form__group field flex">
                    <input onChange={this.handleChange} value={phone} type="text" placeholder="Phone" name="phone" id="phone" className="form__field"/>
                    <label htmlFor="phone" className="form__label">Phone</label>
                </section>
            </form>
        )
    }
}