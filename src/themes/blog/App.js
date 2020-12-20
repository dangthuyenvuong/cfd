import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home";
import Page404 from "./pages/page404";
import Category from "./pages/category";
import Author from "./pages/author";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/category/:page?" component={Category}/>
        <Route path="/author" component={Author}/>
        <Route path="/" component={Page404}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
