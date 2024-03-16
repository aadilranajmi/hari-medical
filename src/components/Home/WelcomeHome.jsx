import { homeData } from '@/static/homeData';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';

const WelcomeHome = () => {
    const welcomeHomeData = homeData.welcomeHome;
    return (
        <section className="welcomeHome">
            <div className="container">
                <h2>
                    Welcome To <span>Shree Hari Medical Center</span>
                </h2>
                <p className="welcomeHomePara defaultPara">
                    Shree Hari Medical Center Is One Of The NABH Accredited
                    Leading Providers Of Ayurveda Panchakarma Treatments In
                    Faridabad-NIT. Shree Hari Medical Center Ayurveda Is A
                    Full-Fledged Treatment Centre With Amenities Of Expert
                    Ayurveda Doctors, Experienced & Dedicated Panchakarma
                    Therapists & Ayurveda Pharmacy
                </p>
                <ul className="welcomeHomeList">
                    {welcomeHomeData.map((item) => (
                        <li>
                            <div className="mainCircle"></div>
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ul>
                <div className="welcomeHomeCta">
                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon />}
                        sx={{
                            background: '#2a2929',
                            '&:hover': {
                                background: '#dd55a9',
                            },
                        }}
                    >
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default WelcomeHome;
