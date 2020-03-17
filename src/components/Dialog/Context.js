import { createContext, useContext } from 'react';

export const DialogContext = createContext({});

export const useDialogContext = () => {
  return useContext(DialogContext);
};
