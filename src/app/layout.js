import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";


export const montserrat = Montserrat ({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const poppins = Poppins ({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata = {
  title: "The Dragon News",
  description: "You can find best trusted news here",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`h-full antialiased`}
    >
      <body className={` ${poppins.className}  min-h-full flex flex-col`}>
       
        {children}
        
        </body>
    </html>
  );
}
