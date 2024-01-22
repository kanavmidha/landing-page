import { Button, Grid } from "@mui/material";
import Link from "next/link";

export default function Footer() {
    return (
        <Grid container position={'relative'}>
            {/* <img src="/anthonys-white.png"></img> */}
            <Grid>
                <Link href='#'>blog</Link>
                <Link href='#'>recipes</Link>
                <Link href='#'>contact</Link>
                <Link href='#'>about</Link>
            </Grid>
            <Grid>
                <Link href='#'>instagram</Link>
                <Link href='#'>facebook</Link>
                <Link href='#'>twitter</Link>
            </Grid>
            <Button>Start Sharing</Button>
            {/* <img style={{ position: 'absolute', top: '0', left: '0', zIndex: '-1' }} src="/bg4.png"></img> */}
        </Grid>
    )
}
