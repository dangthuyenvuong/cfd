
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
import { useAuth } from "../../core/hooks/useAuth"
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
        <main>
            <section className="section top-info">
                <div className="information">
                    <div className="avatar">
                        <img src={user.avatar} alt="" />
                    </div>
                    <div className="name">{user.name}</div>
                    <p className="member">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab__title">
                            <NavLink exact to={`${url}`}>Thông tin tài khoản</NavLink>
                            <NavLink to={`${url}/khoa-hoc`}>Khoá học của tôi</NavLink>
                            <NavLink to={`${url}/project`}>Dự án đã làm</NavLink>
                            <NavLink to={`${url}/payment-history`}>Lịch sử thanh toán</NavLink>
                        </div>
                        <div className="tab__content">
                            <Switch>

                                <Route path={`${url}/khoa-hoc`}>
                                    <MyCourse />
                                </Route>
                                <Route path={`${url}/project`}>
                                    <MyProject />
                                </Route>
                                <Route path={`${url}/payment-history`}>
                                    <History />
                                </Route>
                                <Route exact path={`${url}`}>
                                    <MyProfile />
                                </Route>


                            </Switch>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}