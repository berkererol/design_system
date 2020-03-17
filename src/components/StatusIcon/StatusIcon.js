import { SvgIconProps as MuiSvgInputProps, useTheme } from '@material-ui/core';
import {
  Cancel as ErrorIcon,
  CheckCircle as SuccessIcon,
  Error as WarningIcon,
  Info as InfoIcon,
} from '@material-ui/icons';
import React from 'react';

const icons = {
  info: InfoIcon,
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon,
};

export const StatusIcon = ({ status, ...props }) => {
  const theme = useTheme();
  const IconTag = icons[status];

  return status ? <IconTag htmlColor={theme.palette[status].main} {...props} /> : null;
};
