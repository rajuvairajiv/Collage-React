import React, { useState, useRef, useEffect } from 'react';
import "../styles/Gallery.css";
import bird2 from "../assets/bird2.jpeg";
import tiger from "../assets/tiger.jpeg";
import grf from "../assets/grf.jpeg";
import chameleon from "../assets/chameleon.jpeg";
import frst1 from "../assets/frst1.jpeg";
import frst2 from "../assets/frst2.jpeg";
import frst3 from "../assets/frst3.jpeg";
import frst4 from "../assets/frst4.jpeg";
import ind1 from "../assets/ind1.jpeg";
import ind2 from "../assets/ind2.jpeg";
import ind3 from "../assets/ind3.jpeg";
import ind4 from "../assets/ind4.jpeg";
import mntn1 from "../assets/mntn1.jpeg";
import mntn2 from "../assets/mntn2.jpeg";
import mntn3 from "../assets/mntn3.jpeg";
import mntn4 from "../assets/mntn4.jpeg";
import ocn1 from "../assets/ocn1.jpeg";
import ocn2 from "../assets/ocn2.jpeg";
import ocn3 from "../assets/ocn3.jpeg";
import ocn4 from "../assets/ocn4.jpeg";
import unvrs1 from "../assets/unvrs1.jpeg";
import unvrs2 from "../assets/unvrs2.jpeg";
import unvrs3 from "../assets/unvrs3.jpeg";
import unvrs4 from "../assets/unvrs4.jpeg";

const Gallery = () => {
    const [activeImage, setActiveImage] = useState(null);
    const imageRef = useRef(null);

    const handleImageClick = (index) => {
        if (activeImage === index) {
            setActiveImage(null);
        } else {
            setActiveImage(index);
        }
    };

    const handleClickOutside = (event) => {
        if (imageRef.current && !imageRef.current.contains(event.target)) {
            setActiveImage(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const imageList = [
        frst3, tiger, mntn1, frst4,
        ocn4, frst2, bird2, grf,
        ind1, unvrs2, ind3, unvrs4,
        chameleon, frst1, ocn2, mntn3,
        ocn1, mntn2, ocn3, mntn4,
        unvrs1, ind2, unvrs3, ind4
    ];

    return (
        <div className={`gallery ${activeImage !== null ? "overlay" : ""}`}>
            <div className="row img-row">
                {imageList.map((img, index) => (
                    <div className="column img-clmn" key={index}>
                        <img
                            src={img}
                            alt="img"
                            className={activeImage === index ? "zoomed" : ""}
                            onClick={() => handleImageClick(index)}
                            ref={activeImage === index ? imageRef : null}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
