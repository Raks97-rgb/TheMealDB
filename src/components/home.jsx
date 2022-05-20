import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../Images/logo.png';
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {styled,alpha } from '@mui/material/styles';
import flogo from '../Images/facebook_icon.png';
import tlogo from '../Images/twitter_icon.png';
import { Box } from '@mui/system';
import mealicon from '../Images/meal-icon.png';
import paypal from '../Images/paypal.svg'
import seperator from '../Images/separator.jpg';
import totalmeals from '../Images/totalmeals.png';
import totalingredients from '../Images/totalingredients.png';
import images from '../Images/images.png'
import meal1 from '../Images/meal1.jpg';
import meal2 from '../Images/meal2.jpg';
import meal3 from '../Images/meal3.jpg';
import meal4 from '../Images/meal4.jpg';
import meal5 from '../Images/meal5.jpg';
import meal6 from '../Images/meal6.jpg';
import meal7 from '../Images/meal7.jpg';
import meal8 from '../Images/meal8.jpg';
import Chicken from '../Images/Chicken.png';
import Salmon from '../Images/Salmon.png';
import Beef from '../Images/Beef.png';
import Pork from '../Images/Pork.png';
import meal9 from '../Images/meal9.jpg';
import meal10 from '../Images/meal10.jpg';
import meal11 from '../Images/meal11.jpg';
import meal12 from '../Images/meal12.jpg';
import meal13 from '../Images/meal13.jpg';
import meal14 from '../Images/meal14.jpg';
import meal15 from '../Images/meal15.jpg';
import Peanut from '../Images/Peanut.png';
import Mustard from '../Images/Mustard.png';
import WhiteChocolate from '../Images/WhiteChocolate.png';
import Paneer from '../Images/Paneer.png';
import flag1 from '../Images/flag1.png';
import foologo from '../Images/foologo.png';
import fcock from '../Images/fcock.png';
import faudio from '../Images/faudio.png';
import fsport from '../Images/fsport.png';
import flag2 from '../Images/flag2.png';
import flag3 from '../Images/flag3.png';
import flag4 from '../Images/flag4.png';
import flag5 from '../Images/flag5.png';
import flag6 from '../Images/flag6.png';
import flag7 from '../Images/flag7.png';
import flag8 from '../Images/flag8.png';
import flag9 from '../Images/flag9.png';
import flag10 from '../Images/flag10.png';
import flag11 from '../Images/flag11.png';
import flag12 from '../Images/flag12.png';
import flag13 from '../Images/flag13.png';
import flag14 from '../Images/flag14.png';
import flag15 from '../Images/flag15.png';
import flag16 from '../Images/flag16.png';
import flag17 from '../Images/flag17.png';
import flag18 from '../Images/flag18.png';
import flag19 from '../Images/flag19.png';
import flag20 from '../Images/flag20.png';
import flag21 from '../Images/flag21.png';
import flag22 from '../Images/flag22.png';
import flag23 from '../Images/flag23.png';
import flag24 from '../Images/flag24.png';
import flag25 from '../Images/flag25.png';
import flag26 from '../Images/flag26.png';
import flag27 from '../Images/flag27.png';
import flag28 from '../Images/flag28.png';
import flag29 from '../Images/flag29.png';
import flag30 from '../Images/flag30.png';
import flag31 from '../Images/flag31.png';
import flag32 from '../Images/flag32.png';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Home = () => {

  return (
      <div>

    <AppBar position="static" sx={{backgroundColor:'#3e2723'}}>
      <Container maxWidth="xl">
        <Toolbar>
        <img src={logo} alt=''/>
         <Grid container justifyContent='flex-end' spacing={1} lg={12} md={8}>
             <Grid item>
                 <Button variant='contained' color='error'>Home</Button>
             </Grid>
             <Grid item>
                 <Button color='inherit' href='https://www.themealdb.com//api.php'>API</Button>
             </Grid>
             <Grid item>
                 <Button color='inherit' href='https://forum.kodi.tv/showthread.php?tid=282387'>Forum</Button>
             </Grid>
             <Grid item>
                 <Button href='https://www.facebook.com/TheDataDB/'><img src={flogo} alt=''/></Button>
             </Grid>
             <Grid item>
                 <Button href='https://twitter.com/TheAudioDB'><img src={tlogo} alt=''/></Button>
             </Grid>
             <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
         </Grid>
          
        </Toolbar>
      </Container>
    </AppBar>
    <Box component='main' overflow='auto' sx={{backgroundColor:'#4e342e',p:2}}>
     <Grid container flexDirection='row' justifyContent='space-between' lg={12} md={12} sm={12} xs={12}>
         <Grid item lg={2.5} md={3} display={{xs:'none',sm:'none',md:'flex',lg:'flex'}}>
             <img src={mealicon} alt=''/>
         </Grid>
         <Grid item lg={7} md={6} sm={12} xs={10}>
             <Typography variant='h4' color='white' textAlign='center'>
                 Welcome to TheMealDB
             </Typography>
             <Typography color='white' textAlign='center'>
            Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around <br/> the world.
            <br/>
			We also offer a 
            <a href='https://www.themealdb.com/api.php' style={{textDecoration:'none',color:'#ef6c00'}}> free JSON API</a>
             &nbsp;for anyone wanting to use it, with additional features <br/> for subscribers.<br/>
             <Button href='https://www.paypal.com/checkoutnow?sessionID=uid_e1b13ce77e_mdy6mdu6mte&buttonSessionID=uid_ac6d85377e_mdy6mdu6mte&stickinessID=uid_83352ed93b_mdq6mti6mjk&inlinexo=false&fundingSource=paypal&buyerCountry=IN&locale.x=en_US&commit=true&clientID=AfHEVYLvvBE2km3eTSHJwF2A6W2YN3CZE--80QyFC7m92Nob4rcZlpzLj-hfcVQGEyBwQombwraLOaEb&env=production&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9QWZIRVZZTHZ2QkUya20zZVRTSEp3RjJBNlcyWU4zQ1pFLS04MFF5RkM3bTkyTm9iNHJjWmxwekxqLWhmY1ZRR0V5QndRb21id3JhTE9hRWImdmF1bHQ9dHJ1ZSZpbnRlbnQ9c3Vic2NyaXB0aW9uIiwiYXR0cnMiOnsiZGF0YS1zZGstaW50ZWdyYXRpb24tc291cmNlIjoiYnV0dG9uLWZhY3RvcnkiLCJkYXRhLXVpZCI6InVpZF9tamhuYmR2dGpxc2VnaHppZXVvZWFidGh6anJsYmcifX0&xcomponent=1&version=5.0.314&token=6G221466D45622125'
             style={{background:'#f9a825',color:'black',paddingLeft:15,paddingRight:15,textTransform:'capitalize'}}><img src={paypal} height='15px' alt=''/>&nbsp;Subscribe</Button><br/>
             Click to Support $2 per month(cancel anytime)<br/>
             Currently 750 supporters 
             </Typography>
         </Grid>
         <Grid item lg={2.5} md={3} display={{xs:'none',sm:'none',md:'flex',lg:'flex'}}>
         <img src={mealicon} alt=''/>
         </Grid>
     </Grid>
     <Grid container flexDirection='column' justifyContent='center' alignItems='center'>
         <Grid item pb='5'>
             <img src={seperator} width='100%' alt=''/>
         </Grid><br/>
         <Grid item color='white' alignContent='center' sx={{width:'400px',pb:'15px'}}>
         <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search a meal"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
         </Grid>
         <Grid item>
             <Typography color='white' textAlign='center'> 
              <img src={totalmeals} alt=''/>&nbsp;Total Meals:283 &nbsp;
              <img src={totalingredients} alt=''/>&nbsp;Total Ingredients:574 &nbsp;
              <img src={images} alt=''/>&nbsp;Images:283</Typography>
         </Grid>
         <Grid item>
         <img src={seperator} width='100%' alt=''/>
         </Grid>
     </Grid>
     <Typography variant='h6' color='white' textAlign='center'>Latest Meals</Typography><br/>
     <Grid container flexDirection='row' justifyContent='center' spacing={5} sx={{pt:2}}>
        <Grid item>
              <a href='https://www.themealdb.com/meal/53063-Chivito-uruguayo-Recipe'>
              <img src={meal1} height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Chivito uruguayo</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/meal/53062-Walnut-Roll-Gu%C5%BEvara-Recipe'>
              <img src={meal2}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Walnut Roll Gužvara</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/meal/53061-Fresh-sardines-Recipe'>
              <img src={meal3}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Fresh sardines</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/meal/53060-Burek-Recipe'>
              <img src={meal4}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Burek</Typography>
          </Grid>
     </Grid>
     <Grid container flexDirection='row' justifyContent='center' spacing={5} sx={{pt:2}}>
        <Grid item>
             <a href='https://www.themealdb.com/meal/53059-Mushroom-soup-with-buckwheat-Recipe'>
              <img src={meal5} height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Mushroom soup with <br/> buckwheat</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/meal/53058-Croatian-Bean-Stew-Recipe'>
              <img src={meal6}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Croatian Bean Stew</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/meal/53057-Traditional-Croatian-Goulash-Recipe'>
              <img src={meal7}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Traditional Croatian Goulash</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/meal/53056-Croatian-lamb-peka-Recipe'>
              <img src={meal8}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Croatian lamb peka</Typography>
          </Grid>
     </Grid>
     <Grid container flexDirection='column' justifyContent='center' alignItems='center'>
         <Grid item pb='5'>
             <img src={seperator} width='100%' alt=''/>
         </Grid><br/>
         <Grid item color='white' alignContent='center' sx={{width:'400px',pb:'15px'}}>
         <Typography variant='h6' color='white' textAlign='center'>Popular Ingredients</Typography>
         </Grid>
         <Grid item>
         <Grid container flexDirection='row' justifyContent='center' spacing={5} sx={{pt:2}}>
        <Grid item>
              <a href='https://www.themealdb.com/ingredient.php?c=1'>
              <img src={Chicken} height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Chicken</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/ingredient.php?c=2'>
              <img src={Salmon}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Salmon</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/ingredient.php?c=3'>
              <img src={Beef}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Beef</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/ingredient.php?c=4'>
              <img src={Pork}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Pork</Typography>
          </Grid>
         </Grid>
         </Grid>
         <Grid item>
         <img src={seperator} width='100%' alt=''/>
         </Grid>
     </Grid>
     <Typography variant='h6' color='white' textAlign='center'>Random Meals</Typography><br/>
     <Grid container flexDirection='row' justifyContent='center' spacing={5} sx={{pt:2}}>
        <Grid item>
              <a href='https://www.themealdb.com/meal.php?c=52910'>
              <img src={meal9} height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Chinon Apple Tarts</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/meal.php?c=52835'>
              <img src={meal10}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Fettucine alfredo</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/meal.php?c=52964'>
              <img src={meal11}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Smoked Haddock Kedgeree</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/meal/53063-Chivito-uruguayo-Recipe'>
              <img src={meal1}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Chivito uruguayo</Typography>
          </Grid>
     </Grid>
     <Grid container flexDirection='row' justifyContent='center' spacing={5} sx={{pt:2}}>
        <Grid item>
              <a href='https://www.themealdb.com/meal.php?c=52873'>
              <img src={meal12} height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Beef Dumpling Stew</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/meal.php?c=53037'>
              <img src={meal13}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Coddled pork with cider</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/meal.php?c=53023'>
              <img src={meal14}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Sledz w Oleju<br/> (Polish Herrings)</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/browse.php?s=Escovitch+Fish'>
              <img src={meal15}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Escovitch Fish</Typography>
          </Grid>
     </Grid>
     <Grid container flexDirection='column' justifyContent='center' alignItems='center'>
         <Grid item pb='5'>
             <img src={seperator} width='100%' alt=''/>
         </Grid><br/>
         <Grid item color='white' alignContent='center' sx={{width:'400px',pb:'15px'}}>
         <Typography variant='h6' color='white' textAlign='center'>Random Ingredients</Typography>
         </Grid>
         <Grid item>
         <Grid container flexDirection='row' justifyContent='center' spacing={5} sx={{pt:2}}>
        <Grid item>
              <a href='https://www.themealdb.com/ingredient.php?c=420'>
              <img src={Peanut} height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Peanut Cookies</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/ingredient.php?c=219'>
              <img src={Mustard}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Mustard</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/ingredient.php?c=496'>
              <img src={WhiteChocolate}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>White Chocolate</Typography>
          </Grid>
          <Grid item>
              <a href='https://www.themealdb.com/ingredient.php?c=431'>
              <img src={Paneer}  height='200px' width='200px' alt=''/></a>
              <Typography color='#ef6c00' textAlign='center'>Paneer</Typography>
          </Grid>
     </Grid>
         </Grid>
         <Grid item>
         <img src={seperator} width='100%' alt=''/>
         </Grid>
     </Grid>
     <Typography variant='h6' color='white' textAlign='center'>Browse Country</Typography><br/>
     <Grid container justifyContent='center' spacing={0.5}>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=British' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag1} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=American' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag2} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=French' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag3} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Canadian' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag4} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Jamaican' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag5} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Chinese' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag6} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Dutch' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag7} height='60px' width='70px'alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Egyptian' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag8} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Greek' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag9} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Indian' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag10} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Irish' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag11} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Italian' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag12} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Japanese' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag13} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Kenyan' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag14} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Malaysian' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag15} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Mexican' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag16} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         </Grid>
     <Grid container justifyContent='center' spacing={0.5}>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Moroccan' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag17} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Croatian' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag18} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Portuguese' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag19} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Russian' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag20} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Argentinian' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag21} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Spanish' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag22} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Slovakian' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag23} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Thai' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag24} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Saudi%20Arabian' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag25} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Portuguese' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag26} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Vietnamese' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag27} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Turkish' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag28} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Syrian' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag29} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Algerian' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag30} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Tunisian' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag31} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
         <Grid item>
             <a href='https://www.themealdb.com/browse.php?a=Polish' style={{textDecoration:'none',color:'#ef6c00'}}>
                 <img src={flag32} height='60px' width='70px' alt=''/>
             </a>
         </Grid>
     </Grid>
     <Typography variant='h6' color='white' textAlign='center' pt={3}>Browse By Name</Typography>
     <Grid container justifyContent='center' color='white' spacing={0.2} pb={5}>
         <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=a' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>A</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=b' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>B</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=c' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>C</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=d' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>D</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=e' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>E</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=f' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>F</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=g' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>G</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=h' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>H</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=i' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>I</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=j' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>J</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=k' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>K</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=l' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>L</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=m' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>M</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=n' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>N</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=o' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>O</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=p' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>P</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=q' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>Q</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=r' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>R</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=s' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>S</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=t' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>T</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=u' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>U</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=v' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>V</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=w' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>W</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=x' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>X</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=y' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>Y</a>
     </Grid>
     /
     <Grid item>
     <a href='https://www.themealdb.com/browse.php?b=z' style={{textDecoration:'none',color:'#ef6c00',fontWeight:'bolder'}}>Z</a>
     </Grid>
     </Grid>
     </Box>
     <footer className='footer'>
         <Box sx={{backgroundColor:'#3e2723',color:'white',p:'30px'}}>
             <Grid container justifyContent='center' spacing={{xs:0,sm:0,md:5,lg:20}}>
                 <Grid item justifyContent='flex-start'>
                 <Typography>&copy; 2022 The MealDB<br/>
                 Proudly built in the UK <img src={foologo} alt=''/></Typography>
                 </Grid>
                 <Grid item>
                     <Grid container flexDirection='row' justifyContent='center'>
                   
                         <Grid item>
                             <a  href='https://www.thecocktaildb.com/'>
                             <img src={fcock} alt=''/></a>
                         </Grid>
                         <Grid item>
                             <a href='https://www.theaudiodb.com/'>
                             <img src={faudio} alt=''/></a>
                         </Grid>
                    
                     <Grid item>
                             <a href='https://www.thesportsdb.com/'>
                             <img src={fsport} alt=''/></a>
                         </Grid>
                         </Grid>
                 </Grid>
                 <Grid item justifyContent='flex-end'>
                     <Grid container flexDirection='row' spacing={3}>
                     <Grid item>
                     <a href='https://www.themealdb.com/about.php' style={{textDecoration:'none',color:'white'}}>About</a>
                     </Grid>
                     <Grid item>
                     <a href='https://www.themealdb.com/faq.php' style={{textDecoration:'none',color:'white'}}>Faq</a>
                     </Grid>
                     <Grid item>                    
                     <a href='https://www.themealdb.com/contact.php' style={{textDecoration:'none',color:'white'}}>Contact</a>
                     </Grid>
                 </Grid>
                 </Grid>
             </Grid>
         </Box>
     </footer>
    
    </div>
  );
}

export default Home;
