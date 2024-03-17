import React, { useEffect, useRef, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

//components
import MobileMenuItems from './MobileMenuItems';

//static
import { menuItemsData } from '@/static/menuItemsData';
import { Button } from '@mui/material';
import Link from 'next/link';

const MobileNav = () => {
    const depthLevel = 0;
    const [showMenu, setShowMenu] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (
                showMenu &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setShowMenu(false);
            }
        };
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [showMenu]);

    return (
        <nav className="mobile-nav">
            <button
                className="mobile-nav__menu-button"
                type="button"
                onClick={() => setShowMenu((prev) => !prev)}
            >
                {showMenu ? <IoMdClose /> : <RxHamburgerMenu />}
            </button>

            {showMenu && (
                <ul className="menus" ref={ref}>
                    {menuItemsData.map((menu, index) => {
                        return (
                            <MobileMenuItems
                                items={menu}
                                key={index}
                                depthLevel={depthLevel}
                                showMenu={showMenu}
                                setShowMenu={setShowMenu}
                            />
                        );
                    })}
                    <li>
                        <Button
                            variant="contained"
                            sx={{
                                display: 'block',
                                borderRadius: 0,
                                width: 'calc(100% - 1rem)',
                                margin: '0 0.5rem',
                            }}
                        >
                            <Link href="/">Contact Us</Link>
                        </Button>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default MobileNav;
