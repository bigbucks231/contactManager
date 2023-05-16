import React from 'react';
import './App.css';
import {  Route, Routes, Navigate} from 'react-router-dom';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import ViewContact from './components/ViewContact';
import EditContact from './components/EditContact';
import Navbar from './components/Navbar';

const  App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'./contacts/list'} /> } />
        <Route path={'/contacts/list'} element={<ContactList />} />
        <Route path={'/contacts/add'} element={<AddContact/>} />
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>} />
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>} />

      </Routes>
    </>
  );
}

export default App;
