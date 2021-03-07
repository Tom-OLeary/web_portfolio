import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import $ from "jquery";
import './css/BlogItems.css'

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    componentDidMount() {
        this.HandleCardClick();
        // axios.get('http://127.0.0.1:8000/api/')
        //     .then(res => {
        //         const data = res.data.map(res => {
        //             let obj = Object.create(this.state);
        //             obj.title = res.title;
        //             obj.body = res.body;
        //             obj.created_on = res.created_on;
        //             obj.last_modified = res.last_modified;
        //             return obj;
        //         })
        //
        //         this.setState(data);
        //
        //         console.log(this.state);
        //     })

    }

    render() {
        return (
        <>
        <div className='card col-md-4 '>
            <div className='card-title'>
            <h2>
                {this.props.entry}
                <small>{this.props.created}</small>
            </h2>
            <div className='task-count'>
                logo
            </div>
            </div>
            <div className='card-flap flap1'>
            <div className='card-description'>
                <p>{this.props.body}</p>
                <ul className='task-list'>
                <li>
                    1st Inner Section Task
                    <span>✅</span>
                </li>
                <li>
                    2nd Inner Section Task
                    <span>☑️</span>
                </li>
                <li>
                    3rd Inner Section Task
                    <span>☑️</span>
                </li>
                <li>
                    4th Inner Section Task
                    <span>☑️</span>
                </li>
                </ul>
            </div>
            <div class='card-flap flap2'>
                <div className='card-actions'>
                <a className='btn' href='#'>Close</a>
                </div>
            </div>
            </div>
        </div>
        </>
        )
    }
}

export default Article