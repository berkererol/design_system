import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    DialogContent as MUIDialogContent,
    Box 
} from '@material-ui/core';
import { Typography } from '../Typography';
import { useDialogContext } from './Context';

const useStyles = makeStyles(theme => ({
    root: {
        overflowY: 'auto',
        padding: theme.spacing(2),
        whiteSpace: 'pre-wrap',
    }
}))

export const DialogContent = ({ children, ...props }) => {
    const classes = useStyles();
    const { ariaDescribedById } = useDialogContext();
  
    return (
      <Box className={classes.root} {...props}>
        <Typography component="div" variant="body1" id={ariaDescribedById}>
          {children}
        </Typography>
      </Box>
    );
  };

