import React from "react";
import { PROJECTS } from "../constants";
import { animate, motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, i) => (
          <div key={i} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className=" rounded w-full "
              />
            <p className="text-xs pb-8 pt-2">{project.image_caption}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:max-w-xl lg:w-3/4 lg:px-10"
            >
              <h6 className="mb-2 font-semibold text-center lg:text-left">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-1 ">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div>
                {/* only display View Code button if there's a link present */}
                {project.see_live && <a
                  target="_blank"
                  href={project.see_live}
                  class="bg-neutral-700 text-purple-200 hover:text-white hover:bg-blue-600 py-2 px-4 rounded-xl mr-2"
                >
                  See Live
                </a>}

                {/* only display View Code button if there's a link present */}
                {project.view_code && <a
                  target="_blank"
                  href={project.view_code}
                  class="bg-neutral-800 text-purple-200 hover:text-white hover:bg-blue-600 py-2 px-4 rounded-xl mr-2"
                >
                  View Code
                </a>}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;