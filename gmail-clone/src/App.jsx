import './App.css'

import {Routes, Route } from "react-router";
import MainLayout from './components/layout/MainLayout';
import Mailbox from './components/pages/Mailbox';
import Inbox from './components/pages/Inbox';

function App() {

  return (
    <>     
      <Routes>
       <Route path='/' element={<MainLayout />} >
         <Route path="/inbox/:id" element={<Inbox />} />
         <Route path="/mailbox" element={<Mailbox />} />
         <Route path="/mailbox/:id" element={<Mailbox />} />
         {/* <Route index element={<Mailbox />} /> */}
         </Route>
    </Routes>
    </>
  )
}

export default App
