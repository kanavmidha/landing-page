import { Button, FormControl, InputLabel, Grid } from "@mui/material";
import { Input } from "@mui/material";

export default function NewsletterForm() {
    return(<Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <FormControl>
            <InputLabel htmlFor="name">name</InputLabel>
            <Input variant='outlined' id="name"/>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="email">email</InputLabel>
            <Input variant='outlined' id="email"/>    
        </FormControl>
        <Button variant="contained" sx={{backgroundColor: '#83c5be !important'}}>signup</Button>
        <img style={{position: 'absolute', zIndex: '-1', right: '0'}} src="/newsletter.png"></img>
    </Grid>
    )
}
