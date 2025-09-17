import React from 'react'
import AboutComponent from "../components/AboutComponent"
import Categories from '../components/Categories'
import CoursesComponent from '../components/CoursesComponent'
import TeamComponent from '../components/TeamComponent'


export default function About() {
  return (
    <>
      <AboutComponent />
      <Categories />
      <CoursesComponent />
      <TeamComponent />
    </>
  )
}
