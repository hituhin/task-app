import '../styles/globals.css'
import {theme} from "../components/Theme"
import { ThemeProvider } from '@mui/private-theming'

function MyApp({ Component, pageProps }) {

  return( 
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  
  )
}

export default MyApp
