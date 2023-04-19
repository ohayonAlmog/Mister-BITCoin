import React, { Component } from 'react'
import { userService } from '../services/user.service'

/*export function SignIn() {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
    setActive(!isActive);
    };

    return (
        <section className="test-sign">
            <div className={isActive ? 'container right-panel-active' : 'container'} id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleToggle}>Sign Up</button>
                        <button className="close-btn" onClick={onClose}>X</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button onClick={handleToggle}>Sign In</button>
                        <button className="close-btn" onClick={onClose}>X</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={handleToggle} className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button onClick={handleToggle} className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}*/

export class SignIn extends Component {

    state = {
        isActive: false,
        signUp: {
            fullnameUp: "",
            usernameUp: "",
            passwordUp: ""
        },
        signIn: {
            usernameIn: "",
            passwordIn: ""
        }
    }

    componentDidMount() {
    }

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    }

    handleChangeUp = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState(
            ({ signUp }) => ({ signUp: { ...signUp, [field]: value } })
        )
    }

    saveUserUp = () => {
        userService.signUp(this.state.signUp.fullnameUp, this.state.signUp.usernameUp, this.state.signUp.passwordUp)
    }

    handleChangeIn = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState(
            ({ signIn }) => ({ signIn: { ...signIn, [field]: value } })
        )
    }

    saveUserIn = () => {
        userService.signIn(this.state.signIn.usernameIn, this.state.signIn.passwordIn)
    }

    render() {
        const { isActive, signUp, signIn } = this.state
        const { fullnameUp, usernameUp, passwordUp } = signUp
        const { usernameIn, passwordIn } = signIn
        return (
            <section className="test-sign">
                <div className={isActive ? 'container right-panel-active' : 'container'} id="container">
                    <div className="form-container sign-up-container">
                        <form action="#" onSubmit={this.handleSubmit}>
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your full name for registration</span>
                            <input  onChange={this.handleChangeUp} id="fullnameUp" name="fullnameUp" type="text" placeholder="Full Name" />
                            <input  onChange={this.handleChangeUp} id="usernameUp" name="usernameUp" type="text" placeholder="User Name" />
                            <input  onChange={this.handleChangeUp} id="passwordUp" name="passwordUp" type="password" placeholder="Password" />
                            <button onClick={this.saveUserUp}>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your account</span>
                            <input onChange={this.handleChangeIn} id="usernameIn" name="usernameIn" type="text" placeholder="User Name" />
                            <input onChange={this.handleChangeIn} id="passwordIn" name="passwordIn" type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button onClick={this.saveUserIn}>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button onClick={this.handleToggle} className="ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button onClick={this.handleToggle} className="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}