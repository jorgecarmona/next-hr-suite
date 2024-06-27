import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderHomePage from '../../organisms/headerhomepage';
import {IconType} from '../../atoms/icon-store';
import userEvent from '@testing-library/user-event';

jest.mock('../../layout/headerhomepage-layout', () => ({children}) => (
  <div>{children}</div>
));
jest.mock('../../molecules/header-toolbar', () => ({config}) => (
  <div>HeaderToolbar {config.length}</div>
));
jest.mock('../../molecules/usertoolbar', () => ({children}) => (
  <div>UserToolBar {children}</div>
));
jest.mock('../../assets/images/logo.svg', () => 'logo.svg');

const headerButtons = [
  {
    icon: IconType.Work,
    text: 'My Requests',
    path: 'my-requests',
  },
  {
    icon: IconType.Library,
    text: 'Learn More',
    path: 'learn-more',
  },
  {
    icon: IconType.Add,
    text: 'Submit New Request',
    path: 'new-request',
  },
];

describe('HeaderHomePage', () => {
  it('should render the logo', () => {
    render(<HeaderHomePage config={headerButtons} />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'logo.svg');
    expect(logo).toHaveStyle({width: '6.31rem', height: '1.9rem'});
  });

  it('should render the HeaderToolbar with the correct number of buttons', () => {
    render(<HeaderHomePage config={headerButtons} />);

    expect(screen.getByText('HeaderToolbar 3')).toBeInTheDocument();
  });

  it('should render the UserToolBar with the correct children', () => {
    render(<HeaderHomePage config={headerButtons} />);

    expect(screen.getByText('UserToolBar MR')).toBeInTheDocument();
  });
});
