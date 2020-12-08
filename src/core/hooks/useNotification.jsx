import reactDOM from 'react-dom'

export default function Notification({ title, content, button, children }) {
    return reactDOM.createPortal((
        <div className="popup-notification">

            <div className="contain">
                {
                    children.length > 0 ? children :
                        <>
                            <div className="main-title">{title}</div>
                            <p dangerouslySetInnerHTML={{ __html: content }}></p>
                        </>
                }

            </div>
            {button}
        </div>
    ), document.getElementById('root2'))
}
