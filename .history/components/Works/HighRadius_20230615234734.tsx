import { motion } from "framer-motion"

const HighRadius = () => {
  return (
    <motion.div
    initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.1}}
        className="w-full"
    >
        <h3>Intern</h3>
        <p></p>
    </motion.div>
  )
}

export default HighRadius
