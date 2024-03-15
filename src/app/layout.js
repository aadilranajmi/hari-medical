import { Inter } from 'next/font/google';
import './globals.css';

//material ui
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Hari Medical website',
    description: 'This is medical website for hari medical',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
