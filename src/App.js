//import logo from './img/logo.svg';
//import { ReactComponent as Logo } from './img/logo.svg';
import { NavLink, Route, HashRouter as Router, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { ContactPage } from './pages/ContactPage';
import { StatisticPage } from './pages/StatisticPage';
import { ContactDetails } from './pages/ContactDetails';

import search from './assets/imgs/search-icon.svg';

import './assets/scss/global.scss';

function App() {
    return (
        <Router>
            <section className="main-app">

                {/*<header className="app-header">
                    <section className="container">
                        <h1>Mister BITCoin</h1>
                    </section>
                </header>*/}

                <header className="nav-container">
                    <div className="wrapper">
                        <nav>
                            <div className="logo">
                                <h1>Mister-BITCoin</h1>
                            </div>

                            <ul className="nav-items">
                                <li>
                                    <NavLink exact to="/">Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/contact">Contacts</NavLink>
                                </li>

                                <li>
                                    <NavLink exact to="/">About</NavLink>
                                </li>

                                <li>
                                    <a className="nav-btn-container" href="#">
                                        <img className="search-btn" src={search} />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <main className="container">
                    <Switch>
                        <Route path="/contact/:id" component={ContactDetails}/>
                        <Route path="/contact" component={ContactPage}/>
                        <Route path="/statistics" component={StatisticPage}/>
                        <Route path="/" component={Home}/>  
                    </Switch>
                </main>

                <footer>
                    <section className="container">
                        BITRights 2023 &copy;
                    </section>
                </footer>

            </section>
        </Router>
    )
}

export default App;
