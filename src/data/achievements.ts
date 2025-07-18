
import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  
  {
    id: 1,
    title: "2nd Place - DEBUGGING DERBY",
    type: "competition",
    year: "2024",
    description: "Secured Second prize in DEBUGGING DERBY event in the VALIANT 2K23,tech fest at VITB.",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Successfully published paper at ICSVR Conference",
    type: "competition", 
    year: "2024",
    description: "Published a paper on Deep-learning based detection of nutrient deficiency in coffee plants using leaf Analysis and Organic Remedy Recommendations in ICSVREC Conference-2025 during 04-05 April 2025 in association with Taylor & Francis",
    icon: Trophy,
  },
  
  {
    id: 3,
    title: "ServiceNow CSA",
    type: "certification",
    year: "2024",
    description: "Completed ServiceNow Certified System Administrator(CSA) certification.",
    icon: Award,
  },
  {
    id: 4,
    title: "ServiceNow CAD",
    type: "certification",
    year: "2024",
    description: "Completed ServiceNow Certified Application Developer(CSD) certification",
    icon: Award,
  },
  {
    id: 5,
    title: "Java Back-end",
    type: "certification",
    year: "2023",
    description: " Completed a 12-week course on JAVA Backend Development - Live in GeeksForGeeks.",
    icon: Award,
  },
  {
    id: 6,
    title: "Programming in Java",
    type: "academic",
    year: "2023",
    description: "Successfully completed the NPTEL (National Programme on Technology Enhanced Learning) online certification course Programming in Java, conducted by IIT Kharagpur.",
    icon: Star,
  },
  {
    id: 7,
    title: "Social Network Analysis",
    type: "academic",
    year: "2024",
    description: "Successfully completed the NPTEL (National Programme on Technology Enhanced Learning) online certification course Social Network Analysis and gained Elite Certification, conducted by IIT Madras.",
    icon: Star,
  },
  {
    id: 8,
    title: "Natural Language Processing",
    type: "academic",
    year: "2024",
    description: "Successfully completed the NPTEL (National Programme on Technology Enhanced Learning) online certification course NLP, conducted by IIT kharagpur.",
    icon: Star,
  },
  {
    id: 9,
    title: "Git",
    type: "certification",
    year: "2024",
    description: "Successfully completed git and github basics through edX platform by IBM.",
    icon: Award,
  },
  {
    id: 10,
    title: "Python for DataScience and AI",
    type: "certification",
    year: "2024",
    description: "Successfully completed python for DataScience and AI through edX platform by IBM.",
    icon: Award,
  },
  {
    id: 11,
    title: "Intro to HTML,CSS,JS and front-end with React",
    type: "certification",
    year: "2024",
    description: "Successfully completed Intro to HTML,CSS,JS and front-end with React through edX platform by IBM.",
    icon: Award
  }


];
