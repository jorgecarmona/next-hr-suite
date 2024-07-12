import {Box, Grid} from '@mui/material';
import nextHrTheme from '../theme/theme';

interface HomeLayoutProps {
  children: [React.ReactNode, React.ReactNode, React.ReactNode];
}

function HeaderHomeLayout({children}: HomeLayoutProps) {
  const [logo, headertoolbar, usertoolbar = []] = children;

  return (
    <Box
      sx={{
        flexGrow: 1,
        borderBottom: `1px solid ${nextHrTheme.palette.custom.line}`,
        padding: '16px 24px',
        backgroundColor: nextHrTheme.palette.custom.main,
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={3}>
          <Grid container alignItems="center">
            {logo}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            item
            container
            alignItems="center"
            spacing={1}
            justifyContent="center"
          >
            {headertoolbar}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid
            item
            container
            alignItems="center"
            spacing={2}
            justifyContent="flex-end"
          >
            {usertoolbar}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeaderHomeLayout;
