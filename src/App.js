import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './pages/home'
import Header from './components/Header';
import Footer from './components/Footer';
import PopupLogin from './components/PopupLogin';
import Profile from './pages/profile';
import Register from './pages/register';
import Page404 from './pages/page404';
import Demo from './pages/demo';

import AuthProvider, { useAuth } from './hooks/useAuth';
import Login from './pages/login';
import PrivateRoute from './components/PrivateRoute';






function App() {


  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>

            <Route path="/hoc-vien">
              <Profile />
            </Route>
            <PrivateRoute path="/dang-ky/khoa-hoc-:id" component={Register}/>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route path="/dang-nhap" component={Login}/>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
          <Footer />
          
        </div>
      </Router>
    </AuthProvider>



  );
}

export default App;
