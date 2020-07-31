import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
// import Search from "./Search"
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src="https://www.bacancytechnology.com/blog/wp-content/uploads/2014/07/eCommerce-Logo.png"
            width="40" height="40" className="d-inline-block align-top" alt="flipkart"/>
  <a href="/" className="navbar-brand bg-dark" >DangaL</a>
  {/* <div className="collapse navbar-collapse"> */}
  <div className="container">
        <ul className="navbar-nav" style={{}}>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/shop")}
                    to="/shop"
                >
                    Shop
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    to="/"
                >
                    About Us
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    to="/"
                >
                    Our Services
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    to="/"
                >
                    Contact Us
                </Link>
            </li>
            </ul>
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    Cart{" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
            )}

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            Signin
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Signup
                        </Link>
                    </li>
                </Fragment>
            )}

            {isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                        Signout
                    </span>
                </li>
            )}
        </ul>
        </div>
        </nav>
    </div>
);

export default withRouter(Menu);
