import React from 'react';
import { Nav } from './nav.jsx'
import { HomeArrow } from './backarrow.jsx';
import { Hero } from './hero.jsx';

export function Ties() {
    return (
        <>
            <HomeArrow></HomeArrow>
            <Nav></Nav>
            <div id='mainpage'>
            <Hero h1="Dart Shirts" p="Buy proffesional dart shirt! It is possible to get customzied one :)"></Hero>
            </div>
        </>
    );
}