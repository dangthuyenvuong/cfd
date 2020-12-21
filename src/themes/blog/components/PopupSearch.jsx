import reactDOM from 'react-dom'
import React, { useImperativeHandle, useState } from 'react'

function PopupSearch(prop, refProp) {
    let [isOpen, setIsOpen] = useState(false)

    useImperativeHandle(refProp, () => {
        return {
            open,
            close
        }
    })

    function open(){
        setIsOpen(true)
    }

    function close(e){
        e.preventDefault();
        setIsOpen(false)
    }

    return <div  className="popup-search">
        <div  id="search" className="pop-overlay" 
        style={isOpen ? {visibility: 'visible', opacity: 1} : {}}
        >
            <div className="popup">
                <h3 className="hny-title two">Search here</h3>
                <form action="search-results.html" method="Get" className="search-box">
                    <input type="search" placeholder="Search for blog posts" name="search" required="required" autoFocus />
                    <button type="submit" className="btn">Search</button>
                </form>
                <a className="close" href="#close" onClick={close}>×</a>
            </div>
        </div>
    </div>
}

export default React.forwardRef(PopupSearch)