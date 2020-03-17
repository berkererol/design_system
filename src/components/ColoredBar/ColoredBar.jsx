import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: ({ type }) => ({
        backgroundColor: theme.palette[type].main,
        height: theme.spacing(1)
    })
}));

export const ColoredBar = ({ type }) => {
    const classes = useStyles({ type });
    return <div className={classes.root} />
}
