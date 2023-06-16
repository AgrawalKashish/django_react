
import React from 'react';
import Form from './components/form';
import {Route, Routes, BrowserRouter } from 'react-router-dom'

import Fragment from './components/fragment';

function App() {
  return (
    <div>
      {/* <Form/> */}
      <BrowserRouter>
       <Routes>
         <Route>
           <Route exact path="/" element={ <Fragment/>} />
           <Route exact path="/login" element={<Form />} />

         </Route>
       </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
