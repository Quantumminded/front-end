import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import pages
import Nav from './Nav';
import HeroPage from './HeroPage';
import HomePage from './HomePage';
import SignIn from './SignIn';
import Footer from './Footer';
import PostOffer from './PostOffer';
import SelectRequest from './SelectRequest';
import WorkerProfile from './WorkerProfile';
import ClientProfile from './ClientProfile';
import DocumentForm from './DocumentForm';
import CallForm from './CallForm';
import TransaltionForm from './TransaltionForm';
import Category from './Category';


function App() {
  return (
    <>
      <Nav ></Nav>
      <BrowserRouter>
        <Routes>
            <Route index element={<HeroPage />} />
            <Route path='/HomePage' element={<HomePage />} />
            <Route path="/Category/:id" element={<Category />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/WorkerPorfile' element={<WorkerProfile />} />
            <Route path='/ClientPorfile' element={<ClientProfile />} />
            <Route path='/PostOffer' element={<PostOffer />} />
            <Route path='/SelectRequest' element={<SelectRequest />} />
            <Route path='/DocumentForm' element={<DocumentForm />} />
            <Route path='/CallForm' element={<CallForm />} />
            <Route path='/TransaltionForm' element={<TransaltionForm />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
