
import MyCourse from "./components/MyCourse"
import MyProject from "./components/MyProject"
import History from "./components/History"
import MyProfile from "./components/MyProfile"

import {
    Switch,
    Route,
    useRouteMatch,
    NavLink,
    Redirect
} from 'react-router-dom'
import { useAuth } from "core/hooks/useAuth"
import MyCoin from "./components/MyCoin"
// import { useAuth } from "../../core/hooks/useAuth"

export default function Profile() {

    let { url } = useRouteMatch();
    let { user } = useAuth();
    // return <Redirect
    //     to={{
    //         pathname: "/",
    //     }}
    // />

    return (
        <div className="profile">

            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span className="text">H</span> */}
                        <img src={user?.avatar?.thumbnail?.['thumbnail-2']} alt="" />
                        <div className="camera"></div>
                    </div>
                    <div className="name">{ user.title }</div>
                    <p className="des">Thành viên của team CFD</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink exact to={`${url}`}>Thông tin tài khoản</NavLink>
                            <NavLink to={`${url}/khoa-hoc`}>Khóa học của bạn</NavLink>
                            <NavLink to={`${url}/project`}>Dự án đã làm</NavLink>
                            <NavLink to={`${url}/history`}>Lịch sử thanh toán</NavLink>
                            <NavLink to={`${url}/coin`}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Route exact path={`${url}`}>
                                <MyProfile />
                            </Route>
                            <Route path={`${url}/khoa-hoc`}>
                                <MyCourse />
                            </Route>
                            <Route path={`${url}/project`}>
                                <MyProject />
                            </Route>
                            <Route path={`${url}/history`}>
                                <History />
                            </Route>
                            <Route path={`${url}/coin`}>
                                <MyCoin />
                            </Route>



                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}