import Api from 'core/Api';
import { GraphQLClient } from 'core/Api';
import React, { useEffect, useState } from 'react'
import Paginate from 'themes/blog/components/Paginate';
export default function Home() {
    let [data, setData] = useState(null);

    useEffect(() => {

        GraphQLClient.query(
            `{
                blog_posts {
                  data {
                    title
                    description
                  }
                  paginate
                }
              }
              `
        )
        .then(res => {
            setData(res?.data?.blog_posts)
        })
        
    }, [])

    if(!data) return '...Loading'

    return (
        <div className="w3l-homeblock1 py-5">
            <div className="container pt-lg-5 pt-md-4">
                {/* block */}
                <div className="row">
                    <div className="col-lg-9">
                        <h3 className="section-title-left">Featured posts </h3>
                        <div className="row">
                            <div className="col-lg-5 col-md-6 item">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="blog-single.html">
                                            <img className="card-img-bottom d-block radius-image" src="/assets/images/b1.jpg" alt="Card image cap" />
                                        </a>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="blog-single.html" className="blog-desc">How to Create Detailed Buyer
                                        Personas for Your Business
                        </a>
                                        <p>Lorem ipsum dolor sit amet consectetur ipsum adipisicing elit. Qui eligendi
                          vitae sit.</p>
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
                                        <a href="blog.html" className="btn btn-style btn-outline mt-4">All featured
                          posts</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 mt-md-0 mt-5">
                                <div className="list-view list-view1">
                                    <div className="grids5-info">
                                        <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/1.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                        <div className="blog-info align-self">
                                            <a href="blog-single.html" className="blog-desc1">How to Create your blog domain
                                            to make it live
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
                                        <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/2.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                        <div className="blog-info align-self">
                                            <a href="blog-single.html" className="blog-desc1">Register a Domain or Subdomain
                                            With a Website Host
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
                                        <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/3.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                        <div className="blog-info align-self">
                                            <a href="blog-single.html" className="blog-desc1">Home to Customize your blog's
                                            theme with 3 simple steps
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
                    </div>
                    <div className="col-lg-3 trending mt-lg-0 mt-5">
                        <h3 className="section-title-left">Trending </h3>
                        <div className="grids5-info">
                            <h4>01.</h4>
                            <div className="blog-info">
                                <a href="blog-single.html" className="blog-desc1"> How to Identify first blog post's topic
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
                                <a href="blog-single.html" className="blog-desc1"> 5 ways to fix a leaky faucet
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
                                <a href="blog-single.html" className="blog-desc1"> Changing the topic scope
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
                                <a href="blog-single.html" className="blog-desc1"> Write an intro (make it captivating).
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
                {/* //block */}
                {/* block */}
                <div className="item mt-5 pt-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <a href="blog-single.html">
                                <img className="card-img-bottom d-block radius-image" src="/assets/images/p3.jpg" alt="Card image cap" />
                            </a>
                        </div>
                        <div className="col-lg-6 blog-details align-self mt-lg-0 mt-sm-5 mt-4">
                            <a href="blog-single.html" className="blog-desc-big">Your Blog Posts are Boring: 9 Tips for
                            Making your Writing more Interesting
                  </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos blanditiis, odit non
                            asperiores
                            possimus voluptas sit nihil nam id explicabo saepe sapiente excepturi similique, dicta
                            officia odio natus nemo. Ratione ipsa distinctio explicabo esse quod autem
                    veritatis, in fugit odio.</p>
                            <div className="author align-items-center mt-4 mb-1">
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
                {/* //block*/}
                {/* block */}
                <div className="item mt-5 pt-lg-5">
                    <h3 className="section-title-left">Today Highlights </h3>
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="list-view list-view1">
                                <div className="grids5-info">
                                    <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/4.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                    <div className="blog-info align-self">
                                        <a href="blog-single.html" className="blog-desc1">Edit/proofread your post, and fix
                                        your formatting.
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
                                    <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/5.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                    <div className="blog-info align-self">
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
                        <div className="col-lg-5 col-md-6 mt-md-0 mt-5">
                            <div className="list-view list-view1">
                                <div className="grids5-info">
                                    <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/6.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                    <div className="blog-info align-self">
                                        <a href="blog-single.html" className="blog-desc1">Home to Organize your content in
                                        an outline.
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
                                    <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/7.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                    <div className="blog-info align-self">
                                        <a href="blog-single.html" className="blog-desc1">10 Fresh Ways to Get Better
                                        Results From Your Blog Posts
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
                        <div className="col-lg-2 col-sm-6 mt-lg-0 mt-5">
                            <div className="ad-img">
                                <a href="#ad-img"><img src="/assets/images/ad1.jpg" className="img-fluid" alt="ad image" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* //block*/}
                {/* block */}
                <div className="row mt-5 pt-5">
                    <div className="col-lg-9 most-recent">
                        <h3 className="section-title-left">Most Recent posts </h3>
                        <div className="list-view ">
                            <div className="grids5-info img-block-mobile">
                                <div className="blog-info align-self">
                                    <span className="category">Technology</span>
                                    <a href="blog-single.html" className="blog-desc mt-0">Curated Collection Post : 8
                                    Examples of Evolution in Action
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
                                <a href="blog-single.html" className="d-block zoom mt-md-0 mt-3"><img src="/assets/images/8.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                            </div>
                            <div className="grids5-info img-block-mobile mt-5">
                                <div className="blog-info align-self">
                                    <span className="category">Based on your reading history</span>
                                    <a href="blog-single.html" className="blog-desc mt-0">The Key Benefits of Studying
                                    Online [Infographic]
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
                                <a href="blog-single.html" className="d-block zoom mt-md-0 mt-3"><img src="/assets/images/9.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                            </div>
                            <div className="grids5-info img-block-mobile mt-5">
                                <div className="blog-info align-self">
                                    <span className="category">Culture</span>
                                    <a href="blog-single.html" className="blog-desc mt-0">How to Write a Blog Post: A
                                    Step-by-Step Guide
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
                                <a href="blog-single.html" className="d-block zoom mt-md-0 mt-3"><img src="/assets/images/16.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                            </div>
                            <div className="row most-recent-inner my-5 py-lg-4">
                                <div className="col-md-6">
                                    <div className="list-view list-view1">
                                        <div className="grids5-info">
                                            <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/10.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                            <div className="blog-info align-self">
                                                <a href="blog-single.html" className="blog-desc1">Home to write High-Level
                                                blog posts
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
                                            <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/11.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                            <div className="blog-info align-self">
                                                <a href="blog-single.html" className="blog-desc1">9 Reasons why your Blog
                                                posts are Hard to Read
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
                                            <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/12.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                            <div className="blog-info align-self">
                                                <a href="blog-single.html" className="blog-desc1">How to run a Blog lead
                                                generation Analysis
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
                                            <a href="blog-single.html" className="d-block zoom"><img src="/assets/images/13.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                            <div className="blog-info align-self">
                                                <a href="blog-single.html" className="blog-desc1">The Anatomy of a perfect
                                                Blog post
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
                            <div className="grids5-info img-block-mobile mt-5">
                                <div className="blog-info align-self">
                                    <span className="category">Sports and Fitness</span>
                                    <a href="blog-single.html" className="blog-desc mt-0">Ivy Goes Mobile With New App for
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
                                <a href="blog-single.html" className="d-block zoom mt-md-0 mt-3"><img src="/assets/images/14.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                            </div>
                            <div className="grids5-info img-block-mobile mt-5">
                                <div className="blog-info align-self">
                                    <span className="category">Health and Food </span>
                                    <a href="blog-single.html" className="blog-desc mt-0">What I Wish I Had Known Before
                                    Writing My First Book
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
                                <a href="blog-single.html" className="d-block zoom mt-md-0 mt-3"><img src="/assets/images/15.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                            </div>
                        </div>
                        {/* pagination */}
                        <Paginate paginate={data.paginate}/>
                        {/* //pagination */}
                    </div>
                    <div className="col-lg-3 trending mt-lg-0 mt-5 mb-lg-5">
                        <div className="pos-sticky">
                            <h3 className="section-title-left">Trending </h3>
                            <div className="grids5-info">
                                <h4>01.</h4>
                                <div className="blog-info">
                                    <a href="blog-single.html" className="blog-desc1"> 10 Fresh Ways to Get Better Results
                                    From Your Blog Posts
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
    )
}
