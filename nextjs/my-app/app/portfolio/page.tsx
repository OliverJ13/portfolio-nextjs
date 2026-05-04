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

export default function Portfolio() {
  return (
  <>
     <Navigation />

    <div className={style.h1}><h1>All My Works</h1></div>

    <div className={style.project_container1}>
        <div className={style.monogram}><a href="/individual-projects#monogram_link"><Image src={Monogram} alt="Monogram"/></a></div>
        <div className={style.extraproject1}></div>
        <div className={style.illustrative}><a href="/individual-projects#illustrative_set"><Image src={Illustrative} alt="Illustrative Set"/></a></div>
        <div className={style.extraproject2}></div>
        <div className={style.extraproject3}></div>
    </div>

    <div className={style.project_container2}>
        <div className={style.animalmascot}><a href="/individual-projects#animal_mascot"><Image src={Animal} alt="Animal Mascot"/></a></div>
        <div className={style.glassgalaxy}><a href="/individual-projects#glass_galaxy"><Image src={Galaxy} alt="Glass Galaxy"/></a></div>
        <div className={style.bookcasebackground}><a href="/individual-projects#bookcase_background"><Image src={Bookcase} alt="Bookcase Background"/></a></div>
    </div>
    
    <div className={style.project_container3}>
        <div className={style.extraproject4}></div>
        <div className={style.extraproject5}></div>
    </div>
    <div className={style.project_container4}>
        <div className={style.bedroombackground}><a href="/individual-projects#bedroom_background"><Image src={Bedroom} alt="Bedroom Background"/></a></div>
        <div className={style.extraproject6}></div>
        <div className={style.hobbylogo}><a href="/individual-projects#hobby_logo"><Image src={Hobby} alt="Hobby Logo"/></a></div>
    </div> 
  </>
  );
}
