import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/login';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter , Routes} from 'react-router-dom'
import {CookiesProvider} from 'react-cookie'


function Routing(){
  return(
    <CookiesProvider>
    <BrowserRouter>
    <Routes>
        <Route path="/articles" element={<App/>} />
        <Route path="/" element={<Login/>} />
    </Routes>
  </BrowserRouter>
  </CookiesProvider>
  )
}
          
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
