import styles from '@/styles/Hamburger.module.css'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import { useState } from 'react'
import { StyleRegistry } from 'styled-jsx'

export default function HamburgerNavigation () {

    const [navOn, setNavOn] = useState()

    const showNavClass = () => {
        const menuIcon = document.querySelector('input[type="checkbox"]')
        if (!(menuIcon.checked)) {
            setNavOn()
            return
        } else{
            if(menuIcon.checked) {
                setNavOn(styles.navOn)
            }
        }
    }

    return (
    <Grid container justifyContent="space-between" className={styles.p1}>
        <Link href="/">
            <Grid item xs={12}>
                <img src='/Anthonys.png' style={{ width: '170px' }}></img>
            </Grid>
        </Link>
        <Grid item>
            <button className={styles.toggleBtn} onClick={showNavClass}>
                <label className={styles.hamburgerIcon}>
                    <input type="checkbox"></input></label>
            </button>
        </Grid>

        <Grid container flexDirection='column' flexWrap={'nowrap'} alignItems="flex-end" className={`${styles.mainLinks} ${navOn}`}>
            <Link underline="hover" href="#">blog</Link>
            <Link underline="hover" href="#">recipes</Link>
            <Link underline="hover" href="#">contact</Link>
            <Link underline="hover" href="#">about</Link>
            <Link underline="hover" href="#">instagram</Link>
            <Link underline="hover" href="#">facebook</Link>
            <Link underline="hover" href="#">twitter</Link>
        </Grid>
    </Grid>
    )
}
// add toggle button functionality and merge it with the window resize event. 

