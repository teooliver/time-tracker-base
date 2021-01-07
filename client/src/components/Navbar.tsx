import React from "react";
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
          <span>
            <ClockHistory />
          </span>
          Timer
        </li>
        <li>
          <span>
            <FileText />
          </span>
          Reports
        </li>
        <li>
          <span>
            <Folder />
          </span>
          Projects
        </li>
        <li>
          <span>
            <PersonSquare />
          </span>
          Clients
        </li>
        <li>
          <span>
            <Tags />
          </span>
          Tags
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
