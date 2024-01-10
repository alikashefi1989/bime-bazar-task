"use client"
// module
import styled from "@emotion/styled";
import { CSSProperties } from "react";

export const OrderFormWrapper = styled.div(({ theme }) => ({
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

export const OrderFormHint = styled.h2(({ theme }) => ({
    ...theme,
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: 'max-content',
    fontSize: '1rem',
    fontWeight: 400,
    color: '#000',
    textAlign: 'right',
    margin: 0,
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #E0E0E0',
    marginBottom: '1rem',
}))

export interface InputWrapperProps {
    marginBottom: CSSProperties['marginBottom']
}

export const InputWrapper = styled.div<InputWrapperProps>(({ marginBottom }) => ({
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: 'max-content',
    position: 'relative',
    padding: 0,
    margin: 0,
    marginBottom,
}))

interface InputProps {
    error?: boolean
}

export const Input = styled.input<InputProps>(({ theme, error }) => ({
    ...theme,
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: '3rem',
    border: `1px solid ${error ? '#E61F10' : '#B4B4B4'}`,
    backgroundColor: '#FFF',
    paddingInline: '0.8125rem',
    paddingBottom: '0.8125rem',
    paddingTop: '0.875rem',
    color: '#757575',
    fontSize: '0.875rem',
    fontWeight: 500,
    MozAppearance: 'textfield',
    '::placeholder': {
        ...theme,
        color: '#757575',
        fontSize: '0.875rem',
        fontWeight: 500,
    },
    '::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
    },
    '::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
    },
    ':focus': {
        outline: 'none'
    },
}))

export const InputError = styled.span(({ theme }) => ({
    ...theme,
    color: '#E61F10',
    fontSize: '0.75rem',
    fontWeight: 600,
    position: 'absolute',
    right: 0,
    top: '3rem',
    width: 'max-content',
    height: 'max-content',
}))

export const AddressLabel = styled.h2(({ theme }) => ({
    ...theme,
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: 'max-content',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#000',
    textAlign: 'right',
    margin: 0,
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #E0E0E0',
    marginBottom: '1rem',
}))

export const AddressPlaceholder = styled.h2(({ theme }) => ({
    ...theme,
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: 'max-content',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.75rem',
    color: '#000',
    textAlign: 'right',
    margin: 0,
    marginBottom: '1.5rem',
}))

export const AddressName = styled.h2(({ theme }) => ({
    ...theme,
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: 'max-content',
    fontSize: '0.875rem',
    fontWeight: 700,
    lineHeight: '1.75rem',
    color: '#000',
    textAlign: 'right',
    margin: 0,
    marginBottom: '1.5rem',
}))