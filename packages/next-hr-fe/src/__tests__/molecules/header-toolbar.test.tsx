import {render, screen} from '@testing-library/react';
import {HeaderToolbar} from '../../molecules';

import {IconType} from '../../atoms/icon-store';

const callBack = jest.fn();

const buttons = [
  {
    icon: IconType.Business,
    text: 'My Requests',
  },
  {
    icon: IconType.Library,
    text: 'Learn More',
  },
  {
    icon: IconType.Add,
    text: 'Submit New Request',
  },
];

describe('HeaderToolbar Component', () => {
  it('renders a button', () => {
    render(
      <HeaderToolbar
        items={[{icon: IconType.Add, text: 'More'}]}
        onClick={callBack}
        selectedItem=""
      ></HeaderToolbar>,
    );

    const button = screen.getByRole('button', {name: /more/i});
    expect(button).toBeInTheDocument();
  });

  it('renders a list of buttons', () => {
    render(
      <HeaderToolbar
        items={buttons}
        onClick={callBack}
        selectedItem=""
      ></HeaderToolbar>,
    );

    const button1 = screen.getByRole('button', {name: /my requests/i});
    expect(button1).toBeInTheDocument();

    const button2 = screen.getByRole('button', {name: /learn more/i});
    expect(button2).toBeInTheDocument();

    const button3 = screen.getByRole('button', {name: /submit new request/i});
    expect(button3).toBeInTheDocument();
  });

  it('renders a list with a button selected', () => {
    render(
      <HeaderToolbar
        items={buttons}
        onClick={callBack}
        selectedItem="learn more"
      ></HeaderToolbar>,
    );

    const button1 = screen.getByRole('button', {name: /my requests/i});
    expect(button1).toBeInTheDocument();

    const button2 = screen.getByRole('button', {name: /learn more/i});
    expect(button2).toHaveClass('tertiary ');

    const button3 = screen.getByRole('button', {name: /submit new request/i});
    expect(button3).toBeInTheDocument();
  });
});
