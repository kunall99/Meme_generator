import "./galleryCard.css";
import {FacebookShareButton} from "react-share";

let GalleryCard = (props) => {
    return(
        <div className="gcard">
            <img src={props.imgurl} alt="Sorry no image" className="gimg"/>
            <p className="upperText">{props.upperText}</p>
            <p className="belowText">{props.belowText}</p>
            <FacebookShareButton 
                url={props.imgurl}
                className="share" 
                style={{background:'green', color:'white', fontSize:'20px'}}
            >
                Share on Facebook
            </FacebookShareButton>
        </div>
    )
}

export default GalleryCard;