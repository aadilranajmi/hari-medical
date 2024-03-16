import Header from '@/components/Header/Header';
import HeroSection from '@/components/Home/HeroSection';
import ServiceHome from '@/components/Home/ServiceHome';
import TreatmentWorks from '@/components/Home/TreatmentWorks';
import WelcomeHome from '@/components/Home/WelcomeHome';
import WhyAyurveda from '@/components/Home/WhyAyurveda';

export default function Home() {
    return (
        <main>
            <Header />
            <HeroSection />
            <TreatmentWorks />
            <WelcomeHome />
            <ServiceHome />
            <WhyAyurveda />
        </main>
    );
}
