import "./Inputstyle.css"

let Input = (props) => {
    return(
        <div className="input">
            
            {
                (props.value == "upperText") ? 
                (<input 
                    type="text" 
                    className="input1" 
                    placeholder="for upper part"
                    onChange={(e) => {
                        props.setUpperText(e.target.value)
                    }}
                    value={props.upperText}
                />) :
                (<input 
                    type="text" 
                    className="input2" 
                    placeholder="for below part"
                    onChange={(e) => {
                        props.setBelowText(e.target.value)
                    }}
                    value={props.belowText}
                />)
            }
            
        </div>
    )
}

export default Input;