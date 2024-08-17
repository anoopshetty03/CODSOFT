import React from 'react';
import { data } from "../data/data.js";

const Projects = () => {
  const project = data;

  return (
    <div name='projects' className='w-full text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-6'>Check out some of my projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div key={index} className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto">
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="content-div w-full h-64 bg-cover bg-center rounded-t-md flex justify-center items-center"
              >
                {/* Hover effect */}
                <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center h-full">
                  <div className="text-center">
                    <div className="pt-8 text-center">
                      <a href={item.github} target="_blank" rel="noopener noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:bg-blue-600 group-hover:text-white">
                          Code
                        </button>
                      </a>
                      {item.live && item.live.trim() && (
                        <a href={item.live} target="_blank" rel="noopener noreferrer">
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:bg-blue-600 group-hover:text-white">
                            Live
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#0a192f] w-full text-center py-4 rounded-b-md">
                <p className="text-xl font-bold text-white">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
