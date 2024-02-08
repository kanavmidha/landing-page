import Container from "@mui/material/Container"
import Navbar from "@/components/Navbar"
import NewsletterForm from "@/components/NewsletterForm"
import { Grid, ThemeProvider, Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Footer from "@/components/Footer"
import { theme } from "@/utils/theme/config"

import { useState, useEffect } from "react"
import HamburgerNavigation from "@/components/HamburgerNavigation"
import sectionStyles from '@/styles/Sections.module.css'
import SectionDisplay from "@/components/SectionDisplay"

export default function Home() {

  const [isDesktop, setDesktop] = useState(false)

  useEffect(()=>{
    if (window.innerWidth > 840) {
      setDesktop(true)
    } else {
      setDesktop(false)
    }

    const showNav = () => {
      if (window.innerWidth > 840) {
        setDesktop(true)
      } else {
        setDesktop(false)
      }
    }

    window.addEventListener('resize', showNav)
    return () => window.removeEventListener('resize',showNav)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {isDesktop ? <Navbar/> : <HamburgerNavigation/>}

      <SectionDisplay
        headingVariant='h1'
        align="center"
        headingContent="Make your awesome recipes more awesome"
        bodyContent="A home-sweet-home for your tasty treats. Share your finger licking recipes with our community and we will make it better than ever!"
        buttonContent='Start Sharing'
        global={`${sectionStyles.white} ${sectionStyles.relative}`}
        buttonStyles={`${sectionStyles.fontSmall} ${sectionStyles.f600} ${sectionStyles.buttonCenter}`}
      ></SectionDisplay>
      <img src="/salad-bowl.webp" style={{maxWidth: '300px'}}></img>
      
      <SectionDisplay
        headingVariant='h2'
        align='center'
        headingContent='We put the fun in'
        bodyContent="Not just your regular blogging site. participate in exciting food quizzes and get a chance to win a food hamper Anthony!"
        buttonContent='Win Exciting Gifts'
        buttonStyles={`${sectionStyles.fontSmall} ${sectionStyles.f600} ${sectionStyles.buttonCenter}`}
        headingStyles={sectionStyles.section2Heading}
      ></SectionDisplay>
        <Footer/>
    </ThemeProvider>
  )
}
