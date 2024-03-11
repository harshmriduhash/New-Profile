import { meta, shopify, Cling,starbucks, tesla } from "../assets/images";
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
    Spotify
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
        imageUrl: prisma,
        name: "Prisma",
        type: "ORM",
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
    }
];

export const experiences = [
    {
        title: "Junior Full-Stack Developer Intern",
        company_name: "Cling Multi Solutions Pvt Ltd.",
        icon: Cling,
        iconBg: "#accbe1",
        date: "April 2023 - October 2023",
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
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/devkumar4',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/devtwt4/',
    },
    {
        name: 'X',
        iconUrl: Twitter,
        link: 'https://twitter.com/dev_twt4',
    }
];

export const projects = [
    {
        iconUrl: Typing,
        theme: 'btn-back-red',
        name: 'TypeRacer Clone',
        description: 'I developed a web application that enables real-time collaboration with live scores and leaderboard. I used turboRepo Next.js for UI development and Tailwind CSS for styling. I also used WebSocket for establishing real-time connections with multiple users and players.',
        link: 'https://typeracer-web-iota.vercel.app/',
        codeLink:"https://github.com/devkumar4/Typeracer"
    },
    
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Twitter Clone',
       description: "I created a full-stack Twitter clone that allows users to follow/unfollow each other, get user recommendations, and post tweets with images. I used S3 for image upload functionality, Google OAuth for authentication, and Redis for caching and performance optimization. I also used Next.js, PostgreSQL, Prisma ORM, and Tailwind CSS for the front-end and back-end development.",
        link: 'https://twitter-clone-sandy-zeta.vercel.app/',
        codeLink:"https://github.com/devkumar4/Twitter"
    },
    {
        iconUrl: Hippo,
        theme: 'btn-back-blue',
        name: 'DigitalHippo - Online Digital Assest Market Place',
       description:" I created a digital asset online marketplace called DigitalHippo. I used Payload2, a headless CMS and application framework, to build an admin page where sellers can add their products and receive verification emails. I also integrated Stripe, a payment processing platform, to accept payments and generate order slips. I added many other features to enhance the functionality and user experience of the marketplace.",
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
        codeLink:"https://github.com/devkumar4/DigitalHippo"
    },
    {
        iconUrl: Blog,
        theme: 'btn-back-pink',
        name: 'Blogify - Full stack Blog application.',
        description: "I built a full-stack blog application using Appwrite, a self-hosted backend server that provides various features such as authentication, real time slug making and more. Users can view and edit their posts with TinyMCE, a rich text editor that offers a user-friendly content creation experience. Users can also create and update their post slugs in real-time, similar to Hashnode, a blogging platform for developers..",
        link: 'https://65edb98beb260c00089fba39--voluble-cocada-701b24.netlify.app/',
        codeLink:"https://github.com/devkumar4/MegaBlog"
    },
    {
        iconUrl: Ecommerce,
        theme: 'btn-back-black',
        name: "Eclatique E-commerce men's store",
     description: "I built an e-commerce platform for men’s fashion called Eclatique. I used React.js, TypeScript, JWT, and Redux to create the front-end and back-end of the application. I added features such as login, sign up, cart, order tracking, and Stripe payment gateway. I used JWT for authentication and authorization, and Redux for state management. I use express.js for making REST ful API's design",
        link: 'https://github.com/devkumar4/Eclatique',
        codeLink:"https://github.com/devkumar4/Eclatique"

    },
    {
        iconUrl: Spotify,
        theme: 'btn-back-yellow',
        name: 'Small Spotify Clone',
        description: 'I created a web application that replicates the core functionality of the popular music streaming service Spotify. Users can play songs and tracks from various genres and artists. I used HTML5, CSS3, and vanilla JavaScript to build the front-end of the application. I used Bootstrap for styling and responsive design.',
        link: 'https://devspotify.netlify.app/',
        codeLink:"https://github.com/devkumar4/spotify-clone"
    }
];