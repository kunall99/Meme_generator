import GalleryCard from "../GalleryCard/GalleryCard";
import "./gallery.css";

let Gallery = (props) => {
    return(
        <div className="gallery">
            {
                props.tempData.map((el) => (
                    <GalleryCard 
                        imgurl={el.imageurl} 
                        upperText={el.upperText} 
                        belowText={el.belowText}
                    />
                ))
            }
        </div>
    )
}

export default Gallery;