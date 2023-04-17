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
            <form className='robot-filter'>
                <section>
                    <label htmlFor="name">Name</label>
                    <input onChange={this.handleChange} value={name} type="text" name="name" id="name" />
                </section>
                <section>
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} value={email} type="text" name="email" id="email" />
                </section>
                <section>
                    <label htmlFor="phone">Phone</label>
                    <input onChange={this.handleChange} value={phone} type="text" name="phone" id="phone" />
                </section>
            </form>
        )
    }
}