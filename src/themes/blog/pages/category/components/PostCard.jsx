import React, { useEffect, useRef } from 'react'



export default function PostCard({ title, description, cover, author, categories, time_read, published_at, _id }) {
    let imgRef = useRef();
    
    useEffect(() => {
        imgRef.current.src = imgRef.current.getAttribute('data-src')
    }, [])


    let d = new Date(published_at);
    d = `${d.getDate()} Tháng ${d.getMonth() + 1}, ${d.getFullYear()}`
    
    return (
        <div className="card">
            <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                    <img ref={imgRef} className="card-img-bottom d-block radius-image" data-src={cover + '?r=' + _id} alt="Card image cap" />
                </a>
            </div>
            <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">{title}</a>
                <p>{description}</p>
                <div className="author align-items-center mt-3 mb-1">
                    <a href="#author">{author.title}</a> in <a href="#url">{categories?.[0].title}</a>
                </div>
                <ul className="blog-meta">
                    <li className="meta-item blog-lesson">
                        <span className="meta-value"> {d} </span>
                    </li>
                    <li className="meta-item blog-students">
                        <span className="meta-value"> {time_read}min read</span>
                    </li>
                </ul>
            </div>
        </div>

    )
}
