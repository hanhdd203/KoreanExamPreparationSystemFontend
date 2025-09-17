import React from 'react'
import Carousel from '../components/Carousel'
import Service from '../components/Service'
import AboutComponent from "../components/AboutComponent"
import Categories from '../components/Categories'
import CoursesComponent from '../components/CoursesComponent'
import TeamComponent from '../components/TeamComponent'
import TestimonialComponent from '../components/TestimonialComponent'


export default function Home() {
  return (
    <div>
      <Carousel />
      <Service />
      <AboutComponent />
      <Categories />
      <CoursesComponent />
      <TeamComponent />
      <TestimonialComponent />
    </div>
  )
}
