import React from 'react';

import {Avatar, Button} from '../atoms';
import Icon from '../atoms/icon';
import {IconType} from '../atoms/icon-store';
import {ButtonType} from '../atoms/button';
import {Menu, MenuItem} from '@mui/material';
import {ProfileAvatarProps} from '../atoms/avatar';

function UserToolBar({children, type}: ProfileAvatarProps) {
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
    <>
      <Button buttonType={ButtonType.Profile} onClick={handleIconClick}>
        <Icon name={IconType.Search} style={{opacity: 0.7}} />
      </Button>
      <Button buttonType={ButtonType.Profile} onClick={handleIconClick}>
        <Icon name={IconType.Help} />
      </Button>
      <Button buttonType={ButtonType.Profile} onClick={handleIconClick}>
        <Icon name={IconType.Notifications} hasNotifications />
      </Button>
      <Button buttonType={ButtonType.Profile} onClick={handleClick}>
        <Avatar type={type}>{children}</Avatar>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default UserToolBar;
