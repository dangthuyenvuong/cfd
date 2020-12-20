import React from 'react'
import { Link } from 'react-router-dom'
export default function Breadcrumb({ links = [] }) {
    function renderItem() {

        return links.map((e, i) => {
            if (e.link) {
                if (i === 0) {
                    return <Link key={i} to={e.link}>{e.title}</Link>
                } else if (i < links.length - 1) {
                    return <Link key={i} to={e.link}>/ {e.title} /</Link>
                } else {
                    return <span key={i} className="breadcrumb_last" aria-current="page">{e.title}</span>
                }
            } else {
                if (i === 0) {
                    return <span key={i}>{e.title}</span>
                } else if (i < links.length - 1) {
                    return <span key={i}>/ {e.title} /</span>
                } else {
                    return <span key={i} className="breadcrumb_last" aria-current="page">{e.title}</span>
                }
            }
        })
    }

    return (
        <nav id="breadcrumbs" className="breadcrumbs">
            <div className="container page-wrapper">
                {renderItem()}
            </div>
        </nav>
    )
}
