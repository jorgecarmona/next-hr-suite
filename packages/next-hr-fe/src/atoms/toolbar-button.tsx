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
}: ButtonProps) {
  let newStyles = selected
    ? {borderBottom: '1px solid #175CD3', padding: '8px 0'}
    : {padding: '8px 0'};

  return (
    <span style={newStyles} data-testid="spanStyle">
      <Button
        icon={icon}
        selected={selected}
        disabled={disabled}
        fullWidth={fullWidth}
      >
        {children}
      </Button>
    </span>
  );
}

export default ToolbarButton;
