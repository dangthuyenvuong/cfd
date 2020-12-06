import React from 'react'
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






function App() {

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <main id="main">
            <Switch>
              <PrivateRoute path="/hoc-vien" component={Profile} />
              <PrivateRoute path="/dang-ky/khoa-hoc-:id" component={Register} />
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
      </Router>
    </AuthProvider>



  );
}

export default App;
