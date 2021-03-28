import React from "react";
import '../css/Header.css';
import Trivia from "./Trivia";


export default function TriviaContainer(props) {
    return (
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
    )
}