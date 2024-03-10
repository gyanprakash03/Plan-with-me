import { useState } from "react";

function Card(props) {

    const [readMore, setReadMore] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
    });

    const [addStatus, setAddStatus] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
    });

    const description = `${readMore[props.id] ? props.info : props.info.substring(0, 200)}....`;

    function readMoreHandler(id) {
        setReadMore(prevState => (
            {...prevState, [id]: !prevState[id]}
        ));
    }

    function addTour(id) {
        setAddStatus(prevState => (
            {...prevState, [id]: !prevState[id]}
        ));
    }

    return (
        <div className="card">
            <img src={props.image} className="tour-img" />

            <div className="tour-name">{props.name}</div>

            <div className="tour-price">$ {props.price}</div>

            <div className="tour-desc">

                {description}

                <span className="read-more-btn" onClick={() => readMoreHandler(props.id)}>
                {readMore[props.id] ? 'Show less' : 'Read more'}</span>
            </div>

            <div className="btn-container">

                <button className="add-tour" onClick={() => addTour(props.id)}>
                {addStatus[props.id] ? 'Added' : 'Add to list'}</button>

                <button className="not-interested" onClick={() => props.removeTour(props.id)}>
                Not Interested</button>

            </div>
        </div>
    );
}

export default Card;