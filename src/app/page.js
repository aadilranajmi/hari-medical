import Header from '@/components/Header/Header';
import BestDoctor from '@/components/Home/BestDoctor';
import HeroSection from '@/components/Home/HeroSection';
import HomeBlog from '@/components/Home/HomeBlog';
import HomeFaq from '@/components/Home/HomeFaq';
import ServiceHome from '@/components/Home/ServiceHome';
import TreatmentWorks from '@/components/Home/TreatmentWorks';
import WelcomeHome from '@/components/Home/WelcomeHome';
import WhyAyurveda from '@/components/Home/WhyAyurveda';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <TreatmentWorks />
            <WelcomeHome />
            <ServiceHome />
            <WhyAyurveda />
            <BestDoctor />
            <HomeFaq />
            <HomeBlog />
        </main>
    );
}
