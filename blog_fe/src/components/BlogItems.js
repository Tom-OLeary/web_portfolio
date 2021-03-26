import React from 'react';
import '../css/BlogItems.css';
import '../css/Header.css';
import $ from "jquery";

function BlogItems(props) {
    const handleClick = (e) => {
        $(document).ready(function(){
              let zindex = 10;
              e.preventDefault();

              let isShowing = false;

              if ($("."+props.id).hasClass("d-card-show")) {
                isShowing = true
              }

              if ($("div.dashboard-cards").hasClass("showing")) {
                $("div.card.d-card-show")
                  .removeClass("d-card-show")
                  .css({zIndex: 1});
                if (isShowing) {
                  $("div.dashboard-cards")
                    .removeClass("showing")
                } else {
                  $("."+props.id)
                    .css({zIndex: zindex})
                    .addClass("d-card-show");
                }
                zindex++;

              } else {
                $("div.dashboard-cards")
                  .addClass("showing");
                $("."+props.id)
                  .css({zIndex:zindex})
                  .addClass("d-card-show");

                zindex++;
              }
            });
    }

    const handleCheckCompletion = (props) => {
        if (props === 'completed') {
            return <div className='task-count'>
                ✅
            </div>;
        }
        let result = ''
        switch (props) {
            case 'future':
                result = '🔮️'
                break
            case 'info':
                result = 'ℹ️'
                break
            default:
                result = '❌'
                break
        }

        return <div className='task-count'>{result}</div>
    }

    return (
        <>
        <div className={`card col-md-4 ${props.id}`} onClick={handleClick}>
            <div className='card-title'>
            <h2>
                {props.entry}
                <small>{props.created}</small>
            </h2>
            {handleCheckCompletion(props.statusOf)}
            </div>
            <div className='card-flap flap1'>
            <div className='card-description'>
                <p>{props.body}</p>
                <ul className='task-list'>
                <li>
                    1st Task
                    <span>☑️</span>
                </li>
                <li>
                    2nd Task
                    <span>☑️</span>
                </li>
                <li>
                    3rd Task
                    <span>☑️</span>
                </li>
                <li>
                    4th Task
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

export default BlogItems;