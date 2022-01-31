import "./headerStyle.css"

let Header = (props) => {
    return(
        <div className="header">
            <div 
                className="create" 
                onClick={()=>(
                    props.setIsCreate(true)
                )}
            >
                Create Meme
            </div>
            <div 
                className="saved" 
                onClick={()=>(
                    props.setIsCreate(false)
                )}
            >
                Saved Meme
            </div>
        </div>
    )
}

export default Header;