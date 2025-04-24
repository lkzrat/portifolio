import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function HeroPage() {
    return (
        <div className="flex items-center justify-center w-[21rem] h-[13.5rem] bg-blue-100">
            <motion.div
                className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-transform duration-300 transition-all duration-500 ease-in-out"
                >
                    Contact me here
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-transform duration-300 cursor-pointer borderBlack dark:bg-gray-900 transition-all duration-500 ease-in-out"
                    href="/CV Lucas Pacheco.pdf"
                    download
                >
                    Download CV
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <div className="flex gap-4">
                    <a
                        className="bg-gray-900 text-white p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-transform duration-300 cursor-pointer borderBlack dark:bg-gray-900 transition-all duration-500 ease-in-out"
                        href="https://www.linkedin.com/in/lucasppmc/"
                        target="_blank"
                    >
                        <BsLinkedin />
                    </a>

                    <a
                        className="bg-gray-900 text-white p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-transform duration-300 cursor-pointer borderBlack dark:bg-gray-900 transition-all duration-500 ease-in-out"
                        href="https://github.com/lkzrat"
                        target="_blank"
                    >
                        <FaGithubSquare />
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
