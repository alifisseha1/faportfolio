import cf from "./certificate.module.css";
import certificate from "../../assets/fissehaCertificate.png"
import { motion } from "framer-motion";
function Certificate() {
  return (
    <div className={cf.container}>
      
      <motion.div
        initial={{ scale: 1.7 }}
        whileInView={{ scale: 1 }}
        transition={{duration:0.7, delay:0.4}}
        className={cf.boxC}>
     
        <img src={certificate} alt="certificate" />
      </motion.div>
    </div>
  )
}

export default Certificate