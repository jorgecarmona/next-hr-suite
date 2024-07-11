import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Avatar from '../../atoms/avatar';

describe('Avatar component', () => {
  test('renders without crashing', () => {
    render(<Avatar alt="test avatar" src="test.png" />);
    const avatarElement = screen.getByRole('img', {name: /test avatar/i});
    expect(avatarElement).toBeInTheDocument();
  });

  test('applies width and height styles', () => {
    render(<Avatar alt="test avatar" src="test.png" width={50} height={50} />);
    const avatarElement = screen.getByRole('img', {name: /test avatar/i});
    expect(avatarElement).toHaveStyle('width: 50px');
    expect(avatarElement).toHaveStyle('height: 50px');
  });

  test('displays children when type is "profile"', () => {
    render(<Avatar type="profile">Profile Child</Avatar>);
    expect(screen.getByText('Profile Child')).toBeInTheDocument();
  });

  test('throws error when type is "profile" and children are not provided', () => {
    render(<Avatar type="profile">MR</Avatar>);
    expect(console.error).toHaveBeenCalled();
  });

  test('applies default styles when type is "profile"', () => {
    render(<Avatar type="profile">Profile Child</Avatar>);
    const avatarElement = screen.getByRole('img');
    expect(avatarElement).toHaveClass('profile');
  });

  test('does not display children when type is not "profile"', () => {
    render(<Avatar type="profile">Should not be displayed</Avatar>);
    const avatarElement = screen.getByRole('img', {name: /test avatar/i});
    expect(
      screen.queryByText('Should not be displayed'),
    ).not.toBeInTheDocument();
  });
});
