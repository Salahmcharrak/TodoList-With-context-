import React from 'react';
import Forminput from './Compenents/Forminput';
import List from './Compenents/List';
import Footer from './Compenents/Footer';
import { DataProvider } from './Compenents/DataProvider';
import './App.css';


function App() {
  return (
    <DataProvider>
        <div className="App">
            <h1>To do list</h1>    
              <Forminput/>
              <List/>
              <Footer/>
              
        </div>
    </DataProvider>
  );
}

export default App;
