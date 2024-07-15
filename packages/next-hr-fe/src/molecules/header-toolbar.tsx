import React from 'react';

import Stack from '@mui/material/Stack';

import {useNavigate} from 'react-router-dom';

import {Button} from '../atoms';
import {ButtonType} from '../atoms/button';
import {IconType} from '../atoms/icon-store';

export interface HeaderToolbarProps {
  config: {
    icon: IconType;
    text: string;
    path: string;
  }[];
}

function HeaderToolbar({config}: HeaderToolbarProps) {
  const [selectedButton, setSelectedButton] = React.useState<string>('');
  const navigate = useNavigate();

  const handleSelectedButton = (text: string, path: string) => {
    setSelectedButton(text);
    navigate(path);
  };

  return (
    <Stack direction="row" spacing={2}>
      <span
        style={{
          color: '#EAECF0',
          fontSize: '1.5rem',
          lineHeight: '0',
          margin: 'auto 0',
        }}
      >
        |
      </span>
      {config.map((button, index) => (
        <Button
          buttonType={
            selectedButton === button.text.toLowerCase()
              ? ButtonType.Tertiary
              : undefined
          }
          icon={button.icon}
          key={index}
          onClick={() =>
            handleSelectedButton(button.text.toLowerCase(), button.path)
          }
          selected={selectedButton === button.text.toLowerCase()}
        >
          {button.text}
        </Button>
      ))}
    </Stack>
  );
}

export default HeaderToolbar;
