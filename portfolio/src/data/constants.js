import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const name = "Portfolio"
export const description = "A simple portfolio website"
export const BASE_URL = "https://iyedmdimegh.github.io/newportfolio/"
export const pfp = "/assets/images/pfp/pfp.jpg"
export const RESUME_ENDPOINT = "resume.pdf"
export const projects = [
  {
    "id": 1,
    "title": "AI-Powered 3D Packing Software",
    "description": "This Project delivers substantial volume and cost savings by efficiently packing 3D boxes within containers. It ensures optimal space utilization and minimizes waste, offering a powerful solution for logistics, warehousing, and shipping challenges. Experience precision and efficiency with our advanced packing algorithms.",
    "images": ["/assets/images/project/3dpack/3dPackGif.gif"],
    "technologies": ["Deep Reinforcement Learning", "React.js", "Three.js", "Django", "TailwindCSS", "Dynamic Programming"],
    "youtubeLink": "https://youtu.be/WB1j8iTJYVE",
    "githubLink": "",
    "documentLink": `${BASE_URL}assets/documents/reports/Pixemantic.pdf`
  },
  {
    "id": 2,
    "title": "SMARTSHIELD - AI-Driven Cybersecurity Incident Response Platform",
    "description": "SMARTSHIELD is an AI-powered platform designed for automated detection, classification, and response to cybersecurity incidents, capable of handling large volumes of network logs. Led a team in developing the platform, focusing on machine learning models for real-time threat detection and classification, ensuring high accuracy and scalability. Developed a user-friendly dashboard that visualizes real-time threats and provides an option to view AI-generated reports for detected threats.",
    "images": ["/assets/images/project/smartshield/image0.png","/assets/images/project/smartshield/image1.png", "/assets/images/project/smartshield/image2.png", "/assets/images/project/smartshield/image3.png"],
    "technologies": ["CatBoost", "XGBoost", "FastAPI", "NestJS", "React", "TailwindCSS", "PostgreSQL", "Kibana", "Docker", "CrewAI", "RabbitMQ", "openArgus", "Zeek"],
    "youtubeLink": "https://youtu.be/2Nd6C_SpXak",
    "githubLink": "",
    "documentLink": `${BASE_URL}assets/documents/papers/SMARTSHIELDTechPaper.pdf`
  },
  {
    "id": 3,
    "title": "INSAT Chess Coach Robot",
    "description": "Led a team to develop the INSAT Chess Coach Robot, an interactive robotic chess system designed for the TSYP contest. The project integrates computer vision, a robotic arm, and an adaptive chess engine to offer a unique learning experience. Key features include physical piece manipulation, skill-matched gameplay, real-time feedback, and educational modes, all while using standard chess equipment. This innovative system bridges the gap between digital and physical chess learning.",
    "images": ["/assets/images/project/chessCoach/image0.png", "/assets/images/project/chessCoach/image2.png", "/assets/images/project/chessCoach/image3.png"],
    "technologies": ["Stockfish", "Raspberry Pi 4", "Arduino", "YOLOv8", "Computer Vision"],
    "youtubeLink": "",
    "githubLink": "",
    "documentLink": `${BASE_URL}assets/documents/papers/chessTechnicalPaper.pdf`
  },
  {
    "id": 4,
    "title": "Messaging Web App",
    "description": "This project was developed during my internship at Proxym-IT. This messaging App is designed to offer seamless real-time communication, eliminating delays and enhancing the user experience. It efficiently handles scalability issues, ensuring reliable performance even with a growing number of users and messages. The app prioritizes security with robust user authentication measures, protecting user data and privacy. Additionally, it provides comprehensive group communication features and customizable user experiences to meet diverse needs.",
    "images": ["/assets/images/project/messenger/messenger-0.png", "/assets/images/project/messenger/messenger-1.png", "/assets/images/project/messenger/messenger-2.png", "/assets/images/project/messenger/messenger-3.png", "/assets/images/project/messenger/messenger-4.png"],
    "technologies": ["React.js", "Express.js", "MongoDB", "Socket.io", "TailwindCSS", "Node.js", "Postman", "MUI-icons"],
    "youtubeLink": "",
    "githubLink": "",
    "documentLink": `${BASE_URL}assets/documents/reports/Proxym.pdf`
  },
  {
    "id": 6,
    "title": "University platform",
    "description": "School Management System is a web platform designed to facilitate the management of schedules, attendance, exam details, and enrollment requests within a school environment. It provides separate interfaces for students, teachers, and administrators, each tailored to their specific needs.",
    "images": ["/assets/images/project/edplatform/platform-0.png", "/assets/images/project/edplatform/platform-1.png", "/assets/images/project/edplatform/platform-2.png"],
    "technologies": ["Javascript", "PHP", "Chart.js", "HTML", "CSS"],
    "youtubeLink": "",
    "githubLink": "https://github.com/iyedmdimegh/UniversityManagementSystem-symfonyVersion",
    "documentLink": ""
  },
  {
    "id": 7,
    "title": "Java E-commerce application",
    "description": "Java E-commerce application is a project that manages a business's products, handling both admin and client services.",
    "images": ["/assets/images/project/java/java-1.jpg"],
    "technologies": ["Java", "Java POO"],
    "youtubeLink": "",
    "githubLink": "",
    "documentLink": ""
  }
]


export const recentUpdates = [
  {
    id: 1,
    image: "/assets/images/updates/vctaPic.jpg",
    title: "I am currently Vice Chair, Technical Activities at IEEE INSAT Computer Society Chapter",
    description: "As Vice Chair and responsable for Technical Activities, I lead and manage innovative technical projects, develop the annual plan, and organize impactful workshops to enhance the skills and learning opportunities of our 250+ members."
  },
  {
    id: 2,
    image: "/assets/images/updates/AINS-HACK.jpg",
    title: "I am currently Vice Chair,",
    description: "As Vice Chair and responsable for Technical Activities, ops to enhance the skills and learning opportunities of our 250+ members."
  },
  {
    id: 3,
    image: "/assets/images/updates/project-image01.jpg",
    title: "I am currently Vice Chair, Technical Activities at IEEE INSAT Computer Society Chapter",
    description: "As Vice Chair and responsable for Technical Activities, I lead and manage innovative technical projects, develop the annual plan, and organize impactful workshops to enhance the skills and learning opportunities of our 250+ members."
  },
  {
    id: 4,
    image: "/assets/images/updates/hackathon.jpg",
    title: "I am currently Vice Chair, Technical Activities at IEEE INSAT Computer Society Chapter",
    description: "As Vice Chair and responsable for Technical Activities, I lead and manage innovative technical projects, develop the annual plan, and organize impactful workshops to enhance the skills and learning opportunities of our 250+ members."
  },

];

export const skillCategories = {
    webDevelopment: {
      title: "web development",
      skills: ["HTML", "CSS", "Bootstrap", "TailwindCSS", "JavaScript", "React.js", "Node.js", "Express.js", "PHP", "Symfony", "Java", "MongoDB", "PostgreSQL", "Oracle SQL"],
      bgColor: "from-purple-900 to-red-800"
    },
    ai: {
      title: "AI",
      skills: ["Deep Reinforcement Learning", "Python", "Tensorflow", "Keras", "XGBoost", "Django", "Scilearn", "Pandas", "Numpy", "Computer Vision"],
      bgColor: "from-teal-600 to-teal-900"
    },
    other: {
      title: "other",
      skills: ["Git", "GitHub", "Linux", "C++", "C", "Assembly", "VSCode"],
      bgColor: "from-slate-600 to-slate-800"
    }
  };

export const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />,
      url: 'https://github.com/iyedmdimegh',
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
      description: 'my projects and contributions'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />,
      url: 'https://www.linkedin.com/in/iyed-mdimegh-21b1b5285/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      description: 'Connect with me'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8" />,
      url: 'mailto:iyedmdimegh@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400',
      description: 'Drop me a message'
    }
  ];
