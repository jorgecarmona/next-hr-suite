import React from 'react';

import {Stack} from '@mui/material';
import {useNavigate} from 'react-router-dom';

import {ButtonsToolbar, HeaderToolbar} from '../molecules';
import {IconType} from '../atoms/icon-store';

function Header() {
  const [selectedButton, setSelectedButton] = React.useState('');
  const navigate = useNavigate();

  let navigateTo: string;

  const handleSelectedButton = (value: string) => {
    setSelectedButton(value);
    console.log(`button ${value} was clicked!`);

    if (value.includes(' ')) {
      navigateTo = value.replaceAll(' ', '-');
    }
    navigate(navigateTo);
  };

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

  return (
    <Stack direction="row" spacing={8}>
      <h2>Header</h2>
      <HeaderToolbar
        items={headerButtons}
        onClick={handleSelectedButton}
        selectedItem={selectedButton}
      />
      <h2>Header</h2>
    </Stack>
  );
}

export default Header;
