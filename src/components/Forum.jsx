import React, { useState, useEffect, useRef } from 'react';
import { Nav } from './nav.jsx'
import { HomeArrow } from './backarrow.jsx';
import Heart from '../images/1-2-instagram-heart-transparent.png'
import coloredHeart from '../images/coloredheart.png'
import profilepic from '../images/profile-icon-png-898.png'
import { Hero } from './hero.jsx';
import cros from '../images/—Pngtree—red cross vector icon no_6234858.png';
import { v4 as uuidv4 } from 'uuid';
import { list } from './forumPostsList.jsx';

function HeartCom({ likes, id, onLike }) {

    const [likecom, setLikeCom] = useState(false);

    return (
        <div className="flex relative flex-col ml-3 scale-75">
            <img src={Heart} onClick={() => { setLikeCom(!likecom); onLike(id, likecom) }} className="text-xl z-20 w-6 cursor-pointer text-red-500" />
            {likecom && <img src={coloredHeart} className='absolute load top-0 left-0 z-10' />}
            <div className="text-gray-600 w-6 text-sm text-center">{likes ? likes : 0}</div>
        </div>
    )
}

function ForumRow({ h1, category, responds, likes, nick, coms, handlelike, id }) {


    let nickref = useRef('');
    let comref = useRef('');
    const [extend, setExtend] = useState(false);
    const [comments, setComments] = useState(coms);
    const [likepost, setLikepost] = useState(false);
    console.log(coms)
    function onLikeCom(id, bool) {
        let copyComs = [...comments];
        copyComs = copyComs.map((com) => (
            id === com.id ? { ...com, likes: (bool ? com.likes -= 1 : com.likes += 1) } : { ...com }
        ))
        setComments(copyComs);
    }
    function sendCom() {
        if (nickref.current.value != '' && comref.current.value != '') {
            let copy = [...comments, {
                id: uuidv4,
                nick: nickref.current.value,
                comment: comref.current.value,
                likes: 0,
            },]
            setComments(copy);

        }
    }

    return (
        <div className="md:w-3/5 w-full flex flex-row m-2 px-2">
            <div className="flex relative flex-col mt-2">
                <img src={Heart} onClick={() => { setLikepost(!likepost); handlelike(id, likepost); }} className="text-xl z-20 w-4 cursor-pointer text-red-500" />
                {likepost && <img src={coloredHeart} className='absolute load top-0 left-0 z-10' />}
                <div className="text-gray-600 w-3 text-sm scale-75 text-center">{likes ? likes : 0}</div>
            </div>
            {!extend ?
                <>
                    <div onClick={() => setExtend(!extend)} className="text-gray-400 flex w-full overflow-hidden text-ellipsis text-xs sm:text-sm border shadow-lg bg-white relative rounded-3xl justify-between hover:cursor-cell hover:-translate-y-1 items-center flex-row h-10 transition-all md:mr-2 ml-3 ">
                        <div className='flex flex-row w-full '>
                            <div className=" p-2 md:p-0 w-full text-gray-700 text-start whitespace-nowrap py-3 md:pl-5 md:pr-10">{h1}</div>
                        </div>
                        <div className='flex flex-row'>

                            <div className="text-md invisible 2xl:visible  md:w-auto w-0  p-1 md:p-2">Category: </div>
                            <div className="text-md invisible 2xl:visible md:w-auto w-0 text-gray-700 px-0 md:pr-4 p-2">{category} </div>
                            <div className="text-md invisible 2xl:visible md:w-auto w-0  p-1 md:p-2">Responds: </div>
                            <div className="text-md invisible 2xl:visible md:w-auto w-0  text-gray-700 px-0 p-1 md:p-2">{coms.length} </div>

                        </div>
                    </div>
                </>
                :
                <>
                    <div className=" realtive p-2 pt-10 pb-10 text-gray-700 flex w-full overflow-hidden border shadow-md bg-white relative rounded-lg h-auto   flex-row  transition-all md:mr-2 ml-3 ">

                        <div className='flex flex-col  w-full px-4'>
                            <div class="absolute inset-x-0 -top-40 z-2 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                                <div
                                    class="betterspin relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#000000] to-[#f7f7fa] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                                    style={{ clipPath: 'polygon(100.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
                                </div>
                            </div>
                            <div className="absolute top-1 left-1  h-full z-3 w-full bg-white"></div>
                            <div className="z-10 mb-10 mt-2 text-xl justify-center text-gray-700  w-fit   flex flex-row   px-3 p-1 mx-auto ">
                                <div className='text-md invisible md:visible w-0 md:w-auto text-gray-600 whitespace-nowrap'>@{nick} | </div>
                                <div className='px-2 text-md'>   {h1}</div>
                            </div>
                            <div className='flex flex-col  w-full z-10 '>
                                {
                                    comments.map(({ nick, comment, likes, id }) => {
                                        return (
                                            <div className='flex flex-row justify-start w-4/5 2xl:w-1/2 mx-auto ' key={id}>
                                                <div className='border text-gray-700 rounded-md my-1 shadow-md px-2 p-1 flex-col md:flex-row max w-fit'>
                                                    <div className='flex flex-col md:flex-row'>
                                                        <img src={profilepic} alt="profilcepic" className='md:w-6 md:h-6  w-0 h-0 invisible md:visible' />
                                                        <div className='whitespace-nowrap pr-5 text-sm'>@{nick} | </div>
                                                    </div>
                                                    <div className='pl-4 text-sm'>
                                                        {comment}
                                                    </div>
                                                </div>
                                                <HeartCom likes={likes} id={id} onLike={onLikeCom}></HeartCom>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <div className="flex flex-row items-center justify-center mt-8 ">
                                <input className="w-10 text-sm border-b shadow-md transition-all  hover:shadow-lg h-9 z-20 p-2 rounded-lg " ref={nickref} placeholder='nick' />

                                <input className="w-35 text-sm border-b shadow-md transition-all  hover:shadow-lg h-9 z-20 p-2 rounded-lg mx-2" ref={comref} placeholder='your comment:' />
                                <div className="cursor-pointer transition-all  hover:shadow-lg flex text-xs rounded-full h-fit bg-white shadow-md  p-2 mt-1 justify-center items-center w-fit align-text-center z-20" onClick={sendCom}>Send&nbsp;</div>
                            </div></div>
                    </div>
                </>
            }
            <div onClick={() => setExtend(!extend)} className=" cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl flex text-sm rounded-full border h-10 bg-white shadow-md md:px-3 px-1 justify-center items-center mx-1 align-text-center">
                {!extend ? 'Read' : 'Close'}
            </div>
        </div>
    );
}

export function Forum() {
    let categoryref = useRef('');
    let categoryref1 = useRef('');
    let nickref = useRef('');
    let topicref = useRef('');


    const [posts, SetPosts] = useState(list)
    const [primaryPosts, SetPrimaryPosts] = useState([...posts]);
    const [addPostPanel, SetAddPostPanel] = useState(false);

    function onLikePost(id, bool) {
        let copyPosts = [...posts];
        if (bool) {
            copyPosts = copyPosts.map((post) => (
                post.id === id ? { ...post, likes: post.likes - 1 } : post
            ))
        } else {
            copyPosts = copyPosts.map((post) => (
                post.id === id ? { ...post, likes: post.likes + 1 } : post
            ))
        }
        SetPosts(copyPosts);
    }
    const [isValid, setIsValid] = useState(null);
    let communication = useRef(':)')

    function check() {
        if (topicref.current.value == '') {
            communication.current = 'Topic input must be filled';
            setIsValid(false);
        } else {
            setIsValid(true);
            communication.current = 'Your question has been sended';
        }
    }
    function SendForumTopic() {
        if (isValid == true) {
            let copyPosts = [...posts, {
                id: uuidv4(),
                author: nickref.current.value,
                tittle: topicref.current.value,
                category: categoryref1.current.value,
                likes: 0,
                comments: []
            }]
            SetPosts(copyPosts);
            SetPrimaryPosts(copyPosts)
            setIsValid(false);
        }
    }
    useEffect(() => {
        SendForumTopic();
    }, [isValid]);
    useEffect(() => {
        SetPosts(posts);
    }, [categoryref] );

    function sortPosts() {
        var Category = categoryref.current.value;
        if (Category == 'All') {
            SetPosts(primaryPosts);
        }
        else {
            let copyPosts = primaryPosts.filter((post) => (post.category == Category))
            SetPosts(copyPosts);
            console.log(posts);
        }


    }
    return (
        <>
            <HomeArrow></HomeArrow>
            <Nav></Nav>
            <div id='mainpage' className='relative' >
                <div className="m-8 w-3/5 justify-start text-2xl text-gray-700 bold flex-row flex">
                    <a href='#footer'><div className="text-gray-700 mt-2 mr-2 flex border shadow-md bg-white relative rounded-full justify-center items-center flex-row w-auto h-10 transition-all hover:-translate-y-1 hover:shadow-xl md:mr-5 ml-3 ">
                        <div className='ml-2 cursor-pointer w-28 md:w-36 text-sm  md:text-sm'>New post:</div>
                        <button className='btn text-lg  md:text-xl rounded-full md:h-12 md:scale-110 ml-2 absolute -right-3' onClick={() => SetAddPostPanel(!addPostPanel)}>Add</button>
                    </div></a>
                    <select ref={categoryref} onChange={sortPosts} className="my-2 h-10 md:w-auto w-24 text-sm p-1 cursor-pointer text-gray-700 md:text-sm hover:-translate-y-1 hover:shadow-xl transition-all shadow-md  border rounded-full">
                        <option selected hidden>Category:</option>
                        <option>Equipment</option>
                        <option>Tournaments</option>
                        <option>TopPlayers</option>
                        <option>LiveChats</option>
                        <option>Exercise</option>
                        <option>Issues</option>
                        <option>Advice</option>
                        <option>Places</option>
                        <option>All</option>
                    </select>

                    {addPostPanel &&
                        <>
                            <div onClick={() => SetAddPostPanel(false)} className='right-0 w-full h-full top-16 fixed z-10'></div>
                            <div className=' w-full  h-1/2 right-0 lg:right-1/4 ml-20 lg:w-3/5 top-40 lg:top-12 shadow-md border fixed rounded-lg lg:h-32 bg-white z-40 load'>
                                <div className='z-20 flex flex-col lg:flex-row gap-4  items-center justify-center content-center mt-4'>
                                    <select ref={categoryref1} className=" ml-3 my-2 h-10 md:w-auto w-24 text-sm p-1 cursor-pointer mx-2 text-gray-700 md:text-sm hover:-translate-y-1 hover:shadow-xl transition-all shadow-md  border rounded-full">
                                        <option selected hidden>Category:</option>
                                        <option>Equipment</option>
                                        <option>Tournaments</option>
                                        <option>TopPlayers</option>
                                        <option>LiveChats</option>
                                        <option>Exercise</option>
                                        <option>Issues</option>
                                        <option>Advice</option>
                                        <option>Places</option>
                                        <option>All</option>
                                    </select>

                                    <input ref={topicref} className="w-35 text-sm border-b shadow-md transition-all  hover:shadow-lg h-9 z-20 p-2 rounded-lg mx-2" placeholder='Question/topic' />
                                    <input ref={nickref} className="w-35 text-sm border-b shadow-md transition-all  hover:shadow-lg h-9 z-20 p-2 rounded-lg mx-2" placeholder='nickname' />
                                    <div onClick={() => { check(); }} className="cursor-pointer transition-all  hover:shadow-lg flex text-xs rounded-full h-fit bg-white shadow-md  p-2 mt-1 justify-center items-center w-fit align-text-center z-20">Send&nbsp;</div>
                                    <img src={cros} onClick={() => SetAddPostPanel(false)} className='drop-shadow-md absolute  cursor-pointer w-5 top-2 right-2'></img>
                                </div>
                                <div className="bg-white  w-fit h-fit rounded-lg px-4 text-center mx-auto shadow-md p-3 text-gray-700 text-xs z-30">{communication.current}</div>

                            </div>
                        </>
                    }
                </div>
                {posts.map(({ id, author, tittle, category, likes, comments }) => {


                    return (
                        <ForumRow id={id} h1={tittle} category={category} nick={author} likes={likes} coms={comments} handlelike={onLikePost} key={id}></ForumRow>
                    )

                })}
            </div >
        </>
    );
}
