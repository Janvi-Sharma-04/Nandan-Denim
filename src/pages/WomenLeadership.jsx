import { Splide, SplideSlide } from "@splidejs/react-splide";

import React from "react";
import HeaderBlog from "../component/HeaderBlog";

const WomenLeadership = () => {
    return (
        <>

            <HeaderBlog />
            <div className="mt-14 ">
                {/* heading che women leadership */}
                <div className=" w-full max-w-7xl mx-auto mb-10 p-2 ">
                    <h3 className="text-red-500 text-lg">
                        May 2, 2018 <span className="text-gray-400 font-montserrat, sans-serif w-max-7xl mx-auto"> / In Women Leadership / </span> 0 Comments
                    </h3>

                    <h2 className="font-bold text-2xl w-max-7xl mx-auto sm:text-3xl md:text-4xl  transition font-montserrat, sans-serif"
                    >
                        Women Leadership
                    </h2>
                </div>

                {/* Hero Section */}
                <div className="relative  w-full mb-16 ">
                    <Splide
                        options={{
                            type: "fade",
                            rewind: true,
                            perPage: 1,
                            autoplay: true,
                            interval: 4000,
                            speed: 400,
                            arrows: false,
                            pagination: false,
                            pauseOnHover: false,
                            pauseOnFocus: false,
                        }}
                        className="h-full "
                    >
                        <SplideSlide>
                            <img
                                src="/imgs/media/blog/womenleadership/womenleadershipbanner1.png"
                                alt="Slide 1"
                                className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh] "
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <img
                                src="/imgs/media/blog/womenleadership/womenleadershipbanner2.png"
                                alt="Slide 2"
                                className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh]"
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <img
                                src="/imgs/media/blog/womenleadership/womenleadershipbanner3.png"
                                alt="Slide 3"
                                className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh]"
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <img
                                src="/imgs/media/blog/womenleadership/womenleadershipbanner4.png"
                                alt="Slide 4"
                                className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh]"
                            />
                        </SplideSlide>
                    </Splide>


                </div>


                {/* content */}
                <div className="mb-10 p-2">

                    <div className="max-w-7xl mx-auto font-signika text-lg">
                        <p className="text-justify ">Women leaders are on the rise. So, aside from repercussions of #MeToo,
                            why is there so much discussion about women coming into their
                            own and coming into positions of leadership?</p>
                    </div>
                    {/* paragraphs myth vadu */}
                    <div className="max-w-7xl mx-auto mt-8 mb-10 text-sm text-gray-700 text-justify  font-signika">
                        <div className="mb-10 space-y-2 ">
                            <h2 classname="">Myth #1: Leaders are born (male).</h2>
                            <p>With the marginal numbers of women in executive levels of leadership,
                                this myth would seem to be true. Yes, statistically, there are more male leaders
                                represented in most organizations. However, this does not preclude women
                                from taking on leadership roles.
                            </p>
                        </div>
                        <div className="mb-10 space-y-2 ">
                            <h2 classname="">Myth #2: Leadership is new for women</h2>
                            <p>Have you ever heard of the names Cleopatra VII or even Dilma Rousseff,
                                Indira Gandhi or certainly Oprah Winfrey and Hilary Clinton? Women have been leading across
                                all sectors of business and government since the beginning of recorded history and earlier.
                                When women have other women leadership role models within the organization, they can better
                                envision their own career paths and success.
                            </p>
                        </div >
                        <div className="mb-10 space-y-2 ">
                            <h2 classname="">Myth #3: Women can have it all.</h2>
                            <p>The real question is: What level of engagement in your work is appropriate and desirable
                                for you at this stage of your life and career? When women can answer that question
                                with certainty and authenticity, they will likely strike the right balance for themselves.
                            </p>
                        </div>
                        <div className="mb-10 space-y-2 ">
                            <h2 classname="">Myth #4: Women must work harder at learning to lead</h2>
                            <p>Research shows that women naturally possess effective leadership competencies.
                                This means those competencies, such as developing new leaders, demonstrating communication
                                and social skills, utilizing creativity and innovation, problem-solving, demonstrating
                                judgment and team leadership, among others, are naturally available for women leaders.
                            </p>
                        </div>
                        <div className="mb-10 space-y-2 ">
                            <h2 classname="">Myth #5: Women will never be paid as much as men. </h2>
                            <p>Real talent and hard work in an efficient organization never go to waste.
                                It doesn’t matter who delivers the work until unless it is achieved with utmost precision.
                                So, never underrate yourself.
                            </p>
                        </div>
                    </div>

                    <hr className="text-gray-100 max-w-7xl mx-auto p-4" />
                    {/* Tags */}
                    <div className="mt-8   max-w-7xl mx-auto flex gap-3">
                        <h2 className="font-bold text-2xl mb-2 font-opensans">Tags</h2>
                        <div className="flex   gap-2">
                            {[
                                { name: "Corporate", href: "/tags/corporate-tag" },
                                { name: "Denim", href: "/tags/denim-tag" },
                                { name: "Leadership", href: "/tags/leadership-tag" },
                                { name: "Market", href: "/tags/market-tag" },
                                { name: "News", href: "/tags/news-tag" },
                                { name: "One_World", href: "/tags/one-world" },
                                { name: "Women", href: "/tags/women-tag" },
                            ].map((tag) => (
                                <a
                                    key={tag.name}
                                    href={tag.href}
                                    target="_blank"
                                    className="text-blue-900 underline text-sm sm:text-base hover:text-gray-600 transition"
                                >
                                    {tag.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <hr className="text-gray-100 max-w-7xl mx-auto " />

                    {/* comments */}
                    <div className="max-w-7xl mx-auto mt-4">
                        <h2 className="text-2xl font-thin">No Comment </h2>
                    </div>
                    <div className="max-w-7xl mx-auto mt-4">
                        <h2 className="text-2xl font-thin">Leave A Comment: </h2>
                        <p className="mt-4 text-gray-700">You must be logged in to post a comment.</p>
                    </div>
                </div>



            </div>

        </>
    )
};

export default WomenLeadership;
