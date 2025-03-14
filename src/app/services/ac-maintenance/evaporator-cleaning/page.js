"use client"

import {motion} from "framer-motion"
import Header from "@/app/components/Header";

export default function EvaporatorCleaning(){
    return(
        <>
            <Header active={"Services"}></Header>
            <main>
                <motion.div>
                    <h1>Evaporator Coil Cleaning</h1>
                    <p>Evaporator coil cleaning is essential to ensure the optimal performance of your air conditioning system. The evaporator coil plays a crucial role in cooling the air and maintaining a comfortable environment in your home or business.</p>
                </motion.div>
                          <motion.div className="mt-4 w-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center gap-8 flex-wrap">
            <motion.div
              className="rounded-xl bg-cover bg-center w-full h-[600px] max-w-[400px]"
              style={{ backgroundImage: "url(../../coil-before.jpg)" }}
            >
              <p className="p-4 bg-[#fff] inline rounded-tl-xl rounded-br-xl font-bold border text-[#0170b9]">
                Before
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl bg-cover bg-center w-full h-[600px] max-w-[400px]"
              style={{ backgroundImage: "url(../../coil-after.jpg" }}
            >
              <p className="p-4 bg-[#fff] inline rounded-tl-xl rounded-br-xl font-bold border text-[#0170b9]">
                After
              </p>
            </motion.div>
          </motion.div>
            </main>
        </>
    )
}