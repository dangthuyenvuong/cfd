import reactDOM from 'react-dom'

export default function PopupSearch() {
    return reactDOM.createPortal(
        <div className="popup-search">
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
        </div>,
        document.getElementById('root2')
    )
}
