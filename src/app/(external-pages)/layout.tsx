"use client"

import Footer from '@/components/shared/footer'
import { Header } from '@/components/shared/header'
import React, { useEffect } from 'react'

function ExternalPageLayout({ children }: { children: React.ReactNode }) {
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []); 

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default ExternalPageLayout