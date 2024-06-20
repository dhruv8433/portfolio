import React from "react";

const projects = [
  {
    title: "eRequirement",
    description:
      "We offer a wide range of cleaning, organizing, and handyman services to keep your home sparkling and functioning flawlessly. Let us free up your schedule for the things you truly love - eRequirement",
    technologies: ["React", "Next", "Redux", "MongoDB", "CSS"],
    role: "Full Stack Developer",
    date: "January 2023 - May 2023",
    githubLink: "https://github.com/dhruv8433/e-commerce",
    liveLink: "https://e-requirement.vercel.app/",
    images: ["images/e-requirement1.png", "images/e-requirement2.png"]
  },
  {
    title: "spotify-clone",
    description:
      "Discover and enjoy millions of songs, albums, and podcasts with Spotify. Our home page is designed to provide you with personalized recommendations, new releases, and curated playlists that match your taste.",
    technologies: ["React", "Next", "CSS", "Tailwind", "JavaScript"],
    role: "Front End Developer",
    date: "June 2022 - December 2022",
    githubLink: "https://github.com/dhruv8433/spotify-home-page",
    liveLink: "https://spotify-home-page-six.vercel.app",
    images: ["images/spotify2.png", "images/spotify1.png"]
  },
  {
    title: "News Web",
    description:
      "Tired of generic news feeds that don't reflect your interests? At eNews, you curate your own news experience. Browse diverse articles from a variety of sources, like and upvote what resonates with you, and watch your personalized feed blossom.",
    technologies: ["React", "Firebase", "Redux", "SCSS", "Firestore", "Next"],
    role: "Full Stack Developer",
    date: "February 2022 - May 2022",
    githubLink: "https://github.com/dhruv8433/news-app",
    liveLink: "https://news-app-ten-navy.vercel.app/",
    images: ["images/news1.png", "images/news2.png"]
  },
  {
    title: "eRequirement App",
    description:
      "We offer a wide range of cleaning, organizing, and handyman services to keep your home sparkling and functioning flawlessly. Let us free up your schedule for the things you truly love - eRequirement",
    technologies: ["React Native", "Redux", "MongoDb"],
    role: "Full Stack Developer",
    date: "August 2021 - January 2022",
    githubLink: "https://github.com/dhruv8433/eRequirement-Native",
    liveLink: "#",
    images: ["images/e-requirement-native1.png", "images/e-requirement-native2.png"]
  },
  {
    title: "Movies Web",
    description:
      "Beautiful Movies website where you can find latest realesed movies with release date, and type which type of that movie.awesome website for movies lover",
    technologies: ["React", "Next", "Contentful", "Tailwind"],
    role: "Front End Developer",
    date: "March 2021 - June 2021",
    githubLink: "https://github.com/dhruv8433/Next13-Experiment",
    liveLink: "https://next13-experiment-tw6j.vercel.app/",
    images: ["images/movies1.png", "images/movies2.png"]
  }
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="pt-1">
      <div data-aos="fade-up" className="text-center">
        <h1 className="text-3xl font-semibold my-10">Projects</h1>
      </div>
      <div className="max-w-auto mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div data-aos="fade-up" key={index} className="bg-white rounded-lg shadow-lg flex flex-col">
            <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h2 data-aos="fade-up" className="text-xl font-bold mb-2">{project.title}</h2>
              <p data-aos="fade-up" className="text-gray-700 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div data-aos="fade-up" className="mb-4">
                <span className="text-gray-600 dark:text-gray-400 font-semibold">Technologies:</span>
                <div data-aos="fade-up" className="flex flex-wrap mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-200 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div data-aos="fade-up" className="flex justify-between items-center mt-2">
                <a
                  href={project.githubLink}
                  className="text-blue-500 hover:bg-blue-600 hover:text-white hover:p-1 hover:rounded-md duration-300 hover:scale-105"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  className="text-purple-500 hover:bg-purple-600 hover:text-white hover:p-1 hover:rounded-md duration-300 hover:scale-105"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
