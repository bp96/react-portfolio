import React from "react";


import streaming_clone from "../assets/projects/react/streaming-clone.jpg"
import chat_app from "../assets/projects/react/chat-app.png"
import restaurant_finder from "../assets/projects/react/restaurant-finder.png"
import travel_app from "../assets/projects/react/travel-app.jpeg"
import markdown_editor from "../assets/projects/react/markdown-editor.jpg"
import memes_generator from "../assets/projects/react/memes-generator.jpg"
import fictional_university_screenshot from "../assets/projects/wordpress/fictional-university-screenshot.jpg";
import github_portfolio_screenshot from "../assets/projects/vanilla/github-portfolio-screenshot.jpg";
import fastfoodone from "../assets/projects/wordpress/fastfoodone-screenshot.jpg";
import restaurantone from "../assets/projects/wordpress/restaurantone-screenshot.jpg";
import todo_list from "../assets/projects/vanilla/todo-list.jpg";
import cervical_cancer_tumours from "../assets/projects/DataScience/cervicalcancercontours.gif";
import synthetic_data_figures from "../assets/projects/DataScience/synthetic_data_figures.jpeg";

export const HERO_CONTENT = `Since graduating from the University of Manchester with a degree in Physics, I have worked as a developer on a range of machine learning projects using Python and out of my own personal interest I have also been learning SQL as well as front-end web development.`;

export const ABOUT_TEXT = `I'm a naturally curious, adaptable person who has worked independently on projects, within teams and, on occassion, assisted with managing projects as well. I am a quick learner and an excellent communicator too, and have written reports and given presentations aimed at people from all sorts of backgrounds and levels, both technical and non-technical.

This website has been built using React, Tailwind CSS and Framer Motion and deployed using Namecheap hosting, Git and cPanel modifications.
`;

export const EXPERIENCES = [
  {
    year: "2020 - Present",
    role: "Data Engineer",
    company: "BAE Systems Digital Intelligence (London)",
    description: (
      <ul>
        <li>
          Worked in a team on a high-profile data engineering (ETL) based
          project for the COVID19 Test and Trace programme with the DHSC (UK
          government) on many databases used by hundreds of users across
          government
        </li>
        <li>
          Responsibilities also included fixing bugs and helping ingest new
          tables by liaising with other teams and suppliers, maintaining a live
          service, investigating user queries and issues such as pipeline
          failures or stale data, and also generating documentation whilst
          staying organised when multi-tasking in a high pressure environment
        </li>
        <li>
          Helped manage projects, liaising with sub-teams, ensuring quality was
          maintained and targets were met
        </li>
        <li>
          Undertook responsibilities such as in working with a partner to liaise
          with a university in organising recruitment events throughout the year
          (and attending career fairs), being solely responsible in editing and
          managing the weekly newsletter for the company and in organising
          external talks from university lecturers for the team
        </li>
      </ul>
    ),
    technologies: ["SQL", "SCALA", "DATABRICKS", "AZURE", "GIT"],
  },
  {
    year: "2019 - 2020",
    role: "Data Scientist",
    company: "BAE Systems Digital Intelligence (Chelmsford)",
    description: (
      <ul>
        <li>
          Gained significant experience with Python too (including NumPy,
          Matplotlib, SciPy, pandas packages), Windows and Ubuntu Linux
          operating systems as well as git version control and agile
        </li>
        <li>
          Worked with machine learning-based techniques including convolutional
          neural networks (CNNs) for signal, audio, image and tabular data and
          on database projects, whilst performing analysis on results using
          histograms, line graphs, scatter plots and confusion matrices
        </li>
        <li>
          Given presentations to internal and external stakeholders, often with
          a mix of technical and non-technical audiences
        </li>
        <li>
          Written many technical reports using Microsoft Office (using Word and
          Excel) for internal and external customers and have acted promptly on
          any feedback provided – one report I contributed to significantly was
          published online here on{" "}
          <a
            target="_blank"
            href="https://www.gov.uk/government/publications/synthetic-data"
          >
            {" "}
            this gov.uk link
          </a>
        </li>
      </ul>
    ),
    technologies: ["PYTHON"],
  },
  {
    year: "Summer 2018",
    role: "Quality Engineer",
    company: "Luxfer MEL Technologies (Manchester)",
    description: (
      <ul>
        <li>
          Mastered a range of IT skills including Microsoft SharePoint, InfoPath
          and Excel to assist in modernising the company (to move them from
          paper-based systems to electronic ones)
        </li>
        <li>
          Learnt SharePoint and InfoPath quickly using solely online resources
          and minimal supervision
        </li>
        <li>
          Completed several short and one long IT-based project, acting on
          regular feedback and implementing changes, whilst working
          independently to meet deadlines
        </li>
        <li>
          Developed intelligent, electronic forms for various areas of the
          company for internal customers and created online file libraries for
          them too
        </li>
        <li>
          Took initiative and created documentation detailing the system and
          also taught others how to use it
        </li>
      </ul>
    ),
    technologies: ["SHAREPOINT", "EXCEL", "INFOPATH"],
  },
];

export const PROJECTS = [
  {
    title: "Streaming Clone",
    image: streaming_clone,
    description: (
      <div>
        <p>
        A Netflix movie streaming clone built using HTML/CSS/JS, React/Vite, Tailwind CSS and Firebase (for db/authentication). API used from The Movie DB. Hosted using Netlify.
        </p>
        {/* <ul>
          <li>
            
          </li>
          <li>
          </li>
        </ul> */}
      </div>
    ),
    technologies: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Firebase", "Movie DB API"],
    see_live: "https://streaming-clone-bp96.netlify.app/",
    view_code: "https://github.com/bp96/streaming-clone",
  },
  {
    title: "Chat App",
    image: chat_app,
    description: (
      <div>
        <p>
        A chat application (similar to something like Teams) built using React, Tailwind CSS and Firebase (Authentication/Database/Storage).
        </p>
        {/* <ul>
          <li>
            
          </li>
          <li>
          </li>
        </ul> */}
      </div>
    ),
    technologies: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Firebase"],
    see_live: "https://main--chat-app-bp96.netlify.app/",
    view_code: "https://github.com/bp96/chat-app",
  },
  {
    title: "Restaurant Finder App",
    image: restaurant_finder,
    description: (
      <div>
        <p>
        Finds restaurants in your area, and filters them by rating and distance to you. Built using HTML/CSS/JS, React/NextJS and uses the Google Maps API. Hosted using Netlify.
        </p>
        {/* <ul>
          <li>
            
          </li>
          <li>
          </li>
        </ul> */}
      </div>
    ),
    technologies: ["React", "HTML", "CSS", "JavaScript", "NextJS", "Google Maps API"],
    see_live: "https://restaurant-finder-bp96.netlify.app/",
    view_code: "https://github.com/bp96/restaurant-finder",
  },
  {
    title: "Travel App",
    image: travel_app,
    description: (
      <div>
        <p>
        The homepage of a travel-based search and booking app. Front-end only so far, using React/Vite, and Tailwind CSS.
        </p>
      </div>
    ),
    technologies: ["React", "HTML","CSS","JavaScript","Tailwind CSS"],
    see_live: "https://travel-app-bp96.netlify.app/",
    view_code: "https://github.com/bp96/travel-app",
  },
  // {
  //   title: "",
  //   image: "",
  //   description: (
  //     <div>
  //       <p>
          
  //       </p>
  //       <ul>
  //         <li>
            
  //         </li>
  //         <li>
  //         </li>
  //       </ul>
  //     </div>
  //   ),
  //   technologies: ["", ""],
  //   see_live: "",
  //   view_code: "",
  // }
  ,{
    title: "Markdown Notes Editor",
    image: markdown_editor,
    description: (
      <div>
        <p>
        An editor that generates HTML markup and saves them into notes on local storage. Built using React.
        </p>
        <ul>
          <li>
          Saves into the local storage of the browser
          </li>
          <li>
          Can create and delete notes
          </li>
          <li>Editing notes will push the note to the top of the list

          </li>
        </ul>
      </div>
    ),
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    see_live: "https://bp96.github.io/markdown-notes-editor/",
    view_code: "https://github.com/bp96/markdown-notes-editor",
  },{
    title: "Memes Generator",
    image: memes_generator,
    description: (
      <div>
        <p>
        A small React project to retrieve random memes from an API, and allow you to overlay it with text. Deployed using GitHub Pages.
        </p>
      </div>
    ),
    technologies: ["React","HTML", "CSS", "JavaScript"],
    see_live: "http://bp96.github.io/memes-generator",
    view_code: "https://github.com/bp96/memes-generator",
  },
  {
    title: "Fictional University Website",
    image: fictional_university_screenshot,
    description: (
      <div>
        <p>
          An interactive Wordpress website built by producing a custom theme for
          a fictional university.
        </p>
        <ul>
          <li>
            Built using PHP, leverages the REST API, and uses javascript
            (including JQuery) to communicate with the back-end{" "}
          </li>
          <li>
            Has a live search function, plus a traditional javascript fallback
            in case of any issues{" "}
          </li>
          <li>
            Uses Custom Post Types and Advanced Custom Fields, plus the
            OpenStreetMap API to show campus locations{" "}
          </li>
          <li>
            Creates relationships between pieces of content (e.g. professor and
            course){" "}
          </li>
          <li>
            Allows you to create different user groups with different
            permissions (e.g. subscriber, editor, admin){" "}
          </li>
          <li>
            Lets visitors sign up for a basic account on the site where they can
            store notes{" "}
          </li>
          <li>
            My Notes feature allows users to manage notes using CRUD (create,
            read, update, delete){" "}
          </li>
          <li>
            Allows users to "like"/"heart" a professor and updates the
            professor's like count in realtime{" "}
          </li>
          <li>
            Consideration given to improve security using escape functions
            within the PHP code{" "}
          </li>
        </ul>
      </div>
    ),

    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    see_live:
      "https://brijeshpatel.co.uk/wordpress-sites/fictional-university/",
    view_code: "",
  },
  {
    title: "Github Portfolio",
    image: github_portfolio_screenshot,
    description: (
      <ul>
        <li>
          Mostly built using HTML and CSS, with Bootstrap for styling elements
          and to produce a responsive design{" "}
        </li>
        <li>
          Simple animations included using CSS plus "wow.js" and "animate.css"
          imports{" "}
        </li>
        <li>
          Images and videos optimised for quicker reloading, with fallbacks
          implemented in the event of a slow connection{" "}
        </li>
      </ul>
    ),
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    see_live: "https://bp96.github.io/",
    view_code: "https://github.com/bp96/bp96.github.io",
  },
  {
    title: "FastFoodOne Website",
    image: fastfoodone,
    description: (
      <div>
        <p>A fast food restaurant website which also has table reservations.</p>
        <ul>
          <li>Created using the Elementor page builder </li>
          <li>
            Uses well-known plugins such as Contact Form 7 and Max Mega Menu (to
            create a navigation bar)
          </li>
        </ul>
      </div>
    ),
    technologies: ["WordPress", "Elementor"],
    see_live: "https://brijeshpatel.co.uk/wordpress-sites/fastfoodone/",
    view_code: "",
  },
  {
    title: "RestauratOne Website",
    image: restaurantone,
    description: (
      <div>
        <p>
          A restaurant website which allows for table reservations and online
          delivery.
        </p>
        <ul>
          <li>Created using the Themify page builder </li>
          <li>
            Uses plugins such as WPForms (to produce a contact form) and the
            Gloria Food Reservations and Ordering API plugin (for reservations
            and online delivery)
          </li>
        </ul>
      </div>
    ),
    technologies: ["WordPress", "Themify"],
    see_live: "https://brijeshpatel.co.uk/wordpress-sites/restaurantone/",
    view_code: "",
  },
  {
    title: "ToDo List",
    image: todo_list,
    description: "A fun to do list produced using HTML, CSS and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    see_live: "https://bp96.github.io/ToDoList/",
    view_code: "https://github.com/bp96/ToDoList",
  },
  {
    title:
      "Data Science: Cervical cancer tumour segment­ation using deep learning",
    image: cervical_cancer_tumours,
    image_caption:
      "Top figure and video shows the contours predicted for the GTV regions of a test MRI dataset. The DICE coefficients calculated indicate level of overlap between predictions and actual delineations with a value of 1 indicating maximum overlap. Middle figure shows the GTV (red) and CTV (yellow) delineations used for training. Bottom figure shows the overlap between the predictions (orange) and real (yellow) for the CTV region. ",
    description: (
      <p>
        This was my Master's project conducted at the University of Manchester
        with collaboration with The Christie NHS Foundation Trust. The first
        part involved setting up a project pipeline to read in MRI image files
        (in NIfTI file format), pre-process them and storing these images. These
        were then used for large feature extraction using a package called
        radiomics.
        <br />
        <br />
        The second part involved using the above pipeline, and a U-Net style
        convolutional neural network (CNN) to employ deep learning; this was
        used to segment two main defined cancerous regions - the gross tumour
        volume (GTV) which indicates the visible, macroscopic spread, and
        clinical tumour volume (CTV), which includes the GTV plus some of the
        surrounding area (containing possible microscopic spread).
        <br />
        <br />
        GTV segmentation had also never done before using deep learning for
        cervical cancer at the time. The technique employed transfer learning
        using the ImageNet database (due to the limited size of the dataset of
        cervical cancer images) and in the end, accuracies of 55-80% were
        obtained in identifying the correct GTV/CTV regions. This project was
        predominantly Python-based though some MATLAB and Lua code had to be
        written as well. For future work, it would also be possible to repeat
        this technique on other sets of clinical images.
      </p>
    ),
    technologies: ["Python", "MATLAB"],
    see_live: "",
    view_code: "https://github.com/bp96/UoM-4th-Year-MPhys-Project",
  },

  {
    title: "Data Science: Synthetic data generation, exploration and analysis",
    image: synthetic_data_figures,
    image_caption:
      "Top figure shows the summary of approach indicating the components and data flow (coloured arrows), as well showing how the synthetically-generated data is evaluated. Middle figure shows the evaluation framework for synthetic data generators, consisting of six indicators. Bottom figure shows a comparison of how original, sensitive data would compare to synthetically-generated data.",
    description: (
      <p>
        This project involved reviewing techniques in generating synthetic data,
        driven by the need of sharing sensitive data for R&D purposes. The
        synthetic data generation tools aimed to mimic characteristics of the
        real dataset whilst removing or obscuring the sensitive information
        present within the real data. The final report was made public here on{" "}
        <a
          href="https://www.gov.uk/government/publications/synthetic-data"
          target="_blank"
        >
          Gov.UK
        </a>
        .
        <br />
        <br />
        For example, we might want the synthetic data to retain the range of
        values of the original data with similar (but not the same) outliers. Or
        we might want to retain a similar frequency distribution in the
        synthetic and original datasets. However, this becomes more complex when
        we start to consider interactions between fields, or different types of
        data such as free text and GPS locations.
        <br />
        <br />
        Working in a team, I helped explore public datasets which were similar
        to those used by the customer and identified tools which could be used
        to produce synthetic data. For example, the Czech financial database
        comprised of numerical/categorical data was used with the Synthetic Data
        Vault (sdv) Python package whilst the text-based resumes/CSVs were used
        with Microsoft's open-source tool called "Presidio" (which was also
        powered by AI algorithms).
        <br />
        <br />
        SDV worked with relational tables and from the testing and analysi using
        cross-correlation heat maps and histograms, the tool produced mixed
        results since it only seemed to work with Gaussian-distirbuted data.
        This often led to odd results such as negative bank ID values - however,
        since the tool is open-source, it's still currently in development and
        the ability to specify other distributions may be added in at a later
        date.
        <br />
        <br />
        The final report can be viewed here on{" "}
        <a
          href="https://www.gov.uk/government/publications/synthetic-data"
          target="_blank"
        >
          Gov.UK here
        </a>
        , whilst a blog article regarding this investigation can be found{" "}
        <a
          href="https://dataingovernment.blog.gov.uk/2020/08/20/synthetic-data-unlocking-the-power-of-data-and-skills-for-machine-learning/"
          target="_blank"
        >
          here
        </a>
        .
      </p>
    ),
    technologies: ["Python"],
    see_live: "",
    view_code: "https://github.com/bp96/UoM-4th-Year-MPhys-Project",
  },
];

export const CONTACT = {
  email: "brijp019@gmail.com",
};
