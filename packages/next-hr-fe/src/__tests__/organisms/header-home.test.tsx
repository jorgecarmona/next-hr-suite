import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderHome from '../../organisms/header-home';
import {IconType} from '../../atoms/icon-store';

jest.mock(
  '../../layout/header-home-layout',
  () =>
    ({children}: {children: React.ReactNode}) => <div>{children}</div>,
);
jest.mock(
  '../../molecules/header-toolbar',
  () =>
    ({config}: {config: any[]}) => <div>HeaderToolbar {config.length}</div>,
);
jest.mock(
  '../../molecules/usertoolbar',
  () =>
    ({children}: {children: React.ReactNode}) => (
      <div>UserToolBar {children}</div>
    ),
);
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
  beforeEach(() => {
    render(<HeaderHome config={headerButtons} />);
  });

  it('should render the logo', () => {
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'logo.svg');
    expect(logo).toHaveStyle({width: '6.31rem', height: '1.9rem'});
  });

  it('should render the HeaderToolbar with the correct number of buttons', () => {
    expect(screen.getByText('HeaderToolbar 3')).toBeInTheDocument();
  });

  it('should render the UserToolBar with the correct children', () => {
    expect(screen.getByText('UserToolBar MR')).toBeInTheDocument();
  });
});
