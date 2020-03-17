import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { Button, Box, IconButton, Typography } from '@material-ui/core'
import { ChevronLeft, ChevronRight, X } from '../Icons/IconObjects'
import { alertTypes } from '../../styles/utils';

import NotificationIcon from './NotificationIcon'

const mobileSpacing = 16
const desktopSpacing = 24

const accentHeight = 4
const closeSpacing = 15
const buttonPaddingX = 8
const buttonPaddingY = 12
const buttonSpacingX = 4
const buttonSpacingY = 4
const contentSpacing = 6

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  border-radius: ${({ theme }) => theme.border.radius}px;
  box-shadow: ${({ theme }) => theme.shadows.main};
  background: ${({ theme }) => theme.colors.white};
  pointer-events: all;
  border-top: solid ${accentHeight}px
    ${({ theme, type }) => theme.colors[type || 'info']};
  padding: ${mobileSpacing}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: ${desktopSpacing}px;
  }
`

const NotificationIconContainer = styled.div`
  margin-right: ${contentSpacing}px;
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: flex;
  }
`

const NotificationCloseContainer = styled(Box)`
  display: flex;
  margin: -${closeSpacing}px -${closeSpacing}px -${closeSpacing}px ${contentSpacing - closeSpacing}px;
`

const CloseButton = props => (
  <IconButton {...props}>
    <X />
  </IconButton>
)

const NotificationBody = styled(Box)`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`

const NotificationContent = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const Title = styled(Typography)`
  ${({ theme }) => `
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.rem.large};
    line-height: ${theme.font.rem.vlarge};
  `}
`

const Message = styled(Typography)`
  ${({ theme }) => `
    font-size: ${theme.font.rem.normal};
    line-height: ${theme.font.rem.large};
    margin-top: ${contentSpacing}px;
  `}
`

const NotificationFooter = styled(Box)`
  display: flex;
  flex-direction: row;
  margin: ${contentSpacing}px 0 -${buttonPaddingY}px 0;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin: ${contentSpacing}px -${buttonPaddingX}px -${buttonPaddingY}px 0;
  }
`

const NotificationPager = styled(Box)`
  display: flex;
  flex-grow: 2;
  align-items: center;
  margin: 0 ${buttonPaddingX}px ${buttonSpacingY}px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`

const NotificationPagerContent = styled(Typography)`
  ${({ theme }) => `
    font-size: ${theme.font.rem.normal};
    line-height: ${theme.font.rem.large};
    margin-right: ${buttonSpacingX}px;
    white-space: nowrap;
  `}
`

const NotificationPagerActions = styled(Box)`
  display: flex;
  & > * {
    margin-right: ${buttonSpacingX}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    & > * {
      margin-left: ${buttonSpacingX}px;
    }
  }
`

const PreviousButton = props => (
  <Button {...props} style={{ minWidth: '40px' }}>
    <ChevronLeft />
  </Button>
)

const NextButton = props => (
  <Button {...props} style={{ minWidth: '40px' }}>
    <ChevronRight />
  </Button>
)

const NotificationActions = styled(Box)`
  display: flex;
  margin-left: -${buttonPaddingX}px;

  & > *:not(:last-of-type) {
    margin-right: ${buttonSpacingX}px;
  }
`

export const Notification = ({
  type,
  title,
  srTitle,
  markdown,
  message,
  labels,
  actions,
  navigation,
  ...rest
}) => (
  <NotificationContainer type={type} {...rest}>
    <NotificationBody>
      <NotificationIconContainer>
        <NotificationIcon type={type} />
      </NotificationIconContainer>
      <NotificationContent>
        <Title aria-label={srTitle} variant='h2'>
          {title}
        </Title>
        <Message variant='body1' component='span'>
          {message}
        </Message>
      </NotificationContent>
      {actions && actions.onClose && (
        <NotificationCloseContainer>
          <CloseButton
            onClick={actions.onClose}
            aria-label={labels.close}
            tabIndex='-1'
          />
        </NotificationCloseContainer>
      )}
    </NotificationBody>
    <NotificationFooter>
      <NotificationPager>
        {navigation && navigation.total > 1 && (
          <Fragment>
            <NotificationPagerContent>
              [{navigation.total - 1}] {labels.more}
            </NotificationPagerContent>
            <NotificationPagerActions>
              <PreviousButton
                onClick={navigation.onPrevious}
                aria-label={labels.previous}
              />
              <NextButton
                onClick={navigation.onNext}
                aria-label={labels.next}
              />
            </NotificationPagerActions>
          </Fragment>
        )}
      </NotificationPager>
      {actions && actions.content && (
        <NotificationActions>{actions.content}</NotificationActions>
      )}
    </NotificationFooter>
  </NotificationContainer>
)

