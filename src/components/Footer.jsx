import styles from "../styles"

const Footer = () => {
  return (
    
    <div className={`w-full 
                     h-[17px] 
                     mt-[222px]
                     ml-[15px]
                     mr-[15px]
                     flex 
                     justify-center 
                     items-center
                     ${styles.boxWidth}`}>
                      
    <div className={`w-[290px]
                     h-[17px]
                    
                     flex
                     justify-center
                     items-center
                    `}>
        <p className={`font-Inter
                                    text-[14px]
                                    font-light
                                    
                                    `}>
                    design and development by Edivando Reis
        </p>
    </div>
    </div>
  )
}

export default Footer