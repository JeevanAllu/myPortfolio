
import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "sports" | "community-service";
  year: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "UNDER-19 National-level Badminton ChampionShip",
    type: "sports",
    year: "2019",
    description: "It is a sports event participated by various students from 600+ JNV Schools.In that I have participated firstly I got selected in cluster-level and then regional and then National-level in which my team has represented whole Hyderabad region JNV Schools",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Scouts and Guides",
    type: "community-service", 
    year: "2019",
    description: "Scouts and Guides is a youth organization dedicated to building character, self-reliance, and leadership skills through various activities and community service. At our JNV School, this movement is given great importance. I have actively participated in camps, community development, and social service projects. It aims to instill values such as duty, loyalty, patriotism, and empathy toward others.",
    icon: Award,
  },
  
  {
    id: 3,
    title: "Semi-Finalists in Smash Badminton Academy Tournament",
    type: "sports",
    year: "2024",
    description: "We were semi-finalists in a men's doubles badminton tournament held at Smash Badminton Academy, Bhimavaram, and were awarded a cash prize of ₹4,000 along with a trophy.",
    icon: Trophy,
  },
 
];
