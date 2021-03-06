import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import Navbar from '../components/Navbar';

import '../styles/globals.css';
import '../styles/VideoFooter.css'
import '../styles/Video.css';
import '../styles/VideoSidebar.css';



// import SwipeUpIcon from '@mui/icons-material/SwipeUp'


const MyApp = ({ Component, pageProps }) => (

  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      {/* <Footer /> */}
    </div>

    <Script src="https://kit.fontawesome.com/d45b25ceeb.js" crossorigin="anonymous" />
  </ThemeProvider>

);

export default MyApp;
