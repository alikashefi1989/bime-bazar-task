"use client"
// module
import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface BtnProps {
    width: CSSProperties['width']
    height: CSSProperties['height']
    color: CSSProperties['color'],
    backgroundColor: CSSProperties['backgroundColor']
}

const Btn = styled.button<BtnProps>(({ theme, width, height, color, backgroundColor }) => ({
    ...theme,
    width,
    height,
    color,
    backgroundColor,
    fontSize: '1rem',
    fontWeight: 600,
    border: 'none',
    outline: 'none',
}))

export default Btn

interface AbsoluteBtnWrapperProps {
    top?: CSSProperties['top']
    right?: CSSProperties['right']
    bottom?: CSSProperties['bottom']
    left?: CSSProperties['left']
}

export const AbsoluteBtnWrapper = styled.div<AbsoluteBtnWrapperProps>(({ top, right, bottom, left }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'max-content',
    height: 'max-content',
    position: 'absolute',
    top,
    right,
    bottom,
    left,
}))
