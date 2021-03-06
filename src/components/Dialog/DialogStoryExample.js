import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button, Box } from '@material-ui/core'

import { Dialog } from './Dialog';
import { DialogTitle } from './DialogTitle';
import { DialogContent } from './DialogContent';
import { DialogActions } from './DialogActions';

const useStyles = makeStyles(theme => ({
  button: ({ status }) => ({
    color: theme.palette[status].main
  })
}))

const contentText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse.'

export const DialogStoryExample = ({ status }) => {
  const classes = useStyles({ status })
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  const statusTitle = status.replace(/^./, (str) => str.toUpperCase());

  return (
    <>
      <Button variant="contained" className={classes.button} onClick={handleOpen}>
        Open {statusTitle} Dialog
      </Button>
      <Dialog status={status} open={open} onClose={handleClose}>
        <DialogTitle closeButtonProps={{ onClick: handleClose }}>
          {`${statusTitle} dialog`}
        </DialogTitle>
        <DialogContent>{contentText}</DialogContent>
        <DialogActions
          confirmButtonProps={{
            onClick: handleClose,
            children: 'Yes',
          }}
          declineButtonProps={{
            onClick: handleClose,
            children: 'No',
          }}
        />
      </Dialog>
    </>
  )
}

