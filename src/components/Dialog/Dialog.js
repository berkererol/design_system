import React, { useMemo } from 'react';
import { Dialog as MUIDialog, Divider } from '@material-ui/core';
import { DialogContext } from './Context';
import { isMobile, useUniqueId } from '../Utils';

export const Dialog = ({
  children,
  open,
  onClose,
  PaperProps,
  type,
  status = 'info',
  ...other
}) => {
  const ariaDescribedById = useUniqueId();
  const ariaLabelledById = useUniqueId();

  const mergedPaperProps = {
    'aria-describedby': ariaDescribedById,
    'aria-labelledby': ariaLabelledById,
    'aria-modal': true,
    role: isMobile() ? 'alertdialog' : 'dialog',
    ...PaperProps,
  };

  const dialogContextValue = useMemo(() => ({ ariaDescribedById, ariaLabelledById, status }), [
    ariaDescribedById,
    ariaLabelledById,
    status,
  ]);
  
  return (
    <MUIDialog
      onClose={onClose}
      open={open}
      PaperProps={mergedPaperProps}
      {...other}
    >
      <DialogContext.Provider value={dialogContextValue}>
        {children
          ? React.Children.map(children, (child, index) => (
              <>
                {React.cloneElement(child)}
                {index < children.length - 1 && <Divider aria-hidden />}
              </>
            ))
          : null}
      </DialogContext.Provider>
    </MUIDialog>
  )
}

