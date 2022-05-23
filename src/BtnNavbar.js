import React, { useState } from 'react';

export const BtnNavbar = () => {
  const [isClicked, setClicked] = useState(false);
  const [isHidden, setHidden] = useState(false);

  const onBlur = () => {
    if (!isClicked) {
      return setClicked(true);
    }

    setHidden(true);
    setClicked(false);

    const tempInput = document.createElement('input');

    document.body.appendChild(tempInput);
    tempInput.focus();
    document.body.removeChild(tempInput);
  };

  return (
    <div class='btn-nav' onClick={onBlur} onMouseLeave={() => setHidden(false)}>
      <button class='nav-trigger'>{/* icon */}</button>

      {!isHidden && (
        <div class='btn-nav-items'>
          <div class='btn-nav-item'>item1</div>

          <div class='btn-nav-item'>item2</div>

          <div class='btn-nav-item'>item3</div>

          <div class='btn-nav-item'>item4</div>
        </div>
      )}
    </div>
  );
};
