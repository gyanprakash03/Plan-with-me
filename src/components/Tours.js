import Card from "./Card";

function Tours(props) {

    return (
        <div className="container">
            {props.tourList.map( tour => {
                return <Card {...tour} removeTour={props.removeTour}></Card>
            })}
        </div>
    );
}

export default Tours;