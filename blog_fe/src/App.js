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
            <div className="middle">
                <h2 className="mid-header">Posts</h2>
                <div className="row dashboard-cards">
            {data.map((t, index) => <BlogItems statusOf={t.statusOf} entry={t.title} body={t.body} created={t.created_on} id={`id${index}`}/>)}
                </div>
            </div>
            <div className="top-description">
                <p><strong>Keys:</strong></p>
                <ul className="ul-description">
                    <li>❌ → Incomplete Issue or Bug</li>
                    <li>ℹ️ → Informational Post</li>
                    <li>🔮️ → Future Updates</li>
                    <li>✅️ → Completed Issues</li>
                </ul>
                <p><strong>Requires Completion:</strong></p>
                <ul className="ul-description">
                    <li>Tasks Model for "Issues" Posts</li>
                    <li>Proper Scaling for Different Screen Sizes (CSS is currently structured for a 1400-1600px min-max width)</li>
                    <li>Better Design for the Menu Bar</li>
                    <li>Add Records for Post Category to the Database so that Each Post is Labeled Accordingly</li>
                </ul>
                <p>More info coming soon as I finish building this page...</p>
            </div>
        </div>
        <div className="grid-container-2">
            <div className="left">
                <Trivia />
            </div>
            <div className="middle top-description">
                <p>In order to make this project a little more interesting, I want to include the use of public API's.
                    To start, I have created a simple trivia game using the <a href="https://opentdb.com/api_config.php" target="_blank">OpenTDB </a>
                    Trivia Database.
                </p>
                <h2 className="mid-header">How It Works:</h2>
                <p>The OpenTDB API provides access to multiple categories & difficulties as well as the option of multiple
                    choice or true/false questions.</p>
                <p>I have set this particular trivia game to 10 multiple choice questions. Using an asynchronous function
                    within the Trivia.js component, I have collected data for multiple choice Computer Science related
                    questions.</p>
                <p>These questions are then formatted and displayed within the trivia game container,
                    which keeps track of your score and gives you live feedback on your answers.</p>
                <p>**At this moment the game does function, however it only works for one play-through & will not work a
                    second time unless the page is refreshed. Right now I am only calling for 10 questions from the API,
                    as well as missing a function to handle refreshing the questions once the game is complete. This issue
                    seems as if it will be rather straightforward to fix.</p>
                <p></p>

            </div>
        </div>
        {/*<div className="grid-container-3">*/}
        {/*    <div className="left" id="left">*/}
        {/*    </div>*/}
        {/*    <div className="middle" id="grid3">*/}
        {/*    </div>*/}
        {/*    <div className="right" id="right">*/}
        {/*    </div>*/}
        {/*</div>*/}
    </>
  );
}

export default App;
