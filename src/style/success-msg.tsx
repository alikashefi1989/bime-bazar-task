"use client"
// module
import styled from "@emotion/styled";

export const SuccessMsgWrapper = styled.div(({ theme }) => ({
    ...theme,
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    position: 'relative',
    margin: 0,
    paddingBlock: '2rem',
    paddingInline: '1.25rem',
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
}))

export const SuccessMsgHint = styled.h2(({ theme }) => ({
    ...theme,
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: 'max-content',
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#34A862',
    textAlign: 'right',
    margin: 0,
}))