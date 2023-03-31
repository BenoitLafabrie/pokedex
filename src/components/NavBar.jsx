import React from "react";

function NavBar({ onPrevClick, onNextClick, isPrevDisabled, isNextDisabled }) {
  return (
    <nav>
      <button onClick={onPrevClick} disabled={isPrevDisabled}>
        Previous
      </button>
      <button onClick={onNextClick} disabled={isNextDisabled}>
        Next
      </button>
    </nav>
  );
}

export default NavBar;
