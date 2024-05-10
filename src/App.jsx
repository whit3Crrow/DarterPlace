import React, { useState } from 'react';
import './ownCss/App.css';
import './ownCss/tailwind.css';

import { Route, Routes } from 'react-router-dom';
import { Turnaments } from './components/Turnaments.jsx';
import { Shop } from './components/Shop.jsx';
import { Market } from './components/Market.jsx';
import { Ties } from './components/Ties.jsx';
import { MathPage } from './components/game.jsx';
import { Forum } from './components/Forum.jsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import "@sjmc11/tourguidejs/src/scss/tour.scss" // Styles
import {TourGuideClient} from "@sjmc11/tourguidejs/src/Tour" // JS

function App() {
  const Steps = [
    {
        title: "Tutorial",
        content: "Welcome to the training tool, here you will hone your Darts math skills",
        group: 'hello'
    },
    {
        target: "#dartcircle",
        content: "This is the dartboard, from which Darts players read the score. The largest red and green fields are counted twice, the smaller ones three times, the central green is worth 25 and the red is worth 50",
        group: 'hello'
    },
    {
        target: "#countingwraper",
        content: "Now let's move to the panel where you can perform a few actions",
        group: 'hello'
    },
    {
        target: "#showhide",
        content: "If we can't read the score directly from the dartboard, we can select the Show Equation option",
        group: 'hello'
    },
    {
        target: "#name",
        content: "In place of the golden question mark, we enter the result (you need to click)",
        group: 'hello'
    },
    {
        target: "#xd",
        content: "Here we choose the experience level of the person throwing the darts",
        group: 'hello'
    },
    {
        target: "#progressbar",
        content: "Each well-solved task moves the progress bar by 1, after completion you will get a surprise. Good luck!",
        group: 'hello'
    }

]
let tg = new TourGuideClient({
    steps: Steps,
    exitOnClickOutside: false,
});
const start = ()=>{
  tg.start();
}
  return (
    <>
        <Routes>
          <Route path='/' element={<MathPage tour={tg} startTour={start}></MathPage>}></Route>
          <Route path='/Shop' element={<Shop></Shop>}></Route>
          <Route path='/Forum' element={<Forum></Forum>}></Route>
          <Route path='/Turnaments' element={<Turnaments></Turnaments>}></Route>
        </Routes>
      
    </>
  );
}

export default App;
