import React, { useRef, useState } from 'react';
import { Nav } from './nav.jsx'
import { HomeArrow } from './backarrow.jsx';
import { Hero } from './hero.jsx';
import { Canvas } from './canvas.jsx';
import shopcart from '../images/icons8-shopping-cart-80.png'
import shopcart2 from '../images/2icons8-shopping-cart-80.png'
import serce from '../images/Succodesign-Love-Is-In-The-Web-Heart.512.png';
import cros from '../images/—Pngtree—red cross vector icon no_6234858.png';
import { List } from '@mui/material';
import stripe from 'stripe';
import { loadStripe } from "@stripe/stripe-js";
import tri6 from '../images/1758455.png';
import tri6pointer from '../images/cursor-pointer-icon-10.png';

import dirt2 from '../images/dirt2.gltf';
import dartshield from '../images/dartshield.gltf';
import untitled from '../images/untitled.gltf';
import firedart from '../images/firedart.gltf';
import dartshield3 from '../images/dartshield3.gltf';




let stripePromise;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51NIVAXDdrSDRFqJPLMSOqbagJOP0iXcZe8otKuJfoswK7bbHomnhLDelBIGxG37jfteuq0SPmbF2YuXMzMlTrhk800uo1vX7l0");
    }
    return stripePromise;
}
function AddToCart({ AddToCheckout }) {
    const [IsClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!IsClicked);
        AddToCheckout();
    };

    return (
        <>
            <button onClick={handleClick}
                className="btn absolute bottom-0 right-0">
                <img id='check' src={shopcart} className='w-8 h-8'></img>

            </button>
            {IsClicked && <img className='heart' src={serce}></img>}
        </>
    );
}

export function Shop() {
    let [Sum, setSum] = useState(0);
    let promoRef = useRef('');
    const [IsPromo, setIsPromo] = useState(false);
    const [Products, setProducts] = useState([]);
    const [Checkout, setCheckout] = useState(false);
    let sum = 0;

    function sendCheckout() {
        const fetchData = async () => {
            try {

                const response = await fetch('https://adambensari.com/server/test/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(Products),
                });
                const data = await response.json();
                const stripe = await getStripe();
                const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
                if (error) {
                    console.error('Błąd podczas przekierowania do kasy:', error);
                }
            } catch (error) {
                console.error('Błąd podczas pobierania danych:', error);
            }
        };
        fetchData();
    }

    function is_here(name, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].product == name) {
                return true;
            }
        }
        return false;
    }

    function AddToCheckout(SIEMA, COST, ID) {
        if (!is_here(SIEMA, Products)) {
            let copyprod = [...Products];
            copyprod.push({ product: SIEMA, cost: COST, quantitty: 1, id: ID });
            setProducts(copyprod);

            const newSum = (Number(Sum) + Number(COST)).toFixed(2);
            console.log(newSum);
            setSum(newSum);
        }

        console.log(Products);
    }

    function add(state, product) {
        let copyProducts = [...Products];
        if (state) {
            for (let i = 0; i < copyProducts.length; i++) {
                if (copyProducts[i].product === product) {
                    copyProducts[i].quantitty += 1;
                    break;
                }
            }
        } else {
            for (let i = 0; i < copyProducts.length; i++) {
                if (copyProducts[i].product === product && copyProducts[i].quantitty > 1) {
                    copyProducts[i].quantitty -= 1;
                    break;
                } else if (copyProducts[i].product === product && copyProducts[i].quantitty <= 1) {
                    copyProducts[i].quantitty = 0;
                    copyProducts.splice(i, 1);
                    break;
                }
            }
        }

        setProducts(copyProducts);
        payvalue();
    }

    function payvalue() {
        let val1 = 0;
        for (let i = 0; i < Products.length; i++) {
            val1 += Products[i].quantitty * Products[i].cost;
        }
        setSum(val1.toFixed(2));
    }

    function inputcode() {
        if (promoRef.current.value.length == 13 && Sum != 0) {
            if (!IsPromo) {
                setSum((Sum * 0.8).toFixed(2));
                setIsPromo(true);
            }
        }
    }
    function handleinput(e) {
        promoRef.current.value = e.target.value

    }
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <script defer src="https://js.stripe.com/v3/"></script>
            <HomeArrow></HomeArrow>
            <Nav></Nav>
            <div id='mainpage' >
                <div className="relative bg-white bg-opacity-40 w-full pb-48 border-2 shadow-lg load-in h-full">
                    <Hero h1='Try to drag image'></Hero>
                    <img src={shopcart} onClick={() => setCheckout(!Checkout)} className='fixed right-8 md:top-60  lg:top-52 lg:right-40  w-14 scale-75 cursor-pointer hover:scale-90 transition-all top-32 z-20 '></img>
                    <div className="sm:-my-32 lg:w-3/4 mx-auto">
                        <div className="flex flex-col md:flex-row justify-around md:flex-wrap md:content-center">
                            <div className=" relative flex justify-center  mx-auto cursor-pointer items-center  border-2 bg-zinc-50 m-10 w-80 rounded-2xl shadow-lg pt-2 md:mx-2">
                                <div className="absolute w-20 top-10 left-1 border-1 shadow-md text-center rounded-full text-black"> 14.99$ </div>
                                <div className="absolute w-auto  px-2 py-1 top-1 p-1 left-1 border-1 shadow-md text-center rounded-full text-black">Custom Dart Shirt   </div>
                                <img className='absolute fade-out-3 w-20 h-10 bottom-0' src={tri6}></img>
                                <img className='absolute z-30 -bottom-7 fade-out-3  w-12 h-12 ' src={tri6pointer}></img>
                                <AddToCart AddToCheckout={() => AddToCheckout('Custom Dart Shirt', 14.99, 'price_1NIXyMDdrSDRFqJPrSQUwI6m')}></AddToCart>
                                <Canvas path={dirt2} z={1} ></Canvas>
                            </div>

                            <div className="flex relative mx-auto justify-center cursor-pointer items-center  border-2 w-80 bg-zinc-50 my-10 rounded-2xl shadow-lg md:mx-2">
                                <div className="absolute w-20  top-10 left-1 border-1 shadow-md text-center rounded-full text-black"> 19.99$ </div>
                                <div className="absolute w-auto  top-1 px-2 py-1 left-1 border-1 shadow-md text-center rounded-full text-black">Circle Mex Dragon + Darts </div>
                                <img className='absolute fade-out-3 w-20 h-10 bottom-0' src={tri6}></img>
                                <img className='absolute z-30 -bottom-7 fade-out-3  w-12 h-12 ' src={tri6pointer}></img>
                                <AddToCart AddToCheckout={() => AddToCheckout('Circle Mex Dragon + Darts', 19.99, 'price_1NIXzpDdrSDRFqJPWIVy35kF')}></AddToCart>
                                <Canvas path={dartshield} z={120} ></Canvas>
                            </div>
                            <div className="flex relative mx-auto justify-center cursor-pointer items-center  border-2 w-80 bg-zinc-50 my-10 rounded-2xl shadow-lg md:mx-2">
                                <div className="absolute w-20  top-10 left-1 border-1 shadow-md text-center rounded-full text-black"> 9.99$ </div>
                                <div className="absolute w-auto  top-1 px-2 py-1 left-1 border-1 shadow-md text-center rounded-full text-black"> Basic Darts </div>
                                <img className='absolute fade-out-3 w-20 h-10 bottom-0' src={tri6}></img>
                                <img className='absolute z-30 -bottom-7 fade-out-3  w-12 h-12 ' src={tri6pointer}></img>
                                <AddToCart AddToCheckout={() => AddToCheckout(' Basic Darts', 9.99, 'price_1NIY15DdrSDRFqJPTuqLnCzw')}></AddToCart>
                                <Canvas path={untitled} z={20} ></Canvas>
                            </div>
                            <div className="flex relative mx-auto justify-center cursor-pointer items-center  border-2 w-80 bg-zinc-50 my-10 rounded-2xl shadow-lg md:mx-2">
                                <div className="absolute w-20  top-10 left-1 border-1 shadow-md text-center rounded-full text-black"> 79.99$ </div>
                                <div className="absolute w-auto  top-1 px-2 py-1 left-1 border-1 shadow-md text-center rounded-full text-black"> Blazes Dart 2k </div>
                                <img className='absolute fade-out-3 w-20 h-10 bottom-0' src={tri6}></img>
                                <img className='absolute z-30 -bottom-7 fade-out-3  w-12 h-12 ' src={tri6pointer}></img>
                                <AddToCart AddToCheckout={() => AddToCheckout('Blazes Dart 2k', 79.99, 'price_1NIY1RDdrSDRFqJPManlmWwn')}></AddToCart>
                                <Canvas path={firedart} z={5} ></Canvas>
                            </div>
                            <div className="flex relative mx-auto justify-center cursor-pointer items-center  border-2 w-80 bg-zinc-50 my-10 rounded-2xl shadow-lg md:mx-2">
                                <div className="absolute w-20  top-10 left-1 border-1 shadow-md text-center rounded-full text-black"> 33.99$ </div>
                                <div className="absolute w-auto  top-1 px-2 py-1 left-1 border-1 shadow-md text-center rounded-full text-black"> Dart Circle dark </div>
                                <img className='absolute fade-out-3 w-20 h-10 bottom-0' src={tri6}></img>
                                <img className='absolute z-30 -bottom-7 fade-out-3  w-12 h-12 ' src={tri6pointer}></img>
                                <AddToCart AddToCheckout={() => AddToCheckout('Dart Circle dark ', 33.99, 'price_1NIY1gDdrSDRFqJPvy3H4G3t')}></AddToCart>
                                <Canvas path={dartshield3} z={1.5} ></Canvas>
                            </div>

                        </div>
                        <div className="flex flex-col">
                            <button className='btn mx-auto lg:scale-150 hover:lg:scale-125' onClick={() => setCheckout(() => { scrollToTop(); return (!Checkout) })}> Checkout! </button>
                        </div>
                        {Checkout &&
                            <div className='fixed bg-white border-2 rounded-lg shadow-lg top-40 md:top-24 z-10 right-10 md:right-1/4 w-4/5 md:w-2/4 '>
                                <div className="flex flex-col justify-center items-center">
                                    <img src={cros} className='h-10 w-10 ml-auto cursor-pointer hover:scale-110 transition-all' onClick={() => setCheckout(!Checkout)} />
                                    <div className="w-1/2   flex justify-center flex-col ">

                                        {

                                            Products.map(function ({ product, cost, quantitty }, index) {
                                                sum += quantitty * cost;
                                                return (
                                                    <div key={index + 100} className="flex flex-col justify-center items-center">
                                                        <div className="bg-white rounded-full border-2 text-center shadow-md w-full mt-3"> {product} {cost}$</div><span>x{quantitty} &nbsp;<span className='cursor-pointer text-green-500' onClick={() => add(true, product)}> +</span> <span className='cursor-pointer text-red-500' onClick={() => add(false, product)}>-</span> </span>
                                                    </div>
                                                )

                                            })
                                        }

                                        <div className="text-center text-3xl p-4 text-gray-700">{Sum} $</div>

                                        <div className="flex flex-row justify-center">
                                            <input onChange={handleinput} className='mx-auto border-2 rounded-full px-3 text-center' ref={promoRef} placeholder='set promo code'></input> <span className='cursor-pointer hover:scale-110 text-green-600' onClick={() => inputcode()}>&#x2713;</span>
                                        </div>
                                        <button className='btn mx-auto scale-125 px-4' onClick={sendCheckout}> Pay </button>

                                    </div>
                                </div>
                            </div>}
                    </div>

                </div>
            </div>
        </>
    );
}
