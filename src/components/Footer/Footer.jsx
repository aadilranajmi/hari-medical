import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footerMain">
                    <div className="footerGeneral">
                        <Image
                            src="/images/hari-medical-logo.png"
                            width={250}
                            height={50}
                            alt="Hari Medical Logo"
                        />
                        <p>5E-56, B.P. N.I.T. FARIDABAD Near By - K.L. Mehta{' '}
                            <br />
                            Dyanand Public school</p>
                        <p>
                            For Appointments & Consultation:{' '}
                            <a href="tel:+91 98115 73361">+91 98115 73361</a>
                        </p>
                        <p>
                            For General Enquiry:{' '}
                            <a href="tel:+91 98115 73361">+91 98115 73361</a>
                        </p>
                        <p>
                            Mail us on:{' '}
                            <a href="mailto:info@shreeharimedicalcenter.com">
                                info@shreeharimedicalcenter.com
                            </a>
                        </p>
                    </div>
                    <div className="footerQuickLinks">
                        <div className="heading">Quick Link</div>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/">ABOUT US</Link>
                            </li>
                            <li>
                                <Link href="/">PANCHKARMA</Link>
                            </li>
                            <li>
                                <Link href="/">TREATMENTS</Link>
                            </li>
                            <li>
                                <Link href="/">THERAPY</Link>
                            </li>
                            <li>
                                <Link href="/">WELLNESS PACKAGES</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footerAbout">
                        <div className="heading">About Us</div>
                        <p>
                            Where your journey to wellness begins amidst the
                            perfect harmony of comfort, luxury, and exceptional
                            hospitality,set against the backdrop of a serene
                            natural environment
                        </p>
                        <Typography
                            className="heading"
                            component="p"
                            sx={{ mt: 2}}
                        >
                            Follow Us
                        </Typography>
                        <ul>
                            <li>
                                <a href="/" target="_blank" rel="nofollow">
                                    <FacebookIcon />
                                </a>
                            </li>
                            <li>
                                <a href="/" target="_blank" rel="nofollow">
                                    <InstagramIcon />
                                </a>
                            </li>
                            <li>
                                <a href="/" target="_blank" rel="nofollow">
                                    <YouTubeIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footerBottom'>
                    <p>Copyright © {new Date().getFullYear()} Shree Hari Medical Center</p>
                </div>
        </footer>
    );
};

export default Footer;
