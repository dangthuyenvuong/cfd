
import { useQuery } from '@apollo/client';
import { GraphQLClient } from 'core/Api';
import React, { useEffect, useState } from 'react'
import Breadcrumb from 'themes/blog/components/Breadcrumb'
import Paginate from 'themes/blog/components/Paginate';
import { useParams } from 'react-router-dom'
import { link } from 'fs';
import PostCard from './components/PostCard';

export default function Category() {
    let [data, setData] = useState(null);

    let params = useParams();

    
    useEffect(() => {

        GraphQLClient.query(
            `{
                blog_posts (page: ${params.page || 1}){
                    data {
                        _id
                        title
                        description
                        cover
                        author{
                          title
                        }
                        categories{
                          title
                        }
                        time_read
                        published_at
                      }
                      paginate
                }
              }
              `
        )
            .then(res => {
                setData(res?.data?.blog_posts)
            })

    }, [params])

    if (!data) return '...Loading'
    return (
        <>
            <Breadcrumb
                links={[
                    { title: 'Home', link: '/' },
                    { title: 'Category', link: '/category' },
                    { title: 'Lifestyle', link: '/category/lifestyle' },

                ]}
            />
            <div className="w3l-searchblock w3l-homeblock1 py-5">
                <div className="container py-lg-4 py-md-3">
                    {/* block */}
                    <div className="row">
                        <div className="col-lg-8 most-recent">
                            <h3 className="section-title-left">Lifestyle</h3>
                            <div className="row">
                                {
                                    data.data.map((e , i) => <div key={e._id} className={`col-lg-6 col-md-6 item ${i > 1 ? 'mt-5': ''}`}>
                                        <PostCard {...e}/>
                                    </div>)
                                }
                            </div>
                            {/* pagination */}
                            <Paginate
                                paginate={data.paginate}
                                renderLink={(e) => {
                                    return '/category/' + e
                                }}
                            />
                            {/* //pagination */}
                        </div>
                        <div className="col-lg-4 trending mt-lg-0 mt-5 mb-lg-5">
                            <div className="pos-sticky">
                                <h3 className="section-title-left">Trending </h3>
                                <div className="grids5-info">
                                    <h4>01.</h4>
                                    <div className="blog-info">
                                        <a href="#blog-single" className="blog-desc1"> Few Ways to Readership and improving your
                                        blog
                      </a>
                                        <div className="author align-items-center mt-2 mb-1">
                                            <a href="#author">Johnson smith</a> in <a href="#url">Design</a>
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
                                        <a href="#blog-single" className="blog-desc1"> One major difference between a normal blog
                                        and a good blog is the detailing.
                      </a>
                                        <div className="author align-items-center mt-2 mb-1">
                                            <a href="#author">Johnson smith</a> in <a href="#url">Design</a>
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
                                        <a href="#blog-single" className="blog-desc1"> When should you start putting ads on your
                                        blog?
                      </a>
                                        <div className="author align-items-center mt-2 mb-1">
                                            <a href="#author">Johnson smith</a> in <a href="#url">Design</a>
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
                                        <a href="#blog-single" className="blog-desc1"> What should be the name of your blog domain?
                      </a>
                                        <div className="author align-items-center mt-3 mb-1">
                                            <a href="#author">Johnson smith</a> in <a href="#url">Design</a>
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
        </>
    )
}
