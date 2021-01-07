import React from "react";
import { NavLink } from "react-router-dom";
import { ClockHistory } from "./icons/ClockHistory";
import { FileText } from "./icons/FileText";
import { Folder } from "./icons/Folder";
import { PersonSquare } from "./icons/PersonSquare";
import { Tags } from "./icons/Tags";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='logo'>
        <span className='bold'>Time</span>
        <span>Track</span>
      </div>

      <ul>
        <li>
          <NavLink activeClassName='active-link' exact to='/'>
            <span>
              <ClockHistory />
            </span>
            Timer
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-link' exact to='/reports'>
            <span>
              <FileText />
            </span>
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-link' exact to='/projects'>
            <span>
              <Folder />
            </span>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-link' exact to='/clients'>
            <span>
              <PersonSquare />
            </span>
            Clients
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-link' exact to='/tags'>
            <span>
              <Tags />
            </span>
            Tags
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
