"use client"
import Link from "next/link";

//component
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <Link href="/" className="logo">
                    Logo
                </Link>

                {/* for large screens */}
                <Navbar />

                {/* for small screens */}
                <MobileNav />
            </div>
        </header>
    );
};

export default Header;
