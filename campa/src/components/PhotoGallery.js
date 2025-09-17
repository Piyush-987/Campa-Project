import React, { useState } from "react";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import left from "../images/left.png";
import right from "../images/right.png";

function PhotoGallery() {
  const photos = [
    { src: image1, label: "Chatra", date: "11 Jan 2025", time: "14:00" },
    { src: image2, label: "Palamu", date: "15 Mar 2025", time: "16:00" },
    { src: image3, label: "Gumla", date: "18 May 2025", time: "19:00" },
    { src: image4, label: "Ranchi", date: "20 Jun 2025", time: "10:00" },
    { src: image5, label: "Hazaribagh", date: "25 Jul 2025", time: "12:00" },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < photos.length - 3) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px", 
        margin: "auto",
        width: "1150px", 
      }}
    >
      
      <img
        src={left}
        alt="Previous"
        onClick={prevSlide}
        style={{
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
      />

      
      <div
        style={{
          position: "relative",
          width: "1010px", 
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "45px", 
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${index * (265 + 45)}px)`, 
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              style={{
                width: "265px",
                borderRadius: "10px",
                overflow: "hidden",
                background: "rgba(250,250,250,0.8)",
                position: "relative",
                flexShrink: 0,
              }}
            >
              
              <div
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  background: "rgba(250,250,250,0.85)",
                  borderRadius: "5px",
                  padding: "2px 6px",
                  zIndex: 5,
                }}
              >
                <h6 style={{ margin: 0, fontSize: "12px" }}>{photo.label}</h6>
              </div>

              
              <img
                src={photo.src}
                alt={photo.label}
                style={{
                  width: "265px",
                  height: "200px",
                  display: "block",
                }}
              />

              
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px 10px",
                  backgroundColor: "rgba(250, 250, 250, 0.8)",
                }}
              >
                <h6 style={{ margin: 0 }}>{photo.date}</h6>
                <h6 style={{ margin: 0 }}>{photo.time}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <img
        src={right}
        alt="Next"
        onClick={nextSlide}
        style={{
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default PhotoGallery;
