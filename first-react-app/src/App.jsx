
//use State is a React hook
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import PropsDisplayer from './components/PropsDisplayer/PropsDisplayer' // up the top
import City from './components/City/City'
import Pets from './components/Pets/pets'
import FullName from './components/Names/Fullname.jsx'
import MoviesList from './components/Movie List/movielist.jsx'
//import Moviemap from './components/Movie List/moviemap.jsx'
import MoodChanger from './components/MoodChanger/moodchanger.jsx'
import BirthdayTranslator from './components/Complex/Birthday/birthdayTranslator.jsx'
import Weather from './components/Weather/weather.jsx'
import LoginForm from './components/Form/form.jsx'
//import ComplexComment from './components/Exercise/ComplexComment.jsx'
//import ErrorMessage from './error.jsx'
//import ExplodingBomb from './components/Error/bomb.jsx'
import Clock from './components/Clocks/clock.jsx'
import ClockDisplay from './components/Clocks/clockdisplay.jsx'
//import ActivityFinder from './components/useEffect/activityFinder.jsx'
import BitcoinRates from './components/BitCoinRates/BitCoinRates.jsx'
import RefCounter  from './components/countREf/countRef.jsx'
import VideoPlayer from './components/VideoPlayer/videoPlayer.jsx'
import PostListReducer from './components/useReducer/postList.jsx'
import SubscribeForm from './components/SubscribeForm/subscribeForm.jsx'
import { UserProvider } from './context/UserContext.jsx'
//import MyThemeProvider, { MyThemeContext } from './context/ThemeContext.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import NavBar from './components/NavBar/navbar.jsx'
import CustomCard from './components/Card/card.jsx'
import MUIDialog from './components/Dialogs/dialogs.jsx'
import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from './components/themes/tealTheme';



  function App() {
    return (
      <>
        <ThemeProvider theme={tealTheme}>{/* App.jsx components */}
        <UserProvider>
    
     
          <NavBar></NavBar>
          <AppRoutes></AppRoutes>
          <MUIDialog text="My first MUI Dialog"></MUIDialog>
     
          
          {/*<PropsDisplayer></PropsDisplayer >
          <City name="Sydney" />
          <City name="Melbourne" state="VIC" />
          <City name="Chicago" state="Illinois" country="USA" />
          <City name="Newcastle">
            //Children
            <div>Newcastle is a harbour city in the Australian state of New South Wales.</div>
            <div><strong>Population:</strong> 322,278 (2016)</div>
          </City>
         <Pets name="Doggy" type="" colour="brown"></Pets>
          <ClockDisplay></ClockDisplay>
          <BitcoinRates></BitcoinRates>
          <BirthdayTranslator></BirthdayTranslator>
          <Weather></Weather>
          <RefCounter></RefCounter>
          <VideoPlayer></VideoPlayer>
           <FullName first="Kendrick" middle="'the GOAT'" last="Lamar"> </FullName>
          <PostListReducer></PostListReducer>
          <SubscribeForm></SubscribeForm>
           <CustomCard title="Iguana">Green
Lizard Card</CustomCard>
          <MoodChanger></MoodChanger>
          <MoviesList></MoviesList> */}
    
    
    
          </UserProvider>
             </ThemeProvider>
      </>
     
    )
  }

export default App