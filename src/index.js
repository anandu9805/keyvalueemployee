import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import App from './App';
import Login from './components/login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import EmployeeList from './components/employeeList';
import { store } from './app/store'
import { Provider } from 'react-redux'
import CreateEmployee from './components/createEmployee';
import EmployeeDetails from './components/employeeDetails';
import EmployeeUpdate from './components/employeeUpdate';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   
  
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Login/>} ></Route>
      <Route path="/list" element={<EmployeeList/>} ></Route>
      <Route path="/create" element={<CreateEmployee/>} ></Route>
      <Route path="/detail/:id" element={<EmployeeDetails/>} ></Route>
      <Route path="/update/:id" element={<EmployeeUpdate/>} ></Route>
     
    </Routes>
   
    
    </BrowserRouter>
   
  </React.StrictMode>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
