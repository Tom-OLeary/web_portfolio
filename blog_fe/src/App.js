import React from 'react';
import './App.css';
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import TriviaContainer from "./components/TriviaContainer";
import Footer from "./components/Footer";
require("dotenv").config();


function App() {
    let url = ''
    if (process.env.NODE_ENV === 'development') {
        url = 'http://127.0.0.1:8000/api/'
    }

    if (process.env.NODE_ENV === 'production') {
        url = 'https://www.troleary.com/api/'
    }

  return (
    <>
        <Header />
        <CardContainer url={url} />
        <TriviaContainer />
        <Footer />
    </>
  );
}

export default App;
