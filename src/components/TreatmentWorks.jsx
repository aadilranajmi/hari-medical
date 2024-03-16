import { homeData } from '@/static/homeData';
import { Typography } from '@mui/material';

const TreatmentWorks = () => {
    const treatmentData = homeData.treatmentWork;
    return (
        <section className="treatmentWork">
            <div className="container">
                <Typography variant="h2">
                    How Our <br />
                    Ayurvedic Treatment Works
                </Typography>
                <ul className="treatmentWorkMain">
                    {treatmentData.map((item) => (
                        <li className="treatmentWorkMainContent">
                            <div className="mainCircle"></div>
                            <p>{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TreatmentWorks;
