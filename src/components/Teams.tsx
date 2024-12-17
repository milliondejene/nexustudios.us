import * as React from "react";

// Define the type for the 'theme' prop
interface TeamsProps {
  theme: 'light' | 'dark'; // Explicitly typing 'theme' to only accept 'light' or 'dark'
}

const teamMembers = [
  {
    name: "Joshua Germod",
    role: "Marketing Director",
    imageUrl: "https://via.placeholder.com/150",
    description:
      "Joshua is a strategic marketer with extensive experience in driving brand growth. He oversees our marketing strategies and works closely with the team to create impactful campaigns.",
  },
  {
    name: "Million Dejene",
    role: "Software Engineer",
    imageUrl: "https://via.placeholder.com/150",
    description:
      "Million is a talented software engineer focused on building scalable and efficient applications. He ensures the technical side of projects runs smoothly and pushes for innovative solutions.",
  },
  {
    name: "Kai Heron",
    role: "Creative Director",
    imageUrl: "https://via.placeholder.com/150",
    description:
      "Kai is an imaginative creative director with a keen eye for visual storytelling. He leads the creative team to develop engaging content and ensures that our projects stand out with cutting-edge designs.",
  },
];

const Teams: React.FC<TeamsProps> = ({ theme }) => (
  <section
    id="teams"
    className={`relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-blue-100 pt-20 px-6 ${
      theme === "dark" ? "dark:from-gray-900 dark:to-indigo-900 dark:text-white" : ""
    }`}
  >
    {/* Glassmorphism effect container */}
    <div
      className={`absolute inset-0 bg-white bg-opacity-40 backdrop-blur-sm z-0 ${
        theme === "dark" ? "dark:bg-gray-900 dark:bg-opacity-50" : ""
      }`}
    />

    <div className="relative text-center p-8 bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-2xl z-10 transform transition-transform hover:scale-105 duration-300 ease-in-out dark:bg-gray-800 dark:bg-opacity-80">
      <h1
        className={`text-4xl font-semibold mb-4 leading-tight ${
          theme === "light" ? "text-indigo-600" : "text-indigo-300"
        }`}
      >
        Meet Our Team
      </h1>
      <p
        className={`text-lg max-w-3xl mx-auto mb-8 ${
          theme === "light" ? "text-gray-600" : "text-gray-300"
        }`}
      >
        Our talented team is dedicated to providing innovative solutions and exceptional user experiences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className={`bg-white rounded-lg shadow-xl overflow-hidden hover:scale-105 transform transition-all ease-in-out duration-300 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div
              className={`p-6 bg-white bg-opacity-80 backdrop-blur-md rounded-b-lg ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${
                  theme === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                {member.name}
              </h3>
              <p
                className={`text-gray-700 mb-4 ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {member.role}
              </p>
              <p
                className={`text-gray-700 ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Teams;
