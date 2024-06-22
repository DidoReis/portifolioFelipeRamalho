import Loading from "../assets/img/loading.png"

const introLoad = () => {
  return (
    <div className={`h-[1074px]
                     ml-[15px] 
                     mr-[15px] 
                     items-center
                     justify-center
                     flex
                     `}>
        <div className="Loading"><img src={Loading} alt="" /></div>                
    </div>
  )
}

export default introLoad