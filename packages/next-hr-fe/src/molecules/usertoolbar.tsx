import React from 'react';

import Avatar from '../atoms/avatar';
import Icon from '../atoms/icon';
import {IconType} from '../atoms/icon-store';
import {Fade, IconButton, Menu, MenuItem, Stack} from '@mui/material';

interface UserToolBarProps {
  children?: React.ReactNode;
}

function UserToolBar({children}: UserToolBarProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleIconClick = () => {
    console.log('Hello World');
  };

  return (
    <Stack
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      direction="row"
      spacing={0.5}
    >
      <IconButton sx={{padding: '1px'}}>
        <Icon
          name={IconType.Search}
          style={{opacity: 0.7}}
          onClick={handleIconClick}
        />
      </IconButton>
      <IconButton sx={{padding: '1px'}}>
        <Icon name={IconType.Help} onClick={handleIconClick} />
      </IconButton>
      <IconButton sx={{padding: '1px'}}>
        <Icon
          name={IconType.Notifications}
          hasNotifications
          onClick={handleIconClick}
        />
      </IconButton>
      <IconButton onClick={handleClick} sx={{padding: '1px'}}>
        <Avatar type="profile">{children}</Avatar>
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Stack>
  );
}

export default UserToolBar;
