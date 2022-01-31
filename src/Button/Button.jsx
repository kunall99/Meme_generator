import "./buttonStyle.css";

let Button = (props) => {
    return(
        <div className="button">
            {
                (props.value == "prev") ?
                (props.index == 0) ?
                (<button 
                    className="prev_btn"  
                    onClick={()=>(alert("You are on 1st meme"))}
                >Previous</button>) :
                (<button 
                    className="prev_btn" 
                    onClick={()=>{
                        props.setIndex(props.index-1)
                        props.setUpperText("")
                        props.setBelowText("")
                        props.setIsSave(false)
                    }}
                >Previous</button>) :
                (props.value == "save") ?
                (<button 
                    className="save_btn" 
                    onClick={()=>{
                        alert("Saved")
                        props.setIsSave(true)
                    }}
                >Save</button>) :
                (<button 
                    className="next_btn" 
                    onClick={()=>{
                        props.setIndex(props.index+1)
                        props.setUpperText("")
                        props.setBelowText("")
                        props.setIsSave(false)
                    }}
                >Next</button>)
            }
        </div>
    )
}

export default Button;