import React, { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
