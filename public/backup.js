<div>
<Grid container rowSpacing={3} justifyContent="center" sx={{color: '#fff'}} >
          <Grid item xs={12}>
            <Typography
              variant="h1"
              align="center"
              sx={{marginTop:'7rem'}}
            >
              Make your awesome recipes more awesome
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              align="center"
              variant="body1"
            >A home-sweet-home for your tasty treats. Share your finger licking recipes with our community and we will make it better than ever!
            </Typography>
            <Button
              color="darkSkin"
              variant="contained"
            sx={{ backgroundColor: '#e29578 !important',fontFamily: 'Sailec Bold', textTransform: 'none', display:'block', margin: '1rem auto', fontSize: '1rem' }}
            >Start Sharing</Button>
          </Grid>
        </Grid>
        <Box sx={{maxWidth: '5rem', margin: '3rem auto'}}>
<img style={{filter: 'drop-shadow(2rem 4.5rem 3rem #000)'}} src="/salad-bowl.png"></img>
</Box>
<Grid container direction={'row'} sx={{position: 'relative'}}>
          <Grid item xs={12}>
            <Typography 
              align="center" 
              variant="h2"
              sx={{marginTop: '10rem'}}
            >We put the fun in</Typography>
            <Typography 
              align="center" 
              variant="h2"
              sx={{ color: '#e29578'}}
            >Fondue</Typography>
            <Typography 
              variant="body1"
              align="center"
            >
              Not just your regular blogging site. participate in exciting food quizzes and get a chance to win a food hamper Anthony!
            </Typography>
            <Button 
              variant="contained" 
              sx={{backgroundColor: '#e29578 !important', fontFamily: 'Sailec Bold', textTransform: 'none', display: 'block', fontSize: '1rem', margin: 'auto'}}  
            >Win Exciting Gifts</Button>
          </Grid>

<Box sx={{marginTop: '5rem'}}><img src="/soup-bowl.png"></img></Box>
<Box><img style={{width: '100vw', position: 'absolute', top: '0', left: '0', zIndex: '-1'}} src="/bg1.png"></img></Box>
</Grid>
  <Grid container position='relative' justifyContent='space-between' sx={{ marginBottom: '20rem' }}>
    {/* <Box><img style={{maxWidth: '32rem', borderRadius:'50%', boxShadow: '0 1rem 2.5rem rgba(0,0,0,0.8)'}} src="/paneer-dish.png"></img></Box> */}
    <Grid item xs={12} sx={{ marginTop: '7rem', color: '#fff' }}>
      <Typography
        variant="h2"
        align="center"
      >
        Featured Recipe of the week
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ margin: '1rem 0' }}
      >
        Try this delicious indian cuisine and give your taste buds a new venture. tangy lime juice mixed with soft delicious cottage cheese just melts in your mouth.
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: '#e29578 !important', fontFamily: 'Sailec Bold', textTransform: 'none', display: 'block', margin: 'auto', fontSize: '1rem' }}
      >Try it Now</Button>
    </Grid>
    {/* <Box><img style={{position: 'absolute', top: '0', left: '0', zIndex: '-1'}} src="/bg2.png"></img></Box> */}
  </Grid>
  <Grid container justifyContent={'space-between'}>
    <Grid item xs={12}>
      <Typography
        variant="h3"
        align="left"
        sx={{ marginBottom: '1.5rem' }}
      >The Nugget Newsletter</Typography>
      <Typography
        variant="body1"
        align="left"
      >Get the weekly digest straight to your email so you don't miss out on what's happening in the community. subscribe to our nugget newsletter now!</Typography>
    </Grid>
    <Box>
      <NewsletterForm />
    </Box>
  </Grid>
  <Grid container position={'relative'} sx={{ marginTop: '5rem', paddingTop: '10rem', marginBottom: '5rem' }}>
    <Grid item xs={12}>
      <Typography
        variant="h3"
        align="left"
      >Your recipes deserve to be seen</Typography>
      <Typography
        variant="body1"
        align="left"
        sx={{ marginTop: '1.5rem' }}
      >Let your recipes get popular as we upload them on our social media. Don't forget to give us a follow!</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography
        variant="h3"
        align="right"
      >Anthony says, 'Hello'</Typography>
      <Typography
        variant="body1"
        align="right"
        sx={{ marginTop: '1.5rem' }}
      >
        "As the owner of Anthony's, I'm passionate about food and cooking, and I believe that great meals bring people together. that's why I created this blog – to share my love of cooking and bring together a community of like-minded foodies."
      </Typography>
      <Typography
        variant="body1"
        align="right"
        sx={{ marginTop: '1.5rem' }}
      >
        "At Anthony's, we value transparency and honesty. that's why we always provide honest reviews of the products and ingredients we use in our recipes. we believe in earning your trust and loyalty by being upfront and truthful about the products we recommend."
      </Typography>
    </Grid>
    {/* <img style={{position: 'absolute', top: '0', left: '0', zIndex: '-2'}} src="/bg3.png"></img> */}
  </Grid>
</div>
