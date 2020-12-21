import react, { useState } from 'react';
import Skill from './Skill';
import '../css/skills.css';
import { Container, Row, Col } from 'reactstrap';

const AllSkills = () => {
  const[course, setCourses]=useState([
    {title:"HTML", description:"This is HTML5"},
    {title:"CSS", description:"Cascading style sheet 3"},
    {title:"Java Script", description:"This is Java script"},
    {title:"JQuery", description:"This is JQuery"},
    {title:"LESS", description:"This is LESS"},
    {title:"SASS", description:"This is SASS"},
    {title:"React", description:"This is React js"},
    {title:"Photoshop", description:"This is photoshop"}
  ])

    return (
      <div className="container_main">
      <Row className='skill-row'>
            {
              course.length>0? course.map((item)=>
                <Skill course={item}/>) : "No Skills"
              }
      </Row>
    </div>
    );
  };

export default AllSkills;