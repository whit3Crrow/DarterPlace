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
                    <Link to='/vite/Shop'>Shop</Link>
                    <Link to='/vite/DartGame'>Training App</Link>
                    <Link to='/vite/Forum'>Forum</Link>
                    <Link to='/vite/Turnaments'>Tournaments</Link>
                </div>
            </div>
        </>
    )
}