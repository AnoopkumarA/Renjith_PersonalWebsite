export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  role: string;
  email: string;
  phone: string;
  address: string;
  cvUrl: string;
  phdScholarsCount: number;
  citationsCount: number;
  patentsCount: number;
  conferencesCount: number;
  journalsCount: number;
  experienceYears: number;
  bio: string[];
  socialLinks: {
    label: string;
    icon: string;
    url: string;
    badge?: string;
  }[];
}

export interface DomainItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  tag: string;
}

export interface WorkExperienceItem {
  title: string;
  department: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  image?: string;
  logo?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
  image?: string;
  badge?: string;
}

export interface GrantItem {
  title: string;
  body: string;
  amount: string;
  year: string;
  role: string;
  description: string;
}

export interface PatentItem {
  id: number;
  title: string;
  office: string;
  applicationNo: string;
  pubDate: string;
  status: string;
  category: string;
}

export interface PublicationItem {
  id: number;
  authors: string;
  title: string;
  venue: string;
  publisher?: string;
  year: string;
  volumePages?: string;
  doi?: string;
  type: "journal" | "conference" | "book";
  indexType?: string;
}

export interface AchievementItem {
  title: string;
  award: string;
  year: string;
  description: string;
  image?: string;
  badge?: string;
}

export const personalData: PersonalInfo = {
  name: "Dr. Renjith Thomas",
  title: "PhD in Computer Vision",
  subtitle: "Approved APJAKTU Research Supervisor | HoD & Associate Professor",
  role: "AI Researcher & Innovator",
  email: "renampatt@gmail.com",
  phone: "+91 9446115817",
  address: "Ampattkunnel (H), Puthusserry (PO), Mallappally, Pathanamthitta, 689602, Kerala, India",
  cvUrl: "/pdfs/CV_Renjith_Thomas.pdf",
  phdScholarsCount: 3,
  citationsCount: 206,
  patentsCount: 16,
  conferencesCount: 18,
  journalsCount: 4,
  experienceYears: 15,
  bio: [
    "Academic leader and AI researcher specializing in Computer Vision, Image Processing, and Deep Learning, with a PhD from Hindusthan Institute of Science & Technology Chennai.",
    "Currently serving as Associate Professor & Head of the Department of Artificial Intelligence & Data Science at St. Joseph's College of Engineering & Technology, Palai. Approved APJAKTU Research Supervisor guiding 3 PhD scholars.",
    "Prolific innovator with 16 published patents and registered designs spanning IoT smart systems, healthcare apparatus, assistive technologies, and AI surveillance. Secured multiple research grants from CERD-APJAKTU, ATAL Academy, and Kerala Startup Mission (KSUM)."
  ],
  socialLinks: [
    {
      label: "Google Scholar",
      icon: "scholar",
      url: "https://scholar.google.com/citations?user=oCnr0xsAAAAJ&hl=en",
      badge: "206+ Citations"
    },
    {
      label: "Scopus Profile",
      icon: "scopus",
      url: "https://www.scopus.com/authid/detail.uri?authorId=57192674628",
      badge: "Author ID"
    },
    {
      label: "ORCID",
      icon: "orcid",
      url: "https://orcid.org/0000-0002-1038-9596",
      badge: "Verified"
    },
    {
      label: "Web of Science",
      icon: "wos",
      url: "https://publons.com/researcher/4624495/renjith-thomas/",
      badge: "ResearcherID"
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/dr-renjith-thomas-a17bb610a/",
      badge: "Connect"
    },
    {
      label: "Email Me",
      icon: "mail",
      url: "mailto:renampatt@gmail.com",
      badge: "Direct Contact"
    }
  ]
};

export const domainsData: DomainItem[] = [
  {
    id: "ai-vision",
    iconName: "Eye",
    title: "Computer Vision & Deep Learning",
    description: "Expertise in facial recognition, low-resolution enhancement, object detection with YOLO architectures, and hierarchical zero-shot classification.",
    tag: "Core Research"
  },
  {
    id: "patents-iot",
    iconName: "Cpu",
    title: "Patent Innovation & IoT",
    description: "Architect of 16 patents and designs across IoT device-to-device communication, underwater tracking, solar security, and haptic assistive devices.",
    tag: "16 Patents"
  },
  {
    id: "medical-ai",
    iconName: "Activity",
    title: "Medical AI & Healthcare Imaging",
    description: "Developing ML algorithms for automated pneumonia diagnosis in chest X-rays, fall detection MLOps pipelines, and smart healthcare monitoring apparati.",
    tag: "Healthcare Tech"
  },
  {
    id: "academic-mentorship",
    iconName: "GraduationCap",
    title: "Research Supervision & Teaching",
    description: "Approved APJAKTU Research Supervisor actively guiding 3 PhD scholars; curriculum setter and syllabus designer for KTU Computational Biology.",
    tag: "3 PhD Scholars"
  },
  {
    id: "grants-projects",
    iconName: "Coins",
    title: "Grants & Funded Projects",
    description: "Principal Investigator of CERD LASERARMED SURVEILLANCE ENGINE; recipient of AICTE ATAL, KSUM Idea Fest (₹2 Lakhs), and APJAKTU grants.",
    tag: "Funded PI"
  },
  {
    id: "editorial-review",
    iconName: "BookOpenCheck",
    title: "Journal & Conference Reviewing",
    description: "Reviewer for Springer Nature 'Aquaculture International', Wiley IJIST, IEEE NMITCON, AIP ICCIDT, and Editor for Scopus-indexed AIP ITechCET.",
    tag: "Editorial Roles"
  }
];

export const workExperienceData: WorkExperienceItem[] = [
  {
    title: "Associate Professor & Head of Department",
    department: "Department of Artificial Intelligence & Data Science",
    institution: "St Joseph's College of Engineering and Technology, Palai",
    location: "Kottayam, Kerala",
    period: "Jan 19, 2024 - Present",
    description: "Leading the department, spearheading academic innovation, funded research laboratories, and guiding doctoral scholars.",
    highlights: [
      "Principal Investigator for CERD-funded LASER ARMED SURVEILLANCE ENGINE project (Rs. 21,000/-)",
      "Approved APJAKTU Research Supervisor currently mentoring 3 PhD scholars",
      "5th Place winner at GenAI.Works #BuildwithAI International Hackathon ($750 & NVIDIA GPU)",
      "Active member of SJCET College Council, Anti-ragging committee, IQAC, and Academic Audit"
    ],
    image: "/images/sjcet_campus.jpg",
    logo: "/images/sjcet_logo.png"
  },
  {
    title: "Associate Professor",
    department: "Department of Electronics & Communication Engineering",
    institution: "Musaliar College of Engineering and Technology",
    location: "Pathanamthitta, Kerala",
    period: "July 03, 2019 - Jan 18, 2024",
    description: "Served as Dean of Research and led the department to premier NBA Accreditation.",
    highlights: [
      "NBA Program Coordinator: Successfully achieved NBA Accreditation for ECE department (2023-2026)",
      "Served as Dean Research (2021-2023), driving institutional patent filing and paper output",
      "Secured Rs. 2,00,000 seed funding from Kerala Startup Mission IDEA Fest 2022",
      "Showcased working demo of AI-based offense detection at Ente Keralam (Govt of Kerala)"
    ],
    image: "/images/mcp.png",
    logo: "/images/musaliar_logo.jpg"
  },
  {
    title: "Assistant Professor",
    department: "Department of Electronics & Communication Engineering",
    institution: "Gurudeva Institute of Science and Technology (GISAT)",
    location: "Kottayam, Kerala",
    period: "June 18, 2012 - July 02, 2019 (7 Years)",
    description: "Seven years of dedicated teaching, post-graduate coordination, and foundational research in computer vision.",
    highlights: [
      "Served as Post-Graduate (PG) Coordinator for engineering programs",
      "Published foundational research in SCIE and Scopus indexed journals",
      "Conducted student technical symposiums and academic seminars"
    ],
    image: "/images/gisat.png",
    logo: "/images/gisat.png"
  },
  {
    title: "Lecturer (Guest Lecturer)",
    department: "Department of Technical Education",
    institution: "Government Polytechnic College Nedumkandam",
    location: "Idukki, Kerala",
    period: "8 Months",
    description: "Delivered hands-on technical curriculum in electronics, circuits, and applied engineering.",
    highlights: [
      "Guided diploma student cohorts in lab-based electronics and embedded hardware",
      "Mentored practical technical projects"
    ],
    image: "/images/gpcn.png",
    logo: "/images/gpcn.png"
  },
  {
    title: "Software Engineer",
    department: "Software Engineering & Development",
    institution: "XUSLIMITS Kollam",
    location: "Kollam, Kerala",
    period: "3.5 Years",
    description: "Engineered commercial applications, software logic, and algorithmic pipelines.",
    highlights: [
      "Worked on full lifecycle software programming and system architecture",
      "Bridged real-world software programming principles into academic instruction"
    ]
  },
  {
    title: "Co-Founder",
    department: "Web & AI Development",
    institution: "DUPICO, DesignDirect",
    location: "Enfield, London, UK",
    period: "Aug 2025 - Present",
    description: "Co-founded international AI & web technology initiative consulting on modern intelligent digital products.",
    highlights: [
      "Leading AI-driven digital transformation solutions and web engineering"
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "AICTE QIP PG Certification Program",
    field: "Robotics and Artificial Intelligence (RAI)",
    institution: "IIT Bhubaneswar",
    location: "Bhubaneswar, Odisha",
    period: "AICTE - QIP Sponsored",
    details: [
      "Postgraduate certification program under AICTE Quality Improvement Programme (QIP)",
      "Advanced specialization in Robotics, Artificial Intelligence, and intelligent automation systems",
      "Intensive academic and laboratory research immersion at IIT Bhubaneswar"
    ],
    image: "/images/iit_bhubaneswar.png",
    badge: "PG Certification"
  },
  {
    degree: "Doctor of Philosophy (PhD)",
    field: "Image Processing & Computer Vision",
    institution: "Hindusthan Institute of Science and Technology",
    location: "Chennai, Tamil Nadu",
    period: "Awarded: April 30, 2019",
    details: [
      "Doctoral thesis focused on robust facial recognition under degraded low-resolution conditions",
      "1 SCIE indexed journal publication (Taylor & Francis)",
      "2 Scopus indexed journal papers (World Scientific)",
      "2 International IEEE Conference presentations"
    ],
    image: "/images/hindustan_university.jpg"
  },
  {
    degree: "Master of Technology (MTech)",
    field: "Applied Electronics",
    institution: "Anna University Chennai",
    location: "Chennai, Tamil Nadu",
    period: "2010 - 2012",
    details: [
      "Specialized in advanced digital signal processing, VLSI systems, and embedded microcontrollers",
      "Authored 2 National Conference Papers in applied electronic instrumentation"
    ],
    image: "/images/anna_university.jpg"
  },
  {
    degree: "Bachelor of Technology (BTech)",
    field: "Electronics & Communication Engineering",
    institution: "Mahatma Gandhi University (MGU)",
    location: "Kottayam, Kerala",
    period: "2002 - 2006",
    details: [
      "Foundational undergraduate degree in communication systems, analog/digital circuits, and computational logic",
      "Capstone engineering project in communication engineering"
    ],
    image: "/images/mgu_logo.svg"
  }
];

export const grantsData: GrantItem[] = [
  {
    title: "LASER ARMED SURVEILLANCE ENGINE",
    body: "APJAKTU - CERD Financial Assistance",
    amount: "Rs. 21,000/-",
    year: "2024 - 2025",
    role: "Principal Investigator",
    description: "Research and development of automated laser-guided surveillance platform with computer vision target tracking."
  },
  {
    title: "AI Based Vehicle Modification Detector",
    body: "Kerala Startup Mission (KSUM) - IDEA Fest 2022",
    amount: "Rs. 2,00,000/- Seed Fund",
    year: "2022",
    role: "Project Lead / Innovator",
    description: "Awarded Two Lakhs seed money from a 17-Lakh grant allocation for real-time computer vision automated vehicle modification detection."
  },
  {
    title: "6-Day AI Online FDP Grant",
    body: "AICTE Training And Learning (ATAL) Academy",
    amount: "Rs. 1,00,000/-",
    year: "2024",
    role: "Program Coordinator",
    description: "Secured grant to organize and execute a premier 6-day online Faculty Development Program for engineering educators."
  },
  {
    title: "GenAI.Works #BuildwithAI International Hackathon",
    body: "GenAI.Works Global Innovation",
    amount: "$750 USD + NVIDIA GPU",
    year: "2024",
    role: "Team Lead (5th Place Worldwide)",
    description: "Competed among 200 teams across 80 countries, securing 5th position globally with high-impact generative AI tooling."
  },
  {
    title: "Prototype Demonstration Assistance",
    body: "APJAKTU Startup Cell (College of Engineering Trivandrum)",
    amount: "Rs. 25,000/-",
    year: "Oct 2024",
    role: "Mentor & Project Lead",
    description: "Financial assistance for student prototype deployment and real-world system testing."
  },
  {
    title: "KTU International Conference Grant",
    body: "APJ Abdul Kalam Technological University",
    amount: "Rs. 34,000/-",
    year: "2023 - 2024",
    role: "Grant Recipient & Organizer",
    description: "Institutional grant allocated for academic conference dissemination and paper presentations."
  }
];

export const patentsData: PatentItem[] = [
  {
    id: 1,
    title: "Secure Device To Device Connectivity Mechanism for IoT Smart City Applications",
    office: "IP Australia",
    applicationNo: "Patent 202641031698 A / 2021101443",
    pubDate: "28/04/2021",
    status: "Published",
    category: "IoT & Smart Cities"
  },
  {
    id: 2,
    title: "AI Enabled Under Water Pollution Tracking Device",
    office: "UK Design Patent",
    applicationNo: "Design No: 6336195",
    pubDate: "13/01/2024 (Granted)",
    status: "Granted",
    category: "Environmental AI"
  },
  {
    id: 3,
    title: "Smart HealthCare Monitoring Apparatus",
    office: "Certificate of Registration of Design, IP India",
    applicationNo: "App No: 424211-001 (CBR 212897)",
    pubDate: "22/07/2024",
    status: "Registered",
    category: "Healthcare Technology"
  },
  {
    id: 4,
    title: "Integrated PV Solar Cell Enclosure System Providing Corrosion and Moisture Protection for Padlocks and Similar Devices",
    office: "IP India",
    applicationNo: "App No: 202541116009",
    pubDate: "12/12/2025",
    status: "Published",
    category: "Renewable Energy & Hardware"
  },
  {
    id: 5,
    title: "Assistive Writing Instrument Incorporating Ball-Bearing Support For Reduced-Grip Users",
    office: "IP India",
    applicationNo: "App No: 2021101443",
    pubDate: "20/02/2026",
    status: "Published",
    category: "Assistive Devices"
  },
  {
    id: 6,
    title: "Calibrated Liquid Dispensing Apparatus with Screw Actuated Plunger Mechanism",
    office: "IP India",
    applicationNo: "App No: 202641031698 A",
    pubDate: "16/03/2026",
    status: "Published",
    category: "Biomedical & Lab Hardware"
  },
  {
    id: 7,
    title: "Hybrid Physical-Digital Authentication System using Structured Surface Geometry and AI-Based Verification",
    office: "IP India",
    applicationNo: "App No: 202641046647 A",
    pubDate: "24/04/2026",
    status: "Published",
    category: "Cybersecurity & AI"
  },
  {
    id: 8,
    title: "Wearable Multi-Node Thermoelectric and Haptic Therapy Device for Simultaneous Multi-Modal Thermal Stimulation",
    office: "IP India",
    applicationNo: "App No: 202641049237 A",
    pubDate: "01/05/2026",
    status: "Published",
    category: "Wearables & Haptics"
  },
  {
    id: 9,
    title: "Pedal-Driven Coconut Processing Apparatus with Flywheel-Assisted Torque Transfer and Integrated Deshelling and Scrubbing Mechanism",
    office: "IP India",
    applicationNo: "App No: 202641069944 A",
    pubDate: "12/06/2026",
    status: "Published",
    category: "Agro-Engineering & Mechanical"
  },
  {
    id: 10,
    title: "Grip-Pressure Actuated Retractable Writing Instrument Incorporating Linkage and Rack-and-Pinion Mechanism",
    office: "IP India",
    applicationNo: "App No: 202641074284 A",
    pubDate: "26/06/2026",
    status: "Published",
    category: "Assistive Design"
  },
  {
    id: 11,
    title: "Foot-Operated Surface Cleaning Apparatus with Brush Actuation and Liquid Dispensing Mechanism",
    office: "IP India",
    applicationNo: "App No: 202641079225 A",
    pubDate: "03/07/2026",
    status: "Published",
    category: "Sanitation & Robotics"
  },
  {
    id: 12,
    title: "Automated Sequential Multi-Chamber Infant Urine Collection Device for Sterile Midstream Specimen Isolation",
    office: "IP India",
    applicationNo: "App No: 202641080228 A",
    pubDate: "03/07/2026",
    status: "Published",
    category: "Medical Diagnostics"
  },
  {
    id: 13,
    title: "Integrated Endoscopic Hydro-Jetting System for Simultaneous Inspection, Cleaning, and Sanitary Pipeline Remediation",
    office: "IP India",
    applicationNo: "App No: 202641086056 A",
    pubDate: "17/07/2026",
    status: "Published",
    category: "Industrial Inspection"
  },
  {
    id: 14,
    title: "Dual-Stroke, Variable-Ratio, Self-Locking Mechanical Chain Lifting System for Bidirectional Lever Actuation",
    office: "IP India",
    applicationNo: "App No: 202641088572 A",
    pubDate: "24/07/2026",
    status: "Published",
    category: "Mechanical Innovation"
  },
  {
    id: 15,
    title: "Localized Induction Heating-Based Ironing System with Selective Coil Activation and Passive Ironing Handle",
    office: "IP India",
    applicationNo: "App No: 202641090848",
    pubDate: "31/07/2026",
    status: "Published",
    category: "Energy-Efficient Appliances"
  },
  {
    id: 16,
    title: "Multi-Zone Adaptive Phase-Change Thermal Management Garment with Directional Heat Transfer and Integrated Moisture-Air Management",
    office: "IP India (Patent Office Journal No. 38/2026)",
    applicationNo: "Application No: 202641109529 A",
    pubDate: "18/09/2026 (Published)",
    status: "Published",
    category: "Thermal Wearables & Smart Textiles"
  }
];

export const journalsData: PublicationItem[] = [
  {
    id: 1,
    authors: "J. A. Jose, Renjith Thomas",
    title: "Zero shot multistage hierarchical fish classification using YOLOE and large language model",
    venue: "Computers and Electronics in Agriculture (Elsevier)",
    publisher: "Elsevier",
    year: "2026",
    volumePages: "Volume 242, 111288, ISSN 0168-1699",
    type: "journal",
    indexType: "SCIE / Scopus Indexed Q1"
  },
  {
    id: 2,
    authors: "Thomas, R., & Rangachar, M. J. S.",
    title: "Fractional bat and multi-kernel-based spherical SVM for low resolution face recognition",
    venue: "International Journal of Pattern Recognition and Artificial Intelligence",
    publisher: "World Scientific",
    year: "2017",
    volumePages: "Volume 31(08), Pages 1756014",
    doi: "10.1142/S0218001417560146",
    type: "journal",
    indexType: "SCIE / Scopus Indexed"
  },
  {
    id: 3,
    authors: "Thomas, R., & Rangachar, M. J. S.",
    title: "Integrating GWTM and BAT algorithm for face recognition in low-resolution images",
    venue: "The Imaging Science Journal",
    publisher: "Taylor & Francis",
    year: "2016",
    volumePages: "Volume 64(8), Pages 441-452",
    doi: "10.1080/13682199.2016.1231990",
    type: "journal",
    indexType: "SCIE / Scopus Indexed"
  },
  {
    id: 4,
    authors: "Habeeb, N., Thomas, R. and Oommen, K.",
    title: "Pneumonia detection using HPOA_CNN–DKN approach based on chest X-rays",
    venue: "International Journal of System Assurance Engineering and Management",
    publisher: "Springer",
    year: "2026",
    volumePages: "pp. 1-32, 2026",
    doi: "10.1007/s13198-026-03386-7",
    type: "journal",
    indexType: "Springer / Scopus Indexed"
  }
];

export const conferencesData: PublicationItem[] = [
  {
    id: 1,
    authors: "A. Varghese, J. Joseph and R. Thomas",
    title: "An Automated Platform for Habituation Analysis in Mimosa Pudica Using an Automated Habituation Assessment (AHA) Algorithm",
    venue: "2026 International Conference on Intelligent and Innovative Technologies in Computing, Electrical and Electronics (IITCEE), Bangalore, India",
    year: "2026",
    volumePages: "pp. 1-6",
    doi: "10.1109/IITCEE67948.2026.11394635",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 2,
    authors: "A. M. Varghese, J. Biju, N. J. Manasrayil, J. Philip, M. S. Saritha and R. Thomas",
    title: "A Feedback-Driven MLOps Based Approach for Fall Detection",
    venue: "2025 IEEE International Conference on Contemporary Computing and Communications (InC4), Bangalore, India",
    year: "2025",
    volumePages: "pp. 1-7",
    doi: "10.1109/InC465408.2025.11256398",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 3,
    authors: "A. Sreenivasan, R. Antony, G. Joseph, S. Sunny, N. Tom and R. Thomas",
    title: "Automated E-Waste Segregation and Valuation using AI and Image Recognition",
    venue: "2025 7th International Conference on Innovative Data Communication Technologies and Application (ICIDCA), Coimbatore, India",
    year: "2025",
    volumePages: "pp. 908-913",
    doi: "10.1109/ICIDCA66325.2025.11280439",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 4,
    authors: "A. R. Benny, J. George, J. Johny, J. J. Raju, A. James and R. Thomas",
    title: "Automated Trading Bot using Long Short-Term Memory",
    venue: "2025 Annual International Conference on Data Science, Machine Learning and Blockchain Technology (AICDMB), Mysuru, India",
    year: "2025",
    volumePages: "pp. 1-6",
    doi: "10.1109/AICDMB64359.2025.11277509",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 5,
    authors: "A. Satheish, S. Jimmy, Sanjana, S. Thomas and R. Thomas",
    title: "Foot Length Measuring System Using OpenCV and ResNet50",
    venue: "2025 International Conference on Intelligent Communication Networks and Computational Techniques (ICICNCT), Bidar, India",
    year: "2025",
    volumePages: "pp. 1-6",
    doi: "10.1109/ICICNCT66124.2025.11232598",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 6,
    authors: "A. George, E. J. Muttom, J. Joyan, N. Binoy, A. James and R. Thomas",
    title: "ParkIt: An ANPR based Automated Parking Registry Using YOLO And EasyOCR",
    venue: "2025 2nd International Conference on Trends in Engineering Systems and Technologies (ICTEST), Ernakulam, India",
    year: "2025",
    volumePages: "pp. 1-6",
    doi: "10.1109/ICTEST64710.2025.11042700",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 7,
    authors: "A. George, E. J. Muttom, J. Joyan, N. Binoy, J. Shogi and R. Thomas",
    title: "A Personalized AI Assistant for Analyzing and Authoring Product Reviews using Groq/Llama3-70B",
    venue: "2025 International Conference on Computing Technologies & Data Communication (ICCTDC), Hassan, India",
    year: "2025",
    volumePages: "pp. 1-6",
    doi: "10.1109/ICCTDC64446.2025.11158767",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 8,
    authors: "A. R. Benny, J. George, J. Johny, J. J. Raju, A. James and R. Thomas",
    title: "Offline Proctoring Using YOLOv8 and VGG-16",
    venue: "2025 Annual International Conference on Data Science, Machine Learning and Blockchain Technology (AICDMB), Mysuru, India",
    year: "2025",
    volumePages: "pp. 1-6",
    doi: "10.1109/AICDMB64359.2025.11277919",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 9,
    authors: "B. Paul, A. Nair, A. S, A. Thomas, N. Tom and R. Thomas",
    title: "Geo-Location Based Job Portal",
    venue: "2025 International Conference on Advancements in Power, Communication and Intelligent Systems (APCI), Kannur, India",
    year: "2025",
    volumePages: "pp. 1-6",
    doi: "10.1109/APCI65531.2025.11136893",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 10,
    authors: "A. M. Shibu, A. Tom, R. M. Mathew, R. B. Mathews, J. Thomas and R. Thomas",
    title: "AI-Enhanced Emergency Call Center Assistant and Situational Awareness for Optimized Emergency Response",
    venue: "2025 4th International Conference on Advances in Computing, Communication, Embedded and Secure Systems (ACCESS), Ernakulam, India",
    year: "2025",
    volumePages: "pp. 85-90",
    doi: "10.1109/ACCESS65134.2025.11135720",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 11,
    authors: "Varghese, A.M., Biju, J., Manasrayil, N.J., Shaji, L. and Thomas, R.",
    title: "Human Exclusive Alerts in CCTV Surveillance Using Computer Vision",
    venue: "2025 Emerging Technologies for Intelligent Systems (ETIS)",
    year: "2025",
    volumePages: "pp. 1-6",
    doi: "10.1109/ETIS64005.2025.10961654",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 12,
    authors: "Sasi, D., Arjun, P., Jinso, J., Paul, J. and Thomas, R.",
    title: "ResoBlend: A Hybrid Approach for Image Quality Enhancement",
    venue: "2025 Emerging Technologies for Intelligent Systems (ETIS)",
    year: "2025",
    volumePages: "pp. 1-6",
    doi: "10.1109/ETIS64005.2025.10961522",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 13,
    authors: "Sabu, D., Jose, A., Philip, J., Pranav, P., Thomas, R., & Mathew, J.",
    title: "Automated Mark Entry in Educational Institutions Using Multiple CNNs: Recognizing Handwritten Fractional Marks",
    venue: "2024 International Conference on Computational Intelligence and Network Systems (CINS), BITS Pilani Dubai Campus",
    year: "2024",
    volumePages: "pp. 1-8",
    doi: "10.1109/CINS63881.2024.10864430",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 14,
    authors: "R. S. Sen, M. Amalkrishna, R. Prithviraj, S. P. Jose, N. Joseph and R. Thomas",
    title: "Simple Action Model: Enabling LLM to Sequential Function Calling Tool Chain",
    venue: "2024 International Conference on Advancement in Renewable Energy and Intelligent Systems (AREIS), Thrissur, India",
    year: "2024",
    volumePages: "pp. 1-6",
    doi: "10.1109/AREIS62559.2024.10893677",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 15,
    authors: "R. Thomas, A. F, A. S. John and S. K. S",
    title: "Automated Detection of Traffic Rule Violation using Deep Learning Techniques",
    venue: "2024 IEEE Recent Advances in Intelligent Computational Systems (RAICS), Kothamangalam, Kerala, India",
    year: "2024",
    volumePages: "pp. 1-6",
    doi: "10.1109/RAICS61201.2024.10690036",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 16,
    authors: "Habeeb, N., Thomas, R. and Oommen, K.",
    title: "Automated Detection of Pneumonia Using Pre-Trained Convolutional Neural Networks in X-Ray Images",
    venue: "2023 3rd International Conference on Mobile Networks and Wireless Communications (ICMNWC), India",
    year: "2023",
    volumePages: "pp. 1-6",
    doi: "10.1109/ICMNWC60182.2023.10435777",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 17,
    authors: "Thomas, R.",
    title: "Face recognition from image patches using an ensemble of CNN-local mesh pattern networks",
    venue: "IEEE 6th International Conference for Convergence in Technology (I2CT)",
    year: "2021",
    volumePages: "pp. 1-5",
    type: "conference",
    indexType: "IEEE Scopus"
  },
  {
    id: 18,
    authors: "Thomas, R., & Rangachar, M. J. S.",
    title: "GWTM and crow search algorithm for face recognition in low-resolution images",
    venue: "IEEE International Conference on Advances in Computing, Communication Control and Networking (ICACCCN)",
    year: "2018",
    volumePages: "pp. 963-970",
    type: "conference",
    indexType: "IEEE Scopus"
  }
];

export const booksData: PublicationItem[] = [
  {
    id: 1,
    authors: "Dr. Shan M Assis, Dr. Kurian Antony, Dr. I Bushra, Dr. Ajesh F, Dr. Renjith Thomas, Dr. Teena Joseph",
    title: "Abstract Proceedings of the International Conference on Research Advances in Engineering and Technology - ITechCET 2021",
    venue: "Wizcraft Publications & Distribution / AIP (American Institute of Physics)",
    year: "June 2023",
    volumePages: "ISBN: 9780735443846",
    doi: "https://printorders.aip.org/proceedings/2520",
    type: "book",
    indexType: "AIP Scopus Indexed"
  },
  {
    id: 2,
    authors: "Dr. Shan M Assis, Dr. Ajesh F, Dr. I Bushra, Dr. D Chithra Prasad, Dr. Renjith Thomas, Dr. Ciby Jacob Cherian, Dr. Teena Joseph, Dr. Sonia Katherine",
    title: "Abstract Proceedings of the International Conference on Research Advances in Engineering and Technology - ITechCET 2022",
    venue: "Wizcraft Publications and Distribution",
    year: "March 2023",
    volumePages: "ISBN: 978-93-92268-31-1",
    doi: "https://isbnnew.inflibnet.ac.in/Recently_Published_Books.aspx",
    type: "book",
    indexType: "Scopus Indexed"
  }
];

export const officialRoles = [
  {
    role: "Head of the Department (AI & DS)",
    body: "SJCET Palai",
    details: "Leading academic department administration, AI & Data Science research laboratories, curriculum implementation, and statutory bodies including College Council and Academic Audit."
  },
  {
    role: "Approved Research Supervisor",
    body: "APJ Abdul Kalam Technological University (APJAKTU)",
    details: "Currently supervising 3 doctoral research scholars in deep learning and computer vision."
  },
  {
    role: "Reviewer of International Journals, Conference & Session Chair",
    body: "IEEE, Wiley, AIP & Hindawi Publications",
    details: "Active peer reviewer for leading international journals and session chair & evaluator across international IEEE conferences and scientific publishers (Wiley, AIP, Hindawi, IEEE)."
  },
  {
    role: "Curriculum & Syllabus Revision Committee",
    body: "APJAKTU 2024 Revision",
    details: "Framed and updated curriculum for PEADT 526 Computational Biology and MTech syllabus."
  },
  {
    role: "NBA Program Coordinator",
    body: "Musaliar College of Engineering & Technology",
    details: "Spearheaded accreditation documentation, successfully achieving prestigious NBA status (2023-2026)."
  },
  {
    role: "Dean Research (2021-2023)",
    body: "Institutional Research Directorate",
    details: "Orchestrated campus research culture, resulting in 29 SCI/Scopus indexed departmental publications in 2 years."
  }
];

export const achievementsGallery: AchievementItem[] = [
  {
    title: "EARTHDAY.ORG 'Our Power, Our Planet Stars Award 2026'",
    award: "International Sustainability Award",
    year: "May 2026",
    description: "Honored at NMACC Mumbai by EARTHDAY.ORG & Envision for patented solar clean-energy enclosure technologies; featured in Malayala Manorama.",
    image: "/images/earthday_award_ceremony.jpg",
    badge: "International Award"
  },
  {
    title: "Keynote Address: IBNCC Global Business Conclave",
    award: "Invited Dignitary & Keynote Speaker",
    year: "Sept 13, 2026",
    description: "Delivered invited keynote address on AI & Data Science at Monsoon Empress Kochi alongside Dr. Tessy Thomas (DRDO), Joy Alukkas, L. Radhakrishnan IAS, and H.B. Mar Raphael Thattil.",
    image: "/images/RT_conclave_speech.jpg",
    badge: "Keynote Speaker"
  },
  {
    title: "Patent Innovation Pitch to K-DISC & KSUM Leadership",
    award: "State DeepTech Pitch & Showcase",
    year: "2026",
    description: "Shortlisted to pitch patented deep-tech and solar inventions before Dr. Saji Gopinath (VC, Digital University Kerala), C. Balagopal IAS (Chairman, K-DISC), and Dr. Anoop Ambika (CEO, KSUM).",
    image: "/images/kdisc_patent_pitch.jpg",
    badge: "Patent Pitch"
  },
  {
    title: "IBNCC Global Business Conclave Official Delegation",
    award: "Catholic Congress Summit Speaker",
    year: "Sept 2026",
    description: "Featured on official summit poster alongside Dr. Tessy Thomas, Joy Alukkas, Dean Kuriakose MP, Roji M John MLA, and Mar Raphael Thattil.",
    image: "/images/ibncc_conclave_poster.jpg",
    badge: "Summit Delegation"
  },
  {
    title: "International Paper Presentation in Dubai",
    award: "BITS Pilani, Dubai Campus (IEEE CINS 2024)",
    year: "Nov 2024",
    description: "Presented research paper at BITS Pilani Dubai Campus in the international IEEE CINS conference.",
    image: "/images/Achivement (1).jpeg",
    badge: "International Conference"
  },
  {
    title: "CERD Financial Assistance to Student Projects",
    award: "APJAKTU - CERD Grant (Rs. 21,000)",
    year: "2024 - 2025",
    description: "Principal investigator for LASER ARMED SURVEILLANCE ENGINE grant awarded by APJAKTU.",
    image: "/images/Achivement (3).jpeg",
    badge: "Funded Research"
  },
  {
    title: "IEEE Kochi Subsection Student Paper Contest 2025",
    award: "Session Chair & Jury",
    year: "2025",
    description: "Engaged with IEEE Kochi Subsection leadership including Simon Akkara (Chair) and Dr. Sarath K. S. (SMIEEE).",
    image: "/images/ach (16).jpeg",
    badge: "IEEE Leadership"
  },
  {
    title: "Kerala Startup Mission (KSUM) Idea Fest",
    award: "Rs. 2,00,000 Seed Funding",
    year: "2022",
    description: "Honored by KSUM Idea Fest for the AI-based vehicle modification detection innovation.",
    image: "/images/ach (3).png",
    badge: "Startup Innovation"
  },
  {
    title: "Ente Keralam Program Coordinator & Winner",
    award: "State Government Award",
    year: "2023",
    description: "Collected prestigious award from Chittayam Gopakumar (Deputy Speaker, Kerala Legislative Assembly), Pramod Narayan MLA, and Dr. Divya S Iyer IAS.",
    image: "/images/ach (2).png",
    badge: "Govt Recognition"
  },
  {
    title: "Honouring Innovators at Idea Fest 2024",
    award: "Faculty Mentor Recognition",
    year: "2024",
    description: "Felicitation for mentoring student innovations and patent registrations.",
    image: "/images/ach (15).jpeg",
    badge: "Innovation Award"
  },
  {
    title: "APJAKTU Prototype Development Grant",
    award: "Rs. 25,000 Assistance",
    year: "2024",
    description: "Prototype demonstration grant awarded at College of Engineering Trivandrum.",
    image: "/images/ach (13).jpeg",
    badge: "Prototyping Grant"
  },
  {
    title: "Manorama News Coverage",
    award: "Press & Media Feature",
    year: "Featured",
    description: "Prominent state media coverage for pioneering AI technology and societal security applications.",
    image: "/images/ach (10).png",
    badge: "Media Feature"
  }
];
