import React from 'react';
import { Box } from '@material-ui/core';
import { Button } from '../Button';

export const DialogActions = ({
    confirmButtonProps = {},
    declineButtonProps = {},
    ...props
  }) => {
    const declineText = declineButtonProps.children || 'Cancel';
    const confirmText = confirmButtonProps.children || 'OK';
    return (
      <Box
        display="flex"
        flexDirection="row"
        px={2}
        py={1}
        alignContent="center"
        justifyContent="flex-end"
        {...props}
      >
        <Box mr={1}>
          <Button {...declineButtonProps} autoFocus>
            {declineText}
          </Button>
        </Box>
        <Button color="primary" {...confirmButtonProps}>
          {confirmText}
        </Button>
      </Box>
    );
  };


