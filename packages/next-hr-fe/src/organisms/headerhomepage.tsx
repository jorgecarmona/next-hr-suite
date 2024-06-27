import React from 'react';

import HomePageLayout from '../layout/headerhomepage-layout';
import HeaderToolbar from '../molecules/header-toolbar';
import logo from '../assets/images/logo.svg';
import UserToolBar from '../molecules/usertoolbar';
import {HeaderToolbarProps} from '../molecules/header-toolbar';

const handleChange = (value: string) => {
  console.log(value);
};

function HeaderHomePage({config}: HeaderToolbarProps) {
  return (
    <HomePageLayout>
      <img src={logo} alt="logo" style={{width: '6.31rem', height: '1.9rem'}} />
      <HeaderToolbar config={config} />
      <UserToolBar type="profile" onClickCallback={handleChange}>
        MR
      </UserToolBar>
    </HomePageLayout>
  );
}

export default HeaderHomePage;
