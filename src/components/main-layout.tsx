"use client"
// module
import { FC } from "react"
import { ThemeProvider } from '@emotion/react';
import localFont from '@next/font/local'
import { ToastContainer } from "react-toastify";
// custom
import { Body, MainHeader, MainWrapper } from "../style/layout";
import i18 from "../i18/i18";

const fonts = localFont({
    src: [
        {
            path: '../../public/fonts/Vazir-FD.ttf',
        },
    ],
})

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <ThemeProvider theme={{ ...fonts.style }}>
            <Body>
                <MainWrapper>
                    <MainHeader>
                        {i18.headerHint}
                    </MainHeader>
                    {children}
                </MainWrapper>
                <ToastContainer />
            </Body>
        </ThemeProvider>
    )
}

export default MainLayout
