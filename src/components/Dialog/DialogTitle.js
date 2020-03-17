import React from 'react';
import {
    Box,
    useTheme
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';
import { StatusIcon } from '../StatusIcon';

import { useDialogContext } from './Context';

export const DialogTitle = ({
  children,
  closeButtonProps,
  ...props
}) => {
  const theme = useTheme();
  const { ariaLabelledById, status = 'info' } = useDialogContext();
  return (
    <Box borderTop={theme.spacing(0.5)} borderColor={theme.palette[status].main} {...props}>
      <Box px={2} p={1}>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box mr={1} display="flex" flexDirection="row" alignItems="center">
            <StatusIcon status={status} />
          </Box>
          <Box flex={1}>
            <Typography id={ariaLabelledById} component="h2" variant="h6">
              {children}
            </Typography>
          </Box>
          <Box>
            <IconButton {...closeButtonProps}>
              <Close />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};