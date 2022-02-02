import React from "react";
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-100 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div>
                <div className="ml-10 flex items-baseline justify-end space-x-4">
                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName = "text-white" >
                    Home
                  </NavLink>

                  <NavLink
                    to="/users/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName = "text-white" >
                    Users
                  </NavLink>

                  <NavLink
                    to="/devices/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName = "text-white" >
                    Devices
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </div>
  );
}

export default Nav;
