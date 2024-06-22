import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer"
import styles from "../styles";

const Index = () => {
  return (
    <div className={`${styles.boxWidth}`}>
        <Navbar/>
        <Carousel/>
        <Footer/>
    </div>
    
  )
}

export default Index