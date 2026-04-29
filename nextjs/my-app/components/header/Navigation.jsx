import style from "@/components/header/Navigation.module.css"



const Navigation = () => {
    return(
        <div className={style.header}>
    <header> <div className={style.lefthead}>
        <a href="/"><img
        className={style.logo}
        src="/logo_transparentbck.svg"
        alt="My Logo"
        width="150"
        height="150"
        /> </a>
        Oliver Jelderks</div> 
        <div className={style.righthead}>
            <a href="/about">About me</a>
            <a href="/projects">Portfolio</a> 
            <a href="/individual-projects">Individual Projects</a>
            </div></header>
       </div>
    )
}

export default Navigation;