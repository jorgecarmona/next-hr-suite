import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {waitFor, within} from '@testing-library/react';

import UserToolBar from '../../molecules/usertoolbar';

describe('UserToolBar', () => {
  it('render open menu when clicking the avatar button', async () => {
    render(<UserToolBar type="profile">MR</UserToolBar>);

    const buttons = screen.getAllByRole('button');
    await userEvent.click(buttons[3]);

    const menu = await screen.findByRole('menu');
    expect(menu).toBeVisible();
  });

  it('render close menu when clicking the avatar button', async () => {
    render(<UserToolBar type="profile">MR</UserToolBar>);

    const buttons = screen.getAllByRole('button');

    await userEvent.click(buttons[3]);
    let menu = await screen.findByRole('menu');
    expect(menu).toBeVisible();

    const menuItems = within(menu).getAllByRole('menuitem');
    userEvent.click(menuItems[0]);

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('render call the console.log when the icon button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    render(<UserToolBar type="profile">MR</UserToolBar>);
    const buttons = screen.getAllByRole('button');

    userEvent.click(buttons[0]);
    expect(consoleSpy).toHaveBeenCalledWith('Hello World');
  });
});
