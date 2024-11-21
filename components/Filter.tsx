// "use client";

// import { useState, useEffect } from "react";
// import { Checkbox } from "../components/ui/checkbox";

// type Topics = "ai" | "ml" | "coding";
// type Levels = "beginner" | "intermediate" | "advanced";
// type Category = "topics" | "levels";

// interface Filters {
//   topics: Record<Topics, boolean>;
//   levels: Record<Levels, boolean>;
// }

// export default function Component() {
//   const [filters, setFilters] = useState<Filters>({
//     topics: {
//       ai: false,
//       ml: false,
//       coding: false,
//     },
//     levels: {
//       beginner: false,
//       intermediate: false,
//       advanced: false,
//     },
//   });

//   const handleCheckboxChange = <K extends Category>(
//     category: K,
//     item: K extends "topics" ? Topics : Levels
//   ) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [category]: {
//         ...prevFilters[category],
//         [item]: !prevFilters[category][item],
//       },
//     }));
//   };

//   useEffect(() => {
//     const fetchFilteredResults = async () => {
//       // Convert filters to query string
//       const topicsQuery = Object.entries(filters.topics)
//         .filter(([_, value]) => value)
//         .map(([key]) => `topic=${key}`)
//         .join("&");
//       const levelsQuery = Object.entries(filters.levels)
//         .filter(([_, value]) => value)
//         .map(([key]) => `level=${key}`)
//         .join("&");
//       const queryString = [topicsQuery, levelsQuery].filter(Boolean).join("&");

//       // Fetch request
//       try {
//         const response = await fetch(`/api/filter?${queryString}`);
//         const data = await response.json();
//         console.log("Filtered data:", data);
//         // Here you would typically update your UI with the filtered data
//       } catch (error) {
//         console.error("Error fetching filtered results:", error);
//       }
//     };

//     fetchFilteredResults();
//   }, [filters]);

//   return (
//     <div className="p-4 bg-gray-900 text-white rounded-lg space-y-6">
//       <div>
//         <h2 className="text-lg font-semibold mb-2">Topics</h2>
//         <div className="space-y-2">
//           {(Object.keys(filters.topics) as Topics[]).map((topic) => (
//             <div key={topic} className="flex items-center space-x-2">
//               <Checkbox
//                 id={topic}
//                 checked={filters.topics[topic]}
//                 onCheckedChange={() => handleCheckboxChange("topics", topic)}
//               />
//               <label htmlFor={topic} className="text-sm font-medium capitalize">
//                 {topic === "ai"
//                   ? "Artificial Intelligence"
//                   : topic === "ml"
//                   ? "Machine Learning"
//                   : topic}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div>
//         <h2 className="text-lg font-semibold mb-2">Level</h2>
//         <div className="space-y-2">
//           {(Object.keys(filters.levels) as Levels[]).map((level) => (
//             <div key={level} className="flex items-center space-x-2">
//               <Checkbox
//                 id={level}
//                 checked={filters.levels[level]}
//                 onCheckedChange={() => handleCheckboxChange("levels", level)}
//               />
//               <label htmlFor={level} className="text-sm font-medium capitalize">
//                 {level}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
