import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";

import Home from "./home/home";
import Example1 from "./example-1/example-1";

function App() {
    let routeConfig =[
        {path:'/home', title:'Home',exact:true, element: <Home />},
        {path:'/example-1', title:'Example 1', exact:false, element: <Example1 />}
    ];

  return (
      <Router>
          <div className="App">

              <div className="header">
                  <h1>React Example</h1>
              </div>

              <div className="row">
                  <div className="col-2"> </div>

                  <div className="col-2 col-s-3 menu">
                      <ul>
                          {
                              routeConfig.map((item,index)=>{
                                  return (<li key={index}> <Link to={item.path}>{item.title}</Link> </li>)
                              })
                          }
                      </ul>
                  </div>

                  <div className="col-5 col-s-9">
                      <Suspense fallback={<div>Loading...</div>}>
                          <section>
                              <Routes>
                                  {
                                      routeConfig.map((item,index)=>{
                                          return (<Route key={index} path={item.path} exact={item.exact} element={ item.element } />)
                                      })
                                  }
                              </Routes>
                          </section>
                      </Suspense>
                  </div>

                  <div className="col-2 col-s-12"> </div>
              </div>

              <div className="footer">
                  <p>Resize the browser window to see how the content respond to the resizing.</p>
              </div>
          </div>
      </Router>
  );
}

export default App;