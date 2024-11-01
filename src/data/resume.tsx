import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abdul Rahman Masood Basheer Khan",
  initials: "ark",
  url: "https://ark.io",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/hyderabad",
  description:
    "I'm a final year student at MJCET. I love solving mathematical problems, designing encryption algorithms and competitive programming",
  summary:
    "Proficient in algorithm design, and app integration, with hands-on experience leading a 5-member team in developing AI-powered legal assistance and offline QR-based navigation solutions. Skilled in Java, and NoSQL database, with a focus on enhancing data security and creating scalable solutions. Strong problem-solving abilities, backed by competitive achievements in hackathons and ideathon.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "JavaScript",
    "C",
    "SQL",
    "Python",
    "DSA",
    "Algorithm Design",
    "OS",
    "Computer Networks",
    "HTML",
    "CSS",
    "AI",
    "ML",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abdulrahmankhan021@gmail.com",
    tel: "+91 90598 49847",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/iam-ark",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ark04",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_iam_ark04",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      // email: {
      //   name: "Send Email",
      //   url: "#",
      //   icon: Icons.email,

      //   navbar: false,
      // },
    },
  },

  work: [
    {
      company: "MSS Core Member",
      // href: "https://atomic.finance",
      badges: [],
      location: "MJCET",
      title: "HR and Tech Lead",
      logoUrl: "/mss.jpg",
      start: "Oct 2022",
      end: "Sept 2023",
      description:
        "Led HR initiatives, coordinated project planning and execution, and contributed to web development strategies to enhance the society’s outreach and engagement.",
    },
    {
      company: "Delta Sigma Technologies",
      badges: [],
      // href: "https://shopify.com",
      location: "Remote",
      title: "Front-End Developer Internship",
      logoUrl: "/dst.jpg",
      start: "April 2024",
      end: "July 2024",
      description:
        "Developed and optimized user interfaces for client applications, ensuring responsive design and improved user experience. Collaborated with cross-functional teams to implement web solutions using modern front-end technologies.",
    },
    {
      company: "GDG",
      // href: "https://nvidia.com/",
      badges: [],
      location: "MJCET",
      title: "DSA Lead",
      logoUrl: "/gdg.png",
      start: "October 2024",
      end: "Present",
      description:
        "I aim to guide peers in mastering data structures and algorithms through workshops and hands-on coding sessions. Leading collaborative projects and fostering an environment focused on optimizing problem-solving skills for competitive programming and technical interviews.",
    },
    
  ],
  education: [
    {
      school: "MJCET",
      degree: "B.E. CSE",
      logoUrl: "/mjcet.jpg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "aura Protocol",
      // href: "https://chatcollect.com",
      dates: "April 2024 - August 2024",
      active: true,
      description:
        "The aura Protocol is an advanced cryptographic solution aimed at offering a high degree of security and efficiency, especially as we approach the era of quantum computing. Its hybrid approach, customizable features, and attention to future-proofing make it an ideal protocol for applications demanding robust security, from messaging and data storage to complex IoT ecosystems.",
      technologies: [
        "JavaScript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/AuraWritten.png",
    },
    {
      title: "aura E2EE Web based Chatting Application",
      // href: "https://magicui.design",
      dates: "April 2024 - June 2024",
      active: true,
      description:
        "A real-time web-based chat application using ReactJS, integrated with a self-developed 512-bit encryption protocol for end-to-end encryption. Leveraged AI tools to build and test the application for compatibility with my aura Protocol, ensuring secure communication through efficient key management and encryption techniques, while maintaining privacy and data integrity.",
      technologies: [
        "ReactJS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/auraLogo.jpg",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    
  ],
  hackathons: [
    {
      title: "AISEC Ideathon 2024",
      dates: "October 26th - 27th, 2024",
      location: "IIT Hyderabad",
      description:
        "Developed a mobile application which allows indoor navigation with the help of QRs.",
      image:
        "/ideathon.png",
      links: [],
    },
    {
      title: "Hack Revolution",
      dates: "December 17th, 2023",
      location: "MJCET, Hyderabad",
      description:
        "Developed a web-based chatting application which allows crypto payments.",
      image:
        "/hackrev.jpg",
      links: [],
    },
  ],
} as const;
