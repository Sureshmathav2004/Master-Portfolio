/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Suresh Mathav",
  title: "Hi all, I'm Suresh",
  subTitle: emoji(
    "A passionate Python Developer and Data Science enthusiast 🚀 experienced in building Machine Learning models, Flask APIs, full-stack web applications, and cloud-based solutions using Python, React, Azure, and Google Cloud Platform."
   ),
  
  resumeLink: "https://drive.google.com/file/d/19Q7ddqOMiOO2TF2NYZyYfxWvYP10ESGQ/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sureshmathav2004",
  linkedin: "https://www.linkedin.com/in/suresh-mathav",
  gmail: "sureshmathav123@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
    "⚡ Build scalable Machine Learning and Data Science solutions using Python, Pandas, NumPy, and Scikit-learn"
    ),
    emoji(
    "⚡ Develop responsive full-stack web applications and REST APIs using Flask, React, HTML, CSS, and JavaScript"
    ),
    emoji(
    "⚡ Deploy and manage cloud-based applications using Microsoft Azure, Google Cloud Platform, Git, and GitHub"
    )
    ],
    

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "K. Ramakrishnan College of Engineering",
      logo: require("./assets/images/krceLogo.png"),
      subHeader:
        "Bachelor of Technology in Computer Science and Business Systems",
      duration: "2021 - 2025",
      desc: "Focused on Data Science, Machine Learning, Software Development, and Cloud Computing.",
      descBullets: [
        "CGPA: 7.8",
        "Built multiple Machine Learning and Full Stack projects"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Science & Machine Learning Intern",
      company: "Gilbert Research Center",
      companylogo: require("./assets/images/gilbertLogo.png"),
      date: "Jul 2025 – Sep 2025",
      desc:
        "Worked on healthcare-focused machine learning solutions and clinical diagnostic prediction systems.",
      descBullets: [
        "Built and evaluated ML models for healthcare analytics",
        "Collaborated with researchers and senior data scientists",
        "Developed scalable reporting and prediction workflows"
      ]
    },
    {
      role: "Software Development Intern",
      company: "Infilabs HealthTech",
      companylogo: require("./assets/images/infilabsLogo.png"),
      date: "Aug 2023 – Sep 2023",
      desc:
        "Developed healthcare-related software tools using Python and cloud-based workflows.",
      descBullets: [
        "Built Python utilities for patient data handling",
        "Integrated cloud storage and version control systems",
        "Worked with Git-based collaborative development"
      ]
    },
    {
      role: "Salesforce Administrator Virtual Intern",
      company: "Salesforce",
      companylogo: require("./assets/images/salesforceLogo.png"),
      date: "Nov 2023 – Jan 2024",
      desc:
        "Completed Salesforce administration training and CRM workflow management tasks.",
      descBullets: [
        "Managed dashboards and workflow automation",
        "Worked with Salesforce CRM reporting tools",
        "Completed hands-on Salesforce administration tasks"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  display: false
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Professional certifications and cloud credentials",

  achievementsCards: [
    {
      title: "Microsoft Certified Azure Fundamentals",
      subtitle:
        "Certified in Microsoft Azure cloud concepts, services, pricing, security, and deployment fundamentals.",
      image: require("./assets/images/azureLogo.png"),
      imageAlt: "Microsoft Azure Logo",
      footerLink: [
        {
          name: "Microsoft",
          url: "https://learn.microsoft.com/"
        }
      ]
    },
    {
      title: "Google Cloud Career Readiness - Associate Cloud Engineer Track",
      subtitle:
        "Completed Google Cloud engineering and deployment readiness training.",
      image: require("./assets/images/gcpLogo.png"),
      imageAlt: "Google Cloud Logo",
      footerLink: [
        {
          name: "Google Cloud",
          url: "https://cloud.google.com/"
        }
      ]
    },
    {
      title: "Salesforce Administrator Virtual Internship",
      subtitle:
        "Hands-on Salesforce CRM administration and workflow management internship program.",
      image: require("./assets/images/salesforceLogo.png"),
      imageAlt: "Salesforce Logo",
      footerLink: [
        {
          name: "Salesforce",
          url: "https://www.salesforce.com/"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: false, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "sureshmathav123@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  resumeSection
};
