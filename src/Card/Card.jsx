import "./cardStyle.css";

let Card = (props) => {
    return(
        <div className="card">
            <p className="upper_text">{props.upperText}</p>
            <img src={props.imgurl} alt="image"/>
            <p className="below_text">{props.belowText}</p>
        </div>
    )
}

export default Card;