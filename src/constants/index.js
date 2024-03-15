import { meta, shopify, Cling, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  react,
  redux,
  summiz,
  tailwindcss,
  threads,
  typescript,
  aws,
  postgreSQL,
  redis,
  prisma,
  Twitter,
  Typing,
  Hippo,
  Blog,
  Ecommerce,
  Spotify,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: postgreSQL,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: redis,
    name: "Redis",
    type: "Caching",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "CloudServices",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Technical Lead & Founding Engineer",
    company_name: "Docvita",
    icon: Cling,
    iconBg: "#accbe1",
    date: "2022 - 2023",
    points: [
      "Build the entire architecture of the product while working directly with CTO",
      "Demonstrated ability to build scalable, reliable and secured WebApp and deploy on AWS with microservices architecture.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "Cinta Medtech",
    icon: Cling,
    iconBg: "#accbe1",
    date: "2020 - 2022",
    points: [
      "Developing and maintaining web applications using React.js and other trendy related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality webapplication",
      "Deciding the frontend architecture, and building the scalable application",
      "Document and demonstrate solutions by developing documentation, flowcharts, layouts, charts, code comments and clear code.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN stack developer",
    company_name: "Railofy",
    icon: Cling,
    iconBg: "#accbe1",
    date: "2019 - 2020",
    points: [
      "Developing and maintaining web applications using MERN stack and deploying it on AWS",
      "After finalizing the design of frontend, Used React.js for making web pages.",
      "Became the founding engineer in the company",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: Cling,
    iconBg: "#accbe1",
    date: "2018 - 2019",
    points: [
      "Developing and maintaining web applications using React.js and other trendy related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/harshmriduhash",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/harsh-s-2ab5a0158/",
  },

];  


export const projects = [
  
  {
    iconUrl: Typing,
    theme: "btn-back-red",
    name: "Grootin",
    description:
      "Grootin Music Entertainment is a rapidly growing music and entertainment company that is focused on creating a unique and personalized experience for music lovers. We are on a mission to revolutionize the music industry with cutting-edge technology and innovative strategies.",
    link: "https://www.grootin.in/",
  },

  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Docvita",
    description:
      "A web based chat application in healthcare sector. Rebuild the architecture of the product, made it more secure and reliable. I used S3 for image upload functionality, Google OAuth for authentication, and Redis for caching and performance optimization. I also used TypeScript for back-end development.",
    link: "https://docvita.com/",
  },
  {
    iconUrl: Hippo,
    theme: "btn-back-blue",
    name: "Railofy",
    description:
      "Railofy is a travel tech start-up and an IRCTC Authorized Premium Partner with the mission to transform the train travel experience for Bharat! Our services include:-  1. Hotplate, 2. Train ticket booking, 3. Confirm Guarantee, 4. Whatsapp Bot",
    link: "https://www.railofy.com/",
  },
  {
    iconUrl: Blog,
    theme: "btn-back-pink",
    name: "MusicApp.",
    description:
      "A sophisticated music app tailored for offline use, designed to elevate your listening experience. Offering intuitive navigation and seamless playback, this system app ensures that users can indulge in their favorite tunes anytime, anywhere. Dive into the world of personalized music enjoyment with this innovative MERN-based music app, a testament to my dedication to crafting user-centric solutions in full-stack development.",
    link: "https://music-app-q1el-qd7ral9ca-harshs-projects-76ae4797.vercel.app/",
    codeLink: "https://github.com/devkumar4/MegaBlog",
  },
  {
    iconUrl: Ecommerce,
    theme: "btn-back-black",
    name: "Eclatique E-commerce men's store",
    description:
      "I built an e-commerce platform for men’s fashion called Eclatique. I used React.js, TypeScript, JWT, and Redux to create the front-end and back-end of the application. I added features such as login, sign up, cart, order tracking, and Stripe payment gateway. I used JWT for authentication and authorization, and Redux for state management. I use express.js for making REST ful API's design",
    link: "https://github.com/devkumar4/Eclatique",
    codeLink: "https://github.com/devkumar4/Eclatique",
  },
  {
    iconUrl: Spotify,
    theme: "btn-back-yellow",
    name: "Small Spotify Clone",
    description:
      "I created a web application that replicates the core functionality of the popular music streaming service Spotify. Users can play songs and tracks from various genres and artists. I used HTML5, CSS3, and vanilla JavaScript to build the front-end of the application. I used Bootstrap for styling and responsive design.",
    link: "https://devspotify.netlify.app/",
    codeLink: "https://github.com/devkumar4/spotify-clone",
  },
];