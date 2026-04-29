import Image from "next/image";
import style from "./page.module.css"
import Monogram from "@/assests/images/GDES131_FA25_4.1Monogram_Ojelderks.png"
import Galaxy from "@/assests/images/Glass_galaxy.png"
import Illustrative from "@/assests/images/GDES131_FA25_2.2IllustrativeSet_OJelderks_Portrait.png"
import Animal from "@/assests/images/GDES131_FA25_2.1AnimalMascot_OJelderks copy.png"
import Hobby from "@/assests/images/GDES131_FALL2024_1.1HobbyLogo_Oliver_Jelderks.png"
import Bedroom from "@/assests/images/Background_Bedroom.png"
import Bookcase from "@/assests/images/Backrgound_Bookcase.png"
import Navigation from "@/components/header/Navigation"

export default function IndividualProjects() {
  return (
  <>
     <Navigation/>
    <div className={style.h1}><h1>Individual Projects</h1></div>
    <div className={style.monogramcontainer}>
        <div className={style.monogram}><Image id="monogram_link" src={Monogram} alt="Monogram"/></div>
        <div className={style.monogramtext}>
            <h3>Monogram</h3>
            <p>This is a monogram design, where I created a monogram using the letters "ORJ" in a geometric style. 
            The moon being my O with one of the craters being the dot in the j and the path being the j. Finally with my lampost being my r.</p>
        </div>
    </div>
    
    <div className={style.illustrativecontainer}>
        <div className={style.illustrativetext}>
        <h3>Illustrative Set</h3>
        <p>This is a set of cozy illustrations that I created to be able to turn into a repeating pattern. 
            During this project specificaally I was working a lot with the pen tool and getting the hang of it for future projects</p>
        </div>
    <div className={style.illustrative}><Image id="illustrative_set" src={Illustrative} alt="Illustrative Set"/></div></div>
    
    <div className={style.animalmascotcontainer}>    
        <div className={style.animalmascot}><Image id="animal_mascot" src={Animal} alt="Animal Mascot"/></div>
        <div className={style.animaltext}>
            <h3>Animal Mascot</h3>
            <p>This is my Crow animal mascot. I wanted to go for a stained glass, 
            geometric style with it which is why the feathers of the crow look that way specifically. 
            I was wanting to mess around with shapes and seeing how I could edit a couple shapes to make them into pieces that I needed for the crow.</p>
        </div>
</div>
    
    <div className={style.glassgalaxycontainer}>
        <div className={style.glasstext}>
            <h3>Glass Galaxy</h3>
            <p>For this project I followed a tutorial for a singular planet and changed it as I went to create something that was a little more for me. 
            I really enjoyed messing with gradients and different layer effects in this project.</p>
        </div>
    <div className={style.glassgalaxy}><Image id="glass_galaxy" src={Galaxy} alt="Glass Galaxy"/></div></div>

    <div className={style.bookcasecontainer}>
        <div className={style.bookcasebackground}><Image id="bookcase_background" src={Bookcase} alt="Bookcase Background"/></div>
        <div className={style.bookcasetext}>
            <h3>Bookcase Background</h3>
            <p>I created this a couple of years ago using ProCreate. It was a several day project for myself to try and improve the backgrounds 
            for drawings I was currently doing. I wanted to try and create a gradient effect for the bookcase itself and drawing 
            the eye towards that part specifically.</p>
        </div>
    </div>

    <div className={style.bedroomcontainer}>
        <div className={style.bedroomtext}>
            <h3>Bedroom Background</h3>
            <p>This is a bedroom background I created using ProCreate. It was supposed to be for an animation, 
                that I never got around to 3 years ago. I wanted to create a nice bedroom to make my animation proccess a little more bareable 
                for what I wanted to create.</p>
        </div>
    <div className={style.bedroombackground}><Image id="bedroom_background" src={Bedroom} alt="Bedroom Background"/></div></div>

    <div className={style.hobbylogocontainer}>
        <div className={style.hobbylogo}><Image id="hobby_logo" src={Hobby} alt="Hobby Logo"/></div>
        <div className={style.hobbytext}>
            <h3>Hobby Logo</h3>
            <p>This was my first ever time using Adobe Illustrator, and our project was to create a logo for one of our hobbies. 
            I chose to do chrochet because it was a new and entertaining hobby I had just entered, and I was excited about it. 
            I also was able to draw up the most ideas for chrocet compared to my other hobbies.</p>
        </div>
    </div> 
  </>
  );
}
