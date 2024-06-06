import React from 'react';

import {Box, Grid} from '@mui/material';

interface LandingLayoutProps {
  children: [React.ReactNode, React.ReactNode];
}

export default function LandingLayout({children}: LandingLayoutProps) {
  const [bigNavButtons, avatar] = children;

  return (
    <Box>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {bigNavButtons}
      </Grid>
      <Grid>{avatar}</Grid>
    </Box>
  );
}
