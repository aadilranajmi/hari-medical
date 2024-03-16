import { homeData } from '@/static/homeData';
import Image from 'next/image';

const HomeBlog = () => {
    const blogData = homeData.blogs;
    return (
        <section className="homeBlog">
            <div className="container">
                <h2>Our Latest Blogs</h2>
                <div className="homeBlogMain">
                    {blogData.map((item) => (
                        <div className="homeBlogMainCard" key={item.uid}>
                            <Image src={item.imgUrl} width={250} height={175} alt={item.title} />
                            <div className="homeBlogMainCardContent">
                                <h3>{item.title}</h3>
                                <p className='defaultPara'>{item.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeBlog;
