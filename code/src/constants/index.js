export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Testimonials',
      href: '#testimonials',
    },
    {
      id: 5,
      name: 'Work',
      href: '#experience',
    },
    {
      id: 6,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Charlene Mclean',
      position: 'Founder of SK Career Development Association',
      img: 'assets/charleneMclean.jpg',
      review:
        'Working with Aman was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Feras Aljoudi',
      position: 'Software Engineering Student at the University of Regina',
      img: 'assets/ferasAljoudi.jpg',
      review:
        'I had the pleasure of working on the same team as Aman for one of our projects. His work ethic is truly impressive and inspiring. Aman consistently goes above and beyond, ensuring that every task is completed with attention to detail and a commitment to excellence.',
    },
    {
      id: 3,
      name: 'Dr. Kin-Choong Yow',
      position: 'Professor at University of Regina',
      img: 'assets/kinChoongYow.jpg',
      review:
        'I had the privilege of teaching Aman in my Machine Learning course, and I was consistently impressed by his strong analytical skills and deep curiosity for the subject. Aman demonstrated an exceptional ability to grasp complex concepts and apply them effectively in practical projects.',
    },
    {
      id: 4,
      name: 'Craig Ruf',
      position: 'Manager at Saskatchewan Government Insurance',
      img: 'assets/noImage.png',
      review:
        'Aman was an invaluable member of our team, consistently demonstrating a strong work ethic, technical expertise, and a proactive attitude. He approached every challenge with a solution-oriented mindset and showed remarkable initiative in driving projects forward.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Freight Shield - A Trucking Software',
      desc: 'Freight Shield is a trucking software that handles the communication between Shippers, Carriers and Drivers while keeping safety in check.',
      subdesc:
        'Built as a unique Software-as-a-Service web app and mobile app with React, React Native, Chakra UI, MongoDB and Docker, Freight Shield is designed for optimal performance and scalability.',
      href: 'https://freightshield.stardustsolution.com/',
      texture: '/textures/project/freightShield.mp4',
      logo: '/assets/freightShield.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Chakra UI',
          path: 'assets/chakraUI.svg',
        },
        {
          id: 3,
          name: 'MongoDB',
          path: '/assets/mongodb.svg',
        },
        {
          id: 4,
          name: 'Docker',
          path: '/assets/docker.svg',
        },
      ],
    },
    {
      title: 'Blindness Detection - Machine Learning Model for Diabetic Retinopathy Patients',
      desc: 'The Blindness Detection Project focuses on creating a computer-aided diagnosis system that leverages Convolutional Neural Network (CNN) algorithms for the early detection of Diabetic Retinopathy (DR), a leading cause of blindness among diabetic patients. The project involves the use of a large dataset of eye images obtained from Kaggle, which has been preprocessed and resized to a uniform size to enhance the performance of the CNN models.',
      subdesc:
        'With Blindness Detection, doctors can make decisions on close call cases. Blindness Detection utilizes Python and Machine Learning Libraries like Keras, TensorFlow, Numpy etc.',
      href: 'https://blindnessdetection.stardustsolution.com/',
      texture: '/textures/project/blindnessDetection.mp4',
      logo: '/assets/blindnessDetection.jpg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/python.svg',
        },
        {
          id: 2,
          name: 'Keras',
          path: 'assets/keras.png',
        },
        {
          id: 3,
          name: 'Tensorflow',
          path: '/assets/tensorflow.svg',
        },
        {
          id: 4,
          name: 'Numpy',
          path: '/assets/numpy.svg',
        },
      ],
    },
    {
      title: 'A web app for Saskatchewan Career Development Association (SKCDA)',
      desc: 'The purpose of this project is to design and develop a fully functional website for the Saskatchewan Career Development Association (SKCDA), a professional, non-profit (voluntary) association dedicated to supporting Career Development Practitioners (CDPs) working across Saskatchewan.',
      subdesc:
        'With a focus on efficiency, this web app integrantes complex forms and payments, by using Wordpress as CMS.',
      href: 'https://www.skcda.ca/',
      texture: '/textures/project/SKCDA.mp4',
      logo: '/assets/SKCDA.svg',
      logoStyle: {
        backgroundColor: '#7E60BF',

      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'Wordpress',
          path: '/assets/wordpress.svg',
        },
      ],
    },
    {
      title: 'Virtual Resume - Online Resume to highlight work experience and skills',
      desc: 'A very basic resume with in chat functiallity, dark mode(green mode) and vistor count record.',
      subdesc:
        'Built with Vue.js, Tailwind CSS and Firebase, Virtual Resume ensures a smooth and responsive design, tailored to my work experience and skills.',
      href: 'https://amanpadda.stardustsolution.com/',
      texture: '/textures/project/virtualResume.mp4',
      logo: '/assets/aiGeneratedAvatar.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'Vue.js',
          path: '/assets/vue.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Firebase',
          path: '/assets/firebase.svg',
        },
      ],
    },
    {
      title: 'TodoList - A minimal Todo List App',
      desc: 'The objective is to create a Todo List Application using the MEN stack (Mongo, Express, Node.js) that closely resembles some initial prototypes.',
      subdesc:
        'This application smoothly combines Node.js for robust backend functionality, Express for quick server-side operations, and MongoDB for effective data storage. With tools that make it simple to add, claim, and remove tasks, users will have no trouble browsing through tasks. Data accuracy is ensured via real-time updates, which highlight the MEN stacks strength and adaptability in creating dynamic and responsive online applications.',
      href: 'https://todolist.stardustsolution.com/',
      texture: '/textures/project/todoList.mp4',
      logo: '/assets/todoList.ico',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'Javascript',
          path: '/assets/javascript.svg',
        },
        {
          id: 2,
          name: 'Express.js',
          path: '/assets/express.svg',
        },
        {
          id: 3,
          name: 'Node.js',
          path: '/assets/nodejs.svg',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: '/assets/mongodb.svg',
        },
      ],
    },
    {
      title: 'SuggestMe Music - An app that suggest artists based on other artist',
      desc: 'A web-based platform designed to help users discover artists who align with their personal interests and preferences, rather than solely based on their listening history. This platform aims to provide a more personalized and engaging experience by matching users with artists in specific genres and styles they are genuinely interested in.',
      subdesc:
        'This application smoothly combines React for beautiful UI Design, Node.js for robust backend functionality and Express for quick server-side operations.',
      href: 'https://suggestmemusic.stardustsolution.com/',
      texture: '/textures/project/suggestMeMusic.mp4',
      logo: '/assets/suggestMeMusic.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Express.js',
          path: '/assets/express.svg',
        },
        {
          id: 3,
          name: 'Node.js',
          path: '/assets/nodejs.svg',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Stardust Software Solutions',
      pos: 'Founder and CEO',
      duration: 'Aug 2024 - Present',
      title: "At a startup, I led the development of six custom software solutions for businesses, focusing on web and mobile applications. I designed scalable architectures, supporting up to 1,000 concurrent users, and managed the entire software development lifecycle, from client consultation to post-launch support.",
      icon: '/assets/stardust.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'University of Regina',
      pos: 'Artificial Intelligence Research Assistant',
      duration: 'July 2023 - Aug 2023',
      title: "I proposed generating datasets with Chat-GPT, increasing data sample efficiency. Working with a PhD student, we expanded the dataset by 50% through scraping erroneous code samples. I also integrated JavaScript and Node.js to prevent duplicate code generation, reducing redundancy in the dataset.",
      icon: '/assets/uofr.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Saskatchewan Career Development Association (SKCDA)',
      pos: 'Full Stack Developer',
      duration: 'May 2023 - Aug 2023',
      title: "I led a team of three to design and prototype a web application, then built and deployed the live version. I migrated over 50 pages from Weebly to GreenGeeks, improving content management, and implemented secure payment processing and optimized form registrations, streamlining membership renewal for over 100 users.",
      icon: '/assets/SKCDA.svg',
      animation: 'salute',
    },
    {
      id: 4,
      name: 'Saskatchewan Government Insurance (SGI)',
      pos: 'IT Operations Engineer (Intern)',
      duration: 'Jan 2022 - Aug 2022',
      title: "I resolved a critical blue screen issue affecting the organization and set up infrastructure for salvage operations during a crisis. I also managed tasks like packaging applications and overseeing Azure controls, ensuring the smooth operation of IT and cloud services.",
      icon: '/assets/sgi.svg',
      animation: 'victory',
    },
  ];