import React from 'react'
import { Box } from '@material-ui/core'
import styled from '@emotion/styled'

import { Error } from '@material-ui/icons';
import { CheckCircle } from '@material-ui/icons';
import { Info } from '@material-ui/icons'


// const IconBox = styled(Box)`
//   display: flex;
//   color: ${({ theme, type }) => theme.colors[type]};
// `


// export const NotificationIcon = ({ type, ...other }) => {

//   switch (type) {
//     case 'info':
//       return ( <IconBox type={type} {...other}> <Info type="info" /> </IconBox> )
//     case 'error':
//       return ( <IconBox type={type} {...other}> <Error type="error" /> </IconBox> ) 
//     case 'warning':
//       return ( <IconBox type={type} {...other}> <Error type="warning" /> </IconBox> ) 
//     case 'success':
//       return ( <IconBox type={type} {...other}> <Error type="error" /> </IconBox> ) 
//   }

// };


export const NotificationIcon = ({ type, ...other }) => {

  switch (type) {
    case 'info':
      return ( <Box type={type} {...other}> <Info type="info" /> </Box> )
    case 'error':
      return ( <Box type={type} {...other}> <Error type="error" /> </Box> ) 
    case 'warning':
      return ( <Box type={type} {...other}> <Error type="warning" /> </Box> ) 
    case 'success':
      return ( <Box type={type} {...other}> <CheckCircle type="error" /> </Box> ) 
  }

};
