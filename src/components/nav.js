import { NavLink } from 'react-router-dom';
import cart from '../cart.png'
import {useSelector } from 'react-redux'
const Navs = () => {
    const cart_items=useSelector((state) => state.ecommerce.cart_items)

    return(
        <div>
            <header>
                <center>
                    <h1>Rasha Al-mekhlafi</h1>
                    <h6 className="text-lighter text-muted">Web Developer | Software Engineer </h6>
                </center>
            </header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <NavLink className="nav-link"
                                    to="/"
                                    style={actveStatus => ({
                                        color: actveStatus.isActive ? "green" : "white"
                                    })}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/Jewelery"
                                    style={actveStatus => ({
                                        color: actveStatus.isActive ? "green" : "white"
                                    })}
                                >
                                    Jewelery
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/Men"
                                    style={actveStatus => ({
                                        color: actveStatus.isActive ? "green" : "white"
                                    })}
                                >
                                    Men
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/Women"
                                    style={actveStatus => ({
                                        color: actveStatus.isActive ? "green" : "white"
                                    })}
                                >
                                    Women
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/Electronics"
                                    style={actveStatus => ({
                                        color: actveStatus.isActive ? "green" : "white"
                                    })}
                                >
                                    Electronics
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/Cart"
                                    style={actveStatus => ({
                                        color: actveStatus.isActive ? "green" : "white"
                                    })}
                                >
                                    Cart
                                </NavLink>
                            </li>
                            


                        </ul>

                    </div>

                </div>
                <NavLink className="nav-link text-danger d-flex flex-row"
                                    to="/Cart"
                                >
                                    <img src={cart} style={{"width":"30px", "margin":"5px"}}/>{cart_items.length}
                                </NavLink>
                
            </nav>
        </div>
    )

}
export default Navs

