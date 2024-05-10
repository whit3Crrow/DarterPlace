import {  Link} from 'react-router-dom';
import React, { useState } from 'react';
import '../ownCss/nav.css';
import '../styletailwind.css';


export function Nav() {

    return (
        <>
            
            <div class="nav">
                <input type="checkbox" id="nav-check"></input>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div class="nav-links">
                    <Link to='/Shop'>Shop</Link>
                    <Link to='/'>Training App</Link>
                    <Link to='/Forum'>Forum</Link>
                    <Link to='/Turnaments'>Tournaments</Link>
                </div>
            </div>
        </>
    )
}