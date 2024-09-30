// app/layout.js
"use client";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./components/Header/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Component Layout
export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>{/* Các thẻ head khác nếu cần */}</head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          {children}
        </body>
      </html>
    </Provider>
  );
}
