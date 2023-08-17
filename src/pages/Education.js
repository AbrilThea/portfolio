import React from 'react';
import { Container, ListGroup} from 'react-bootstrap';
import { motion, AnimatePresence } from "framer-motion";


const Education = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0, y:15}}
        animate={{ opacity:1, y:0}}
        transition={{ ease: "easeOut", duration: 2}}>
        <Container className='mt-5'> 
          <h2 className='display-1 fw-bold'>My Education</h2>
          <p>These are my academic qualifications:</p>
          <Container>
          <ListGroup>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y:15}}
              whileInView={{ opacity: 1, y:0}}
              transition={{delay:1}}>
              <ListGroup.Item>
                <span className='fw-bold m-2'>Dominican School of Dagupan City</span>| Year 2015
                <hr/>
                294 Dagupan - Binmaley Rd, Dagupan, 2400 Pangasinan
              </ListGroup.Item>
              <div className="d-flex flex-column justify-content-center align-items-center">
                  <span style={{width:2, height:30}} className="bg-dark "></span>
                  <span style={{width:20, height:20}} className="bg-dark  rounded-circle"></span>
              </div>
            </motion.div>
            </AnimatePresence>
            <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y:15}}
              whileInView={{ opacity: 1, y:0}}
              transition={{delay:2}}>
                <ListGroup.Item>
                  <span className='fw-bold m-2'>Dominican School of Dagupan City</span>| Year 2019
                  <hr/>
                  294 Dagupan - Binmaley Rd, Dagupan, 2400 Pangasinan
                </ListGroup.Item>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <span style={{width:2, height:30}} className="bg-dark "></span>
                    <span style={{width:20, height:20}} className="bg-dark  rounded-circle"></span>
                </div>
            </motion.div>
            </AnimatePresence>
            <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y:15}}
              whileInView={{ opacity: 1, y:0}}
              transition={{delay:3}}>
              <ListGroup.Item>
                <span className='fw-bold m-2'>PHINMA University of Pangasinan</span> | Current
                <hr/>
                28WV+R2R, Arellano St, Downtown District, Dagupan, 2400 Pangasinan
              </ListGroup.Item>
              </motion.div>
            </AnimatePresence>
          </ListGroup>
          </Container>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Education;
