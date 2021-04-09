import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="max-w-6xl m-auto">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
