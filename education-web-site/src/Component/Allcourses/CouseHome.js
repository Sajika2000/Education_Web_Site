import React from 'react';
import CoursesCard from './CoursesCard';

const CourseHome = () => {
  return (
    <section className='py-12 bg-gray-100'>
      <div className='px-4 mx-auto max-w-7xl'>
        <h1 className='mt-6 mb-4 text-2xl font-medium tracking-wide text-center text-black'>OUR POPULER COURSES</h1>
        <h2 className='mt-4 mb-6 text-5xl font-bold text-center'>
        Elevate your skills with our top courses
        </h2>
        <CoursesCard />
      </div>
    </section>
  );
}

export default CourseHome;
