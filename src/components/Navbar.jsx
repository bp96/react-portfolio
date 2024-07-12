import React from "react";
import ContactIcons from "./ContactIcons";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <p className='mx-2 w-10'>LOGO</p> */}
      </div>
      <ContactIcons />
    </nav>
  );
};

export default Navbar;
