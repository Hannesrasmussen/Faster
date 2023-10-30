import React, { useState } from 'react';

import'../SaveModal.css';

interface IColorContainer {
    updateColor: Function
}

function ColorContainer(props: IColorContainer) {
  const [activeButton, setActiveButton] = useState<number>(1);

  function handleButtonClick(e: any, buttonId: number) {
    setActiveButton(buttonId);
    props.updateColor(e.target.style.backgroundColor);
  };

  const colorButtons = [
    { id: 1, color: '#a1a1a1' },
    { id: 2, color: '#ab5757' },
    { id: 3, color: '#ab8557' },
    { id: 4, color: '#61ab57' },
    { id: 5, color: '#57ab96' },
    { id: 6, color: '#576bab' },
    { id: 7, color: '#9657ab' },

  ];

  return (
    <div id="save-modal-color-container">
      {colorButtons.map((colorButton) => (
        <button
          key={colorButton.id}
          id={colorButton.id === activeButton ? 'save-modal-color-active' : ''}
          className={'save-modal-color'}
          style={{backgroundColor: colorButton.color}}
          onClick={function(e){
            handleButtonClick(e, colorButton.id);
          }}
        >
        </button>
      ))}
    </div>
  );
};

export default ColorContainer;

