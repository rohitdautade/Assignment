import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as Mdicon from "react-icons/md";

export const SidebarItem = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Widget',
    path: '/widget',
    icon: <Mdicon.MdWidgets />,
    cName: 'nav-text'
  },
  {
    title: 'UI Element',
    path: '/uilement',
    icon: <FaIcons.FaDesktop />,
    cName: 'nav-text'
  },
  {
    title: 'Editor',
    path: '/editor',
    icon: <AiIcons.AiOutlineEdit />,
    cName: 'nav-text'
  }
];
