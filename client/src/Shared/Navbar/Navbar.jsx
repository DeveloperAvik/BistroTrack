import { useState } from 'react';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navOptions = (
        <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li>
                <details className="group">
                    <summary>Parent</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li>
            <li><a>Item 3</a></li>
        </ul>
    );

    return (
        <div className="navbar fixed z-10 bg-opacity-10 bg-black text-white max-w-screen-2xl">
            <div className="navbar-start">
                {/* Mobile Dropdown Button */}
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        aria-expanded={isDropdownOpen ? 'true' : 'false'}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li><a>Home</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BistroTrack</a>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                {/*  */}

                <div className=" navbar-center hidden lg:flex px-1">
                    {navOptions}
                </div>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
}

export default Navbar;
