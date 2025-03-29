// import { motion } from "framer-motion";

// export default function Questions({ questions, number}) {
//   // Destructure questions from props
//   return (
//     <motion.div className="flex flex-col gap-4 mt-4 lg:flex-row flex-wrap justify-between items-center">
//       {questions &&
//         questions.map((question, index) => (
//           <div key={index} className={`overflow-hidden rounded-bl-4xl border-[#0170b9] border-2 rounded-tr-4xl w-full`}>
//             {" "}
//             {/* Use a unique key for each div */}
//             <div className="p-4 bg-[#0170b9]">
//               {" "}
//               <h2 className="text-[#FAFAFA] text-3xl">{question.title}</h2>
//             </div>
//             <div className="p-4">
//             <p>{question.answer}</p>
//             </div>
//           </div>
//         ))}
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";

export default function Questions({ questions }) {
  return (
    <motion.div className="flex flex-col gap-4 mt-4 lg:flex-row flex-wrap justify-between items-center">
      {questions.map((question, index) => (
        <div 
          key={index} 
          className="overflow-hidden rounded-bl-4xl border-[#0170b9] border-2 rounded-tr-4xl w-full"
        >
          <div className="p-4 bg-[#0170b9]">
            <h2 className="text-[#FAFAFA] text-3xl">{question.title}</h2>
          </div>
          <div className="p-4">
            <p dangerouslySetInnerHTML={{ __html: question.answer }} />
          </div>
        </div>
      ))}
    </motion.div>
  );
}
