import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col, Container} from 'react-bootstrap';
import { GrWorkshop } from "react-icons/gr";
import Projects from '../components/Projects';
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from 'react-icons/fa';



const Home = () => {
  return (
    <section >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.25}}>
            <Container>
              <Row className='hero' >
              <Col className='d-flex align-items-center justify-content-center'>
                <Image src='/profile.jpg' className='profile' width={400} style={{minWidth: 300}} fluid rounded/>
              </Col>
              <Col  className='d-flex flex-column justify-content-center'>
              <Container>
                <p className='display-6'>
                    Hello I'm <span className='fw-bold display-6 fw-semibold'>Thea Abril</span>👋
                  </p>
                  <h3 className='colored-text display-5 fw-bold p-1'>Aspiring Web Developer</h3>
                  <hr />
                  <p>
                    I like painting and I like reading poetry books I believe that art should be  accessible to everyone,and I strive to make my work available to as many people as possible.
                  </p>
                  <div className='d-flex align-items-center gap-2'>
                    <Link to='/work'>
                      <Button className='btn-lg' variant='outline-dark'>View Work</Button>
                    </Link>
                    <SocialLinks />
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.25}}>
            <Container className='d-flex flex-column justify-content-center align-items-center text-center mt-5'>
              <h1 className='display-1 fw-bold'>About Me</h1>
              <p className='about'>
                Passionate about painting and devoted to poetry, I believe in art's universal accessibility.
                 My mission is to make my creations resonate widely, weaving connections and shared emotions.
                  Join me in uniting colors and words, celebrating the beauty of the human experience.
              </p>
            </Container>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.25}}>
            <Container className='mt-5 text-center'>
            <h2 className='display-1 fw-bold'>
              <GrWorkshop/>
              My Work
            </h2>
            <p>Here are some of the projects I've worked on:</p>
            <hr/>
            <Container className='d-flex flex-wrap justify-content-center align-items-center gap-1'>
              <Projects />
            </Container>
            </Container>
          </motion.div>
        </AnimatePresence>
      
          
      
      
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.25}}>
          <div className='d-flex flex-column justify-content-center align-items-center text-center'>
            <h1 className='display-1 fw-bold'>Contact Me</h1>
            <p>These are my socials where you can ask me if you have any question 
              Feel free to contact me!.
            </p>
           <div className='d-flex justify-content-center'>
            <SocialLinks/>
           </div>
           <FaArrowUp className='display-3 mt-2'onClick={()=> {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth"
                });
              }}/>
          </div>
      </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Home;
