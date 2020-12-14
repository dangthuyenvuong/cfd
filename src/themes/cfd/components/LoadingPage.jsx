import React from 'react'
import reactDOM from 'react-dom'

export default function LoadingPage() {
    

    return reactDOM.createPortal((
        <div className="loadingPage">
            Loading
        </div>
    ), document.getElementById('root2'))
}
