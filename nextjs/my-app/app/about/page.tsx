import Image from "next/image";
import style from "./page.module.css"
import me from "@/assests/images/Nice_me_pic.jpg"
import Navigation from "@/components/header/Navigation"

export default function About() {
  return (
  <>
      <Navigation/>
      <div className={style.h1}>About Me</div>
    <div className={style.perspic}><Image src={me} alt="It's a me, Mario!"/></div>
    <div className={style.wordblocks}>
     <div className={style.persdetail}>My name is Oliver Jelderks and I am currently 18 years old. I am a graphic designer who likes working with both the web development and branding portions of projects. I want every project to make the client happy, but also ensure that I am happy with the outcome as well. I beleieve that everyone deserves a chance for their business to grow and flurish and I hope that I can help do that for you!</div>
    <div className={style.work}>Currently the works that I have done are in my portfolio section. I have only been doing fors for school and personal projects so far, but as I grow I hope that will change!</div>
    <div className={style.experience}>My experience as a Graphic Designer right noe is just going for my associates at North Idaho College. But I have been doing art for a lot longer than that!</div>
</div>
  </>
  );
}
