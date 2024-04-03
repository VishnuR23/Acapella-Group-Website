import './App.css'
import VideoCarousel from "./VidCar";
import logo from "./Logo.png"
import group from "./group5.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhotoCarousel from './PhotoCar';
import group1 from "./IMG_4828.jpg";
import insta from "./insta.png";
import PhotoCarousel1 from "./VidCar.jsx"
import MembersPage from "./MembersPage.jsx"


function App() {
  return (
    <>
      <div className = "Home">
        <div className = "abovepic">
          <h5>UC Berkeley Presents...</h5>
          <h1>Noteworthy A Capella</h1>
          <img src = {logo} alt = "logo" className='logo'/>
        </div>
        <img src = {group} alt = "groupPic" className = "belowpic"/>
      </div>

      <div className = "About">
        <h1>About Us!</h1>
        <p>We're an all-inclusive lower-voices a cappella group known for our fun performances and original music!
          In the year 2000, a rag-tag group of brave souls banded together to accomplish something great that would change the world as we knew it. But they failed. So they did the next best thing. Since then, Noteworthy has been serenading the people of UC Berkeley and beyond with sonic styles across all genres and all levels of comedy. Along the way, we have endured episodes of accidental bank robbery,
          rogue capitalistic holiday mascots, and rediscovering the power of friendship every semester because the plot demands it. Through this emerged Berkeley's "brightest a cappella group on campus!” Our legal team told us to put that in quotes.</p>

          <ul className = "HList1">
            <li> Some Events! </li>
            <li>Hire Us!</li>
            <li>Follow Us!</li>
          </ul>

          <ul className = "HList2">
            <li>We host a ton of different events ranging from philanthropy to competititons. <br />
               Be sure to check out some of the events we held in the past. We have planned/are planning
               <br/> events for a variety of different
               <br /> holidays, celebrations, and important events. </li>
            <li> Why Hire Us? We are a group of talented and passionate young singers that would love <br />
                to make an impact within more professional environments. 
               <br /> We would love to enter the sphere of the workspace and do more professional events. <br /> 
                If that interests you in any manner, be sure to check us out.</li>
          </ul>
          <div className = "slider">
            <PhotoCarousel />
          </div>
            <img src = {group1 } alt = "group1" className = "group1"/>
            <img src = {insta} alt = "insta" className = "insta"/>
      </div>

      <div className = "Vids">
        <h1>Check out some of our favorite videos</h1>
        <PhotoCarousel1 />
      </ div>

      <div>
        <h1>Members</h1>
        <MembersPage/>
      </ div>
    </>
  )
}
export default App
