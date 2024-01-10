"use client"
// module
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { FC } from "react";

export const ModalBackDrop = styled.div(() => ({
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: '100vh',
    maxHeight: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    fill: 'rgba(0, 0, 0, 0.49)',
    backdropFilter: 'blur(2px)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2,
}))

export const ModalWrapper = styled.div(() => ({
    boxSizing: 'border-box',
    position: 'absolute',
    width: '100%',
    maxWidth: '100%',
    height: 'calc(100% - 7.75rem)',
    maxHeight: 'calc(100% - 7.75rem)',
    backgroundColor: '#FFF',
    top: '100%',
    left: 0,
    right: 0,
    animation: `${goUp} ${1500}ms forwards`,
    zIndex: 3,
    paddingTop: '3.75rem',
    paddingBottom: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
}))

export const ModalHeader = styled.div(() => ({
    boxSizing: 'border-box',
    position: 'absolute',
    width: '100%',
    maxWidth: '100%',
    top: 0,
    left: 0,
    right: 0,
    height: '3.75rem',
    borderBottom: '1px solid #E0E0E0',
    zIndex: 4,
    paddingInline: '1.25rem',
    paddingTop: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
}))

export const Title = styled.span(({ theme }) => ({
    ...theme,
    boxSizing: 'border-box',
    fontSize: '1rem',
    fontWeight: 700,
    color: '#000',
    width: 'max-content',
    height: 'max-content',
}))

export const CloseBtnWrapper = styled.span(() => ({
    boxSizing: 'border-box',
    width: 'max-content',
    height: 'max-content',
    cursor: 'pointer',
}))

export const CloseBtn: FC = () => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9997 6.89976L17.5995 5.49951L11.9992 11.0998L6.399 5.49951L4.99875 6.89976L10.599 12.5L4.99875 18.1003L6.399 19.5005L11.9992 13.9003L17.5995 19.5005L18.9997 18.1003L13.3995 12.5L18.9997 6.89976Z" fill="#C2C2C2" />
        </svg>
    )
}

export const ModalFooter = styled.div(() => ({
    boxSizing: 'border-box',
    position: 'absolute',
    width: '100%',
    maxWidth: '100%',
    right: 0,
    left: 0,
    bottom: 0,
    height: '5rem',
    boxShadow: '0px 3px 15px 3px rgba(34, 34, 34, 0.10)',
    zIndex: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.25rem'
}))

export const LoadingOrErrorWrapper = styled.div(() => ({
    boxSizing: 'border-box',
    position: 'absolute',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingInline: '1.34375rem'
}))

export const ItemsWrapper = styled.div(() => ({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
    height: '100%',
    maxHeight: '100%',
    overflowY: 'auto',
    paddingBlock: '1.25rem',
    paddingInline: '1.34375rem'
}))

export const Item = styled.div(() => ({
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '0.75rem',
    width: '100%',
    maxWidth: '100%',
    height: 'max-content',
}))

export const ItemRightHand = styled.div<{ isSelected: boolean }>(({ isSelected }) => ({
    boxSizing: 'border-box',
    height: '1.5rem',
    width: '1.5rem',
    borderRadius: '50%',
    border: '2px solid #C2C2C2',
    backgroundColor: !isSelected ? 'transparent' : 'black',
}))

export const ItemLeftHand = styled.div(() => ({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: '100%',
    height: 'max-content',
    gap: '0.625rem',
}))

export const ItemName = styled.div(() => ({
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: 'max-content',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#000',
}))

export const ItemDetail = styled.div(() => ({
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: 'max-content',
    fontSize: '0.75rem',
    fontWeight: 400,
    color: '#757575',
}))

const goUp = keyframes`
from { top: '100%' }
to { top: 7.75rem }`