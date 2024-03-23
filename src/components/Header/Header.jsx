'use client';
import Link from 'next/link';

//component
import Navbar from './Navbar';
import MobileNav from './MobileNav';

//material ui
import { Button, Hidden } from '@mui/material';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="main-header">
            <div className="nav-area">
                <Link href="/" className="logo">
                    <Image
                        src="/images/hari-medical-logo.png"
                        width={165}
                        height={45}
                        alt="Hari Medical Logo"
                    />
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
                    <Hidden mdDown>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: '2rem',
                            }}
                        >
                            <a href="tel:+91 98115 73361">Contact Us</a>
                        </Button>
                    </Hidden>
                </div>
            </div>
        </header>
    );
};

export default Header;
