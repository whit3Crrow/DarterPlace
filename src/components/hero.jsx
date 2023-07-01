import {  Link} from 'react-router-dom';


export function Hero({h1, p}){
    return(
  
                <div className="relative isolate w-full px-6 pt-2 lg:px-8 load-in-2">
                    <div class="mx-auto max-w-2xl pt-20 sm:py-32 ">
                        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Solve 10 dart equations to get -20% Promo Code in our shop <Link to='/vite/DartGame' class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Go! <span aria-hidden="true">&rarr;</span></Link>
                            </div>
                        </div>
                        <div class="text-center">
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{h1}</h1>
                            <p class="mt-6 text-lg leading-8 text-gray-600">{p}</p>
                            <div class="mt-10 flex items-center justify-center gap-x-6">
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] h-4" aria-hidden="true">
                        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] siema123"  ></div>
                    </div>
                </div>
         
    );
    }