import Input from "../Input/Input"
import Button from "../Button/Button"
import Card from "../Card/Card"
import { useState } from "react"

let Content = (props) => {

    let [upperText, setUpperText] = useState("");
    let [belowText, setBelowText] = useState("");
    let [isSave, setIsSave] = useState(false);

    return(
        <div className="content" style={{height:'92vh', background:'#696969'}}>
            <Input 
                value={"upperText"}
                setUpperText={setUpperText}
                upperText={upperText}
            />
            <Input 
                value={"belowText"}
                setBelowText={setBelowText}
                belowText={belowText}
            />
            <Button 
                value={"prev"} 
                setIndex={props.setIndex} 
                index={props.index}
                setUpperText={setUpperText}
                setBelowText={setBelowText}
                setIsSave={setIsSave}
            />
            <Button 
                value={"next"} 
                setIndex={props.setIndex} 
                index={props.index}
                setUpperText={setUpperText}
                setBelowText={setBelowText}
                setIsSave={setIsSave}
            />
            <Card 
                imgurl={props.memeArr[props.index].url}
                upperText={upperText}
                belowText={belowText}
            />
            <Button 
                value={"save"}
                setIsSave={setIsSave}
            />
            {
                (isSave ? 
                    (props.handleMemeData({imageurl:props.memeArr[props.index].url,upperText,belowText})) : 
                    (<></>)
                )
            }
        </div>
    )
}

export default Content;