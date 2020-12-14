import 'assets/css/style-liberty.css'

export default function App() {
    return (
        <div>
            <div id="w3lDemoBar" className="w3l-demo-bar">
                <a href="https://w3layouts.com/?p=41460" ga-on="click" ga-event-category="Design blog Template" ga-event-action="view" ga-event-label="Design blog - view">
                    <span className="w3l-icon -back">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path opacity=".87" fill="none" d="M0 0h24v24H0V0z" />
                            <path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z" />
                        </svg>
                    </span>
                    <span className="w3l-text">Back</span>
                </a>
                <a href="https://w3layouts.com/" className="w3l-logo">W3layouts</a>
                <div className="w3l-template-options"><a href="https://edit.w3layouts.com/CreateEditableTemplate/BuildMyEditor/41460" className="w3l-edit" ga-on="click" ga-event-category="Design blog Template" ga-event-action="edit" ga-event-label="Design blog - edit">
                    <span className="w3l-icon -edit">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                            <path d="M0 0h24v24H0z" fill="none" /></svg>
                    </span>
                    <span className="w3l-text">Edit</span>
                </a>
                    <a href="https://w3layouts.com/?p=41460" className="w3l-download" ga-on="click" ga-event-category="Design blog Template" ga-event-action="download-options" ga-event-label="Design blog - Download options" title="Free download requires Backlink">
                        <span className="w3l-icon -download">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />
                                <path fill="none" d="M0 0h24v24H0z" /></svg>
                        </span>
                        <span className="w3l-text">Download</span>
                    </a>
                    <a href="https://w3layouts.com/?p=41460" className="w3l-buy" ga-on="click" ga-event-category="Design blog Template" ga-event-action="Buy Now" ga-event-label="Design blog - Buy" title="Remove Backlink from template">
                        <span className="w3l-icon -buy">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                                <path d="M0 0h24v24H0z" fill="none" /></svg>
                        </span>
                        <span className="w3l-text">Buy Now</span>
                    </a>
                </div>
            </div>
            {/* header */}
            <header className="w3l-header">
                {/*/nav*/}
                <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <span className="fa fa-pencil-square-o" /> Design Blog</a>
                        {/* if logo is image enable this   
						<a class="navbar-brand" href="#index.html">
							<img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
						</a> */}
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span class="navbar-toggler-icon"></span> */}
                            <span className="fa icon-expand fa-bars" />
                            <span className="fa icon-close fa-times" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="index.html">Home</a>
                                </li>
                                <li className="nav-item dropdown @@category__active">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Categories <span className="fa fa-angle-down" />
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item @@ls__active" href="lifestyle.html">Lifestyle posts</a>
                                        <a className="dropdown-item @@cp__active" href="culture.html">Culture posts</a>
                                        <a className="dropdown-item @@su__active" href="startup.html">Startup posts</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown @@blog__active">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Blog <span className="fa fa-angle-down" />
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                        <a className="dropdown-item @@fp__active" href="blog.html">Featured posts</a>
                                        <a className="dropdown-item @@sp__active" href="blog-single.html">Standard single
                        post</a>
                                        <a className="dropdown-item @@vp__active" href="single.html">Video single post</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown @@author__active">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        More <span className="fa fa-angle-down" />
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item @@ap__active" href="author.html">Author page</a>
                                        <a className="dropdown-item @@sr__active" href="search-results.html">Search results</a>
                                        <a className="dropdown-item @@404__active" href="404.html">404 page</a>
                                    </div>
                                </li>
                                <li className="nav-item @@contact__active">
                                    <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                            {/*/search-right*/}
                            <div className="search-right mt-lg-0 mt-2">
                                <a href="#search" title="search"><span className="fa fa-search" aria-hidden="true" /></a>
                                {/* search popup */}
                                <div id="search" className="pop-overlay">
                                    <div className="popup">
                                        <h3 className="hny-title two">Search here</h3>
                                        <form action="search-results.html" method="Get" className="search-box">
                                            <input type="search" placeholder="Search for blog posts" name="search" required autofocus />
                                            <button type="submit" className="btn">Search</button>
                                        </form>
                                        <a className="close" href="#close">×</a>
                                    </div>
                                </div>
                                {/* /search popup */}
                            </div>
                            {/*//search-right*/}
                            <div className="header-author d-flex ml-lg-4 pl-2 mt-lg-0 mt-3">
                                <a className="img-circle img-circle-sm" href="author.html">
                                    <img src="assets/images/author.jpg" className="img-fluid" alt="..." />
                                </a>
                                <div className="align-self ml-3">
                                    <a href="author.html">
                                        <h5>Alexander</h5>
                                    </a>
                                    <span>Blog Writer</span>
                                </div>
                            </div>
                        </div>
                        {/* toggle switch for light and dark theme */}
                        <div className="mobile-position">
                            <nav className="navigation">
                                <div className="theme-switch-wrapper">
                                    <label className="theme-switch" htmlFor="checkbox">
                                        <input type="checkbox" id="checkbox" />
                                        <div className="mode-container">
                                            <i className="gg-sun" />
                                            <i className="gg-moon" />
                                        </div>
                                    </label>
                                </div>
                            </nav>
                        </div>
                        {/* //toggle switch for light and dark theme */}
                    </div>
                </nav>
                {/*//nav*/}
            </header>
            {/* //header */}
            <div className="display-ad" style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>
                {/*-728x90-*/}
            </div>
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
                                                <img className="card-img-bottom d-block radius-image" src="assets/images/b1.jpg" alt="Card image cap" />
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
                                            <a href="blog-single.html" className="d-block zoom"><img src="assets/images/1.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                                            <a href="blog-single.html" className="d-block zoom"><img src="assets/images/2.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                                            <a href="blog-single.html" className="d-block zoom"><img src="assets/images/3.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                                    <img className="card-img-bottom d-block radius-image" src="assets/images/p3.jpg" alt="Card image cap" />
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
                                        <a href="blog-single.html" className="d-block zoom"><img src="assets/images/4.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                                        <a href="blog-single.html" className="d-block zoom"><img src="assets/images/5.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                                        <a href="blog-single.html" className="d-block zoom"><img src="assets/images/6.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                                        <a href="blog-single.html" className="d-block zoom"><img src="assets/images/7.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                                    <a href="#ad-img"><img src="assets/images/ad1.jpg" className="img-fluid" alt="ad image" /></a>
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
                                    <a href="blog-single.html" className="d-block zoom mt-md-0 mt-3"><img src="assets/images/8.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                                    <a href="blog-single.html" className="d-block zoom mt-md-0 mt-3"><img src="assets/images/9.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                                    <a href="blog-single.html" className="d-block zoom mt-md-0 mt-3"><img src="assets/images/16.jpg" alt="" className="img-fluid radius-image news-image" /></a>
                                </div>
                                <div className="row most-recent-inner my-5 py-lg-4">
                                    <div className="col-md-6">
                                        <div className="list-view list-view1">
                                            <div className="grids5-info">
                                                <a href="blog-single.html" className="d-block zoom"><img src="assets/images/10.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                                                <a href="blog-single.html" className="d-block zoom"><img src="assets/images/11.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                                                <a href="blog-single.html" className="d-block zoom"><img src="assets/images/12.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                                                <a href="blog-single.html" className="d-block zoom"><img src="assets/images/13.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                                    <a href="blog-single.html" className="d-block zoom mt-md-0 mt-3"><img src="assets/images/14.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                                    <a href="blog-single.html" className="d-block zoom mt-md-0 mt-3"><img src="assets/images/15.jpg" alt="" className="img-fluid radius-image news-image" /></a>
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
                        <a href="#url"><img src="assets/images/ad.gif" className="img-fluid" alt="ad image" /></a>
                    </div>
                    {/* //ad block */}
                </div>
            </div>
            <div className="display-ad" style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>
                {/*-728x90-*/}
            </div>
            {/* footer */}
            <footer className="w3l-footer-16">
                <div className="footer-content py-lg-5 py-4 text-center">
                    <div className="container">
                        <div className="copy-right">
                            <h6>© 2020 Design Blog . Made with <span className="fa fa-heart" aria-hidden="true" />,
                  Designed by <a href="https://w3layouts.com">W3layouts</a> </h6>
                        </div>
                        <ul className="author-icons mt-4">
                            <li><a className="facebook" href="#url"><span className="fa fa-facebook" aria-hidden="true" /></a>
                            </li>
                            <li><a className="twitter" href="#url"><span className="fa fa-twitter" aria-hidden="true" /></a>
                            </li>
                            <li><a className="google" href="#url"><span className="fa fa-google-plus" aria-hidden="true" /></a>
                            </li>
                            <li><a className="linkedin" href="#url"><span className="fa fa-linkedin" aria-hidden="true" /></a>
                            </li>
                            <li><a className="github" href="#url"><span className="fa fa-github" aria-hidden="true" /></a></li>
                            <li><a className="dribbble" href="#url"><span className="fa fa-dribbble" aria-hidden="true" /></a>
                            </li>
                        </ul>
                        <button onclick="topFunction()" id="movetop" title="Go to top">
                            <span className="fa fa-angle-up" />
                        </button>
                    </div>
                </div>
                {/* move top */}
                {/* //move top */}
            </footer>
            {/* //footer */}
        </div>
    )
}