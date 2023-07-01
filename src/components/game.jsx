import { useState, useRef, useEffect } from "react";
import dartcircle from '../images/shutterstock_387532816_2.png'
import firstarrow from '../images/FIRSTSHOT.png'
import secondarrow from '../images/secondshot.png'
import thirdarrow from '../images/thirdshot.png'
import trophe from '../images/trofeum.png'
import back from '../images/back.png'
import { HomeArrow } from './backarrow.jsx';

import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';



export function MathPage({ handleTraining, tour, startTour }) {

    if (typeof window !== 'undefined') {
        window.global = window;
    }
    const ArrowMap = {

        'firstarrow': {
            38: [150, 355],
            14: [70, 135],
            0: [420, 200],
            25: [184, 168],
            50: [195, 169],
            20: [185, 5],
            40: [195, -30],
            60: [195, 45],
            1: [239, 23],
            2: [288, 282],
            3: [200, 323],
            18: [279, 53],
            36: [309, 13],
            54: [269, 73],
            4: [318, 316],
            8: [49, 223],
            12: [379, 168],
            13: [349, 123],
            26: [379, 123],
            39: [305, 123],
            6: [253, 168],
            10: [343, 212],
            30: [308, 202],
            15: [308, 272],
            45: [288, 242],
            17: [238, 336],
            51: [238, 276],
            34: [258, 349],
            9: [58, 73],
            19: [148, 309],
            28: [138, 349],
            57: [172, 282],
            7: [118, 280],
            21: [138, 267],
            16: [74, 257],
            32: [49, 287],
            48: [99, 227],
            24: [89, 207],
            11: [33, 167],
            22: [13, 167],
            33: [83, 167],
            42: [88, 127],
            27: [98, 103],
            5: [155, 30],
        },

        'secondarrow': {
            38: [150, 355],
            14: [70, 135],
            0: [-4, 300],
            25: [190, 153],
            50: [195, 169],
            20: [195, 25],
            40: [195, -30],
            60: [195, 45],
            1: [239, 23],
            2: [288, 282],
            3: [200, 323],
            18: [279, 53],
            36: [309, 13],
            54: [269, 73],
            4: [318, 316],
            8: [49, 223],
            12: [379, 168],
            13: [349, 123],
            26: [379, 123],
            39: [305, 123],
            6: [253, 168],
            10: [343, 212],
            30: [308, 202],
            15: [308, 272],
            45: [288, 242],
            17: [238, 336],
            51: [238, 276],
            34: [258, 349],
            9: [58, 73],
            19: [148, 309],
            28: [138, 349],
            57: [168, 280],
            7: [118, 280],
            21: [138, 267],
            16: [14, 227],
            32: [49, 287],
            48: [99, 237],
            24: [89, 207],
            11: [33, 167],
            22: [13, 167],
            33: [79, 167],
            42: [88, 127],
            27: [98, 103],
            5: [155, 30],

        },
        'thirdarrow': {
            38: [150, 355],
            14: [70, 135],
            0: [-30, 200],
            50: [195, 169],
            25: [208, 168],
            20: [195, 15],
            40: [195, -30],
            60: [195, 45],
            1: [239, 23],
            2: [288, 282],
            3: [200, 323],
            18: [279, 53],
            36: [309, 13],
            54: [269, 73],
            4: [318, 316],
            8: [49, 223],
            12: [379, 168],
            13: [349, 123],
            26: [379, 123],
            39: [300, 123],
            6: [253, 168],
            10: [343, 212],
            30: [303, 202],
            15: [308, 272],
            45: [283, 242],
            17: [238, 336],
            51: [238, 276],
            34: [258, 349],
            9: [58, 73],
            19: [148, 309],
            28: [138, 349],
            57: [148, 277],
            7: [118, 280],
            21: [138, 267],
            16: [14, 225],
            32: [49, 287],
            48: [99, 227],
            24: [89, 207],
            11: [33, 167],
            22: [13, 167],
            33: [83, 167],
            42: [88, 127],
            27: [98, 103],
            5: [155, 30],

        }
    };



    const [sliderValue, setSliderValue] = useState(20);
    const [Counter, setCounter] = useState(1);

    function randomShot() {
        let dartNums = [20, 1, 18, 4, 13, 20, 6, 19, 19, 10, 15, 2, 17, 3, 20, 7, 16, 8, 11, 14, 9, 12, 5, 20, 25, 50];
        let multiplies = [1, 1, 1, 1, 2, 2, 3, 3, 0];
        let x = 25;
        if (sliderValue >= 90) {
            dartNums = [20, 18, 19, 19, 20, 50, 25, 50, 17, 16,];
            multiplies = [2, 3, 3];
            x = 50;
        } else if (sliderValue >= 70) {
            dartNums = [20, 18, 13, 20, 19, 19, 10, 15, 17, 20, 16, 11, 14, 9, 12, 20, 25, 50];
            multiplies = [2, 2, 2, 3, 3];
            x = 50;
        } else if (sliderValue >= 30) {
            dartNums = [20, 18, 18, 18, 13, 20, 19, 19, 10, 15, 17, 3, 20, 7, 16, 8, 11, 14, 9, 12, 5, 20, 25, 50];
            multiplies = [1, 1, 2, 2, 3, 3];
            x = 25;
        }
        let value = dartNums[Math.floor(Math.random() * dartNums.length)];
        let multiple = multiplies[Math.floor(Math.random() * multiplies.length)];
        if (value * multiple > 60) {
            return x;
        } else {
            return multiple * value;
        }

    }

    const [First, setFirst] = useState(randomShot());
    const [Second, setSecond] = useState(randomShot());
    const [Third, setThird] = useState(randomShot());
    let Anserw = Third + Second + First;
    let id = 1;
    const [value, setValue] = useState();
    const [Box, setBox] = useState(false);
    const [GlowID, setGlowID] = useState(1);
    const [Glow, setGlow] = useState(false);
    const handleSliderChange = (event) => {
        setSliderValue(parseInt(event.target.value));

        setTimeout(() => {
            setFirst(randomShot());
            setThird(randomShot());
            setSecond(randomShot());
        }, 200)
    }

    const handleInputChange = (event) => {
        setValue(event.target.value);

        ;
    };
    const EquationSwitcher = () => {
        setBox(!Box);

    };

    let count = useRef(1);

    if (value == Anserw) {

        count.current += 2;

        setTimeout(() => {
            id += 3;
            setFirst(randomShot());
            setThird(randomShot());
            setSecond(randomShot());
            setValue('');
            setGlowID(GlowID + 1);
            setGlow(true);



        }, 200);

    }
    let roundedCount = Math.round(count.current);

    function progressbarelemnt(int) {
        return (
            roundedCount == int ? 'unloaded myglow' : (roundedCount > int ? 'loaded' : 'unloaded')
        );
    }
    let rand1 = Math.round(Math.random() * 100000000).toString(36)
    const promocode = useRef(rand1 + '-i-' + rand1);
    
    useEffect(()=>{
        setTimeout(()=>{
            startTour();

        },500)
    },[])
    return (
        <>

                <Link to='/vite'><div className='menu'>
                    <img src={trophe} id="trophe" ></img>
                    <h1 style={{ direction: 'none' }} >DARTER PLACE COM</h1>

                </div></Link>
                <HomeArrow></HomeArrow>
                <div  className=" load-in w-full top-24  flex justify-center flex-row absolute "> {roundedCount > 10 ? <div id='promocode'>{promocode.current}</div> : null}</div>


                <div  id="progressbar" className=" load-in lg:w-1/3 w-1/2 left-1/4 top-40 lg:left-1/3 flex justify-center flex-row  absolute bg-white py-1 shadow-lg rounded-2xl">

                    <div className={progressbarelemnt(1)}></div>
                    <div className={progressbarelemnt(2)}></div>
                    <div className={progressbarelemnt(3)}></div>
                    <div className={progressbarelemnt(4)}></div>
                    <div className={progressbarelemnt(5)}></div>
                    <div className={progressbarelemnt(6)}></div>
                    <div className={progressbarelemnt(7)}></div>
                    <div className={progressbarelemnt(8)}></div>
                    <div className={progressbarelemnt(9)}></div>
                    <div className={progressbarelemnt(10)}></div>
                </div>

                <div id='mathpage'>
                    {Glow ? (<>
                        <div className="" key={GlowID}>
                            <div className="glow" ></div>
                            <div className="glow1" ></div>
                        </div></>) : null}


                    <div className='position-relative'>

                        <img id='dartcircle' alt='dart' src={dartcircle}></img>
                        <img id='thirdarrow' alt='dart' key={id + 1 + Third * 0.1} src={thirdarrow} style={{ position: 'absolute', top: ArrowMap['thirdarrow'][Third][1] + 'px', left: ArrowMap['thirdarrow'][Third][0] + 'px' }}></img>
                        <img id='secondarrow' alt='dart' key={id + 2 + Third * 0.1} src={secondarrow} style={{ position: 'absolute', top: ArrowMap['secondarrow'][Second][1] + 'px', left: ArrowMap['secondarrow'][Second][0] + 'px' }}></img>
                        <img id='firstarrow' alt='dart' key={id + 3 + Third * 0.1} src={firstarrow} style={{ position: 'absolute', top: ArrowMap['firstarrow'][First][1] + 'px', left: ArrowMap['firstarrow'][First][0] + 'px' }}></img>
                    </div>
                    <div id='countingwraper'>
                        <div id='showhide' className='my'>
                            <input type="checkbox" onChange={EquationSwitcher}></input>
                            <p style={{ color: 'white', fontSize: '16px' }}>Show Equation</p>
                        </div>
                        {Box ? (<div className='equation'>
                            {First}+{Second}+{Third}
                        </div>) : <div className='equation fade-out ' style={{ height: '0px' }}>
                            {First}+{Second}+{Third}

                        </div>}


                        <input
                            type="number"
                            id="name"
                            value={value || ''}
                            onChange={handleInputChange}
                            className={value == Anserw ? "transparent-input-successed" : "transparent-input"}
                            placeholder=" ?"
                            autoComplete="off"
                            autoFocus

                        />

                        <div className="white">Dartist experience:
                            <div>
                                {sliderValue >= 90 ? (
                                    <div className="red textshadow letterspacing text-center">Michael van Gerwen</div>
                                ) : sliderValue >= 70 ? (
                                    <div className="darkblue textshadow letterspacing text-center">Turnament</div>
                                ) : sliderValue >= 30 ? (
                                    <div className="orange textshadow letterspacing text-center ">2 year experience</div>
                                ) : (
                                    <div className="green textshadow letterspacing text-center">Joe</div>
                                )}
                            </div>
                        </div>

                        <input
                            id='xd'
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            className="slider"
                            onChange={handleSliderChange}
                        />

                    </div>


                </div>
            </>
        );
    };