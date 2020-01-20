import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="button-panel">
    <div className="row group-one">
      <Button name="AC" color="grayLight" />
      <Button name="+/-" color="grayLight" />
      <Button name="%" color="grayLight" />
      <Button name="÷" />
    </div>
    <div className="row group-two">
      <Button name="7" color="grayLight" />
      <Button name="8" color="grayLight" />
      <Button name="9" color="grayLight" />
      <Button name="X" />
    </div>
    <div className="row group-three">
      <Button name="4" color="grayLight" />
      <Button name="5" color="grayLight" />
      <Button name="6" color="grayLight" />
      <Button name="-" />
    </div>
    <div className="row group-four">
      <Button name="1" color="grayLight" />
      <Button name="2" color="grayLight" />
      <Button name="3" color="grayLight" />
      <Button name="+" />
    </div>
    <div className="row group-five">
      <Button name="0" wide color="grayLight" />
      <Button name="." color="grayLight" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
