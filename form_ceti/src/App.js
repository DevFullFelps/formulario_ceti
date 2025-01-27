import React from 'react';
import Banner from './components/Banner'; // Importando o Banner
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header /> {/* Navbar (se existir) */}
      <Banner /> {/* Banner de boas-vindas */}
      <main>
        {/* Conteúdo da sua landing page */}
      </main>
    </div>
  );
}

export default App;