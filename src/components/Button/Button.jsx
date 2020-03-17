import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  CircularProgress as MuiProgress
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const generateCustomStyles = makeStyles(theme => ({
  showProgressLabel: {
    marginLeft: theme.spacing(1)
  }
}));


export const Button = ({
  showProgress,
  children,
  color,
  variant,
  ...props
}) => {
  const customClasses = generateCustomStyles();
  return (
    <MuiButton variant={variant} color={color} {...props}>
      {showProgress ? (
        <>
          {/* TODO: Pull out this into its own component once properly defined, Make button dumb and only accept children */}
          <MuiProgress size={21} color="inherit" />
          {typeof showProgress === 'string' ? (
            <span className={customClasses.showProgressLabel}>{showProgress}</span>
          ) : null}
        </>
      ) : (
        children
      )}
    </MuiButton>
  );
};


