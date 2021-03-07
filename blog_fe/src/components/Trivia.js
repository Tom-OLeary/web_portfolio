import React, {useState, useEffect} from 'react';
import '../css/Trivia.css';
import {closeScoreModal, closeOptionModal, handleNextQuestion, NextQuestion} from '../triviaQuestions';

function Trivia(props) {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        await fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple')
        .then(res => res.json())
        .then(loadedQuestions => {
            console.log(loadedQuestions);
            let questionData = loadedQuestions.results.map(loadedQuestion => {
                const formattedQuestion = {
                    question: loadedQuestion.question
                };
                const answerChoices = [...loadedQuestion.incorrect_answers];
                formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
                answerChoices.splice(
                    formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer
                );

                answerChoices.forEach((choice, index) => {
                    formattedQuestion["option" + (index + 1)] = choice;
                });
                return formattedQuestion;
            });
            setQuestions(questionData);
            console.log(questions);
        })
        .catch((error) => console.log(error))
    }

    return (
        <div className="trivia-left">
        <div className="modal-container" id="score-modal">

            <div className="modal-content-container">

                <h1>Congratulations, Quiz Completed.</h1>

                <div className="grade-details">
                    <p>Attempts : 10</p>
                    <p>Wrong Answers : <span id="wrong-answers"></span></p>
                    <p>Right Answers : <span id="right-answers"></span></p>
                    <p>Grade : <span id="grade-percentage"></span>%</p>
                    <p ><span id="remarks"></span></p>
                </div>

                <div className="modal-button-container">
                    <button onClick={closeScoreModal}>Continue</button>
                </div>

            </div>
        </div>

        <div className="game-quiz-container">

            <div className="game-details-container">
                <h1>Score : <span id="player-score"></span> / 10</h1>
                <button onClick={() => NextQuestion(0, questions)} id="play-button">Play Trivia</button>
                <h1> Question : <span id="question-number"></span> / 10</h1>
            </div>

            <div className="game-question-container">
                <h1 id="display-question"></h1>
            </div>

            <div className="game-options-container">

                <div className="modal-container" id="option-modal">

                    <div className="modal-content-container">
                        <h1>Please Pick An Option</h1>

                        <div className="modal-button-container">
                            <button onClick={closeOptionModal}>Continue</button>
                        </div>

                    </div>

                </div>

                <span>
                    <input type="radio" id="option-one" name="option" className="radio" value="1" />
                    <label htmlFor="option-one" className="option" id="option-one-label"></label>
                </span>


                <span>
                    <input type="radio" id="option-two" name="option" className="radio" value="2" />
                    <label htmlFor="option-two" className="option" id="option-two-label"></label>
                </span>


                <span>
                    <input type="radio" id="option-three" name="option" className="radio" value="3" />
                    <label htmlFor="option-three" className="option" id="option-three-label"></label>
                </span>


                <span>
                    <input type="radio" id="option-four" name="option" className="radio" value="4" />
                    <label htmlFor="option-four" className="option" id="option-four-label"></label>
                </span>


            </div>

            <div className="next-button-container">
                <button onClick={handleNextQuestion}>Submit</button>
            </div>

        </div>
        </div>
    )
}

export default Trivia