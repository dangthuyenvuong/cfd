import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home";
import Page404 from "./pages/page404";
import Category from "./pages/category";
import Author from "./pages/author";
import './App.css'
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

// let store = {}
// function useFunction(callback, dependence = []){
//   if(store['name-function']){
//     return store['name-function'];
//   }
//   store['name-function'] = callback;
//   return callback
// }

function App() {

  let [count, setCount] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(++count)
  //     console.log(count)
  //   }, 1000)

  // }, []);

  // let abc = useCallback(
  //   () => {
  //     console.log('abc')
  //   },[])

  function abc(){

  }
  
  return (
    <BrowserRouter>
      <Header fun={abc}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category/:page?" component={Category} />
        <Route path="/author" component={Author} />
        <Route path="/" component={Page404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
