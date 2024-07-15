import React from 'react';

import {Alert as MuiAlert, AlertTitle as MuiAlertTitle} from '@mui/material';

interface AlertProps {
  type: 'error' | 'info' | 'success' | 'warning';
  onClose?: () => void;
  children?: React.ReactNode;
}

function Alert({type, onClose, children}: AlertProps) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  if (!open) return null;

  const AlertTitle = (type: 'error' | 'info' | 'success' | 'warning') => {
    switch (type) {
      case 'error':
        return 'Error';
      case 'info':
        return 'Info';
      case 'success':
        return 'Success';
      case 'warning':
        return 'Warning';
      default:
        return '';
    }
  };

  return (
    <MuiAlert
      onClose={handleClose}
      severity={type}
      sx={{
        '& .MuiAlertTitle-root': {
          fontWeight: 'bold',
        },
      }}
    >
      <MuiAlertTitle>{AlertTitle(type)}</MuiAlertTitle>
      {children}
    </MuiAlert>
  );
}

export default Alert;
