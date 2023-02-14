import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'
import  Navbarsection  from './tableview/Navigation'
import Tableview from './tableview/Tableview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import {NewApp} from './newapp';
import Muicomp from './mui/Muicomp';
import {About} from './tableview/nav/About';
import {Contact} from './tableview/nav/Contact'
import {Homes} from './tableview/nav/Home'
import {Project} from './tableview/nav/Project'
import {Carrer} from './tableview/nav/Carrer'
import {Service} from './tableview/nav/Service'
import { Bank } from './tableview/navitems/bank';
import { Customer } from './tableview/navitems/customers';
import { Expenses } from './tableview/navitems/expenses';

import { Home } from './tableview/navitems/home';
import { Products } from './tableview/navitems/products';
import { Purchases } from './tableview/navitems/purchases';
import { Report } from './tableview/navitems/reports';
import { Sell } from './tableview/navitems/sell';
import { Settings } from './tableview/navitems/settings';
import { Suppliers } from './tableview/navitems/suppliers';
import { Usermanagement } from './tableview/navitems/usermanagement';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Muicomp />
    // <Apps />
    // <NewApp/>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbarsection />} />
            <Route path='/tableview' element={<Tableview />} />
            <Route path='/mui' element={<Muicomp />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service />} />
            <Route path='/home' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/career' element={<Carrer />} />
            <Route path='/bank' element={<Bank />} />
            <Route path='/customer' element={<Customer />} />
            <Route path='/expenses' element={<Expenses />} />
            <Route path='/home' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/purchases' element={<Purchases />} />
            <Route path='/reports' element={<Report />} />
            <Route path='/sell' element={<Sell />} />
            <Route path='/settingsmanagement' element={<Settings />} />
            <Route path='/suppliers' element={<Suppliers />} />
            <Route path='/usermanagement' element={<Usermanagement />} />
        </Routes>
    </BrowserRouter>

    // console.log(Myconst)
);

