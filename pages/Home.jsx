import luggage from './Assets/1630649608507__1_-removebg-preview (1).png';
//import '../src/Components/Assets/Home.css';
import {home} from 'react-icons-kit/icomoon/home';
import Icon from 'react-icons-kit';
import {info} from 'react-icons-kit/icomoon/info';
import {user} from 'react-icons-kit/fa/user';
import {feed} from 'react-icons-kit/fa/feed';
import {briefcase} from 'react-icons-kit/feather/briefcase';
import {th} from 'react-icons-kit/fa/th';
import {bars} from 'react-icons-kit/fa/bars';
import {x} from 'react-icons-kit/feather/x';
import { useState } from 'react';
import basket from './Assets/1630649608507__1_-removebg-preview (1).png'
export default function Home(){

 
    const [menuopen,setmenuopen] = useState(bars);
    const [navbar,setnavber] = useState('nav-items');
    const [window,setwindow] = useState('dropdown');
    const handleToggle = () => {
        setmenuopen((prevIcon) => (prevIcon === bars ? x : bars));
        setnavber((prevNavbar) => (prevNavbar === 'nav-items' ? 'nav-items active' : 'nav-items'));
    };
    const handleWindow = ()=>{
        setwindow((prevWindow) => (prevWindow === 'dropdown' ? 'dropdown active' : 'dropdown'));
    }
    const close = ()=>{
        setwindow('dropdown');
    }
    

    return(
        <>
        <nav>
            <div className='logo-head'>
                <img className='logo-img' src={luggage} alt="" />
                <p></p>
            </div>
            <div>
                <ul className={navbar} id='navbar' >
                    <li className='nav-item'>
                        <Icon className='icon' icon={home} />
                        <a className='nav-link' href="./Home.jsx">Home</a></li>
                    <li className='nav-item'>
                        <Icon className='icon' icon={info} />
                        <a className='nav-link' href="">About</a></li>
                    <li className='nav-item'>
                        <Icon className='icon' icon={user}/>
                        <a className='nav-link' href="">Customer</a></li>
                    <li className='nav-item'>
                        <Icon className='icon' icon={feed} />
                        <a className='nav-link' href="">Contact</a></li>
                    <li className='nav-item'>
                        <Icon className='icon' icon={briefcase}/>
                        <a className='nav-link' href="">Business</a></li>
                </ul>
            </div>
            <div className='mobile'>
            <Icon icon={menuopen} size={18} onClick={handleToggle} className='hamburger'/>
            </div>
            <div className='right'>
                <Icon onClick={handleWindow} className='bar-icon' size={24} icon={th}/>
            </div>
        </nav>

        <div className={window}>
                <div id='lbox'>
                    <div id='head'>
                    <h3>Luggages</h3>
                    <Icon  id='close' onClick={close} icon={x} size={32}/>
                    </div>
                    <div id='box'>
                    <div id='row'>
                            <div id='col' className='title'>Size of the Luggage :</div>
                            <div id='col'>
                                <form action="" >
                                    <div className='lform'>
                                    <input type='radio' id='large' name='size'></input>
                                    <label htmlFor='large'>Large</label>
                                    </div>
                                    <div className='lform'>
                                    <input type='radio' id='medium' name='size'></input>
                                    <label htmlFor='medium'>Medium</label>
                                    </div>
                                    <div className='lform'>
                                    <input type='radio' id='small' name='size'></input>
                                    <label htmlFor='small'>Small</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div id='row'>
                            <div id='col' className='title'>Weight of the Luggage :</div>
                            <div id='col'><input type="number" className='weight' placeholder='Enter Weight in KGs'/></div>
                        </div>
                        <div>
                            <button onClick={close} id='sub-btn'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <main>
                <section id='container'>
                    <img src={basket} className='container-img' alt="" />
                </section>
                <section id='container1'>
                </section>
                <section id='container2'>
                </section>
                <section id='container3'>
                </section>
            </main>
            <footer>
                <p>&copy; Copyright 2023 BasketHunt</p>
                <img id='footer-img' src={basket} alt="" /> 
                <p>pvt.Limited | All Rights Reserved</p>
            </footer>
        </>
    )
}

