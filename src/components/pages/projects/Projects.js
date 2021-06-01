import React from 'react';
import '../../../App.css';
import Cards from './../../cards/Cards';
import './Project.css';
import { Link } from 'react-router-dom';

export default function Projects() {

  return (
    <>
      <div className="projectContainer">
        <Cards></Cards>
      </div>
    </>
  )
}