import React, {useEffect, useState} from "react";
import '../css/Header.css';
import BlogItems from "./BlogItems";

export default function CardContainer(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(props.url)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setData(json)
            })
    }, []);

    return (
        <div className="grid-container">
            <div className="middle">
                <h2 className="mid-header">Posts</h2>
                <div className="row dashboard-cards">
            {data.map((t, index) => <BlogItems statusOf={t.statusOf} entry={t.title} body={t.body} created={t.created_on} id={`id${index}`}/>)}
                </div>
            </div>
            <div className="right top-description">
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
                    <li>Add Section to Hold All Solved Issues</li>
                    <li>Refactor Components Into Smaller, Manageable Items for Re-usability</li>
                    <li>Reorganize & Bundle CSS</li>
                    <li>Navbar Collapse Menu Only Works at a Screen Size Below 768px & Needs to be Fixed</li>
                </ul>
                <p>More info coming soon as I finish building this page...</p>
            </div>
        </div>
    );
}