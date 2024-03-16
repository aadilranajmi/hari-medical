import HomeFaqAccordion from "./HomeFaqAccordion";

const HomeFaq = () => {
    return (
        <section className="homeFaq">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <h3>Have questions? We're here to help.</h3>
                <div className="homeFaqMain">
                    <HomeFaqAccordion />
                </div>
            </div>
        </section>
    );
};

export default HomeFaq;
