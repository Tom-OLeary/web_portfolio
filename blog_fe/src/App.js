import React, {useEffect, useState} from 'react';
import './App.css';
import BlogItems from "./components/BlogItems";
import Header from "./components/Header";
import Trivia from "./components/Trivia";
require("dotenv").config();


function App() {
    const [data, setData] = useState([])
    let url = ''
    if (process.env.NODE_ENV === 'development') {
        url = 'http://127.0.0.1:8000/api/'
    }

    if (process.env.NODE_ENV === 'production') {
        url = 'https://www.troleary.com/api/'
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setData(json)
            })
    }, []);


  return (
    <>
        <Header />
        <div className="grid-container">
            <div className="left">
                <Trivia />
            </div>
            <div className="middle">
                <h2 className="mid-header">Page Info</h2>
                <div className="row dashboard-cards">
            {data.map((t, index) => <BlogItems statusOf={t.statusOf} entry={t.title} body={t.body} created={t.created_on} id={`id${index}`}/>)}
                </div>
                <h2 className="mid-header">Future Updates</h2>
                <p className="mid-header">Posts about upcoming apps/pages will be displayed here...</p>
            </div>
        </div>
    </>
  );
}

export default App;
