import React from 'react'
import { Card, Button } from 'react-bootstrap';

const projectsData = [
  {
    title: 'UPang Updates',
    description: 'Mobile Application that gives you latest updates in PHINMA UPang',
    imgSrc: '/upang_updates.jpg',
    url: 'https://github.com/AbrilThea'
  },
  {
    title: 'CITE Events',
    description: 'It showcase events that happens in CITE',
    imgSrc: '/cite.png',
    url: 'https://github.com/AbrilThea'
  },
  {
    title: 'Portal',
    description: 'School Portal for PHINMA Students and Faculty.',
    imgSrc: '/portal.jpg',
    url: 'https://github.com/AbrilThea'
  },
];
const Projects = () => {
  return (
    <>
      {projectsData.map((project, index) => (
        <Card key={index} style={{ minwidth: '18rem', maxWidth: '19rem',margin: '1rem' }}>
          <Card.Img variant="top" src={project.imgSrc} style={{height:180, objectFit: 'cover'}}/>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Button variant="dark" href={project.url}>View Github</Button>
          </Card.Body>
        </Card>
      ))}
    </>

  )
}

export default Projects
