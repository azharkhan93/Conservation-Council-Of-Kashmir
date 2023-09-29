import './globals.css';

import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   
      <>
        <Navbar />
        {children}
        
        <Footer />
        
        
      
      </>
   
  );
}
