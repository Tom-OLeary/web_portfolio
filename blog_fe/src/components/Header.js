import React, {useState} from "react";
import '../css/Header.css';
import Trivia from "./Trivia";


export default function Header(props) {
    const [title, setTitle] = useState('');
    return (
        <header>
            {/* <input type="button" onClick={() => NextQuestion(0)} value="Python Trivia" /> */}
            <h1 id="blog">Blog</h1>
            <h3 className="mid-header">Work in Progress...</h3>
        </header>
    )
}