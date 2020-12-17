import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    const navStyle = {
        color: "white"
    };

    return (
        <nav>
            <h1>Rick and Morty</h1>
            <ul className="nav-links">
                <NavLink style={navStyle} to="/character" activeClassName="active">
                    <li>Characters</li>
                </NavLink>
                <NavLink style={navStyle} to="/episode" activeClassName="active">
                    <li>Episodes</li>
                </NavLink>
                <NavLink style={navStyle} to="/location" activeClassName="active">
                    <li>Locations</li>
                </NavLink>
                <NavLink style={navStyle} to="/list" activeClassName="active">
                    <li>My Watch List</li>
                </NavLink>
            </ul>
        </nav>
    )
};