import React from "react";

export const UserTyping = ({ userInput }) => {
  const typedCharacters = userInput.split("");
  console.log(typedCharacters);
  return (
    <div className="absolute inset-0">
      {typedCharacters.map((char, index) => {
        return <Character key={`${char}_${index}`} char={char} />;
      })}
    </div>
  );
};

const Character = ({ char }) => {
  return <span className="text-primary">{char}</span>;
};
