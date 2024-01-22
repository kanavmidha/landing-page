import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Navbar() {
    return (
        <AppBar position='static' sx={{ backgroundColor: 'unset', boxShadow: 'none', paddingTop: '1rem' }}>
            <Grid container direction='row' justifyContent='space-between' >
                <Grid item xs={3} container justifyContent="space-between">
                    <Link underline="hover" href="#">blog</Link>
                    <Link underline="hover" href="#">recipes</Link>
                    <Link underline="hover" href="#">contact</Link>
                    <Link underline="hover" href="#">about</Link>
                </Grid>
                <>
                    <Link href="/">
                        <Grid item xs={12}>
                            <img src='/Anthonys.png' style={{ width: '170px' }}></img>
                        </Grid>
                    </Link>
                </>
                <Grid item xs={3} container sx={{ justifyContent: 'space-between' }}>
                    <Link underline="hover" href="#">instagram</Link>
                    <Link underline="hover" href="#">facebook</Link>
                    <Link underline="hover" href="#">twitter</Link>
                </Grid>
            </Grid>
        </AppBar>
    )
}