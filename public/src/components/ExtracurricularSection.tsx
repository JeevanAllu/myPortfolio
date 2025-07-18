// import React from 'react';
// import { motion } from 'framer-motion';
// import { Trophy, Users, Megaphone, Calendar } from 'lucide-react';

// interface Activity {
//   icon: JSX.Element;
//   title: string;
//   description: string;
//   year?: string;
// }

// const activities: Activity[] = [
//   {
//     icon: <Trophy className="w-6 h-6 text-indigo-400" />,
//     title: "Hackathon Finalist - Smart India Hackathon",
//     description: "Built an AI-powered agriculture assistant with IoT integration.",
//     year: "2023",
//   },
//   {
//     icon: <Users className="w-6 h-6 text-green-400" />,
//     title: "Coding Club Core Member",
//     description: "Led sessions on problem-solving and hosted intra-college contests.",
//     year: "2022–2024",
//   },
//   {
//     icon: <Users className="w-6 h-6 text-yellow-400" />,
//     title: "Volunteer - NSS",
//     description: "Participated in blood donation and environmental campaigns.",
//     year: "2021–2023",
//   },
//   {
//     icon: <Megaphone className="w-6 h-6 text-pink-400" />,
//     title: "Technical Speaker - Student Tech Fest",
//     description: "Gave a talk on 'GitHub for Beginners' promoting open-source.",
//     year: "2024",
//   },
// ];

// const ExtracurricularSection: React.FC = () => {
//   return (
//     <section
//       className="py-12 px-4 md:px-10"
//       style={{ background:'hsla(227, 40%, 9%)' }}
//     >
//       <h2 className="section-heading">Extra-Curricular Activities</h2>


//       <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
//         {activities.map((activity, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             whileHover={{ scale: 1.03 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.15 }}
//             className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
//           >
//             <div className="flex items-center gap-3 mb-3">
//               {activity.icon}
//               <h3 className="text-xl font-semibold text-white">
//                 {activity.title}
//               </h3>
//             </div>
//             <p className="text-gray-300">{activity.description}</p>
//             {activity.year && (
//               <div className="flex items-center gap-1 mt-3 text-sm text-gray-500">
//                 <Calendar className="w-4 h-4" />
//                 <span>{activity.year}</span>
//               </div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ExtracurricularSection;
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Grip } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { achievements } from "@/data/extracur";

const ExtracurricularSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);

    document.body.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    document.body.style.cursor = "default";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.cursor = "default";
    }
  };

  return (
    <section id="achievements" className="pt-14 bg-background/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Extra-Curricular Activities</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            A collection of my accomplishments, awards and certificates in extra-curricular activities.
          </p>
        </motion.div>

        <div className="flex justify-between mb-6 space-x-2">
          <div className="flex items-center text-muted-foreground">
            <Grip className="h-4 w-4 mr-2" />
            <span className="text-sm hidden md:inline">Drag to explore</span>
            <span className="text-sm md:hidden">Swipe to explore</span>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={() => scroll("left")}
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => scroll("right")}
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 space-x-6 snap-x scrollbar-hidden cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="min-w-[300px] max-w-[300px] bg-card p-6 rounded-lg shadow-sm border border-border snap-center select-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-2 rounded-full mr-3 ${
                    achievement.type === "sports"
                      ? "bg-yellow-100/80 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-300"
                      : achievement.type === "community-service"
                      ? "bg-blue-100/80 text-blue-600 dark:bg-blue-950 dark:text-blue-300"
                      : "bg-green-100/80 text-green-600 dark:bg-green-950 dark:text-green-300"
                  }`}
                >
                  <achievement.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-normal text-muted-foreground">
                    {achievement.year}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">
                    {achievement.title}
                  </h3>
                </div>
              </div>
              <p className="text-base font-normal text-muted-foreground mb-4">
                {achievement.description}
              </p>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  achievement.type === "sports"
                    ? "bg-yellow-100/80 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300"
                    : achievement.type === "community-service"
                    ? "bg-blue-100/80 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                    : "bg-green-100/80 text-green-800 dark:bg-green-950 dark:text-green-300"
                }`}
              >
                {achievement.type.charAt(0).toUpperCase() +
                  achievement.type.slice(1)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;
