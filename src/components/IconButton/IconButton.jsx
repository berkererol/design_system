import React from 'react';
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps
} from '@material-ui/core';

export const IconButton = props => {
  return <MuiIconButton disableRipple {...props} />;
};
