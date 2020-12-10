import React, { useEffect } from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Home from './pages/home'
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './pages/profile';
import Register from './pages/register';
import Page404 from './pages/page404';
import Demo from './pages/demo';

import AuthProvider from './core/hooks/useAuth';
import Login from './pages/login';
import PrivateRoute from './core/components/PrivateRoute';
import CourseDetail from './pages/courseDetail';





function App() {
  useEffect(() => {





    // fetch('http://localhost:8888/graphql', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application'
    //   },
    //   body: JSON.stringify({
    //     query: `query{
    //               users(email:"dangthuyenvuong@gmail.com"){
    //                 data{
    //                   _id
    //                   name
    //                   email
    //                   avatar
    //                 }
    //                 paginate
    //               }
    //             }`,
    //     variables: {}
    //   })
    // }).then(result => console.log(result));



  }, [])

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Header />
          <main id="main">
            <Switch>
              {/* <PrivateRoute path="/hoc-vien" component={Profile} />
              <PrivateRoute path="/dang-ky/khoa-hoc-:id" component={Register} /> */}

              <PrivateRoute path="/hoc-vien" component={Profile} />
              <PrivateRoute path="/dang-ky/:slug-p:id" component={Register} />

              <Route path="/chi-tiet-khoa-hoc/:slug-p:id" component={CourseDetail} />
              <Route exact path="/demo">
                <Demo />
              </Route>
              <Route path="/dang-nhap" component={Login} />
              <Route exact path="/">
                <Home />
              </Route>
              <Route>
                <Page404 />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>



  );
}





export default App;
