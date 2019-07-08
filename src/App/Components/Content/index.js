import React from 'react'
import './../../Styles/Content.css'

function Content({title, description}) {

    return (
        <div>
            <div className = "content-title content">
                <h1>{title}</h1>
            </div>
            <div className = "content content-description"> 
                {description}
            </div>
        </div>
    );
}

export default Content;