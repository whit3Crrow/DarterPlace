import React from 'react';
import { Nav } from './nav.jsx'
import { HomeArrow } from './backarrow.jsx';
import someimg from '../images/shutterstock_96312212.jpg'
import { Hero } from './hero.jsx';


export function Market() {
    return (
        <>
            <HomeArrow></HomeArrow>
            <Nav></Nav>
            <div id='mainpage'>
                <Hero h1="Dart Market Place" p="Sell, Buy, Help... Check out dart equipments on market place!" > </Hero>
            </div>

        </>
    );
}