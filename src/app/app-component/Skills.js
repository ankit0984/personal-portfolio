'use client';
import React from 'react'
// const Skills = () => {
//     return (
//       <div className="skills-container">
//         <h2 className="text-2xl font-bold mb-4">Skills</h2>
//         <div className="flex flex-col space-y-4">
//           <div className="border rounded-lg p-4">
//             <h3 className="text-xl font-semibold mb-2">DevOps</h3>
//             <ul className="list-disc pl-6">
//               <li>CI/CD Pipelines (Jenkins, GitLab CI/CD)</li>
//               <li>Infrastructure as Code (Terraform)</li>
//               <li>Containerization (Docker, Kubernetes)</li>
//               <li>Cloud Platforms (AWS, Azure, GCP)</li>
//               <li>Monitoring and Logging (Prometheus, ELK Stack)</li>
//             </ul>
//           </div>
//           <div className="border rounded-lg p-4">
//             <h3 className="text-xl font-semibold mb-2">Flutter</h3>
//             <ul className="list-disc pl-6">
//               <li>UI Design and Development</li>
//               <li>State Management (Provider, Riverpod)</li>
//               <li>API Integration (RESTful, GraphQL)</li>
//               <li>Platform-Specific Features (Android, iOS)</li>
//               <li>Performance Optimization</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Skills;
// import { motion } from 'framer-motion';

// const Skills = () => {
//   return (
//     <motion.div
//       className="skills-container h-screen p-8 lg:p-16"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: 'black' }}
//     >
//       <h2 className="flex justify-center items-center text-2xl font-bold mb-14 text-white">Skills</h2>
//       <motion.div
//         className="grid grid-cols-1 lg:grid-cols-2 gap-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <motion.div
//           className="border rounded-lg p-4"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <h3 className="text-xl font-semibold mb-2 text-white">DevOps</h3>
//           <ul className="list-disc pl-6 text-white">
//             <li>CI/CD Pipelines (Jenkins, GitLab CI/CD)</li>
//             <li>Infrastructure as Code (Terraform)</li>
//             <li>Containerization (Docker, Kubernetes)</li>
//             <li>Cloud Platforms (AWS, Azure, GCP)</li>
//             <li>Monitoring and Logging (Prometheus, ELK Stack)</li>
//           </ul>
//         </motion.div>
//         <motion.div
//           className="border rounded-lg p-4"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <h3 className="text-xl font-semibold mb-2 text-white">Flutter</h3>
//           <ul className="list-disc pl-6 text-white">
//             <li>UI Design and Development</li>
//             <li>State Management (Provider, Riverpod)</li>
//             <li>API Integration (RESTful, GraphQL)</li>
//             <li>Platform-Specific Features (Android, iOS)</li>
//             <li>Performance Optimization</li>
//           </ul>
//         </motion.div><motion.div
//           className="border rounded-lg p-4"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <h3 className="text-xl font-semibold mb-2 text-white">DevOps</h3>
//           <ul className="list-disc pl-6 text-white">
//             <li>CI/CD Pipelines (Jenkins, GitLab CI/CD)</li>
//             <li>Infrastructure as Code (Terraform)</li>
//             <li>Containerization (Docker, Kubernetes)</li>
//             <li>Cloud Platforms (AWS, Azure, GCP)</li>
//             <li>Monitoring and Logging (Prometheus, ELK Stack)</li>
//           </ul>
//         </motion.div>
//         <motion.div
//           className="border rounded-lg p-4"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <h3 className="text-xl font-semibold mb-2 text-white">Flutter</h3>
//           <ul className="list-disc pl-6 text-white">
//             <li>UI Design and Development</li>
//             <li>State Management (Provider, Riverpod)</li>
//             <li>API Integration (RESTful, GraphQL)</li>
//             <li>Platform-Specific Features (Android, iOS)</li>
//             <li>Performance Optimization</li>
//           </ul>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Skills;



const Skills = () => {
    return (
      <div className="skills-container " style={{ backgroundColor: 'black', padding: '20px' }}>
        <h2 className="text-2xl font-bold mb-4 text-white text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2 text-white">DevOps</h3>
            <ul className="list-disc pl-6 text-white">
              <li>CI/CD Pipelines (Jenkins, GitLab CI/CD)</li>
              <li>Infrastructure as Code (Terraform)</li>
              <li>Containerization (Docker, Kubernetes)</li>
              <li>Cloud Platforms (AWS, Azure, GCP)</li>
              <li>Monitoring and Logging (Prometheus, ELK Stack)</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2 text-white">Flutter</h3>
            <ul className="list-disc pl-6 text-white">
              <li>UI Design and Development</li>
              <li>State Management (Provider, Riverpod)</li>
              <li>API Integration (RESTful, GraphQL)</li>
              <li>Platform-Specific Features (Android, iOS)</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2 text-white">Web Development</h3>
            <ul className="list-disc pl-6 text-white">
              <li>Frontend (HTML, CSS, JavaScript)</li>
              <li>Backend (Node.js, Express)</li>
              <li>Database Management (SQL, NoSQL)</li>
              <li>RESTful APIs</li>
              <li>Version Control (Git)</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2 text-white">Languages</h3>
            <ul className="list-disc pl-6 text-white">
              <li>Python</li>
              <li>JavaScript</li>
              {/* <li>Java</li>
              <li>Swift</li>
              <li>C#</li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
  

