import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import NewPet from './components/NewPet';
import AllPets from './components/AllPets';
import OnePet from './components/OnePet';
import EditPet from './components/EditPet';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pet Shelter</h1>
      </header>
      <Routes>
        <Route path='/' element={<Navigate to='/pets' replace />} />
        <Route path='/pets' element={<AllPets />} />
        <Route path='/pets/new' element={<NewPet />} />
        <Route path='/pets/:id' element={<OnePet />} />
        <Route path='/pets/:id/edit' element={<EditPet />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
