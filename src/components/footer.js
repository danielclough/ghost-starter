import React from "react";
import { Link } from "gatsby";
import cx from "classnames";

const Footer = ({ className, ...props }) => {
  className = cx(
    "w-full px-8 py-4 text-white bg-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center",
    className
  );
  return (
    <>
      <div className="w-full px-8 py-2 text-white text-xs font-light bg-black flex flex-col sm:flex-row justify-between items-start md:items-center">
            <Link to="/copyright" className="hover:underline"> ©2020 Bank.Rehab </Link>
        <div>
          <ul className="flex flex-col md:flex-row text-sm -mx-3 font-medium mb-0">
            <li className="mx-3"><Link to="/">Home</Link></li>
            <li className="mx-3"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

