import React from 'react'

export default function Header() {
    return (
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
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown @@category__active">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories <span className="fa fa-angle-down" />
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item @@ls__active" href="/category">Lifestyle posts</a>
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
                                    <a className="dropdown-item @@ap__active" href="/author">Author page</a>
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
                                        <input type="search" placeholder="Search for blog posts" name="search" required="required" autoFocus />
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
                                <img src="/assets/images/author.jpg" className="img-fluid" alt="..." />
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
    )
}
