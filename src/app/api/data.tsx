export const speakers = [
    {
        id: 1,
        src: "/images/world-class-speakers/speakers_1.png",
        alt: "work class speakers",
        name: "Darrell Steward",
        designation: "Designation",
    },
    {
        id: 2,
        src: "/images/world-class-speakers/speakers_2.png",
        alt: "work class speakers",
        name: "Darrell Steward",
        designation: "Designation",
    },
    {
        id: 3,
        src: "/images/world-class-speakers/speakers_3.png",
        alt: "work class speakers",
        name: "Darrell Steward",
        designation: "Designation",
    },
    {
        id: 4,
        src: "/images/world-class-speakers/speakers_4.png",
        alt: "work class speakers",
        name: "Darrell Steward",
        designation: "Designation",
    },
    {
        id: 5,
        src: "/images/world-class-speakers/speakers_5.png",
        alt: "work class speakers",
        name: "Darrell Steward",
        designation: "Designation",
    },
];

export const conferences = [
    {
        title: "The Conference Construct Millennial",
        profiles: [
            "/images/upcoming/profile-1.png",
            "/images/upcoming/profile-3.png"
        ],
        speakers: "Reena John & Lorance",
        buttonText: "Book Ticket",
        buttonLink: "/"
    }, // Profile-1
    {
        title: "Local Business Global Event",
        profiles: [
            "/images/upcoming/profile-2.png"
        ],
        speakers: "Martin Luthar",
        buttonText: "Book Ticket",
        buttonLink: "/"
    }, // Profile-2
    {
        title: "Frontiers Conference Perspectives",
        profiles: [
            "/images/upcoming/profile-4.png"
        ],
        speakers: "Martin Luthar",
        buttonText: "Book Ticket",
        buttonLink: "/"
    }, // Profile-3
    {
        title: "A Focus Conference Initiatives",
        profiles: [
            "/images/upcoming/profile-7.png"
        ],
        speakers: "Martin Luthar",
        buttonText: "Book Ticket",
        buttonLink: "/"
    }, // Profile-4
    {
        title: "Science and Beyond",
        profiles: [
            "/images/upcoming/profile-6.png",
            "/images/upcoming/profile-5.png",
        ],
        speakers: "Reena John & Lorance",
        buttonText: "Book Ticket",
        buttonLink: "/"
    }, // Profile-5
    {
        title: "Global Event",
        profiles: [
            "/images/upcoming/profile-2.png"
        ],
        speakers: "Martin Luthar",
        buttonText: "Book Ticket",
        buttonLink: "/"
    }, // Profile-6
    {
        title: "Cultural Exchange in the Digital Age",
        profiles: [
            "/images/upcoming/profile-4.png"
        ],
        speakers: "Martin Luthar",
        buttonText: "Book Ticket",
        buttonLink: "/"
    }, // Profile-7
    {
        title: "Education for Tomorrow",
        profiles: [
            "/images/upcoming/profile-7.png"
        ],
        speakers: "Martin Luthar",
        buttonText: "Book Ticket",
        buttonLink: "/"
    }, // Profile-8
];

export const intermissions = [
    {
        title: "Coffee Break",
        image: "/images/upcoming/alarm.svg",  // Path to the coffee break image
        time: "10:00 - 10:30", // Time for the coffee break
    },
    {
        title: "Lunch Time",
        image: "/images/upcoming/alarm.svg",  // Path to the lunch break image
        time: "12:30 - 13:30", // Time for the lunch break
    },
];


export type QuestionOption = {
  value: string;
  label: string;
  desc?: string;
};

export type Question = {
  id: string;
  question: string;
  subtitle?: string;
  type: "single" | "multi" | "text" | "textarea";
  options?: QuestionOption[];
};

export const ASSESSMENT_QUESTIONS: Question[] = [
  {
    id: "q1",
    question: "Is the organisation's goal(s) / objective(s) defined?",
    type: "single",
    options: [
      { value: "A", label: "Clearly defined", desc: "Everyone knows the goals" },
      { value: "B", label: "Partially defined", desc: "Some clarity, some gaps" },
      { value: "C", label: "Not defined", desc: "No clear goals set" },
    ],
  },
  {
    id: "q2",
    question: "How aligned is your leadership team on company priorities?",
    type: "single",
    options: [
      { value: "A", label: "Fully aligned" },
      { value: "B", label: "Mostly aligned" },
      { value: "C", label: "Rarely aligned" },
      { value: "D", label: "Not aligned at all" },
    ],
  },
  {
    id: "q3",
    question: "Which barriers affect your team the most?",
    type: "multi",
    options: [
      { value: "processes", label: "Unclear processes" },
      { value: "communication", label: "Poor communication" },
      { value: "tools", label: "Lack of tools" },
      { value: "leadership", label: "Leadership gaps" },
    ],
  },
  {
    id: "q4",
    question: "Describe your biggest operational challenge",
    type: "textarea",
  },
];