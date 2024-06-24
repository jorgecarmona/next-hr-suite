import React from 'react';

import Stack from '@mui/material/Stack';

import {useNavigate} from 'react-router-dom';

import {Button} from '../atoms';
import {ButtonType} from '../atoms/button';
import {IconType} from '../atoms/icon-store';

interface ToolbarButton {
  icon: IconType;
  text: string;
}

const headerButtons = [
  {
    icon: IconType.Work,
    text: 'My Requests',
  },
  {
    icon: IconType.Library,
    text: 'Learn More',
  },
  {
    icon: IconType.Add,
    text: 'Submit New Request',
  },
];

function HeaderToolbar() {
  const [selectedButton, setSelectedButton] = React.useState<string>('');
  const navigate = useNavigate();

  let navigateTo: string;

  const handleSelectedButton = (value: string) => {
    setSelectedButton(value);

    if (value.includes(' ')) {
      navigateTo = value.replaceAll(' ', '-');
    }
    navigate(navigateTo);
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
      {headerButtons.map((button: ToolbarButton, index: number) => (
        <Button
          buttonType={
            selectedButton === button.text.toLowerCase()
              ? ButtonType.Tertiary
              : undefined
          }
          icon={button.icon}
          key={index}
          onClick={() => handleSelectedButton(button.text.toLowerCase())}
          selected={selectedButton === button.text.toLowerCase()}
        >
          {button.text}
        </Button>
      ))}
    </Stack>
  );
}

export default HeaderToolbar;
