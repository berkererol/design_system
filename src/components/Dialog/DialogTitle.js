import React, { useContext } from 'react';
import {
    Box,
    IconButton,
    DialogTitle as MUIDialogTitle,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { NotificationIcon } from '../Notification/NotificationIcon'
import { DialogContext } from './Context'
import { Close }from '@material-ui/icons'
 

const useStyles = makeStyles(theme => ({
    root: {
      paddingBottom: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingTop: theme.spacing(1)
    }
  }))

export const DialogTitle = ({ type, children, closeButtonProps, ...other }) => {
  const classes = useStyles()
  const { ariaLabelledById } = useContext(DialogContext)
  
  return (
      <MUIDialogTitle
        disableTypography
        classes={{ root: classes.root }}
        {...other}
        type={type}
      >
        <Box display='flex' flexDirection='row' alignItems='center'>
          <Box mr={2}>
            <NotificationIcon type={type} />
          </Box>
          <Box flex={1}>
            <Typography id={ariaLabelledById} variant='h2'>
              {children}
            </Typography>
          </Box>
          <Box>
            <IconButton type={type} {...closeButtonProps}>
              <Close />
            </IconButton>
          </Box>
        </Box>
      </MUIDialogTitle>
    )
}