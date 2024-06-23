import {Outlet} from 'react-router-dom';
import Header from '../organisms/header';

function PlayGround() {
  // const {data} = useGetUsersQuery();

  return (
    <>
      {/* <h1>PlayGround</h1> */}
      <hr />
      <Header />
      <hr />
      <Outlet />
    </>
  );
}

export default PlayGround;
