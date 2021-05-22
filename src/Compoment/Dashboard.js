import React from 'react';
import '../Static/CSS/dashboard.css'
import Logo from '../Static/IMG/logo.png'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as Mdicon from "react-icons/md";
import * as IoIcons from 'react-icons/io';
import { SidebarItem } from './SidebarItem';
import Block1 from '../Page/First_Block';
import Block2 from '../Page/Second_Block';
import Block3 from '../Page/Third_Block';

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
                                    <span><p className="icon-space">{item.icon}</p>
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
                            <p className="bar-icon"><FaIcons.FaBars /></p>
                        </div>
                        <div className="navbar-icons">
                            <p className="icon-color"><IoIcons.IoMdNotifications /></p>
                            <p className="icon-color"><IoIcons.IoMdMail /></p>
                            <p className="icon-color"><FaIcons.FaUserCircle /></p>
                            <p className="icon-color"><AiIcons.AiTwotoneSetting /></p>
                        </div>
                    </div>
                    <div className="main-block">
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