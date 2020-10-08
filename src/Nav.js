import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scroll > 100) {
                //handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://mk0mcompetitiont8ake.kinstacdn.com/wp-content/uploads/2020/03/google-logo-white-png-4-e1583227413643.png"
                alt="GMT"/>

            <img
                src="https://www.shareicon.net/data/512x512/2017/03/14/881194_users_512x512.png"
                className="nav__avatar"
                alt="Login Avatar"/>

        </div>
    )
}

export default Nav
