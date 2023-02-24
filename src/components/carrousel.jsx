import { useState } from "react";
import Img1 from './img/unnamed.png';
import Img2 from './img/Github.png'

export default function Carrousel(){
    const images = [Img1, Img2]
    const [index, SetIndex] = useState(0)
    const [image, setImage] = useState(images[0])

    const newImage = (index, arrayImages, next) => {
        const condition = next ? index < images.length - 1 : index > 0
        const nextIndex = next ? (condition ? index + 1 : 0 ) : (condition ? index - 1 : images.length - 1)
        setImage(arrayImages[nextIndex])
        SetIndex(nextIndex)
    }

    const previous = () => {
        newImage(index, images, false)
    }

    const next = () => {
        newImage(index, images, true)
    }

    return(
        <main className="slider">
            <button onClick={previous} className="sliderbtn">{"<"}</button>
            <img src={image} className='slider-img' alt="logo.jpg"/>
            <button onClick={next} className="sliderbtn">{">"}</button>
        </main>
    )

}
