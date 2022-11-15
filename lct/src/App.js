import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import { useLocation } from 'react-router-dom';

import Header from './components/Header';
import Main from './routes/Main';
import Create from './routes/Create';
import Landing from './routes/Landing';
import CreatePage from './components/create/CreatePage';
import Guide from './components/Guide';

function App() {
  const location = useLocation();
  return (
    <div className='wrapper'>
      <div className="App">
        <Header name="Роман"/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/guide' element={<Guide/>}/>
          <Route path="/app" element={<Main/>}/>
          <Route path='/app/create/' element={<Create/>}/>
          <Route path='/app/create/:id' element={<CreatePage location={location}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
