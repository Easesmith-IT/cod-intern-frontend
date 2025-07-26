import { FreshJobs } from '@/components/home/fresh-jobs/fresh-jobs'
import { CompletedCourses } from '@/components/user-profile/completed-course/completed-course'
import { MyActiveCourses } from '@/components/user-profile/my-active-courses/my-active-courses'
import { RecommendedCourses } from '@/components/user-profile/recommended-courses/recommended-courses'
import { WelcomeBack } from '@/components/user-profile/welcome-back/welcome-back'
import React from 'react'

const MyCourses = () => {
  return (
    <section>
      <WelcomeBack />
      <MyActiveCourses />
      <FreshJobs className="pt-12 md:pt-24" />
      <CompletedCourses />
      <RecommendedCourses />
    </section>
  )
}

export default MyCourses