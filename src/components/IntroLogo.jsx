import LogoIntro from "../assets/img/logo/logo.png";

const IntroLogo = () => {
  return (
    <div className={`h-[1074px]
                     ml-[15px] 
                     mr-[15px] 
                     items-center
                     justify-center
                     flex
                     `}>
        <div className="logoIntro"><img src={LogoIntro} alt="" /></div>                
    </div>
  )
}

export default IntroLogo