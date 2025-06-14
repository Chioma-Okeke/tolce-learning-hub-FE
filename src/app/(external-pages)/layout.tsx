import Footer from '@/components/shared/footer'
import { Header } from '@/components/shared/header'
import React from 'react'

function ExternalPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default ExternalPageLayout