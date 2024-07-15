import React from 'react';

import HeaderHomeLayout from '../layout/header-home-layout';
import HeaderToolbar from '../molecules/header-toolbar';
import logo from '../assets/images/logo.svg';
import UserToolBar from '../molecules/usertoolbar';
import {HeaderToolbarProps} from '../molecules/header-toolbar';

const handleChange = (value: string) => {
  console.log(value);
};

function HeaderHome({config}: HeaderToolbarProps) {
  return (
    <HeaderHomeLayout>
      <img src={logo} alt="logo" style={{width: '6.31rem', height: '1.9rem'}} />
      <HeaderToolbar config={config} />
      <UserToolBar type="profile" onClickCallback={handleChange}>
        MR
      </UserToolBar>
    </HeaderHomeLayout>
  );
}

export default HeaderHome;
