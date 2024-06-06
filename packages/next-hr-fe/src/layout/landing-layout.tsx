import {Box, Grid} from '@mui/material';
import {ReactNode} from 'react';

interface LandingLayoutProps {
  children: [ReactNode, ReactNode];
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
