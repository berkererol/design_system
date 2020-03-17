import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button, Box } from '@material-ui/core'

import { Dialog } from './Dialog';
import { DialogTitle } from './DialogTitle';
import { DialogContent } from './DialogContent';
import { DialogActions } from './DialogActions';

const useStyles = makeStyles(theme => ({
  button: ({ type }) => ({
    color: theme.palette[type].main
  })
}))

const contentText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse.'

export const DefaultDialogBox = ({ type }) => {
  const classes = useStyles({ type })
  console.log(classes);
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  return (
    <Box m={3}>
      <Button
        variant='contained'
        className={classes.button}
        onClick={handleOpen}
      >
        Open {type} Dialog
      </Button>
      <Dialog type={type} open={open} onClose={handleClose}>
        <DialogTitle closeButtonProps={{ onClick: handleClose }}>
          {`${type.replace(/^./, str => str.toUpperCase())} dialog`}
        </DialogTitle>
        <DialogContent>{contentText}</DialogContent>
        <DialogActions
          confirmButtonProps={{
            onClick: handleClose,
            text: 'Yes'
          }}
          declineButtonProps={{
            onClick: handleClose,
            text: 'No'
          }}
        />
      </Dialog>
    </Box>
  )
}

