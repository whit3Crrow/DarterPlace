import { useState } from 'react';
import redcircle from '../images/reddart.png';
import calendar from '../images/vecteezy_calendar-and-clock-icon_6789084.png';
import cros from '../images/—Pngtree—red cross vector icon no_6234858.png';
import entryimg from '../images/Entry-131983734592052855.png';
import locationimg from '../images/25530.png';
import cityimg from '../images/city.png';
import img23s from '../images/trophy.png';



export function TurnamentCard({tittle, description, pricepool, date, city, localization, entry, time }) {
    const [extendCard, SetExtendCard] = useState(false);
    function GoHandler() {
        SetExtendCard(!extendCard);
    }
    return (
        <>
            {extendCard &&
                <div className="load-in h-full sm:h-auto pb-12 md:pb-28 md:w-2/4 w-full items-center bg-white bg-opacity-90 top-0 md:top-0 lg:mt-20 fixed z-10 md:left-1/4 left-0 border-1 rounded-lg transition-all  shadow-2xl">
                    <div onClick={GoHandler} className="w-12 h-12 bg-transparent rounded-full m-2 absolute right-0 " >
                        <img src={cros} className='drop-shadow-md cursor-pointer'></img>
                    </div>
                    <div className='flex mx-auto mt-20 lg:mt-32 md:mt-16 items-center md:p-10 p-5 text-lg border-2 shadow-md bg-slate-100  flex-col rounded-lg md:w-2/3 w-4/5   '>
                        <div className="leading-9 text-gray-900 text-xl md:text-4xl pb-1 text-center">
                            {tittle}</div>
                        <div className="italic text-gray-500 text-xl md:text-xl text-center p-2 border-b-2">
                            {description}</div>
                        <div className="leading-7  w-full text-start pt-3 flex flex-row p-1">
                            <span><img src={img23s} className='w-6 h-6  mx-2'></img></span> {pricepool}</div>
                        <div className="leading-7 w-full text-start flex flex-row  p-1 ">
                            <span><img src={calendar} className='w-6 h-6 mx-2 '></img> </span> {date} - {time}</div>
                        <div className="leading-7 w-full text-start flex flex-row p-1 ">
                            <span><img src={cityimg} className='w-6 h-6 mx-2'></img></span> {city}</div>
                        <div className="leading-7 w-full text-start flex flex-row p-1">
                            <span><img src={locationimg} className='w-6 h-6 mx-2'></img></span> {localization}</div>
                        <div className="leading-7 w-full text-start flex flex-row p-1">
                            <span><img src={entryimg} className='w-6 h-6 mx-2'></img> </span> Entry cost {entry}
                        </div>
                    </div>
                </div>
            }
            {<div onClick={() => GoHandler()} className=" relative w-64 md:w-96 md:h-36 flex flex-row border-spacing-2 border-y-2 rounded-2xl shadow-lg h-28 mt-2 ml-4 mr-4 bg-white border-0  hover:cursor-pointer transition-all md:pt-4 hover:scale-105">
                <div className=" m-1 bg-transparent item-center flex rounded-2xl md:mt-3 ml-6 drop-shadow-lg">
                    <img src={redcircle} className='object-cover h-2/3 mt-4 ml-2'></img>
                </div>
                <div className="w-2/3 m-1 md:mt-2 flex rounded-md flex-col justify-center md:items-center overflow-hidden">
                    <div className="items-center w-full">
                        <h1 className='text-sm  md:text-base text-gray-500 text-center py-2 font-bold'>{tittle}</h1>
                        <h1 className='text-sm md:text-base text-gray-500 text-center'>{city}</h1>
                        <h1 className='text-sm md:text-base text-gray-500 text-center'>Price Pool: {pricepool}</h1>
                    </div>
                </div>
                <div className="w-auto h-auto justify-center items-center flex text-xs bg-slate-100 border absolute top-1 md:right-1 left-1 rounded-3xl text-black p-1">
                    <span>
                        <img src={calendar} className=' md:mr-2 w-0 h-0 drop-shadow-xl md:w-5 md:h-5 '></img>
                    </span>
                    {date}
                </div>

            </div>}
            <button onClick={() => GoHandler()} className='btn text-lg  md:text-2xl md:h-12 md:scale-110'>Go!</button>
        </>

    );
}