import certificate1 from "../assets/png/Achievement/Coursera Certificate.jpg";
import certificate2 from "../assets/png/Achievement/MERN_Stack_Certificate.jpg";
import certificate3 from "../assets/png/Achievement/CERTIFICATION(Freelancing).jpg";
import certificate4 from "../assets/png/Achievement/CERTIFICATION(communication & soft skills).jpg";

export const achievementData = {
  bio: "",
  achievements: [
    {
      id: 1,
      title: "MERN Stack Development",
      details: "5 Months of MERN Stack Development Course",
      date: "Jan 2024",
      field: "Web Development",
      image: certificate2,
    },
    {
      id: 2,
      title: "Communication and Soft Skills",
      details: "Communication and Soft Skills course from Digiskills Pakistan",
      date: "Jan 2024",
      field: "Soft_Skills",
      image: certificate4,
    },
    {
      id: 3,
      title: "Basic Web development",
      details: "An HTML, CSS, JavaScript and Bootstrap course from Coursera",
      date: "Sep 2023",
      field: "Web Development",
      image: certificate1,
    },
    {
      id: 4,
      title: "Freelancing",
      details: "Freelancing course from Digiskills Pakistan",
      date: "Dec 2023",
      field: "Freelancing",
      image: certificate3,
    },
  ],
};
