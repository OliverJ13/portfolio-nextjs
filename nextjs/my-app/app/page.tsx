import Image from "next/image";
import style from "./page.module.css"
import Monogram from "@/assests/images/GDES131_FA25_4.1Monogram_Ojelderks.png"
import Galaxy from "@/assests/images/Glass_galaxy.png"
import Illustrative from "@/assests/images/GDES131_FA25_2.2IllustrativeSet_OJelderks_Portrait.png"
import Navigation from "@/components/header/Navigation"

export default function Home() {
  return (
  <>
    <Navigation />
     
    <div className={style.business}>
        <h1>Freckled Vectors</h1>
    </div>
    <div className={style.mainpagefooter}>
        <div className={style.available}>Availibility: Anytime</div>
        <div className={style.contact}><a href="#contactjump">Contact</a></div>
        <div className={style.copy}>Copyright &copy; 2026</div>
    </div> 
    <div className={style.footer}> 
    <div className={style.recentwork}>
        <h2>Most Recent Work</h2>
        <div className={style.recent_grid}>
        <div className={style.recent1}>
            <Image src={Monogram} alt=""/>
        </div>
        
        <div className={style.recent2}>
            <Image src={Galaxy} alt=""/>
        </div>
        
        <div className={style.recent3}>
            <Image src={Illustrative} alt=""/>
        </div> </div>
    </div>
    <div className={style.contact}>
        <h2>Contact Me!</h2>
        <div id="contactjump"></div>
        <form action="#">
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
    </div> 
  </>
  );
}
