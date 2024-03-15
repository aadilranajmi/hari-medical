'use client';
import Link from 'next/link';

//component
import Navbar from './Navbar';
import MobileNav from './MobileNav';

//material ui
import { Button, Hidden } from '@mui/material';

const Header = () => {
    return (
        <header className="main-header">
            <div className="nav-area">
                <Link href="/" className="logo">
                    Logo
                </Link>

                <div className="nav-left">
                    {/* for large screens */}
                    <Hidden mdDown>
                        <Navbar />
                    </Hidden>

                    {/* for small screens */}
                    <Hidden mdUp>
                        <MobileNav />
                    </Hidden>
                    <Button variant="contained" sx={{
                        borderRadius: "2rem"
                    }}>
                        <Link href="/">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
