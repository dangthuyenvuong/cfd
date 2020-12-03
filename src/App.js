import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Home from './pages/home'
import Header from './components/Header';
import Footer from './components/Footer';
import PopupLogin from './components/PopupLogin';
import Profile from './pages/profile';
import Register from './pages/register';
import Page404 from './pages/page404';
import Demo from './pages/demo';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          
          <Route path="/hoc-vien">
            <Profile />
          </Route>
          <Route path="/dang-ky/khoa-hoc-:id">
            <Register />
          </Route>
          <Route exact path="/demo">
            <Demo />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
        <Footer />
        <PopupLogin />
      </div>
    </Router>
  );
}

export default App;
