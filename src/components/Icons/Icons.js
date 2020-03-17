import React from 'react';
import { Box } from '@material-ui/core';
import styled from '@emotion/styled';

export const DemoBox = styled(Box)`
  div > div {
    margin: 20px;
    display: flex;
    align-items: center;
  }
  div > div > svg {
    width: 24px;
    margin-right: 10px;
  }
`
export const IconBox = ({ name = 'AlertCircle', Icon }) => {
    return (
        <div>
            <Icon />
            <span> {name} </span>
        </div>
    )
};


  