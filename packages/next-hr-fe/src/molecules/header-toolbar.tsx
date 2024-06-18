import Stack from '@mui/material/Stack';

import {Button} from '../atoms';
import {ButtonType} from '../atoms/button';
import {IconType} from '../atoms/icon-store';

interface ToolbarItem {
  icon: IconType;
  text: string;
}

interface ToolbarProps {
  items: ToolbarItem[];
  onClick: (arg: string) => void;
  selectedItem: string;
}

function HeaderToolbar({items, onClick, selectedItem}: ToolbarProps) {
  return (
    <Stack direction="row" spacing={2}>
      <span
        style={{
          color: '#EAECF0',
          fontSize: '1.5rem',
          lineHeight: '0',
          margin: 'auto 0',
        }}
      >
        |
      </span>
      {items.map((item: ToolbarItem, index: number) => (
        <Button
          buttonType={
            selectedItem === item.text.toLowerCase()
              ? ButtonType.Tertiary
              : undefined
          }
          icon={item.icon}
          key={index}
          onClick={() => onClick(item.text.toLowerCase())}
          selected={selectedItem === item.text.toLowerCase()}
        >
          {item.text}
        </Button>
      ))}
    </Stack>
  );
}

export default HeaderToolbar;
