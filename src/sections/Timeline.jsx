import React from 'react';
import { timelineData } from '../sections/TimelineData.jsx';

const Timeline = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-teal-600">Advantages of Zero Waste</h2>
      <div className="relative border-l border-green-200 dark:border-green-700">
        {timelineData.map((event, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-500 rounded-full ring-8 ring-white dark:ring-green-900 dark:bg-green-950">
              <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM8 14l-4-4h3V6h2v4h3l-4 4z" />
              </svg>
            </span>
            <div className="bg-white p-4 rounded-lg shadow-md dark:bg-green-800">
              <h3 className="text-lg font-semibold text-green-900 dark:text-white">{event.title}</h3>
              <p className="mb-4 text-base font-normal text-white dark:text-white">{event.description1}</p>
              <p className="mb-4 text-base font-normal text-white dark:text-white">{event.description2}</p>
              <p className="mb-4 text-base font-normal text-white dark:text-white">{event.description3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
