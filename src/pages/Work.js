import React from 'react';
import { Container,} from 'react-bootstrap';
import { GrWorkshop } from "react-icons/gr";
import Projects from '../components/Projects';
import { motion, AnimatePresence } from "framer-motion";


const Work = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0, y:15}}
        animate={{ opacity:1, y:0}}
        transition={{ ease: "easeOut", duration: 2}}>
        <Container className='mt-5'>
            <h2 className='display-1 fw-bold'>
              <GrWorkshop/>
              My Work
            </h2>
            <p>Here are some of the projects I've worked on:</p>
            <hr/>
            <Container className='d-flex flex-wrap gap-1'>
              <Projects />
            </Container>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Work;
