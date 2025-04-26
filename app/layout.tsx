import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lucas Pacheco | Personal Portfolio",
  description: "Lucas is an AI Python developer and full-stack with 3+ years of experience.",
  openGraph: {
    url: "https://lkzdev.vercel.app",
    type: "website",
    title: "Lucas Pacheco | Personal Portfolio",
    description: "Lucas is an AI Python developer and full-stack with 3+ years of experience.",
    images: [
      {
        url: "https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v9/lkzdev.vercel.app/Lucas%20Pacheco%20%7C%20Personal%20Portfolio/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F3c7ba868-bf19-4fdb-a0b9-4b57dcd285f0.jpg%3Ftoken%3DuA7nqn6IZ1ZDhps1UEx0EfFIPMN1as2SgDzBwRzlsFE%26height%3D1076%26width%3D1076%26expires%3D33281625465/rgba(0%2C0%2C0%2C1)/og.png",
        alt: "Lucas Pacheco | Personal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "lkzdev.vercel.app",
    url: "https://lkzdev.vercel.app",
    title: "Lucas Pacheco | Personal Portfolio",
    description: "Lucas is an AI Python developer and full-stack with 3+ years of experience.",
    images: [
      {
        url: "https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v9/lkzdev.vercel.app/Lucas%20Pacheco%20%7C%20Personal%20Portfolio/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F3c7ba868-bf19-4fdb-a0b9-4b57dcd285f0.jpg%3Ftoken%3DuA7nqn6IZ1ZDhps1UEx0EfFIPMN1as2SgDzBwRzlsFE%26height%3D1076%26width%3D1076%26expires%3D33281625465/rgba(0%2C0%2C0%2C1)/og.png",
        alt: "Lucas Pacheco | Personal Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative scroll-mt-0 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#a3c9f7] fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#3b5998]"></div>
        <div className="bg-[#a3c9f7] fixed top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#4a6edb]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
