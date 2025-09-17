import React from 'react'
import Categories from '../components/Categories'
import CoursesComponent from '../components/CoursesComponent'
import TeamComponent from '../components/TeamComponent'
import TestimonialComponent from '../components/TestimonialComponent'
export default function Courses() {
  return (
    <div>
      <Categories />
      <CoursesComponent />
      <TeamComponent />
      <TestimonialComponent />
    </div>
  )
}
