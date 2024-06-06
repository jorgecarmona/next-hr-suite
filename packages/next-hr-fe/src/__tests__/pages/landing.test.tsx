import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Landing from '../../pages/landing';
import {useGetUsersQuery} from '../../store/api-slice/users-slice';

jest.mock('../store/api-slice/users-slice', () => ({
  useGetUsersQuery: jest.fn(),
}));

const mockedUseGetUsersQuery = useGetUsersQuery as jest.Mock;

describe('Landing Component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});

    mockedUseGetUsersQuery.mockReturnValue({
      data: [
        {
          id: 1,
          username: 'user1',
          email: 'user1@example.com',
          phone: '123-456-7890',
          website: 'user1.com',
          company: {
            name: 'Company1',
            catchPhrase: 'Catch phrase 1',
            bs: 'BS 1',
          },
        },
        // Add more users if needed
      ],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the main heading', () => {
    render(<Landing />);
    expect(screen.getByText('Hello! How can we help you?')).toBeInTheDocument();
  });

  it('renders the BigNavButtons with correct titles', () => {
    render(<Landing />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByText('Learn')).toBeInTheDocument();
    expect(screen.getByText('Review')).toBeInTheDocument();
    expect(screen.getByText('Help me')).toBeInTheDocument();
  });

  it('BigNavButton click triggers handleChange', () => {
    render(<Landing />);
    const buttons = screen.getAllByRole('button');

    buttons.forEach((button) => {
      fireEvent.click(button);
      expect(console.log).toHaveBeenCalled();
    });
  });

  it('renders Avatar with correct props', () => {
    render(<Landing />);
    const avatar = screen.getByAltText('avatar family');
    expect(avatar).toHaveAttribute('src', 'AvatarFriends');
    expect(avatar).toHaveAttribute('height', '357');
    expect(avatar).toHaveAttribute('width', '613');
  });

  it('useGetUsersQuery is called and data is logged', () => {
    render(<Landing />);
    expect(useGetUsersQuery).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith([
      {
        id: 1,
        username: 'user1',
        email: 'user1@example.com',
        phone: '123-456-7890',
        website: 'user1.com',
        company: {
          name: 'Company1',
          catchPhrase: 'Catch phrase 1',
          bs: 'BS 1',
        },
      },
    ]);
  });
});
