import React, { useState } from "react";

const FormatWord = ({ word }) => {
  const [rotation, setRotation] = useState(0);
  const [space,setSpace]=useState(0);
  const rotate=[90,180,45,270,135,225,315];

  

  const format = () => {
    var option=Math.round(Math.random());
    console.log(option)
    if(option==0){
      rotateWord();
    }else{
      spaceWord();
    }
  };

  const spaceWord=()=>{
    if(space){
      setSpace(0);
    }else{
      setSpace(1);
    }
  }

  const rotateWord=()=>{
    var x=Math.floor(Math.random()*(rotate.length-1)+1);
    const newRotation = rotation + rotate[x];
    setRotation(newRotation);
  }

  return (
    <div
      style={{
        transition: "transform 0.3s ease",
        cursor: "pointer",
        transform: `rotate(${rotation}deg)`,
        "letter-spacing": `${space}em`
      }}
      onClick={format}
    >
      {word}
    </div>
  );
};

export default FormatWord;
