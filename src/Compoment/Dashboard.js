import React from 'react';
import '../Static/CSS/Dashboard.css'
import Logo from '../Static/IMG/logo.png'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as Mdicon from "react-icons/md";
import * as IoIcons from 'react-icons/io';
import { SidebarItem } from './SidebarItem';
import Block1 from '../Page/Block1';
import Block2 from '../Page/Block2';
import Block3 from '../Page/Block3';

const DashBoard = () => {
    return (
        <>
            <div className="layout">
                <div className="sidebar">
                    <img src={Logo} alt="Logo" className="logo" />

                    <ul>
                        {SidebarItem.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <span><p className="iconspace">{item.icon}</p>
                                        <span>{item.title}</span>
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="navbar">
                    <div className="layout">
                        <div>
                            <p className="baricon"><FaIcons.FaBars /></p>
                        </div>
                        <div className="navbaricons">
                            <p className="iconcolor"><IoIcons.IoMdNotifications /></p>
                            <p className="iconcolor"><IoIcons.IoMdMail /></p>
                            <p className="iconcolor"><FaIcons.FaUserCircle /></p>
                            <p className="iconcolor"><AiIcons.AiTwotoneSetting /></p>
                        </div>
                    </div>
                    <div className="mainblock">
                        <Block1 />
                        <Block2 />
                        <Block3 />
                    </div>

                </div>
            </div>


        </>
    )

}
export default DashBoard;