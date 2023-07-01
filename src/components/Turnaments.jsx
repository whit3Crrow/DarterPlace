


import React, { useState, useEffect, useRef } from 'react';
import { Nav } from './nav.jsx'
import { HomeArrow } from './backarrow.jsx';
import { turlist } from './turlist.jsx';
import { TurnamentCard } from './TurnamentCard.jsx';
import { Hero } from './hero.jsx';
import img23s from '../images/trophy.png';
import imgcup from '../images/trofeum.png';
import calendar from '../images/vecteezy_calendar-and-clock-icon_6789084.png';
import back from '../images/back.png';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export function Turnaments() {
    const [DateValue, setDateValue] = React.useState(dayjs(dayjs().format('DD.MM.YYYY')));
    const [DateStr, setDateStr] = React.useState(dayjs().format('DD.MM.YYYY'));
    const tittleR = useRef('');
    const descriptionR = useRef('');
    const pricepoolR = useRef('0$');
    const locationR = useRef('');
    const entryR = useRef('');
    const timeR = useRef('');
    const cityR = useRef('');
    
    function parseDate(str) {
        str = String(str);
        var parts = str.split(".");
        return new Date(parts[2], parts[1] - 1, parts[0]).getTime();
        // zwraca liczbę milisekund
    }

    const [Turs, setTurs] = useState(turlist);
    
    
    function sortByDate(mode) {
        // Przekształcenie stringów dat na timestampy
        for (let i = 0; i < Turs.length; i++) {
            let today = dayjs();
            let otherDate = dayjs(Turs[i].date, 'DD.MM.YYYY');
            let differenceInDays = today.diff(otherDate);  
            if (differenceInDays > 0){
                delete Turs[i]
                Turs.splice(i,1);
            }else{Turs[i].date2 = parseDate(Turs[i].date);}
            
        }
        var newTurs = [...Turs];
        if (mode) {
            newTurs.sort((a, b) => {
                return b.date2 - a.date2;
            });
        }
        else {
            newTurs.sort((a, b) => {
                return a.date2 - b.date2;
            });
        }
        setTurs(newTurs);
    };
    function AddTur() {
       if(cityR.current.value.trim() != '' && tittleR.current.value.trim() != '' && locationR.current.value.trim() != '' ){
        

        setTurs(newTurs => [...newTurs, {
            tittle: tittleR.current.value,
            description: descriptionR.current.value,
            pricepool: pricepoolR.current.value,
            date: DateStr,
            city: cityR.current.value,
            localization: locationR.current.value,
            entry: entryR.current.value,
            time: timeR.current.value,
            date2: ''
        }]);
     window.scrollTo(0, 500)}
     
   
    }


    useEffect(() => {
        sortByDate(true);
        sortByDate(false);
    }, []);

    return (
        <>
            <HomeArrow></HomeArrow>
            <Nav></Nav>
            <div className='tło relative'>
                <div className="h-10 md:h-16" ></div>
                <div className='w-40 h-40 md:w-60 md:h-60 bg-black mx-auto -mb-10 md:-mb-28 rounded-full load-in border-3 shadow-xl '>
                    <a href='#turlist'><img src={imgcup} className='rounded-full '></img></a>
                </div>
                <Hero h1="Turnaments" p="Sign in! To the soonest dart Turnament in your area!" > </Hero>
                <a href='#turlist'><div className="invisible md:visible flex justify-center items-center w-full -mt-24 opacity-60"><img src={back} className='blinkin transition-all  cursor-pointer  w-15 h-10 -rotate-90 mb-14 hover:scale-110 hover:opacity-100'></img></div></a>
                <div id='turlist' className="flex justify-center items-center w-full  bg-blue-300 bg-opacity-10  flex-col">
                    <div className="mt-0  md:mt-0 border-2 shadow bg-white bg-opacity-80 h-20 md:h-40 w-full flex items-center justify-center ">
                        <div className=" mx-2 h-5 w-4 md:h-10 md:w-8   drop-shadow-2xl overflow-hidden">
                            <img src={img23s} className='object-cover '></img>
                        </div>
                        <div className="text-gray-900 text-xl md:text-3xl   ">
                        </div>
                    </div>
                    <div class="absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] h-4" aria-hidden="true">
                        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] siema123"  ></div>
                    </div>
                    <div className="grid  justify-center my-12">
                        <div className="flex flex-row items-center pb-1 ml-4 pr-4">
                            <img src={calendar} className='w-7 h-7 m-1'></img>
                            <div className=' w-auto text-center h-auto cursor-pointer text-white z-2 m-2' onClick={() => sortByDate(false)}><img src={back} className="w-7  h-7 rotate-90 opacity-60 hover:opacity-100  hover:scale-110 transition-all"></img></div>
                            <div className=' w-auto text-center cursor-pointer h-auto text-white z-2' onClick={() => sortByDate(true)}><img src={back} className="w-7 h-7  -rotate-90 opacity-60 hover:opacity-100 hover:scale-110 transition-all"></img></div>
                            <div className="flex-grow"></div>
                            <a href='#footer'><div className="text-gray-400 flex md:visible invisible border shadow-lg bg-white relative rounded-full justify-center items-center flex-row w-auto h-10 transition-all hover:-translate-y-1 hover:shadow-xl md:mr-7 ml-3 ">
                                <div className='ml-2 cursor-pointer w-44 '>New Turnament:</div>
                                <button className='btn text-lg  md:text-xl rounded-full md:h-12 md:scale-110 ml-2 absolute -right-3'>Add</button>
                            </div></a>
                            <a href='#footer'><button id="ad" className='btn text-lg -ml-24 md:invisible rounded-full md:h-12 md:scale-110'>Add</button></a>
                        </div>
                        {Turs.map(({ tittle, description, pricepool, date, city, localization, entry, time }, index) => (

                            <div key={index}>
                                <TurnamentCard
                                    tittle={tittle}
                                    description={description}
                                    pricepool={pricepool}
                                    date={date}
                                    city={city}
                                    localization={localization}
                                    entry={entry}
                                    time={time}
                                />
                            </div>
                        ))}
                    </div>
                    <div id='footer' className="mt-0 pb-20 md:mt-0 border-2 shadow bg-slate-50 bg-opacity-60  w-full flex-col flex items-center justify-center ">
                        <div className="flex-row flex my-20 justify-center">
                            <div className=" mx-2 h-5 w-4 md:h-10 md:w-8  md:mr-4 drop-shadow-2xl overflow-hidden">
                                <img src={img23s} className='object-cover '></img>
                            </div>
                            <div className="text-gray-900 text-xl md:text-3xl   ">
                                Add Your Tournament
                            </div>
                        </div>
                        <div className=" justify-center w-full flex flex-col ">
                            <div className="flex fex-row justify-center ">
                                <div className="flex-col flex justify-center px-5">
                                    <label className='text-center md:text-start'>Tittle</label>
                                    <input ref={tittleR} className='shadow-lg transition-all cursor-pointer hover:shadow-none hover:scale-95 focus:-translate-y-1 focus:scale-100 focus:shadow-2xl p-2 md:w-52 sm:w-32 w-20 my-5 border-2  rounded-full  border-gray-400 '></input>
                                </div>
                                <div className="flex-col flex justify-center px-5">
                                    <label className='text-center md:text-start'>Price Pool</label>
                                    <input ref={pricepoolR} className='shadow-lg transition-all cursor-pointer hover:shadow-none hover:scale-95 focus:-translate-y-1 focus:scale-100 focus:shadow-2xl p-2 my-5 md:w-52 sm:w-32 w-20 border-2 rounded-full border-gray-400'></input>
                                </div>

                                <div className="flex-col flex  justify-center px-5">
                                    <label className='text-center '>City</label>
                                    <input ref={cityR} className='shadow-lg transition-all cursor-pointer hover:shadow-none hover:scale-95 focus:-translate-y-1 focus:scale-100 focus:shadow-2xl p-2 my-5 md:w-52 mx-auto w-20  border-2 rounded-full border-gray-400'></input>
                                </div>
                            </div>
                            <div className="flex fex-row justify-center ">
                                <div className="flex-col flex  justify-center px-5">
                                    <label className='text-center md:text-start'>Location</label>
                                    <input ref={locationR} className='shadow-lg transition-all cursor-pointer hover:shadow-none hover:scale-95 focus:-translate-y-1 focus:scale-100 focus:shadow-2xl p-2 my-5 md:w-52 sm:w-32 w-20  border-2 rounded-full border-gray-400'></input>
                                </div>
                                <div className="flex-col flex  justify-center px-5">
                                    <label className='text-center md:text-start'>Entry</label>
                                    <input ref={entryR} className='shadow-lg transition-all cursor-pointer hover:shadow-none hover:scale-95 focus:-translate-y-1 focus:scale-100 focus:shadow-2xl p-2 my-5 md:w-52 sm:w-32 w-20  border-2 rounded-full border-gray-400'></input>
                                </div>
                                <div className="flex-col flex  justify-center px-5">
                                    <label className='text-center md:text-start'>Start time</label>
                                    <input ref={timeR} className='shadow-lg transition-all cursor-pointer hover:shadow-none hover:scale-95 focus:-translate-y-1 focus:scale-100 focus:shadow-2xl p-2 my-5 md:w-52 sm:w-32 w-20  border-2 rounded-full border-gray-400'></input>
                                </div>
                            </div>
                            <div className="md:flex-col flex-row flex  w-full justify-center px-5">
                                <div className="flex-col flex  justify-center px-5">
                                    <label className='text-center '>Description</label>
                                    <input ref={descriptionR} className='shadow-lg transition-all cursor-pointer hover:shadow-none hover:scale-95 focus:-translate-y-1 focus:scale-100 focus:shadow-2xl p-2 my-5 md:w-1/5 mx-auto w-20  border-2 rounded-full border-gray-400'></input>
                                </div>
                            </div>
                            <div className=" flex justify-center">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'DatePicker']} sx={{ margin: '20px', scale: '110%' }}>
                                        <DatePicker sx={{ backgroundColor: 'white', fontSize: '40px' }}
                                            label="Controlled picker"
                                            value={DateValue}
                                            onChange={(newValue) => {
                                                setDateValue(dayjs(newValue.format('YYYY-MM-DD')))
                                                setDateStr(newValue.format('DD.MM.YYYY'))
                                            }}
                                            rednerInput={DateValue}
                                            format="DD.MM.YYYY"
                                            
                                            
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>

                            </div>
                            <div className="flex flex-col justify-center w-full">
                                <button onClick={() => {AddTur();}}
                                className='btn text-2xl font-semibold rounded-full md:h-16 mx-auto md:w-36'>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}