import React from "react";
import { useQueryClient } from "react-query";
import { NavLink } from "react-router-dom";
import { API_URL } from "../utils/api-client";
import { ClockHistory } from "./icons/ClockHistory";
import { FileText } from "./icons/FileText";
import { Folder } from "./icons/Folder";
import { PersonSquare } from "./icons/PersonSquare";
import { Tags } from "./icons/Tags";

const Navbar = () => {
  const queryClient = useQueryClient();

  const handleRemoveAllData = () => {
    try {
      fetch(`${API_URL}/seed/remove`)
        .then((res) => queryClient.invalidateQueries("projects"))
        .then((res) => queryClient.invalidateQueries("tasks"));
    } catch (error) {
      console.log(error);
    }
  };
  const handleSeedData = async () => {
    try {
      fetch(`${API_URL}/seed/clients`)
        .then((res) => fetch(`${API_URL}/seed/projects`))
        .then((res) => queryClient.invalidateQueries("projects"))
        .then((res) => fetch(`${API_URL}/seed/tasks`))
        .then((res) => queryClient.invalidateQueries("tasks"));
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className='seed-buttons'>
        <button className='add-data-btn' onClick={handleSeedData}>
          Seed Data
        </button>
        <button className='remove-data-btn' onClick={handleRemoveAllData}>
          Remove All Data
        </button>
      </div>
    </div>
  );
};

export default Navbar;
