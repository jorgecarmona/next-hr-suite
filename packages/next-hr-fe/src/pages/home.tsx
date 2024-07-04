import {Outlet} from 'react-router-dom';
import Header from './header';

export default function Home() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
