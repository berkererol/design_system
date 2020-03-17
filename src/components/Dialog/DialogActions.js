import React from 'react';
import {
    Box,
    Button,
    DialogActions as MUIDialogActions
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    button: {
        minWidth: '100px'
    },
    root: {
        padding: theme.spacing(2)
    }
}))

export const DialogActions = ({
    confirmButtonProps,
    declineButtonProps,
    ...other
}) => {
    const classes = useStyles()

    return (
        <MUIDialogActions classes={ { root: classes.root} } {...other} >
            <Box mr={1}>
                <Button className={classes.button} size='large' {...declineButtonProps}>
                    {declineButtonProps.text}
                </Button>
            </Box>
            <Button 
                className={classes.button}
                color='primary'
                size='large'
                {...confirmButtonProps}
            >
                {confirmButtonProps.text}
            </Button>
        </MUIDialogActions>
    )
}


