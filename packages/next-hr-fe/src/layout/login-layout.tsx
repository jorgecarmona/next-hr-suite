import React from 'react';

import {Box, Grid} from '@mui/material';

import useIsMobile from '../hooks/use-is-mobile';
import nextHrTheme from '../theme/theme';

import '../styles/app.css';

import logo from '../assets/images/logo.svg';
import avatarFamily from '../assets/images/avatar-family.svg';
import avatarFather from '../assets/images/avatar-father.svg';

interface LoginLayoutProps {
  children: React.ReactNode;
}

function LoginLayout({children}: LoginLayoutProps) {
  const isMobile = useIsMobile();
  const {palette} = nextHrTheme;

  const mobileStyles = {
    marginTop: '82px',
    width: '100%',
  };

  const mobileLogo = {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '48.25px',
    left: '32px',
    position: 'absolute',
    top: '26px',
    width: '163.11px',
  };

  const desktopLogo = {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '48.25px',
    left: '20px',
    position: 'absolute',
    top: '20px',
    width: '163.11px',
  };

  const imageRight = {
    backgroundImage: `url(${avatarFamily})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    bottom: '8px',
    height: '50%',
    position: 'absolute',
    right: '20px',
    width: '50%',
  };

  const imageLeft = {
    backgroundImage: `url(${avatarFather})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    bottom: '24px',
    height: '50%',
    left: '8px',
    position: 'absolute',
    width: '50%',
  };

  const containerRight = {
<<<<<<< HEAD
    backgroundColor: palette.info.light,
=======
    backgroundColor: palette.custom.light,
    height: '100%',
>>>>>>> 819c858c0ea4e69d04847af16789df7e7bce44d3
    position: 'relative',
  };

  const containerLeft = {
    backgroundColor: palette.custom.paper,
    position: 'relative',
  };

  const containerLogin = {
<<<<<<< HEAD
=======
    backgroundColor: palette.custom.contrastText,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    height: '589px',
>>>>>>> 819c858c0ea4e69d04847af16789df7e7bce44d3
    left: '50%',
    top: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
  };

  if (isMobile) {
    return (
      <Box p={1.6875} style={mobileStyles}>
        <Box sx={mobileLogo} />
        <Grid>{children}</Grid>
      </Box>
    );
  }

  return (
    <Box sx={{position: 'relative', height: '100vh', width: '100vw'}}>
      <Grid container sx={{height: '100%', width: '100%'}}>
        <Grid sx={containerLeft} item xs={6}>
          <Box sx={imageLeft} />
          <Box sx={desktopLogo} />
        </Grid>
        <Grid sx={containerRight} item xs={6}>
          <Box sx={imageRight} />
        </Grid>
      </Grid>
      <Grid sx={containerLogin}>{children}</Grid>
    </Box>
  );
}

export default LoginLayout;
