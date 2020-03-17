import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    DialogContent as MUIDialogContent,
    DialogContentText 
} from '@material-ui/core';
import { DialogContext } from './Context';

const useStyles = makeStyles(theme => ({
    content: {
        color: theme.palette.text.main,
        margin: 0,
        padding: 0,
        whiteSpace: 'pre-wrap'
    },
    root: {
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(2)
    }
}))

export const DialogContent = ({ children, ...other }) => {
    const classes = useStyles();
    const { ariaDescribedById } = useContext(DialogContext);

    return (
        <MUIDialogContent
        id={ariaDescribedById}
        classes={{ root: classes.root }}
        {...other}
        >
        <DialogContentText classes={{ root: classes.content }}>
                {children}
        </DialogContentText>
        </MUIDialogContent>
    )
}

