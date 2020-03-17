import { useRef } from 'react';

// Starting from 100,000
let currentId = 1e5 + Math.floor(Math.random() * 1e4);

export const getUniqueId = () => {
  currentId += 1;
  return currentId;
};

export const useUniqueId = (prefix = '') => {
  const idRef = useRef();
  if (idRef.current == null) {
    idRef.current = (prefix ? `${String(prefix)}-` : 'id-') + getUniqueId();
  }

  return idRef.current;
};
