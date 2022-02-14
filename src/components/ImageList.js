import React from "react";
import  './ImageList.css';
import ImageCard from "./ImageCard";

const ImageList = (props) => {
    const finalImageData = props.imageList.map(
          (image) => {
                 return <ImageCard image={image} key={image.id}></ImageCard>;
          }
    );

    return(
          <div className="image-list">{finalImageData}</div>
    );
}
export default ImageList;