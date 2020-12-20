import React, { useEffect } from 'react'
import Breadcrumb from 'themes/blog/components/Breadcrumb'

export default function Author() {
    useEffect(() => {
        const typedTextSpan = document.querySelector(".typed-text");
        const cursorSpan = document.querySelector(".cursor");

        const textArray = ["I'm Alexander Ronald.", "Writing is all my Life.", "I Love to write Blog posts!"];
        const typingDelay = 200;
        const erasingDelay = 10;
        const newTextDelay = 100; // Delay between current and next text
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                // add class 'typing' if there's none
                if (!cursorSpan.classList.contains("typing")) {
                    cursorSpan.classList.add("typing");
                }
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, 0);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                cursorSpan.classList.remove("typing");
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay);
            }
        }
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    }, [])

    return (
        <>
            <Breadcrumb
                links={[
                    { title: 'Home', link: '/' },
                    { title: 'More' },
                    { title: 'Author' },
                ]}
            />
            {/* author section */}
            <section id="author" className="w3l-author py-5">
                <div className="container py-md-3">
                    <div className="row align-items-center">
                        <div className="col-md-3 col-sm-4 col-7 order-first">
                            <div>
                                <img src="/assets/images/author.jpg" alt="" className="rounded-circle img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 order-md-first mt-lg-0 mt-4">
                            <span className="category">Writing is all my life</span>
                            <h1 className="mb-4 title">Hello, <span className="typed-text" /><span className="cursor">&nbsp;</span>
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi.
                            Distinctio accusantium fugit odit? Fugit ipsam. Lorem ipsum dolor sit amet consectetur
                            adipisicing
                            elit. Aspernatur at corporis omnis sapiente deleniti atque ea maxime consequatur optio
                            perspiciatis.
                </p>
                            <ul className="author-icons mt-4">
                                <li><a className="facebook" href="#url"><span className="fa fa-facebook" aria-hidden="true" /></a>
                                </li>
                                <li><a className="twitter" href="#url"><span className="fa fa-twitter" aria-hidden="true" /></a>
                                </li>
                                <li><a className="google" href="#url"><span className="fa fa-google-plus" aria-hidden="true" /></a>
                                </li>
                                <li><a className="linkedin" href="#url"><span className="fa fa-linkedin" aria-hidden="true" /></a>
                                </li>
                                <li><a className="github" href="#url"><span className="fa fa-github" aria-hidden="true" /></a>
                                </li>
                                <li><a className="dribbble" href="#url"><span className="fa fa-dribbble" aria-hidden="true" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* //author section */}
            <div className="display-ad" style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>
                {/*-728x90-*/}
            </div>
            <div className="w3l-authorblock2 w3l-homeblock1 mb-5 pb-5">
                <div className="container">
                    {/* block */}
                    <div className="item mt-4">
                        <h3 className="section-title-left">Posted by Alexander Ronald </h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="list-view list-view1">
                                    <div className="grids5-info">
                                        <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/17.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                        <div className="blog-info align-self">
                                            <span className="category">Technology</span>
                                            <a href="blog-single.html" className="blog-desc1">Edit/proofread your post, and fix
                                            your
                                            formatting.
                        </a>
                                            <div className="author align-items-center mt-3 mb-1">
                                                <a href="author.html">Johnson smith</a> in <a href="#url">Design</a>
                                            </div>
                                            <ul className="blog-meta">
                                                <li className="meta-item blog-lesson">
                                                    <span className="meta-value"> April 13, 2020 </span>
                                                </li>
                                                <li className="meta-item blog-students">
                                                    <span className="meta-value"> 6min read</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grids5-info mt-5">
                                        <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/19.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                        <div className="blog-info align-self">
                                            <span className="category">Startups</span>
                                            <a href="blog-single.html" className="blog-desc1">The Beginner's Guide to Starting a
                                            Successful Blog in 2020
                        </a>
                                            <div className="author align-items-center mt-3 mb-1">
                                                <a href="author.html">Johnson smith</a> in <a href="#url">Design</a>
                                            </div>
                                            <ul className="blog-meta">
                                                <li className="meta-item blog-lesson">
                                                    <span className="meta-value"> April 13, 2020 </span>
                                                </li>
                                                <li className="meta-item blog-students">
                                                    <span className="meta-value"> 6min read</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-md-0 mt-5">
                                <div className="list-view list-view1">
                                    <div className="grids5-info">
                                        <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/18.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                        <div className="blog-info align-self">
                                            <span className="category">Culture</span>
                                            <a href="blog-single.html" className="blog-desc1">Home to Organize your content in
                                            an
                                            outline.
                        </a>
                                            <div className="author align-items-center mt-3 mb-1">
                                                <a href="author.html">Johnson smith</a> in <a href="#url">Design</a>
                                            </div>
                                            <ul className="blog-meta">
                                                <li className="meta-item blog-lesson">
                                                    <span className="meta-value"> April 13, 2020 </span>
                                                </li>
                                                <li className="meta-item blog-students">
                                                    <span className="meta-value"> 6min read</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grids5-info mt-5">
                                        <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/20.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                        <div className="blog-info align-self">
                                            <span className="category">Design</span>
                                            <a href="blog-single.html" className="blog-desc1">10 Fresh Ways to Get Better
                                            Results
                                            From
                                            Your Blog Posts
                        </a>
                                            <div className="author align-items-center mt-3 mb-1">
                                                <a href="author.html">Johnson smith</a> in <a href="#url">Design</a>
                                            </div>
                                            <ul className="blog-meta">
                                                <li className="meta-item blog-lesson">
                                                    <span className="meta-value"> April 13, 2020 </span>
                                                </li>
                                                <li className="meta-item blog-students">
                                                    <span className="meta-value"> 6min read</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* block */}
                        <div className="row mt-5 pt-md-5 img-block-mobile">
                            <div className="col-lg-9 most-recent">
                                <h3 className="section-title-left">Most Recent posts </h3>
                                <div className="list-view ">
                                    <div className="grids5-info">
                                        <div className="blog-info">
                                            <span className="category">Technology</span>
                                            <a href="blog-single.html" className="blog-desc mt-0">Curated Collection Post : 8
                                            Examples
                                            of Evolution in Action
                        </a>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur
                                            accusamus
                          voluptas. Mollitia, natus ipsam maiores placeat elit.</p>
                                            <div className="author align-items-center mt-3 mb-1">
                                                <a href="author.html">Johnson smith</a> in <a href="#url">Design</a>
                                            </div>
                                            <ul className="blog-meta">
                                                <li className="meta-item blog-lesson">
                                                    <span className="meta-value"> April 13, 2020 </span>
                                                </li>
                                                <li className="meta-item blog-students">
                                                    <span className="meta-value"> 6min read</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/16.jpg" alt="" className="img-fluid radius-image news-image mt-md-0 mt-3" /></a>
                                    </div>
                                    <div className="grids5-info mt-5">
                                        <div className="blog-info">
                                            <span className="category">Based on your reading history</span>
                                            <a href="blog-single.html" className="blog-desc mt-0">The Key Benefits of Studying
                                            Online
                                            [Infographic]
                        </a>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur
                                            accusamus
                          voluptas. Mollitia, natus ipsam maiores beatae elit.</p>
                                            <div className="author align-items-center mt-3 mb-1">
                                                <a href="author.html">Johnson smith</a> in <a href="#url">Design</a>
                                            </div>
                                            <ul className="blog-meta">
                                                <li className="meta-item blog-lesson">
                                                    <span className="meta-value"> April 13, 2020 </span>
                                                </li>
                                                <li className="meta-item blog-students">
                                                    <span className="meta-value"> 6min read</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/17.jpg" alt="" className="img-fluid radius-image news-image mt-md-0 mt-3" /></a>
                                    </div>
                                    <div className="grids5-info mt-5">
                                        <div className="blog-info">
                                            <span className="category">Sports and Fitness</span>
                                            <a href="blog-single.html" className="blog-desc mt-0">Ivy Goes Mobile With New App
                                            for
                                            Designers
                        </a>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur
                                            accusamus
                          voluptas. Mollitia, natus ipsam maiores beatae elit.</p>
                                            <div className="author align-items-center mt-3 mb-1">
                                                <a href="author.html">Johnson smith</a> in <a href="#url">Design</a>
                                            </div>
                                            <ul className="blog-meta">
                                                <li className="meta-item blog-lesson">
                                                    <span className="meta-value"> April 13, 2020 </span>
                                                </li>
                                                <li className="meta-item blog-students">
                                                    <span className="meta-value"> 6min read</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/20.jpg" alt="" className="img-fluid radius-image news-image mt-md-0 mt-3" /></a>
                                    </div>
                                    <div className="grids5-info mt-5">
                                        <div className="blog-info">
                                            <span className="category">Health and Food </span>
                                            <a href="blog-single.html" className="blog-desc mt-0">What I Wish I Had Known Before
                                            Writing
                                            My First Book
                        </a>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur
                                            accusamus
                          voluptas. Mollitia, natus ipsam maiores beatae elit.</p>
                                            <div className="author align-items-center mt-3 mb-1">
                                                <a href="author.html">Johnson smith</a> in <a href="#url">Design</a>
                                            </div>
                                            <ul className="blog-meta">
                                                <li className="meta-item blog-lesson">
                                                    <span className="meta-value"> April 13, 2020 </span>
                                                </li>
                                                <li className="meta-item blog-students">
                                                    <span className="meta-value"> 6min read</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/18.jpg" alt="" className="img-fluid radius-image news-image mt-md-0 mt-3" /></a>
                                    </div>
                                </div>
                                {/* pagination */}
                                <div className="pagination-wrapper mt-5">
                                    <ul className="page-pagination">
                                        <li><span aria-current="page" className="page-numbers current">1</span></li>
                                        <li><a className="page-numbers" href="#url">2</a></li>
                                        <li><a className="page-numbers" href="#url">3</a></li>
                                        <li><a className="page-numbers" href="#url">4</a></li>
                                        <li><a className="page-numbers" href="#url">....</a></li>
                                        <li><a className="page-numbers" href="#url">15</a></li>
                                        <li><a className="next" href="#url"><span className="fa fa-angle-right" /></a></li>
                                    </ul>
                                </div>
                                {/* //pagination */}
                            </div>
                            <div className="col-lg-3 trending mb-5 mt-lg-0 mt-5">
                                <div className="pos-sticky">
                                    <h3 className="section-title-left">Trending </h3>
                                    <div className="grids5-info">
                                        <h4>01.</h4>
                                        <div className="blog-info">
                                            <a href="blog-single.html" className="blog-desc1"> 10 Fresh Ways to Get Better
                                            Results
                                            From
                                            Your Blog Posts
                        </a>
                                            <div className="author align-items-center mt-2 mb-1">
                                                <a href="author.html">Johnson smith</a> in <a href="#url">Design</a>
                                            </div>
                                            <ul className="blog-meta">
                                                <li className="meta-item blog-lesson">
                                                    <span className="meta-value"> April 13, 2020 </span>
                                                </li>
                                                <li className="meta-item blog-students">
                                                    <span className="meta-value"> 6min read</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grids5-info">
                                        <h4>02.</h4>
                                        <div className="blog-info">
                                            <a href="blog-single.html" className="blog-desc1"> How to Optimize for on-page SEO.
                        </a>
                                            <div className="author align-items-center mt-2 mb-1">
                                                <a href="author.html">Johnson smith</a> in <a href="#url">Design</a>
                                            </div>
                                            <ul className="blog-meta">
                                                <li className="meta-item blog-lesson">
                                                    <span className="meta-value"> April 13, 2020 </span>
                                                </li>
                                                <li className="meta-item blog-students">
                                                    <span className="meta-value"> 6min read</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grids5-info">
                                        <h4>03.</h4>
                                        <div className="blog-info">
                                            <a href="blog-single.html" className="blog-desc1"> What to Post on the Instagram
                        </a>
                                            <div className="author align-items-center mt-2 mb-1">
                                                <a href="author.html">Johnson smith</a> in <a href="#url">Design</a>
                                            </div>
                                            <ul className="blog-meta">
                                                <li className="meta-item blog-lesson">
                                                    <span className="meta-value"> April 13, 2020 </span>
                                                </li>
                                                <li className="meta-item blog-students">
                                                    <span className="meta-value"> 6min read</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grids5-info">
                                        <h4>04.</h4>
                                        <div className="blog-info">
                                            <a href="blog-single.html" className="blog-desc1"> 18 Photo &amp; Video Ideas to Spark
                                            Inspiration
                        </a>
                                            <div className="author align-items-center mt-3 mb-1">
                                                <a href="author.html">Johnson smith</a> in <a href="#url">Design</a>
                                            </div>
                                            <ul className="blog-meta">
                                                <li className="meta-item blog-lesson">
                                                    <span className="meta-value"> April 13, 2020 </span>
                                                </li>
                                                <li className="meta-item blog-students">
                                                    <span className="meta-value"> 6min read</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //block*/}
                        {/* ad block */}
                        <div className="ad-block text-center mt-5">
                            <a href="#url"><img src="/assets/images/ad.gif" className="img-fluid" alt="ad image" /></a>
                        </div>
                        {/* //ad block */}
                    </div>
                </div>
                {/* //block*/}
            </div>
        </>
    )
}
