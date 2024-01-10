"use client"
// module
import styled from "@emotion/styled";

export const Body = styled.body(({ theme }) => ({
    ...theme,
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    border: 'none',
    width: '100%',
    maxWidth: '100%',
    height: '100vh',
    maxHeight: '100vh'
}))

export const MainWrapper = styled.div(({ theme }) => ({
    ...theme,
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    overflowY: 'auto',
    position: 'relative',
    paddingTop: '3.5rem',
}))

export const MainHeader = styled.h1(({ theme }) => ({
    ...theme,
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: '3.5rem',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    margin: 0,
    paddingBlock: '0.875rem',
    paddingInline: '1.25rem',
    fontSize: '1.125rem',
    fontWeight: 600,
    backgroundColor: '#FFF',
    color: '#000',
    boxShadow: '0px 3px 15px 3px rgba(34, 34, 34, 0.10)',
    zIndex: 1,
}))

