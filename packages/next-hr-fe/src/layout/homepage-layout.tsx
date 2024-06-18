import {Box, Grid} from '@mui/material';

function HomePage() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        borderBottom: '1px solid #eaeaea',
        padding: '16px 24px',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={3}>
          <Grid container alignItems="center">
            NextHR
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            alignItems="center"
            spacing={2}
            justifyContent="center"
          >
            <Grid item>My Requests</Grid>
            <Grid item>Learn More</Grid>
            <Grid item>Submit New Request</Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid
            container
            alignItems="center"
            spacing={2}
            justifyContent="flex-end"
          >
            <Grid item>Search</Grid>
            <Grid item>Help</Grid>
            <Grid item>Notification</Grid>
            <Grid item>Avatar</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
