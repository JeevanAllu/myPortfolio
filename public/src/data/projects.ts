
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "CROP RECOMMENDATION SYSTEM",
    description: "Developed a machine learning-based Crop Recommendation System that analyzes soil parameters and environmental conditions to suggest optimal crops. Implemented Random-Forest and SVM algorithms for accurate predictions, enhancing agricultural productivity. Built an interactive web application using the Flask framework to improve user experience and accessibility for farmers..",
    image: "/imgs/crop_rec.png",
    tags: ["Python", "Flask", "Machine Learning"],
    links: {
      github: "https://github.com/JeevanAllu/crop_recommendation_system_ml_project",
      live: "",
    },
  },
  {
    id: 2,
    title: "StyleSpot Store",
    description: "A full-stack application with React and Node.js for order placement and checkout functionality for a tailor store.",
    image: "/imgs/p1.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      github: "https://github.com/JeevanAllu/StyleSpot",
      live: "",
    },
  },
  {
    id: 3,
    title: "DEEP LEARNING BASED DETECTION OF NUTRIENT DEFICIENCY IN COFFEE PLANTS USING LEAF ANALYSIS AND ORGANIC REMEDY RECOMMENDATIONS .",
    description: "Developed a deep learning model using Mobile-Net to detect nutrient deficiencies in coffee plant leaves from coffee leaf images. Used CVAT for image annotation and applied data augmentation to do YOLOV8 object detection model to spot the area of deficiency. The system provides classification results with high accuracy and offers organic remedy recommendations for sustainable farming.  ",
    image: "/imgs/coffee_img.png",
    tags: ["Python","Flask","YOLOv8 object-detection","Machine Learning Algo"],
    links: {
      github: "https://github.com/JeevanAllu/nutrient_deficiency",
      live: ""
    },
  },
  {
    id: 4,
    title: "SPEEDOMETER APPLICATION",
    description: "Built a full-stack real-time speed monitoring application using React, Node.js, and MongoDB. Used react-d3-speedometer for live speed visualization and integrated Socket.IO for real-time client-server communication. Implemented RESTful APIs to save speed data in MongoDB and created a data generator to simulate live speed updates every second. Ensured responsive updates via WebSockets for a dynamic user experience",
    image: "/imgs/speedometer.png",
    tags: ["React", "CSS", "Redux", "Socketio","express.js","mongodb"],
    links: {
      github: "https://github.com/JeevanAllu/speedometer-app",
      live: "",
    },
  },
  {
    id: 5,
    title: "DIGITAL-LIBRARY",
    description: "Developed an Online Library Management System using Spring Boot, enabling book issuance, return tracking, and user management with secure REST APIs and database integration. ",
    image: "/imgs/dig_lib.jpg",
    tags: ["Java","SpringBoot","REST API's"],
    links: {
      github: "",
      live: "",
    },
  },
];
