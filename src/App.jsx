import React from 'react'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent'

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/* http://locahost:3000 */}

          <Route path='/' element={<ListEmployeeComponent/>}/>

          {/*http://locahost:3000/employees*/}

          <Route path='/employees' element={<ListEmployeeComponent/>}/>

          {/*http://locahost:3000/add-employee*/}

          <Route path='/add-employee' element={<EmployeeComponent/>}/>

          {/*http://locahost:3000/edit-employee/{id}*/}

          <Route path='/edit-employee/:id' element={<EmployeeComponent/>}/>

        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
