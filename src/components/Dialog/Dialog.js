import React, { useMemo } from 'react'
import { Dialog as MUIDialog, Divider } from '@material-ui/core'
import { ColoredBar } from '../ColoredBar'
import { DialogContext } from './Context'

export const Dialog = ({
  'aria-describedby': ariaDescribedById,
  'aria-labelledby': ariaLabelledById,
  children,
  open,
  onClose,
  PaperProps,
  type,
  ...other
}) => {
  const mergedPaperProps = {
    'aria-describedby': ariaDescribedById,
    'aria-labelledby': ariaLabelledById,
    'aria-modal': true,
    ...PaperProps
  }
  const dialogContextValue = useMemo(
    () => ({ ariaDescribedById, ariaLabelledById }),
    [ariaDescribedById, ariaLabelledById]
  )
  return (
    <MUIDialog
      onClose={onClose}
      open={open}
      PaperProps={mergedPaperProps}
      {...other}
    >
      <ColoredBar type={type} />
      <DialogContext.Provider value={dialogContextValue}>
        {React.Children.map(children, (child, index) => (
          <>
            {React.cloneElement(child, { type })}
            {index < children.length - 1 && <Divider aria-hidden />}
          </>
        ))}
      </DialogContext.Provider>
    </MUIDialog>
  )
}

