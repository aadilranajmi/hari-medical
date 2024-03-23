import { homeData } from '@/static/homeData';
import { Typography } from '@mui/material';
import Image from 'next/image';

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
                            <div className="treatmentWorkMainContentImg">
                                <Image
                                    src={item.imgUrl}
                                    width={60}
                                    height={60}
                                    alt={item.title}
                                />
                            </div>
                            <p className="defaultPara">{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TreatmentWorks;
