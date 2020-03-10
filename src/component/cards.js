import React from 'react'

export default function cards(props) {
    return (
        <div className="cards">
            {props.x.map(el=>
                
                <div className={el.class}>
                    <h5>{el.title}</h5>
                    <h2>{el.description}</h2>
                    <img src={el.image}/>
                    </div>
                )}
        </div>
    )
}
