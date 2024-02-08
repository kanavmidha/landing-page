import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "@/styles/Sections.module.css"

export default function SectionDisplay(props) {

    let id = ""

    return(
    <Grid container rowSpacing={3} className={props.global}>
        <Grid item xs={12}>
            <Typography
                variant={props.headingVariant}
                align={props.align}
                className={props.headingStyles}
            >
                {props.headingContent}
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography
                variant='body1'
                align={props.align}
                className={props.bodyStyles}
            >
                {props.bodyContent}
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Button
                variant="contained"
                color="darkSkin"
                className={props.buttonStyles}
            >
                {props.buttonContent}
            </Button>
        </Grid>
        <div className={props.bg}></div>
    </Grid> 
    )
    
}