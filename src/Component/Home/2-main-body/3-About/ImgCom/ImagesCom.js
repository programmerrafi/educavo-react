import React from "react";

const ImagesCom = ({ img }) => {
  return (
    <>
      <div className="student-img">
        {img.map((cur) => {
          const { id, image } = cur;
          return (
            <div className="photo" key={id}>
              <img src={image} alt="student" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImagesCom;
