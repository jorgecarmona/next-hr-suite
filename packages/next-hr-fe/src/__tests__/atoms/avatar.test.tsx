import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Avatar from '../../atoms/avatar'; // Ajusta la ruta según la ubicación de tu componente

describe('Avatar Component', () => {
  test('renders ProfileAvatar with children', () => {
    render(
      <Avatar type="profile">
        <span>Profile</span>
      </Avatar>,
    );

    const profileAvatar = screen.getByText('Profile');
    expect(profileAvatar).toBeInTheDocument();
    expect(screen.getByRole('img', {name: /profile/i})).toBeInTheDocument();
  });

  test('renders DefaultAvatar with alt and src', () => {
    render(<Avatar alt="default avatar" src="avatar.jpg" />);

    const defaultAvatar = screen.getByRole('img', {name: /default avatar/i});
    expect(defaultAvatar).toBeInTheDocument();
    expect(defaultAvatar).toHaveAttribute('src', 'avatar.jpg');
    expect(defaultAvatar).not.toHaveClass('profile');
  });

  test('applies default width and height for DefaultAvatar', () => {
    render(<Avatar alt="default avatar" src="avatar.jpg" />);

    const defaultAvatar = screen.getByRole('img', {name: /default avatar/i});
    expect(defaultAvatar).toHaveStyle({width: '400px', height: '400px'});
  });

  test('applies custom width and height for DefaultAvatar', () => {
    render(
      <Avatar
        alt="custom size avatar"
        src="avatar.jpg"
        width={500}
        height={500}
      />,
    );

    const customSizeAvatar = screen.getByRole('img', {
      name: /custom size avatar/i,
    });
    expect(customSizeAvatar).toHaveStyle({width: '500px', height: '500px'});
  });
});
