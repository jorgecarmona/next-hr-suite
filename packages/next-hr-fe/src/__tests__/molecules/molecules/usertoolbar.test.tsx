import {render, screen} from '@testing-library/react';
import UserToolBar from '../../../molecules/usertoolbar';
import {fireEvent} from '@testing-library/react';
import {waitFor} from '@testing-library/react';

interface IconProps {
  name: string;
  onClick?: () => void;
}

jest.mock('../../../atoms/avatar', () => () => <div>Avatar</div>);
jest.mock('../../../atoms/icon', () => ({name, onClick}: IconProps) => (
  <div onClick={onClick}>Icon: {name}</div>
));

describe('UserToolBar', () => {
  it('renders without crashing', () => {
    render(<UserToolBar>MR</UserToolBar>);
  });

  test('renders UserToolBar with icons and avatar', () => {
    render(<UserToolBar />);

    expect(screen.getByText('Icon: search')).toBeInTheDocument();
    expect(screen.getByText('Icon: help')).toBeInTheDocument();
    expect(screen.getByText('Icon: notifications')).toBeInTheDocument();
    expect(screen.getByText('Avatar')).toBeInTheDocument();
  });

  test('handles icon click', () => {
    console.log = jest.fn();
    render(<UserToolBar />);

    fireEvent.click(screen.getByText('Icon: search'));
    expect(console.log).toHaveBeenCalledWith('Hello World');
  });

  test('opens and closes menu on avatar click', async () => {
    render(<UserToolBar />);

    const avatarButton = screen.getByRole('button', {name: /avatar/i});
    fireEvent.click(avatarButton);

    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('My account')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Profile'));

    await waitFor(() => {
      expect(screen.queryByText('Profile')).not.toBeInTheDocument();
    });
  });
});
