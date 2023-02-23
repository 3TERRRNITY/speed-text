import React, { useRef } from "react";
import { MdRefresh } from "react-icons/md";
function Refresh(onRestart: handleRestart, classNames) {
  const buttonRef = useRef(null);
  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };
  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`block rounded px-8 py-2 hover:bg-slate-700/50 mx-auto mt-10 text-slate-500`}
    >
      <MdRefresh className="w-6 h-6 " />
    </button>
  );
}

export default Refresh;
