import {Avatar, Typography} from '../atoms';
import {BigNavButton} from '../molecules';
import {Grid} from '@mui/material';
import LandingLayout from '../layout/landing-layout';
import {IconType} from '../atoms/icon-store';

import {useGetUsersQuery} from '../store/api-slice/users-slice';

import AvatarFriends from '../assets/images/avatar-friends.svg';

function Landing() {
  const {data} = useGetUsersQuery();

  console.log(data);

  const handleChange = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <LandingLayout>
        <Grid
          sx={{
            marginBottom: '40px',
          }}
        >
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            <Typography variant="h1">Hello! How can we help you?</Typography>
          </Grid>
          <Grid>
            <BigNavButton
              icon={IconType.Article}
              bgColor="#F0F9FF"
              customColor="#2E90FA"
              onClickCallback={handleChange}
              subtitle="New Request"
              title="Submit"
            />
            <BigNavButton
              icon={IconType.Library}
              bgColor="#FFFAEB"
              customColor="#F79009"
              onClickCallback={handleChange}
              title="Learn"
            />
            <BigNavButton
              icon={IconType.Article}
              bgColor="#ECFDF3"
              customColor="#12B76A"
              onClickCallback={handleChange}
              subtitle="Your Requests"
              title="Review"
            />
            <BigNavButton
              icon={IconType.Live}
              bgColor="#F4F3FF"
              customColor="#7A5AF8"
              onClickCallback={handleChange}
              title="Help me"
            />
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Avatar
            alt="avatar family"
            src={AvatarFriends}
            height={357}
            width={613}
          />
        </Grid>
      </LandingLayout>
    </>
  );
}

export default Landing;
