import React from 'react';
import {Button} from '../atoms';
import {ButtonProps} from './button';

function ToolbarButton({
  children,
  icon,
  onClick,
  selected,
  disabled,
  fullWidth,
  buttonType,
}: ButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof HTMLButtonElement && onClick) {
      onClick(event as React.MouseEvent<HTMLElement>);
    }
  };

  let newStyles = selected
    ? {borderBottom: '1px solid #175CD3', padding: '8px 0'}
    : {padding: '8px 0'};

  return (
    <span style={newStyles} data-testid="spanStyle">
      <Button
        icon={icon}
        onClick={handleClick}
        selected={selected}
        disabled={disabled}
        fullWidth={fullWidth}
        buttonType={buttonType}
      >
        {children}
      </Button>
    </span>
  );
}

export default ToolbarButton;
