import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import '@/styles/globals.css'

import { lightTheme, darkTheme } from '../themes';
import { EntriesProvider } from '../context/entries';
import { UIProvider } from '../context/ui';

export default function App({ Component, pageProps }: AppProps) {
  return <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={ darkTheme }>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
}
