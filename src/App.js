import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import Form from './components/Form';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Shorts from './components/Shorts';
//import Filters from './components/Filters';
import { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Users from './components/Users';
import Products from './components/Products';
import Form3 from './components/Form3';

export const store=createContext();
 


function App() {
  let data=[{
    name:"krishna",
    roll:1234,
    branch:"cse",
  },
{
  name:"Mohan",
  roll:2,
  branch:"cse",
}];
const[data1,setData]=useState(data)
  return (
    <>
    <BrowserRouter>
    <store.Provider value={[data1,setData]}>

      <div className='container-fluid '>
        <div className='row'>
          <Sidebar />
          <div className='col-md-10'>
            <Searchbar name={data}/>
            <br/>
            <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Shorts' element={<Shorts/>}/>
        <Route path='/Users' element={<Form3/>}/>
        <Route path='/Products' element={<Products/>}/>
      </Routes>
      {/* <Filters/> */}
      {/* <Form/> */}
          </div>
        </div>
      </div>
      </store.Provider>
      </BrowserRouter>
      
    </>
  );
}

export default App;
