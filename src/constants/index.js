import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,github,jira,gitlab,
    shopify,
    post,
    laravel,


    mov,
    port,
    bmi,
    weather,
    porthtml,
    fashion,
cryptoplus,

    threejs,
    mbs,
    alb,
    smsol,
    sustech,

    mysql,
    wordpress,
    php,
    ci,

    contem,
    raga,
    uma,
    siba,
    mbsw,
    promo,
    inven,
    karma,
    hda,
    tea,
    tefal,
    lmhi,
    freshtoo,
    hourglass,

    danfit,
    pragya,
    fashionup,
    winquest,
    iit_roorki,

    danfit_client,
    pragya_client,
    fashionup_client,
    winquest_client,
    iit_roorki_client,
    vidmate_client
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },

    {
      id: "portfolio",
      title: "Works",
    },
    {
      id: "freelance",
      title: "Freelance",
    },
    {
      id: "work",
      title: "Projects",
    },  
    {
      id: "contact",
      title: "Contact",
    },
  ];
  const clients = [
    {
      title: "Danfit",
      icon: danfit_client, // Existing client logo
    },
    {
      title: "Pragya",
      icon: pragya_client, // Existing client logo
    },
    {
      title: "FashionUp",
      icon: fashionup_client, // Existing client logo
    },
    {
      title: "Winquest",
      icon: winquest_client, // Existing client logo
    },
    {
      title: "IIT Roorkee",
      icon: iit_roorki_client, // Existing client logo
    },
    {
      title: "Vidmate",
      icon: vidmate_client, // New client logo
    },
  ];
  
  // const services = [
  //   {
  //     title: "Websites",
  //     icon: web,
  //   },
  //   {
  //     title: "Web Aplications",
  //     icon: mobile,
  //   },
  //   {
  //     title: "WordPress & E-commerce",
  //     icon: backend,
  //   },
  //   {
  //     title: "Hosting",
  //     icon: creator,
  //   },
  // ];
  const services = [
    {
      title: "Projects",
      icon: web, // add an icon path here if needed
      value: "30+", // Value you want to display (e.g., Projects count)
    },
    {
      title: "Clients",
      icon: mobile, // add an icon path here if needed
      value: "8+", // Number of satisfied clients
    },
    {
      title: "Experience Year",
      icon: backend, // add an icon path here if needed
      value: "3+", // Number of jobs done
    },
    {
      title: "Lines of Code",
      icon: creator, // add an icon path here if needed
      value: "50000+", // Lines of code written
    },
  ];
  
  
 const technologies = [
    {
      name: "Laravel",
      icon: laravel,
      category: "backend",
      percentage: 85,
    },
    {
      name: "CI",
      icon: ci,
      category: "backend",
      percentage: 75,
    },
    {
      name: "PHP",
      icon: php,
      category: "backend",
      percentage: 80,
    },
    {
      name: "MySQL",
      icon: mysql,
      category: "backend",
      percentage: 90,
    },
    {
      name: "PostgreSQL",
      icon: post,
      category: "backend",
      percentage: 80,
    },
    {
      name: "JavaScript",
      icon: javascript,
      category: "frontend",
      percentage: 90,
    },
    {
      name: "React JS",
      icon: reactjs,
      category: "frontend",
      percentage: 85,
    },
    {
      name: "HTML 5",
      icon: html,
      category: "frontend",
      percentage: 95,
    },
    {
      name: "CSS 3",
      icon: css,
      category: "frontend",
      percentage: 90,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      category: "frontend",
      percentage: 85,
    },
    {
      name: "Git",
      icon: git,
      category: "tools",
      percentage: 95,
    },
     {
      name: "GitHub",
      icon: github,
      category: "tools",
      percentage: 95,
    },
    {
      name: "GitLab",
      icon: gitlab,
      category: "tools",
      percentage: 95,
    },
    {
      name: "Jira",
      icon: jira,
      category: "tools",
      percentage: 95,
    },
  ];
  
  
  const experiences = [
    {
      title: "Jr. Software Engineer",
      company_name: "Sustech Engineering Pvt Ltd",
      icon: sustech,
      iconBg: "#7da28c",
      date: "April 2025 - Present",
      points: [
        "Developing interactive and reusable UI components using React.js with a focus on performance and scalability.",
        "Building and maintaining backend services and RESTful APIs using Laravel and MySQL to support robust web applications.",
        "Managing source code and collaborating on features and fixes through GitLab with CI/CD workflows.",
        "Contributing to the full development lifecycle — from planning and coding to testing and deployment."
      ],
    },    
    {
      title: "Web & Laravel Developer",
      company_name: "SM Solutions",
      icon: smsol,
      iconBg: "#9096ad",
      date: " June 2024 - April 2025",
      points: [
        "Developing and maintaining web applications and Websites in MVC architecture to meet client and project requirements.",
        "Developing and maintaining dynamic Websites and Web applications using Laravel(PHP), MySQL, JQuery, JavaScript and AJAX.",
        "Implementing responsive front-end interfaces with HTML, CSS, and Bootstrap to enhance user experience."
  
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Albatross Software Services Pvt. Ltd.",
      icon: alb,
      iconBg: "#9096ad",
      date: " June 2023 - June 2024",
      points: [
        "Developing and maintaining web applications in MVC architecture to meet client and project requirements.",
        "Developing and maintaining dynamic web applications using CodeIgniter(PHP), MySQL, PostgreSQL, JavaScript and AJAX.",
        "Implementing responsive front-end interfaces with HTML, CSS, and Bootstrap to enhance user experience."
  
      ],
    },
    {
      title: "Web Developer",
      company_name: "MindBrew Studio",
      icon: mbs,
      iconBg: "#9ed2de",
      date: " August 2022 - May,2023",
      points: [
        "Developing websites using HTML, CSS, JavaScript, and jQuery languages.",
        "Coded websites Back-End using PHP, and MySQL.",
        "Provided website development and maintenance in WordPress and wocommerce.",
        "Hosted website on various hosting Platforms.",
        "Developed user-oriented visuals and features usingfront-end languages to increase site traffic.",
        "Conceived and built optimized landing pages in HTML and CSS for integration and cross-browsercompatibility.",
  
      ],
    },
    
  ];
  
  const jobs = [
    {
  name: "Hourglass",
  description: "Hourglass is a business management app that streamlines project quoting, workflows, and payroll, centralizing operations in one platform.",

  tags: [
    {
      name: "Laravel",
      color: "blue-text-gradient",
    },
    {
      name: "MySQL",
      color: "green-text-gradient",
    },
    {
      name: "PHP",
      color: "pink-text-gradient",
    },
    {
      name: "JQuery",
      color: "blue-text-gradient",
    },
    {
      name: "MVC Architechture",
      color: "green-text-gradient",
    },
  ],
  image: hourglass,
  website_link: "https://hourglass.sustech.net.au/", // Replace with actual link if different
  role: "Maintenance & Feature Enhancements"
}
,
{
  name: "FreshToo",
  description:
    "FreshToo is a platform designed to support e-commerce and mobile applications. It includes an admin panel for managing online orders, product listings, user management, and APIs for seamless integration with mobile apps.",
  tags: [
    {
      name: "Laravel",
      color: "blue-text-gradient",
    },
    {
      name: "MySQL",
      color: "green-text-gradient",
    },
    {
      name: "PHP",
      color: "pink-text-gradient",
    },
    {
      name: "JQuery",
      color: "blue-text-gradient",
    },
    {
      name: "MVC Architechture",
      color: "green-text-gradient",
    },
  ],
  image: freshtoo,
  website_link: "#", // Replace with actual link if different
  role: "Development"
},
    {
      name: "Tefal",
      description:
        "Tefal India's Website is made to showcase their product and business. It has an admin panel as well as a dynamic frontend.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
        {
          name: "JQuery",
          color: "blue-text-gradient",
        },
        {
          name: "MVC Architechture",
          color: "green-text-gradient",
        },

      ],
      image: tefal,
      website_link: "https://tefal.in/",
      role: "Development"
    },

    {
      name: "LMHI",
      description:
        "LMHI's Website is made to showcase their research, country NPR, and other details. It has an admin panel as well as a dynamic front end.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
        {
          name: "JQuery",
          color: "blue-text-gradient",
        },
        {
          name: "MVC Architechture",
          color: "green-text-gradient",
        },

      ],
      image: lmhi,
      website_link: "#/",
      role: "Development"
    },

    {
      name: "Tea Garder Survey",
      description:
        "Tea Garder Survey is a web application by the Government of West Bengal.It made to digitalised data and working of tea garder management ",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
        {
          name: "JQuery",
          color: "blue-text-gradient",
        },
        {
          name: "MVC Architechture",
          color: "green-text-gradient",
        },

      ],
      image: tea,
      website_link: "#/",
      role: "Development"
    },
    {
      name: "Karmasangbad",
      description:
        "Karmasangbad is a job portal by the Government of West Bengal. It has various functionalities like posting jobs, applying, scheduling interviews etc.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "CodeIgniter",
          color: "pink-text-gradient",
        },
        {
          name: "JQuery",
          color: "blue-text-gradient",
        },
        {
          name: "MVC Architechture",
          color: "green-text-gradient",
        },

      ],
      image: karma,
      website_link: "https://karmasangbad.wblabour.gov.in/",
      role: "Development"
    },

    {
      name: "HDA Water Billing System",
      description:
        "Water Billing System is a Web Application for the Haldia Development Authority. It has various users for officials & consumers. It will add new consumers, generate bills etc. ",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "CodeIgniter",
          color: "pink-text-gradient",
        },
        {
          name: "JQuery",
          color: "blue-text-gradient",
        },
        {
          name: "MVC Architechture",
          color: "green-text-gradient",
        },

      ],
      image: hda,
      website_link: "#",
      role: "Development"
    },
    
    // {
    //   name: "Raga Interior",
    //   description:
    //     "Raga Interior website is a Display Website build on HTML,CSS,JS and PHP,MySQL.In this site they display their works ,user can ask for services.",
    //   tags: [
    //     {
    //       name: "HTML",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "CSS",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Java Script",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "PHP",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "MySQL",
    //       color: "green-text-gradient",
    //     },

    //   ],
    //   image: raga,
    //   website_link: "https://ragakitchen.com/",
    //   role: "Development"
    // },
    {
      name: "Inventory System",
      description:
        "Inventory System is a web aplication for NKDA, this apliation build on CodeIgniter.This application have some users,it can take login details, input datas to server and show acroding to need.",
      tags: [
        {
          name: "CodeIniter",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        }, {
          name: "AJAX",
          color: "blue-text-gradient",
        },
       
      ],
      image: inven,
      website_link: "#",
      role: "Development & Maintanence"
    },


    // {
    //   name: "Contemporary",
    //   description:
    //     "Contemporary Real Estate Brokrage is a Website build on WordPress.This is a UAE based brokrage company.In this site they showcase there popertys and people can see and contact them to buy.",
    //   tags: [
    //     {
    //       name: "WordPress",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Elementor",
    //       color: "green-text-gradient",
    //     },
       
    //   ],
    //   image: contem,
    //   website_link: "https://contemporaryrealestate.ae/",
    //   role: "Development & Maintanence"
    // },
    {
      name: "MindBrew Studio",
      description:
        "MindBrew Studio is a one stop ad agency which provide services include Branding,Marketing,A-V ad and Web services.I created a Website for them to show there work to the world.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Java Script",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: mbsw,
      website_link: "https://mindbrewstudio.com/",
      role: "Development & Maintanence"
    },

    // {
    //   name: "Madame Sibarita",
    //   description:
    //     "Madame Sibarita website is build on WordPress ,It's a wo-commerce site.This SIte comes to us with some prblems. Some pages were brocken,Animation distrubed.Currently we maintain this site",
    //   tags: [
    //     {
    //       name: "WordPress",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "HTML",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "CSS",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Java Script",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "Gsap",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: siba,
    //   website_link: "https://madamesibarita.com/",
    //   role: "Maintanence"
    // },
    {
      name: "Ant Promoskope",
      description:
        "Ant Promoskope website is a platform designed to showcase the company's businesses like Telecom Services and Marketing. HTML, CSS, JavaScript and Bootstrap are used in the front-end and PHP and MySQL are used in the back-end.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Java Script",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: promo,
      website_link: "https://promoskope.com/",
      role: "Development & Maintanence"
    },
    {
      name: "UMA Group",
      description: "UMA Group website is display site of UMA Group.It build on HTML,CSS,Bootstrap,JavaScript and PHP.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Java Script",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: uma,
      website_link: "https://umagroup.in/",
      role: "Development"
    },


  ];

  
  const projects = [
    {
      name: "React Weather App",
      
      
      description:
     "React Weather App is a web application built with React JS and styled using TailwindCSS. It integrates the OpenWeather API to fetch real-time weather data. Users can easily search for the weather of any location, view current conditions, and forecast details.",
        // "React Weather App is a web app built on React JSand TailwindCSS. Used open-weather API to getweather. Users can search for the weather by place.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "OpenWeather API",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/DipakAec/React-Weather-App",
      website_link: "https://dipakaec.github.io/React-Weather-App",
    },
    {
      name: "Fashion",
      description: "Fashion is a modern web app built using Next.js and styled with TailwindCSS. The template provides a sleek and responsive e-commerce layout, ready to integrate with a backend for product management, shopping cart, and checkout functionalities.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient"
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient"
        },
        {
          name: "E-Commerce",
          color: "green-text-gradient"
        }
      ],
      image: fashion,
      source_code_link: "https://github.com/DipakAec/fasion-ecommerce",
      website_link: "https://fasion-ecommerce-eight.vercel.app/"
    },    

{
  name: "CryptoPulse",
  description:
    "CryptoPulse is a modern cryptocurrency tracking app that allows users to stay updated with real-time prices, market data, and trends for their favorite cryptocurrencies. Built with React and powered by the CoinGecko API, it delivers all the insights needed to make informed decisions.",
  tags: [
    {
      name: "React JS",
      color: "blue-text-gradient",
    },
    {
      name: "CoinGecko API",
      color: "green-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
  ],
  image: cryptoplus, // replace 'crypto' with the appropriate image import or path
  source_code_link: "https://github.com/DipakAec/CryptoPulse",
  website_link: "https://crypto-pulse-25.netlify.app/",
},
    {
      name: "Movie Search",
      description:
       "React Movie Search App is a web application built with React JS and Tailwind CSS. It allows users to search for movies by integrating with TheMovieDB API, providing details such as movie titles, release dates, ratings, and more with a intuitive and responsive interface for a seamless experience.",
     tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "theMovieDB",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind-css",
          color: "pink-text-gradient",
        },
      ],
      image: mov,
      source_code_link: "https://github.com/DipakAec/movie-Search-React",
      website_link: "https://dipakaec.github.io/movie-Search-React/",
    },

    {
      name: "BMI Calculetor",
      description:
        "BMI Calculator is a web application designed to calculate the Body Mass Index (BMI) of an individual. By entering a person's height and weight, the app computes their BMI and provides results, helping users understand their health status based on BMI categories such as underweight, normal weight, overweight, and obesity.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind-css",
          color: "green-text-gradient",
        },
      ],
      image: bmi,
      source_code_link: "https://github.com/DipakAec/React-BMI-calculetor",
      website_link: "https://dipakaec.github.io/React-BMI-calculetor/",
    },

    {
      name: "React Portfolio",
      description:
        "React Portfolio App is my Personal Portfolio build in react js.Here I showcase my office and personal projects",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "React States",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/DipakAec/React-Portfolio",
      website_link: "https://dipak-react-portfolio.vercel.app/",
    },

  ];

  const freelances = [
    {
      name: "Winquest Invoice App",
      description:
        "Winquest Invoice App a web application designed to provide comprehensive business solutions. The app allows users to create invoices, send payment reminders, manage payments, and efficiently handle student and teacher details.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "JQuery",
          color: "pink-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "blue-text-gradient",
        },
        {
          name: "Ajax",
          color: "pink-text-gradient",
        },
      ],
      image: winquest,
      source_code_link: "#",
      website_link: "#",
      role: "Development "
    },
    {
      name: "IIT Roorkee Equipment Booking App",
      description:
        "This project is for booking equipment booking for the Mechanical Department of IIT Roorkee. Users can log in and see the date and time slot available for any equipment and book. After approval by the admin, a Mail with booking details will be sent to the user.",
      tags: [
        {
          name: "Laravel",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "JQuery",
          color: "pink-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "blue-text-gradient",
        },
        {
          name: "Ajax",
          color: "pink-text-gradient",
        },
      ],
      image: iit_roorki,
      source_code_link: "#",
      website_link: "#",
      role: "Development "
    },

    {
      name: "FashionUp Website",
      description:
        "FashionUp a website dedicated to showcasing a brand's products and shop locations. The site is designed to provide a comprehensive view of the brand's offerings, helping customers easily discover and connect with the brand's physical stores.",
      tags: [
        {
          name: "HTML/CSS",
          color: "blue-text-gradient",
        },
         {
          name: "PHP",
          color: "pink-text-gradient",
        },
        {
          name: "JS/JQuery",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
      ],
      image: fashionup,
      source_code_link: "",
      website_link: "https://fashionupretail.com/",
      role: "Development "
    },

    {
      name: "Danfit Studio",
      description:
        "Danfit Studio, a website designed to promote a dance studio and streamline the booking process for classes and events. The site aims to enhance the studio's online presence and make it easier for clients to engage with the studio's offerings",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
           {
          name: "PHP",
          color: "pink-text-gradient",
        },
        {
          name: "JS/JQuery",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
      ],
      image: danfit,
      source_code_link: "",
      website_link: "https://danfitstudio.com/",
      role: "Development "
    },

    {
      name: "Pragya Website",
      description:
        "Pragya, a portfolio website designed to showcase the work and expertise of an architect. The site highlights the architect's projects, skills, and professional accomplishments, serving as a comprehensive digital portfolio",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
           {
          name: "PHP",
          color: "pink-text-gradient",
        },
        {
          name: "JS/JQuery",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
      ],
      image: pragya,
      source_code_link: "",
      website_link: "",
      role: "Development "
    },

  ];
  
  export { services, technologies,clients, experiences, jobs, projects, freelances };