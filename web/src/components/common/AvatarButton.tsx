import { Avatar, ButtonBase, styled } from '@mui/material';
import { experimental_sx as sx } from '@mui/system';
import { FC, MouseEvent } from 'react';
import { AvatarProps } from '@mui/material/Avatar/Avatar';

const Btn = styled(Avatar)(({ theme }) =>
  sx({
    transition: 'all .2s ease-in-out',
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  })
);

type AvatarButtonProps = Omit<AvatarProps, 'onClick'> & {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const AvatarButton: FC<AvatarButtonProps> = ({
  onClick,
  variant = 'rounded',
  color = 'inherit',
  ...rest
}) => (
  <ButtonBase
    onClick={onClick}
    sx={{ borderRadius: '8px !important', overflow: 'hidden' }}
  >
    <Btn {...rest} variant={variant} color={color} />
  </ButtonBase>
);

export default AvatarButton;
