import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Crown,
  Globe,
  Heart,
  Instagram,
  Lightbulb,
  Linkedin,
  MapPin,
  Menu,
  Play,
  Search,
  Target,
  Users,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import React from "react";
import { useEffect, useRef, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Innovations", href: "#innovations" },
  { label: "Events", href: "#events" },
  { label: "Impact", href: "#impact" },
  { label: "Gallery", href: "#gallery" },
];

const CORE_VALUES = [
  {
    Icon: Search,
    label: "Curiosity",
    desc: "Asking questions that spark discovery",
  },
  {
    Icon: Heart,
    label: "Compassion",
    desc: "Acting with empathy toward every community",
  },
  {
    Icon: Lightbulb,
    label: "Creativity",
    desc: "Turning ideas into meaningful solutions",
  },
  {
    Icon: Users,
    label: "Collaboration",
    desc: "Building together is building better",
  },
  {
    Icon: Zap,
    label: "Innovation",
    desc: "Engineering change that matters",
  },
  {
    Icon: Target,
    label: "Impact",
    desc: "Action over ideas — results that transform communities",
  },
];

const INITIATIVES = [
  {
    name: "Workshops – Learning Without Limits",
    image: "/assets/generated/workshop-learning.dim_600x400.jpg",
    desc: "Interactive sessions engaging specially-abled students in science, mathematics, and art through tactile models and inclusive learning methods.",
    focus: [
      "Tactile learning",
      "Experiential education",
      "Inclusive science activities",
    ],
    sdgs: ["SDG 4 – Quality Education"],
    outcomes: [
      {
        name: "Tactile Geometry Kit",
        student: "Vedant Madankar",
        dept: "Mechanical Engineering",
        year: "TY",
      },
      {
        name: "Fraction Learning Board",
        student: "Madhura Patil",
        dept: "Electronics Engineering",
        year: "TY",
      },
      {
        name: "Accessible Probability Maze",
        student: "Mohit Bankhele",
        dept: "Computer Engineering",
        year: "TY",
      },
    ],
    media: {
      event: {
        location: "Jagriti Special School, Pune",
        date: "March 2026",
        attendees: "60 Students Engaged",
        description:
          "This workshop introduced tactile learning models to visually impaired students, helping them explore mathematics and science through hands-on interaction. Students built their own tactile kits and demonstrated their understanding through peer teaching.",
      },
      images: [
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Workshop+Session+1",
          caption: "Tactile Geometry Workshop – Jagriti School",
          title: "Tactile Geometry Workshop – Jagriti School, Pune",
          category: "Workshops",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Students+Exploring",
          caption: "Students exploring hands-on STEM models",
          title: "Students Exploring STEM – Jagriti School, Pune",
          category: "Workshops",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Fraction+Board",
          caption: "Fraction Learning Board demonstration",
          title: "Fraction Learning Board – Jagriti School, Pune",
          category: "Workshops",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Probability+Maze",
          caption: "Accessible Probability Maze activity",
          title: "Accessible Probability Maze – Jagriti School, Pune",
          category: "Workshops",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Team+Collaboration",
          caption: "Team collaboration during workshop",
          title: "Team Collaboration – Jagriti School, Pune",
          category: "Workshops",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Final+Showcase",
          caption: "Students showcasing their tactile kits",
          title: "Final Showcase – Jagriti School, Pune",
          category: "Workshops",
        },
      ],
      videos: [
        {
          youtubeId: "azN3DMtywr8",
          title: "Workshop Demonstration – Inclusive STEM Learning",
          label: "Watch Demonstration",
        },
        {
          youtubeId: "azN3DMtywr8",
          title: "Workshop Highlights – Jagriti School",
          label: "Workshop Highlights",
        },
      ],
      studentProjects: [
        {
          name: "Tactile Geometry Kit",
          student: "Vedant Madankar",
          image: "https://placehold.co/400x300/0F2B5B/D4AF37?text=Geometry+Kit",
          hasVideo: true,
        },
        {
          name: "Accessible Probability Maze",
          student: "Shruti Deshpande",
          image:
            "https://placehold.co/400x300/1a3a6b/F2C94C?text=Probability+Maze",
        },
        {
          name: "Fraction Learning Board",
          student: "Madhura Patil",
          image:
            "https://placehold.co/400x300/0F2B5B/D4AF37?text=Fraction+Board",
        },
      ],
      timeline: [
        {
          year: "2024",
          event: "First Workshop at Jagriti School",
          images: [
            "https://placehold.co/300x200/0F2B5B/D4AF37?text=2024+Workshop",
          ],
        },
        {
          year: "2025",
          event: "Math Lab Setup & STEM Kit Development",
          images: [
            "https://placehold.co/300x200/1a3a6b/F2C94C?text=2025+Math+Lab",
          ],
        },
        {
          year: "2026",
          event: "Inclusive STEM Workshop – Scale Up",
          images: [
            "https://placehold.co/300x200/0F2B5B/D4AF37?text=2026+Inclusive+STEM",
          ],
        },
      ],
    },
  },
  {
    name: "Hands of Hope",
    image: "/assets/generated/hands-of-hope.dim_600x400.jpg",
    desc: "Community initiative supporting underprivileged communities by collecting study materials, notebooks, clothes, and essential supplies.",
    focus: ["Promoting dignity", "Sharing resources", "Reducing inequalities"],
    sdgs: ["SDG 1 – No Poverty", "SDG 10 – Reduced Inequalities"],
    outcomes: [],
    media: {
      event: {
        location: "Underprivileged Communities, Pune",
        date: "February 2026",
        attendees: "200+ Families Supported",
        description:
          "WAVES students collected and distributed study materials, notebooks, clothes, and essential supplies to underprivileged communities, promoting dignity and reducing inequalities.",
      },
      images: [
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Collection+Drive",
          caption: "Collection drive for study materials",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Distribution+Day",
          caption: "Distribution day at community center",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Community+Impact",
          caption: "Community members receiving support",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Volunteers+Team",
          caption: "WAVES volunteer team at work",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Hope+in+Action",
          caption: "Hands of Hope – making a difference",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Smiles+of+Hope",
          caption: "Smiles from supported families",
          category: "Outreach",
        },
      ],
      videos: [
        {
          youtubeId: "azN3DMtywr8",
          title: "Hands of Hope – Community Drive",
          label: "Watch Highlights",
        },
      ],
      studentProjects: [
        {
          name: "Community Supply Drive",
          student: "WAVES Outreach Team",
          image: "https://placehold.co/400x300/0F2B5B/D4AF37?text=Supply+Drive",
        },
      ],
      timeline: [
        {
          year: "2024",
          event: "First Community Drive",
          images: [
            "https://placehold.co/300x200/0F2B5B/D4AF37?text=2024+Drive",
          ],
        },
        {
          year: "2025",
          event: "Expanded to Multiple Communities",
          images: [
            "https://placehold.co/300x200/1a3a6b/F2C94C?text=2025+Expanded",
          ],
        },
      ],
    },
  },
  {
    name: "Healing Minds",
    image: "/assets/generated/healing-minds.dim_600x400.jpg",
    desc: "Activities focused on mental wellness, emotional balance, and mindfulness among students.",
    focus: [
      "Mental health awareness",
      "Reflection sessions",
      "Wellbeing activities",
    ],
    sdgs: ["SDG 3 – Good Health & Well-Being"],
    outcomes: [],
    media: {
      event: {
        location: "MITAOE Campus, Pune",
        date: "January 2026",
        attendees: "150 Students Participated",
        description:
          "A series of mental wellness activities, mindfulness sessions, and reflection workshops designed to help students manage stress, build emotional resilience, and foster well-being.",
      },
      images: [
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Mindfulness+Session",
          caption: "Mindfulness and meditation session",
          category: "Events",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Reflection+Circle",
          caption: "Reflection circle with students",
          category: "Events",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Wellness+Activity",
          caption: "Group wellness activity",
          category: "Events",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Art+Therapy",
          caption: "Art therapy workshop",
          category: "Events",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Healing+Together",
          caption: "Healing together – group session",
          category: "Events",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Mental+Health+Talk",
          caption: "Mental health awareness talk",
          category: "Events",
        },
      ],
      videos: [
        {
          youtubeId: "azN3DMtywr8",
          title: "Healing Minds – Wellness Session Highlights",
          label: "Watch Session",
        },
      ],
      studentProjects: [
        {
          name: "Student Wellbeing Tracker",
          student: "WAVES Healing Team",
          image:
            "https://placehold.co/400x300/0F2B5B/D4AF37?text=Wellbeing+Tracker",
        },
      ],
      timeline: [
        {
          year: "2024",
          event: "First Mental Wellness Drive",
          images: [
            "https://placehold.co/300x200/0F2B5B/D4AF37?text=2024+Wellness",
          ],
        },
        {
          year: "2025",
          event: "Expanded Healing Minds Program",
          images: [
            "https://placehold.co/300x200/1a3a6b/F2C94C?text=2025+Program",
          ],
        },
      ],
    },
  },
  {
    name: "Green Guardians",
    image: "/assets/generated/green-guardians.dim_600x400.jpg",
    desc: "Environmental initiative encouraging sustainability through tree plantation drives, environmental awareness, and climate responsibility.",
    focus: [
      "Tree plantation drives",
      "Environmental awareness",
      "Climate responsibility",
    ],
    sdgs: ["SDG 13 – Climate Action", "SDG 15 – Life on Land"],
    outcomes: [],
    media: {
      event: {
        location: "MITAOE Campus & Surrounding Areas, Pune",
        date: "November 2025",
        attendees: "120 Volunteers",
        description:
          "WAVES students led tree plantation drives and environmental awareness campaigns, planting over 200 saplings and educating the community on climate responsibility and sustainable living practices.",
      },
      images: [
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Tree+Plantation",
          caption: "Tree plantation drive in progress",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Saplings+Planted",
          caption: "200+ saplings planted by volunteers",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Green+Team",
          caption: "Green Guardians team ready to plant",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Eco+Awareness",
          caption: "Environmental awareness session",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Campus+Green",
          caption: "Campus greening initiative",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Clean+Drive",
          caption: "Campus clean-up drive",
          category: "Outreach",
        },
      ],
      videos: [
        {
          youtubeId: "azN3DMtywr8",
          title: "Green Guardians – Plantation Drive",
          label: "Watch Drive",
        },
      ],
      studentProjects: [
        {
          name: "Campus Carbon Offset Plan",
          student: "Green Guardians Team",
          image: "https://placehold.co/400x300/0F2B5B/D4AF37?text=Carbon+Plan",
        },
      ],
      timeline: [
        {
          year: "2024",
          event: "First Plantation Drive – 50 Saplings",
          images: [
            "https://placehold.co/300x200/0F2B5B/D4AF37?text=2024+Planting",
          ],
        },
        {
          year: "2025",
          event: "Scale Up – 200 Saplings",
          images: [
            "https://placehold.co/300x200/1a3a6b/F2C94C?text=2025+Scale",
          ],
        },
      ],
    },
  },
  {
    name: "Guest Lectures",
    image: "/assets/generated/guest-lecture.dim_600x400.jpg",
    desc: "Knowledge-sharing sessions with eminent personalities who inspire students through experience and wisdom.",
    focus: [
      "Expanding perspectives",
      "Real-world expertise",
      "Academia connections",
    ],
    sdgs: ["SDG 4 – Quality Education"],
    outcomes: [],
    media: {
      event: {
        location: "Seminar Hall, MITAOE, Pune",
        date: "August 2025",
        attendees: "200 Students Attended",
        description:
          "Industry experts, researchers, and alumni shared insights on innovation, entrepreneurship, and social impact. The lecture series connected students with real-world perspectives and career opportunities.",
      },
      images: [
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Guest+Speaker",
          caption: "Keynote by industry expert",
          category: "Events",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Audience+Engaged",
          caption: "Students engaged during lecture",
          category: "Events",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Q+and+A+Session",
          caption: "Interactive Q&A session",
          category: "Events",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Panel+Talk",
          caption: "Panel discussion with experts",
          category: "Events",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Certificate+Award",
          caption: "Certificate distribution ceremony",
          category: "Events",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Networking+Session",
          caption: "Post-lecture networking session",
          category: "Events",
        },
      ],
      videos: [
        {
          youtubeId: "azN3DMtywr8",
          title: "Guest Lecture – Innovation & Social Impact",
          label: "Watch Lecture",
        },
      ],
      studentProjects: [
        {
          name: "Innovation Research Summary",
          student: "Documentation Team",
          image:
            "https://placehold.co/400x300/0F2B5B/D4AF37?text=Research+Summary",
        },
      ],
      timeline: [
        {
          year: "2024",
          event: "First Guest Lecture Series",
          images: [
            "https://placehold.co/300x200/0F2B5B/D4AF37?text=2024+Lectures",
          ],
        },
        {
          year: "2025",
          event: "Expanded Series – 10 Speakers",
          images: [
            "https://placehold.co/300x200/1a3a6b/F2C94C?text=2025+Speakers",
          ],
        },
      ],
    },
  },
  {
    name: "Innovators' Guild",
    image: "/assets/generated/project-competition.dim_600x400.jpg",
    desc: "Platform where students present innovative ideas and engineering projects, fostering creativity and technical problem-solving.",
    focus: ["Creativity & innovation", "Problem-solving", "Technical projects"],
    sdgs: ["SDG 9 – Industry, Innovation & Infrastructure"],
    outcomes: [],
    media: {
      event: {
        location: "MITAOE Innovation Hub, Pune",
        date: "October 2025",
        attendees: "45 Projects Showcased",
        description:
          "Students presented their engineering innovations and creative projects, competing for recognition and funding opportunities. The event fostered entrepreneurial thinking and technical problem-solving skills.",
      },
      images: [
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Project+Showcase",
          caption: "Innovation project showcase event",
          category: "Innovation",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Prototype+Demo",
          caption: "Prototype demonstration by students",
          category: "Innovation",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Judging+Panel",
          caption: "Expert judging panel evaluation",
          category: "Innovation",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Award+Ceremony",
          caption: "Award ceremony for top innovators",
          category: "Innovation",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Team+Projects",
          caption: "Team-based innovation projects",
          category: "Innovation",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Innovation+Lab",
          caption: "Innovation lab activities",
          category: "Innovation",
        },
      ],
      videos: [
        {
          youtubeId: "azN3DMtywr8",
          title: "Innovators' Guild – Project Showcase",
          label: "Watch Showcase",
        },
      ],
      studentProjects: [
        {
          name: "Smart Assistive Device",
          student: "Arjun Desai",
          image:
            "https://placehold.co/400x300/0F2B5B/D4AF37?text=Assistive+Device",
          hasVideo: true,
        },
        {
          name: "AI Navigation System",
          student: "Kavya Nair",
          image: "https://placehold.co/400x300/1a3a6b/F2C94C?text=AI+Nav",
        },
      ],
      timeline: [
        {
          year: "2024",
          event: "First Innovators' Guild Exhibition",
          images: [
            "https://placehold.co/300x200/0F2B5B/D4AF37?text=2024+Guild",
          ],
        },
        {
          year: "2025",
          event: "45 Projects – Record Participation",
          images: [
            "https://placehold.co/300x200/1a3a6b/F2C94C?text=2025+Record",
          ],
        },
      ],
    },
  },
  {
    name: "Entrepreneurship",
    image: "/assets/generated/entrepreneurship.dim_600x400.jpg",
    desc: "Supporting students interested in startups and innovation through mentorship, entrepreneurial events, and startup awareness.",
    focus: ["Mentorship", "Entrepreneurial events", "Startup awareness"],
    sdgs: ["SDG 8 – Decent Work & Economic Growth"],
    outcomes: [],
    media: {
      event: {
        location: "MITAOE Entrepreneurship Cell, Pune",
        date: "September 2025",
        attendees: "70 Aspiring Entrepreneurs",
        description:
          "WAVES organized mentorship sessions, startup pitching events, and entrepreneurship awareness workshops, connecting students with industry mentors and angel investors.",
      },
      images: [
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Startup+Pitch",
          caption: "Student startup pitch competition",
          category: "Innovation",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Mentor+Session",
          caption: "One-on-one mentor session",
          category: "Innovation",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Idea+Workshop",
          caption: "Idea validation workshop",
          category: "Innovation",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Panel+Discussion",
          caption: "Entrepreneurship panel discussion",
          category: "Innovation",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Business+Model",
          caption: "Business model canvas workshop",
          category: "Innovation",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Networking+Event",
          caption: "Student-mentor networking event",
          category: "Innovation",
        },
      ],
      videos: [
        {
          youtubeId: "azN3DMtywr8",
          title: "Entrepreneurship at WAVES – Startup Stories",
          label: "Watch Stories",
        },
      ],
      studentProjects: [
        {
          name: "EdTech Startup Concept",
          student: "Sneha Patil",
          image:
            "https://placehold.co/400x300/0F2B5B/D4AF37?text=EdTech+Startup",
        },
        {
          name: "Social Impact Venture",
          student: "Rahul Joshi",
          image:
            "https://placehold.co/400x300/1a3a6b/F2C94C?text=Social+Venture",
          hasVideo: true,
        },
      ],
      timeline: [
        {
          year: "2024",
          event: "First Entrepreneurship Awareness Event",
          images: [
            "https://placehold.co/300x200/0F2B5B/D4AF37?text=2024+Event",
          ],
        },
        {
          year: "2025",
          event: "Mentorship Program Launched",
          images: [
            "https://placehold.co/300x200/1a3a6b/F2C94C?text=2025+Mentorship",
          ],
        },
      ],
    },
  },
  {
    name: "Social Outreach",
    image: "/assets/generated/social-outreach.dim_600x400.jpg",
    desc: "Adoption and engagement with Jagriti School, supporting students through workshops, education programs, and interactive learning.",
    focus: ["Education programs", "Mentorship", "Inclusive engagement"],
    sdgs: ["SDG 4 – Quality Education"],
    outcomes: [],
    media: {
      event: {
        location: "Jagriti Special School, Pune",
        date: "December 2025",
        attendees: "80 Students Engaged",
        description:
          "WAVES adopted Jagriti School as a partner institution, conducting regular education programs, mentorship sessions, and interactive learning activities for students with special needs.",
      },
      images: [
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=School+Visit",
          caption: "WAVES team visiting Jagriti School",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Learning+Together",
          caption: "Learning together with special students",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Story+Time",
          caption: "Storytelling and reading session",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Art+Class",
          caption: "Art and craft activity",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Sports+Day",
          caption: "Inclusive sports day event",
          category: "Outreach",
        },
        {
          src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=School+Adoption",
          caption: "School adoption program launch",
          category: "Outreach",
        },
      ],
      videos: [
        {
          youtubeId: "azN3DMtywr8",
          title: "Social Outreach – Jagriti School Program",
          label: "Watch Program",
        },
      ],
      studentProjects: [
        {
          name: "Inclusive Learning Curriculum",
          student: "Outreach Team Lead",
          image: "https://placehold.co/400x300/0F2B5B/D4AF37?text=Curriculum",
        },
      ],
      timeline: [
        {
          year: "2024",
          event: "School Adoption Partnership Begins",
          images: [
            "https://placehold.co/300x200/0F2B5B/D4AF37?text=2024+Partnership",
          ],
        },
        {
          year: "2025",
          event: "Regular Monthly Visits Established",
          images: [
            "https://placehold.co/300x200/1a3a6b/F2C94C?text=2025+Visits",
          ],
        },
      ],
    },
  },
];

const IP_PROJECTS = [
  {
    title: "Recognition of Colors for Visually Impaired",
    student: "Mohit Bankhele",
    dept: "Computer Engineering",
    type: "Patent Filed" as const,
    desc: "A sensory-based system enabling visually impaired individuals to identify colors using tactile and scent cues — combining technology with empathy.",
    image: "/assets/generated/ip-color-recognition.dim_600x400.jpg",
  },
  {
    title: "Tactile Rubik's Cube for Visually Impaired",
    student: "Mohit Bankhele",
    dept: "Computer Engineering",
    type: "Patent Filed" as const,
    desc: "A redesigned Rubik's Cube with tactile markers enabling visually impaired students to engage with spatial problem-solving independently.",
    image: "/assets/generated/ip-tactile-rubik.dim_600x400.jpg",
  },
  {
    title: "Inclusive STEM Learning Kit",
    student: "Vedant Madankar",
    dept: "Mechanical Engineering",
    type: "Design Filed" as const,
    desc: "A modular kit of tactile models covering geometry, fractions, and probability for inclusive science education in special schools.",
    image: "/assets/generated/ip-tactile-geometry.dim_600x400.jpg",
  },
  {
    title: "WAVES Innovation Curriculum",
    student: "Madhura Patil",
    dept: "Electronics Engineering",
    type: "Copyright Registered" as const,
    desc: "A structured curriculum framework for innovation workshops, combining design thinking, social empathy, and hands-on project building.",
    image: "/assets/generated/workshop-learning.dim_600x400.jpg",
  },
  {
    title: "Tactile Circuit Learning Board",
    student: "Mohit Bankhele",
    dept: "Computer Engineering",
    type: "Design Filed" as const,
    desc: "An accessible circuit board model with raised pathways allowing visually impaired students to learn electronics through touch.",
    image: "/assets/generated/ip-tactile-geometry.dim_600x400.jpg",
  },
  {
    title: "Scent-Based Navigation Guide",
    student: "Vedant Madankar",
    dept: "Mechanical Engineering",
    type: "Patent Filed" as const,
    desc: "A prototype navigation aid using scent markers to help visually impaired users identify locations and directional cues in indoor environments.",
    image: "/assets/generated/ip-color-recognition.dim_600x400.jpg",
  },
];

const STUDENT_INNOVATORS = [
  {
    name: "Mohit Bankhele",
    dept: "Computer Engineering",
    year: "TY",
    projectType: "Patent Filed",
    project: "Tactile Color Recognition System",
    photo: "/assets/generated/innovator-mohit.dim_300x300.jpg",
  },
  {
    name: "Madhura Patil",
    dept: "Electronics Engineering",
    year: "TY",
    projectType: "Copyright Registered",
    project: "WAVES Innovation Curriculum",
    photo: "/assets/generated/innovator-madhura.dim_300x300.jpg",
  },
  {
    name: "Vedant Madankar",
    dept: "Mechanical Engineering",
    year: "TY",
    projectType: "Design Filed",
    project: "Tactile Geometry Kit",
    photo: "/assets/generated/innovator-vedant.dim_300x300.jpg",
  },
  {
    name: "Shruti Deshpande",
    dept: "Information Technology",
    year: "SY",
    projectType: "Design Filed",
    project: "Accessible Probability Maze",
    photo: "/assets/generated/innovator-madhura.dim_300x300.jpg",
  },
  {
    name: "Aditya Kulkarni",
    dept: "Mechanical Engineering",
    year: "SY",
    projectType: "Patent Filed",
    project: "Scent-Based Navigation Guide",
    photo: "/assets/generated/innovator-vedant.dim_300x300.jpg",
  },
  {
    name: "Priya Sharma",
    dept: "Computer Engineering",
    year: "FY",
    projectType: "Design Filed",
    project: "Tactile Circuit Learning Board",
    photo: "/assets/generated/innovator-mohit.dim_300x300.jpg",
  },
  {
    name: "Rahul Joshi",
    dept: "Electronics Engineering",
    year: "SY",
    projectType: "Patent Filed",
    project: "Inclusive STEM Learning Module",
    photo: "/assets/generated/innovator-madhura.dim_300x300.jpg",
  },
  {
    name: "Sneha Patil",
    dept: "Information Technology",
    year: "TY",
    projectType: "Copyright Registered",
    project: "Community Learning Portal",
    photo: "/assets/generated/innovator-vedant.dim_300x300.jpg",
  },
  {
    name: "Arjun Desai",
    dept: "Mechanical Engineering",
    year: "TY",
    projectType: "Design Filed",
    project: "Ergonomic Assistive Device",
    photo: "/assets/generated/innovator-mohit.dim_300x300.jpg",
  },
  {
    name: "Kavya Nair",
    dept: "Computer Engineering",
    year: "SY",
    projectType: "Patent Filed",
    project: "AI-Assisted Braille Converter",
    photo: "/assets/generated/innovator-madhura.dim_300x300.jpg",
  },
];

const UPCOMING_EVENTS = [
  {
    title: "WAVES Innovation Hackathon",
    date: "April 15, 2026",
    deadline: "April 10, 2026",
    location: "MITAOE Campus, Pune",
    desc: "A 12-hour innovation challenge where student teams build solutions for real community problems.",
    image: "/assets/generated/events-innovation-hackathon.dim_600x400.jpg",
    eventKey: "Innovation Hackathon",
  },
  {
    title: "Workshop on Inclusive STEM Models",
    date: "March 28, 2026",
    deadline: "March 25, 2026",
    location: "Jagriti Special School, Pune",
    desc: "Hands-on workshop building tactile science models for visually impaired students.",
    image: "/assets/generated/events-jagriti-school.dim_600x400.jpg",
    eventKey: "WAVES Workshop",
  },
  {
    title: "Guest Lecture: Innovation & Social Impact",
    date: "April 5, 2026",
    deadline: "April 3, 2026",
    location: "Seminar Hall, MITAOE",
    desc: "Industry experts sharing insights on combining engineering with social entrepreneurship.",
    image: "/assets/generated/events-guest-lecture.dim_600x400.jpg",
    eventKey: "Guest Lecture",
  },
];

const PAST_EVENTS = [
  {
    title: "Workshop at Jagriti School",
    image: "/assets/generated/events-jagriti-school.dim_600x400.jpg",
    desc: "Students engaged in inclusive science activities",
  },
  {
    title: "Innovation Club Mela",
    image: "/assets/generated/events-club-mela.dim_600x400.jpg",
    desc: "Annual showcase of student innovation projects",
  },
  {
    title: "Guest Lectures Series",
    image: "/assets/generated/events-guest-lecture.dim_600x400.jpg",
    desc: "Knowledge sessions with industry leaders",
  },
  {
    title: "Project Competition 2025",
    image: "/assets/generated/events-innovation-hackathon.dim_600x400.jpg",
    desc: "Teams competing with impactful solutions",
  },
];

const IMPACT_STATS = [
  { value: 500, suffix: "+", label: "Students Engaged" },
  { value: 30, suffix: "+", label: "Workshops Conducted" },
  { value: 15, suffix: "+", label: "Community Outreach Programs" },
  { value: 10, suffix: "+", label: "Environmental Drives" },
  { value: 25, suffix: "+", label: "Innovation Projects" },
];

const _HERO_NUMBERS = [
  { number: "30+", label: "Workshops Conducted" },
  { number: "10+", label: "Initiatives" },
  { number: "1000+", label: "Lives Impacted" },
  { number: "3+", label: "Patents Filed" },
];

const JOIN_OPPORTUNITIES = [
  {
    Icon: Heart,
    title: "Volunteering",
    desc: "Support workshops, outreach programs, and community initiatives.",
  },
  {
    Icon: Crown,
    title: "Leadership Roles",
    desc: "Lead teams, organize initiatives, and drive WAVES forward.",
  },
  {
    Icon: Cpu,
    title: "Innovation Projects",
    desc: "Design and build engineering solutions for real-world challenges.",
  },
  {
    Icon: Globe,
    title: "Outreach Initiatives",
    desc: "Engage with communities and create meaningful social impact.",
  },
  {
    Icon: BookOpen,
    title: "Research & Patents",
    desc: "Work on research ideas, file patents, and build intellectual property.",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/assets/generated/workshop-learning.dim_600x400.jpg",
    alt: "Workshop – Learning Without Limits",
    category: "Workshops",
  },
  {
    src: "/assets/generated/hands-of-hope.dim_600x400.jpg",
    alt: "Hands of Hope outreach",
    category: "Outreach",
  },
  {
    src: "/assets/generated/healing-minds.dim_600x400.jpg",
    alt: "Healing Minds wellness",
    category: "Events",
  },
  {
    src: "/assets/generated/green-guardians.dim_600x400.jpg",
    alt: "Green Guardians tree plantation",
    category: "Outreach",
  },
  {
    src: "/assets/generated/guest-lecture.dim_600x400.jpg",
    alt: "Guest Lecture session",
    category: "Events",
  },
  {
    src: "/assets/generated/project-competition.dim_600x400.jpg",
    alt: "Innovators Guild competition",
    category: "Innovation",
  },
  {
    src: "/assets/generated/entrepreneurship.dim_600x400.jpg",
    alt: "Entrepreneurship mentorship",
    category: "Innovation",
  },
  {
    src: "/assets/generated/social-outreach.dim_600x400.jpg",
    alt: "Social Outreach at Jagriti School",
    category: "Outreach",
  },
  {
    src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Innovation+Lab",
    alt: "Innovation Lab Session",
    category: "Innovation",
  },
  {
    src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=STEM+Workshop",
    alt: "STEM Workshop Activity",
    category: "Workshops",
  },
  {
    src: "https://placehold.co/600x400/0F2B5B/D4AF37?text=Community+Outreach",
    alt: "Community Outreach Drive",
    category: "Outreach",
  },
  {
    src: "https://placehold.co/600x400/1a3a6b/F2C94C?text=Annual+Event",
    alt: "WAVES Annual Event",
    category: "Events",
  },
];

// ─── Helpers ───────────────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCounter({
  stat,
  inView,
}: { stat: (typeof IMPACT_STATS)[0]; inView: boolean }) {
  const count = useCountUp(stat.value, 2000, inView);
  return (
    <div className="text-center px-4">
      <div
        className="text-5xl md:text-6xl font-heading font-extrabold mb-2 leading-none"
        style={{ color: "#F2C94C" }}
      >
        {count}
        {stat.suffix}
      </div>
      <div className="text-white/80 font-body text-sm md:text-base tracking-wide uppercase">
        {stat.label}
      </div>
    </div>
  );
}

function ipTypeBadge(
  type: "Patent Filed" | "Copyright Registered" | "Design Filed",
) {
  if (type === "Patent Filed")
    return "bg-blue-100 text-blue-800 border border-blue-200";
  if (type === "Copyright Registered")
    return "bg-emerald-100 text-emerald-800 border border-emerald-200";
  return "bg-purple-100 text-purple-800 border border-purple-200";
}

// ─── Navbar ────────────────────────────────────────────────────────────────────

function Navbar({ onJoinClick }: { onJoinClick: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300"
      style={{
        height: "70px",
        boxShadow:
          "0 2px 20px rgba(212,175,55,0.32), 0 4px 28px rgba(15,43,91,0.18)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-full">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-ocid="nav.link"
          className="flex items-center"
          style={{ padding: "12px" }}
        >
          <img
            src="/assets/uploads/waves_logo-1.png"
            alt="WAVES – MIT Academy of Engineering"
            className="w-auto object-contain"
            style={{ height: "52px" }}
          />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center" style={{ gap: "28px" }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                data-ocid="nav.link"
                className="font-body text-sm font-semibold transition-colors"
                style={{
                  color: "#1F3C6D",
                  borderBottom: "2px solid transparent",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#D4AF37";
                  e.currentTarget.style.borderBottom = "2px solid #D4AF37";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#1F3C6D";
                  e.currentTarget.style.borderBottom = "2px solid transparent";
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={onJoinClick}
              data-ocid="join_form.open_modal_button"
              className="font-heading font-bold text-sm px-5 py-2 rounded-full transition-all hover:scale-105 text-white"
              style={{ backgroundColor: "#D4AF37" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C69C2D";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#D4AF37";
              }}
            >
              Join the Wave
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMobileOpen((v) => !v)}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
          style={{
            color: "#1F3C6D",
            borderBottom: "2px solid transparent",
            paddingBottom: "2px",
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden bg-white border-t px-4 py-4 flex flex-col gap-1"
          style={{ borderColor: "#D4AF3740" }}
        >
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              data-ocid="nav.link"
              className="font-body text-base py-3 text-left border-b transition-colors"
              style={{ color: "#1F3C6D", borderColor: "#1F3C6D10" }}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={onJoinClick}
            data-ocid="join_form.open_modal_button"
            className="mt-3 font-heading font-bold text-sm px-5 py-3 rounded-full text-white"
            style={{ backgroundColor: "#D4AF37" }}
          >
            Join the Wave
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ──────────────────────────────────────────────────────────────

function HeroSection({ onJoinClick }: { onJoinClick: () => void }) {
  const [heroMounted] = useState(true);
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center overflow-hidden text-left"
      style={{
        background:
          "linear-gradient(135deg, #0A1F3F 0%, #0F2B5B 55%, #1a3a70 100%)",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-waves-workshop.dim_1400x700.jpg')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(16, 42, 87, 0.55)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden"
        style={{ height: "120px" }}
      >
        <svg
          viewBox="0 0 2880 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[200%] h-full hero-wave-scroll"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 C1680,100 1920,20 2160,60 C2400,100 2640,20 2880,60 L2880,120 L0,120 Z"
            fill="rgba(212,175,55,0.09)"
          />
          <path
            d="M0,80 C360,40 720,120 1080,80 C1260,60 1380,90 1440,80 C1800,40 2160,120 2520,80 C2700,60 2820,90 2880,80 L2880,120 L0,120 Z"
            fill="rgba(255,255,255,0.05)"
          />
        </svg>
      </div>

      <div
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 animate-wave-float"
        style={{
          background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-32 left-10 w-48 h-48 rounded-full opacity-10 animate-wave-float"
        style={{
          background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full"
        style={{ paddingTop: "100px" }}
      >
        <div style={{ maxWidth: "650px" }} className="text-left">
          <div
            className={`inline-flex items-center gap-2 mb-5${heroMounted ? " hero-animate hero-animate-1" : ""}`}
            style={{
              background: "rgba(15,43,91,0.65)",
              border: "1px solid rgba(212,175,55,0.55)",
              borderRadius: "999px",
              padding: "5px 14px 5px 10px",
            }}
          >
            <Globe size={13} style={{ color: "#D4AF37", flexShrink: 0 }} />
            <span
              className="font-body font-semibold"
              style={{
                color: "#D4AF37",
                fontSize: "12px",
                letterSpacing: "0.04em",
              }}
            >
              Student Initiative · MITAOE · Pune
            </span>
          </div>

          <h1
            className={`font-heading font-extrabold text-white leading-tight mb-2${heroMounted ? " hero-animate hero-animate-2" : ""}`}
          >
            <span
              className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-waves-gold font-extrabold"
              style={{ letterSpacing: "6px" }}
            >
              WAVES
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl text-white/90 font-semibold tracking-wide mt-1">
              Exploring the Rhythm of Life &amp; Living
            </span>
          </h1>

          <p
            className={`font-body text-waves-gold/80 text-base italic mb-6 mt-3${heroMounted ? " hero-animate hero-animate-3" : ""}`}
          >
            Innovation with Empathy. Impact with Purpose.
          </p>

          <p
            className={`font-body text-white/80 text-lg leading-relaxed mb-10${heroMounted ? " hero-animate hero-animate-4" : ""}`}
          >
            A student-led initiative driven by curiosity, compassion, and
            creativity — building impactful projects in innovation, education,
            sustainability, and social outreach.
          </p>

          <div
            className={`flex flex-wrap gap-4${heroMounted ? " hero-animate hero-animate-5" : ""}`}
          >
            <button
              type="button"
              onClick={() => scrollToSection("#about")}
              data-ocid="hero.primary_button"
              className="font-heading font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 border-2 text-white"
              style={{
                borderColor: "#D4AF37",
                color: "#D4AF37",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Explore WAVES
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("#initiatives")}
              data-ocid="hero.secondary_button"
              className="font-heading font-semibold px-8 py-4 rounded-full text-base transition-all border-2 text-white"
              style={{
                borderColor: "rgba(255,255,255,0.5)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              }}
            >
              Our Initiatives
            </button>
            <button
              type="button"
              onClick={onJoinClick}
              data-ocid="join_form.open_modal_button"
              className="font-heading font-bold px-8 py-4 rounded-full text-base transition-all text-white join-wave-pulse"
              style={{
                backgroundColor: "#D4AF37",
                overflow: "visible",
                isolation: "isolate",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C69C2D";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#D4AF37";
              }}
            >
              Join the Wave →
            </button>
          </div>

          <div className="mt-16 flex items-center gap-2 text-white/40 text-sm font-body animate-bounce">
            <ChevronDown size={16} />
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Impact Numbers Strip ──────────────────────────────────────────────────────

const HERO_NUMBERS_DATA = [
  { value: 30, suffix: "+", label: "Workshops Conducted" },
  { value: 10, suffix: "+", label: "Initiatives" },
  { value: 1000, suffix: "+", label: "Lives Impacted" },
  { value: 3, suffix: "+", label: "Patents Filed" },
];

function ImpactStripCounter({
  item,
  inView,
}: {
  item: (typeof HERO_NUMBERS_DATA)[0];
  inView: boolean;
}) {
  const count = useCountUp(item.value, 1500, inView);
  return (
    <div className="flex flex-col items-center justify-center py-4 px-4 text-center">
      <span
        className="font-heading font-extrabold text-3xl md:text-5xl leading-none"
        style={{ color: "#D4AF37" }}
      >
        {count}
        {item.suffix}
      </span>
      <span
        className="font-body text-xs md:text-sm mt-2 tracking-wide font-semibold"
        style={{ color: "rgba(255,255,255,0.85)" }}
      >
        {item.label}
      </span>
    </div>
  );
}

function ImpactStrip() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      data-ocid="impact_strip.section"
      className=""
      style={{
        background: "linear-gradient(135deg, #0F2B5B 0%, #1F3C6D 100%)",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x">
          {HERO_NUMBERS_DATA.map((item) => (
            <ImpactStripCounter key={item.label} item={item} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Section ─────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-waves-gold/15 text-waves-blue font-body font-semibold text-xs px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
              Who We Are
            </div>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-waves-blue mb-6 leading-tight">
              About <span className="text-waves-gold">WAVES</span>
            </h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
              WAVES is a student-driven initiative at MIT Academy of Engineering
              dedicated to creating meaningful social impact through innovation,
              creativity, and community engagement.
            </p>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              By combining engineering with empathy, WAVES empowers students to
              design real-world solutions in education, sustainability, and
              social outreach.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl text-waves-blue mb-6">
              Our Core Values
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {CORE_VALUES.map((val) => (
                <div
                  key={val.label}
                  className={`relative p-5 rounded-2xl border-2 transition-all hover:-translate-y-1 hover:shadow-waves ${""} bg-white border-waves-blue/10 hover:border-waves-gold/50`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#0F2B5B] border border-[#D4AF37] flex items-center justify-center mb-3">
                    <val.Icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="font-heading font-bold text-waves-blue text-base mb-1">
                    {val.label}
                  </div>
                  <div className="font-body text-gray-500 text-sm">
                    {val.desc}
                  </div>
                  <div
                    className="absolute top-0 right-0 w-2 h-2/3 rounded-r-2xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #D4AF37 0%, transparent 100%)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Initiatives Section ───────────────────────────────────────────────────────

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function InitiativesSection({
  onNavigate,
}: { onNavigate: (slug: string) => void }) {
  return (
    <section id="initiatives" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-waves-gold/15 text-waves-blue font-body font-semibold text-xs px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
            What We Do
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-waves-blue mb-4">
            Our <span className="text-waves-gold">Initiatives</span>
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">
            Eight pillars of change — each aligned with the UN Sustainable
            Development Goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {INITIATIVES.map((item, idx) => (
            <div
              key={item.name}
              data-ocid={`initiatives.item.${idx + 1}`}
              className="initiative-card bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-xs cursor-pointer group hover:shadow-waves transition-shadow duration-300"
              onClick={() => onNavigate(slugify(item.name))}
              onKeyDown={(e) =>
                e.key === "Enter" && onNavigate(slugify(item.name))
              }
            >
              <div className="overflow-hidden h-52">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-waves-blue text-xl mb-2">
                  {item.name}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <ul className="space-y-1 mb-4">
                  {item.focus.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 font-body text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-waves-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.sdgs.map((sdg) => (
                    <span
                      key={sdg}
                      className="inline-block bg-waves-gold/15 text-waves-blue font-body font-semibold text-xs px-3 py-1.5 rounded-full border border-waves-gold/30"
                    >
                      {sdg}
                    </span>
                  ))}
                </div>
                <div className="mt-2">
                  <button
                    type="button"
                    className="text-waves-blue font-body font-semibold text-sm flex items-center gap-1 group-hover:text-waves-gold transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(slugify(item.name));
                    }}
                  >
                    Explore Initiative{" "}
                    <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Innovations / IP Portfolio Section ───────────────────────────────────────

function InnovationsSection() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoTitle, setDemoTitle] = useState("");

  const openDemo = (title: string) => {
    setDemoTitle(title);
    setDemoOpen(true);
  };

  return (
    <section id="innovations" className="bg-[#F0F6FF] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* IP Counter Strip */}
        <div className="grid grid-cols-3 gap-4 mb-16 bg-waves-blue rounded-2xl overflow-hidden">
          {[
            { value: "3+", label: "Patents Filed" },
            { value: "3+", label: "Copyrights" },
            { value: "7+", label: "Design Innovations" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col items-center justify-center py-8 px-4 text-center ${
                i < 2 ? "border-r border-waves-gold/20" : ""
              }`}
            >
              <span className="font-heading font-extrabold text-4xl md:text-5xl text-waves-gold leading-none mb-1">
                {item.value}
              </span>
              <span className="font-body text-white/70 text-xs md:text-sm tracking-widest uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-block bg-waves-gold/15 text-waves-blue font-body font-semibold text-xs px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
            Intellectual Property
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-waves-blue mb-4">
            Innovations &amp;{" "}
            <span className="text-waves-gold">IP Portfolio</span>
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">
            Student-driven inventions protecting real ideas with real impact
          </p>
        </div>

        {/* IP Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {IP_PROJECTS.map((project, idx) => (
            <div
              key={project.title}
              data-ocid={`innovations.item.${idx + 1}`}
              className="bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-xs hover:shadow-waves hover:-translate-y-1 transition-all"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-block font-body font-semibold text-xs px-3 py-1 rounded-full ${ipTypeBadge(project.type)}`}
                  >
                    {project.type}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-waves-blue text-lg mb-0.5">
                  {project.title}
                </h3>
                <p className="font-body text-xs text-gray-400 font-medium mb-1">
                  {project.dept}
                </p>
                <p className="font-body text-sm text-waves-gold font-semibold mb-3">
                  Student Innovator: {project.student}
                </p>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    data-ocid={`innovations.item.${idx + 1}`}
                    onClick={() => openDemo(project.title)}
                    className="flex-1 bg-waves-gold hover:bg-waves-gold-light text-waves-blue font-heading font-semibold text-sm py-2 rounded-full transition-all hover:scale-105"
                  >
                    Watch Demo
                  </button>
                  <button
                    type="button"
                    data-ocid={`innovations.item.${idx + 1}`}
                    className="flex-1 border-2 border-waves-blue text-waves-blue font-heading font-semibold text-sm py-2 rounded-full hover:bg-waves-blue hover:text-white transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Modal */}
      <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
        <DialogContent data-ocid="innovations.dialog" className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-waves-blue">
              Demo: {demoTitle}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <div className="w-20 h-20 rounded-full bg-waves-blue/10 flex items-center justify-center text-4xl">
              🎬
            </div>
            <p className="font-body text-gray-600 text-center">
              Demo video coming soon. Stay tuned for the full demonstration of
              this innovation.
            </p>
          </div>
          <div className="flex justify-end">
            <Button
              data-ocid="innovations.dialog"
              onClick={() => setDemoOpen(false)}
              className="bg-waves-gold hover:bg-waves-gold-light text-waves-blue font-heading font-semibold"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

// ─── Innovators Carousel ───────────────────────────────────────────────────────

function InnovatorsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive: 4 on lg+, 3 on md, 2 on sm, 1 on xs
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 480) return 2;
    return 1;
  });

  useEffect(() => {
    const calc = () => {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 3;
      if (window.innerWidth >= 480) return 2;
      return 1;
    };
    const onResize = () => setVisibleCount(calc());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = Math.max(0, STUDENT_INNOVATORS.length - visibleCount);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  // Clamp index if visibleCount changes
  const safeIndex = Math.min(currentIndex, maxIndex);

  return (
    <div className="relative flex items-center gap-3">
      {/* Left arrow */}
      <button
        type="button"
        onClick={prev}
        disabled={safeIndex === 0}
        aria-label="Previous"
        className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md border border-blue-100 flex items-center justify-center text-waves-blue hover:bg-waves-gold/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Cards viewport */}
      <div className="flex-1 overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-400 ease-in-out"
          style={{
            transform: `translateX(calc(-${safeIndex} * (100% / ${visibleCount} + (${visibleCount - 1} / ${visibleCount}) * 1.5rem / ${visibleCount - 1 || 1})))`,
          }}
        >
          {STUDENT_INNOVATORS.map((innovator, idx) => (
            <div
              key={innovator.name}
              data-ocid={`innovators.item.${idx + 1}`}
              className="bg-white rounded-2xl p-6 text-center border border-blue-100 shadow-xs hover:shadow-waves hover:-translate-y-1 transition-all flex-shrink-0"
              style={{
                width: `calc((100% - ${(visibleCount - 1) * 1.5}rem) / ${visibleCount})`,
              }}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-waves-gold/30">
                <img
                  src={innovator.photo}
                  alt={innovator.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-waves-blue text-base mb-0.5">
                {innovator.name}
              </h3>
              <p className="font-body text-gray-400 text-xs mb-1">
                {innovator.dept}
              </p>
              <p className="font-body text-gray-400 text-xs mb-2">
                {innovator.year} Year
              </p>
              <div className="inline-block bg-waves-gold/10 border border-waves-gold/30 rounded-lg px-2 py-1.5 mb-2 text-left w-full">
                <p className="font-body text-waves-blue/70 text-[10px] font-bold uppercase tracking-wide mb-0.5">
                  {innovator.projectType}:
                </p>
                <p className="font-body text-waves-blue text-xs font-semibold leading-snug">
                  {innovator.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right arrow */}
      <button
        type="button"
        onClick={next}
        disabled={safeIndex >= maxIndex}
        aria-label="Next"
        className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md border border-blue-100 flex items-center justify-center text-waves-blue hover:bg-waves-gold/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

// ─── Student Innovators Section ────────────────────────────────────────────────

function StudentInnovatorsSection() {
  return (
    <section id="innovators" className="bg-[#F0F6FF] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-waves-gold/15 text-waves-blue font-body font-semibold text-xs px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
            Meet the Minds
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-waves-blue mb-4">
            Student <span className="text-waves-gold">Innovators</span>
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">
            Meet the students turning ideas into impact — building solutions for
            real-world challenges.
          </p>
        </div>

        <InnovatorsCarousel />
      </div>
    </section>
  );
}

// ─── Events Section ────────────────────────────────────────────────────────────

const EVENT_OPTIONS = [
  "WAVES Workshop",
  "Guest Lecture",
  "Project Competition",
  "Innovation Hackathon",
  "Outreach Activity",
];

function EventsSection() {
  const [regOpen, setRegOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    dept: "",
    year: "",
    email: "",
    phone: "",
    event: "",
  });

  const openRegister = (eventKey: string) => {
    setSelectedEvent(eventKey);
    setForm((prev) => ({ ...prev, event: eventKey }));
    setSubmitted(false);
    setRegOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDialogChange = (open: boolean) => {
    setRegOpen(open);
    if (!open) {
      setSubmitted(false);
      setForm({
        name: "",
        dept: "",
        year: "",
        email: "",
        phone: "",
        event: selectedEvent,
      });
    }
  };

  return (
    <section id="events" className="bg-[#F0F6FF] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-block bg-waves-gold/15 text-waves-blue font-body font-semibold text-xs px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
            Get Involved
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-waves-blue mb-4">
            Upcoming <span className="text-waves-gold">Events</span>
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">
            Join us at our upcoming events — workshops, lectures, hackathons,
            and more.
          </p>
        </div>

        {/* Upcoming Event Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {UPCOMING_EVENTS.map((event, idx) => (
            <div
              key={event.title}
              data-ocid={`events.item.${idx + 1}`}
              className="bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-xs hover:shadow-waves hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="overflow-hidden h-44">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-body mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {event.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {event.location}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-waves-blue text-lg mb-2">
                  {event.title}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed flex-1 mb-3">
                  {event.desc}
                </p>
                {/* Urgency indicator */}
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                  <span
                    className="font-body font-semibold text-xs"
                    style={{ color: "#E07B2A" }}
                  >
                    Register before {event.deadline}
                  </span>
                </div>
                <button
                  type="button"
                  data-ocid="events.register_button"
                  onClick={() => openRegister(event.eventKey)}
                  className="w-full bg-waves-gold hover:bg-waves-gold-light text-waves-blue font-heading font-bold text-sm py-3 rounded-full transition-all hover:scale-105"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Past Events */}
        <div className="mb-12">
          <h3 className="font-heading font-bold text-2xl text-waves-blue mb-8 text-center">
            Past Events
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PAST_EVENTS.map((ev, idx) => (
              <div
                key={ev.title}
                data-ocid={`events.item.${idx + 4}`}
                className="rounded-xl overflow-hidden shadow-xs hover:shadow-waves transition-all group cursor-pointer"
              >
                <div className="overflow-hidden h-36">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-blue-50 p-3">
                  <p className="font-heading font-bold text-waves-blue text-sm">
                    {ev.title}
                  </p>
                  <p className="font-body text-gray-400 text-xs mt-0.5">
                    {ev.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      <Dialog open={regOpen} onOpenChange={handleDialogChange}>
        <DialogContent
          data-ocid="events.registration.dialog"
          className="max-w-md max-h-[90vh] overflow-y-auto"
        >
          <DialogHeader>
            <DialogTitle className="font-heading text-waves-blue">
              Event Registration
            </DialogTitle>
          </DialogHeader>

          {submitted ? (
            <div
              data-ocid="events.success_state"
              className="flex flex-col items-center justify-center py-10 gap-4 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#0F2B5B] border-2 border-[#D4AF37] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="font-heading font-bold text-waves-blue text-xl">
                Thank you for registering!
              </h3>
              <p className="font-body text-gray-500 text-sm">
                You will receive event updates via email/WhatsApp.
              </p>
              <Button
                data-ocid="events.registration.dialog"
                onClick={() => setRegOpen(false)}
                className="bg-waves-gold hover:bg-waves-gold-light text-waves-blue font-heading font-semibold mt-2"
              >
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
              <div className="space-y-1">
                <Label className="font-body text-sm text-waves-blue font-semibold">
                  Full Name *
                </Label>
                <Input
                  data-ocid="events.name.input"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                />
              </div>

              <div className="space-y-1">
                <Label className="font-body text-sm text-waves-blue font-semibold">
                  Department *
                </Label>
                <Input
                  data-ocid="events.dept.input"
                  required
                  placeholder="e.g. Computer Engineering"
                  value={form.dept}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, dept: e.target.value }))
                  }
                />
              </div>

              <div className="space-y-1">
                <Label className="font-body text-sm text-waves-blue font-semibold">
                  Year *
                </Label>
                <Select
                  value={form.year}
                  onValueChange={(v) => setForm((p) => ({ ...p, year: v }))}
                  required
                >
                  <SelectTrigger data-ocid="events.year.select">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {["FE", "SE", "TE", "BE"].map((y) => (
                      <SelectItem key={y} value={y}>
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label className="font-body text-sm text-waves-blue font-semibold">
                  Email *
                </Label>
                <Input
                  data-ocid="events.email.input"
                  required
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                />
              </div>

              <div className="space-y-1">
                <Label className="font-body text-sm text-waves-blue font-semibold">
                  Phone
                </Label>
                <Input
                  data-ocid="events.phone.input"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                />
              </div>

              <div className="space-y-1">
                <Label className="font-body text-sm text-waves-blue font-semibold">
                  Event *
                </Label>
                <Select
                  value={form.event}
                  onValueChange={(v) => setForm((p) => ({ ...p, event: v }))}
                  required
                >
                  <SelectTrigger data-ocid="events.event.select">
                    <SelectValue placeholder="Select Event" />
                  </SelectTrigger>
                  <SelectContent>
                    {EVENT_OPTIONS.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                data-ocid="events.submit_button"
                className="w-full bg-waves-gold hover:bg-waves-gold-light text-waves-blue font-heading font-bold text-base mt-2"
              >
                Register Now
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

// ─── Impact Section ────────────────────────────────────────────────────────────

function ImpactSection() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={ref}
      className="bg-waves-blue py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full opacity-10"
          aria-hidden="true"
        >
          <path
            d="M0,200 C360,100 720,300 1080,200 C1260,150 1380,220 1440,200 L1440,400 L0,400 Z"
            fill="#D4AF37"
          />
          <path
            d="M0,280 C240,200 480,360 720,280 C960,200 1200,340 1440,280 L1440,400 L0,400 Z"
            fill="#D4AF37"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body text-waves-gold font-semibold text-xs tracking-widest uppercase mb-5">
            Making a Difference
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
            Our <span className="text-waves-gold">Impact</span>
          </h2>
          <p className="font-body text-white/60 text-lg">
            Numbers that tell the story of change
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {IMPACT_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <StatCounter stat={stat} inView={inView} />
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10" />
      </div>
    </section>
  );
}

// ─── WAVES in Action Video Banner ─────────────────────────────────────────────

function WavesInActionSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      data-ocid="video.section"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #060F1E 0%, #0A1F3F 60%, #0F2B5B 100%)",
      }}
    >
      {/* Subtle wave decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          aria-hidden="true"
        >
          <path
            d="M0,200 C360,100 720,300 1080,200 C1260,150 1380,220 1440,200 L1440,400 L0,400 Z"
            fill="#D4AF37"
          />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-body text-waves-gold font-semibold text-xs tracking-widest uppercase mb-6">
          See WAVES Live
        </p>
        <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-3">
          WAVES <span className="text-waves-gold">in Action</span>
        </h2>
        <p className="font-body text-white/60 text-lg mb-12">
          30–40 seconds of real impact — workshops, labs, students building
          models, school interactions.
        </p>

        {/* Video Placeholder */}
        <button
          type="button"
          className="relative mx-auto max-w-3xl rounded-2xl overflow-hidden shadow-2xl group cursor-pointer block w-full"
          style={{ aspectRatio: "16/9", background: "#0A1525" }}
          onClick={() => setPlaying(true)}
          data-ocid="video.canvas_target"
        >
          {playing ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/azN3DMtywr8?autoplay=1"
              title="WAVES in Action"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {/* Thumbnail overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/assets/generated/workshop-learning.dim_600x400.jpg')",
                  filter: "brightness(0.4)",
                }}
              />
              {/* Wave pattern overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,31,63,0.6) 0%, rgba(15,43,91,0.4) 100%)",
                }}
              />
              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-waves-gold/90 group-hover:bg-waves-gold flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
                  <Play
                    size={32}
                    className="text-waves-blue ml-1"
                    fill="currentColor"
                  />
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-xl">
                    Watch Our Story
                  </p>
                  <p className="font-body text-white/60 text-sm mt-1">
                    WAVES — MIT Academy of Engineering
                  </p>
                </div>
              </div>
              {/* Duration badge */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white font-body text-xs px-2.5 py-1 rounded-md">
                0:35
              </div>
            </>
          )}
        </button>

        <p className="font-body text-white/40 text-sm mt-6">
          Replace with your YouTube video link — upload to{" "}
          <span className="text-waves-gold/60">teamwaves.mit@gmail.com</span>
        </p>
      </div>
    </section>
  );
}

// ─── Gallery Section ───────────────────────────────────────────────────────────

function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Workshops", "Outreach", "Innovation", "Events"];
  const filtered =
    activeFilter === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-waves-gold/15 text-waves-blue font-body font-semibold text-xs px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
            Captured Moments
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-waves-blue mb-4">
            Moments That <span className="text-waves-gold">Matter</span>
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Every frame tells a story of impact and change
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              data-ocid={`gallery.filter_${f.toLowerCase()}.tab`}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full font-body font-semibold text-sm transition-all ${
                activeFilter === f
                  ? "bg-waves-gold text-waves-blue shadow-md"
                  : "bg-white text-waves-blue border border-gray-200 hover:border-waves-gold hover:text-waves-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, idx) => (
            <div
              key={img.alt}
              data-ocid={`gallery.item.${idx + 1}`}
              className="gallery-item rounded-xl overflow-hidden aspect-video cursor-pointer shadow-xs hover:shadow-waves transition-shadow duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-gray-500 mb-5">Follow us for more</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="gallery.link"
              className="flex items-center gap-2 bg-waves-blue hover:bg-waves-blue-dark text-white font-body font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
            >
              <Instagram size={18} />
              Instagram
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="gallery.link"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-body font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
            >
              <Youtube size={18} />
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Join Section ──────────────────────────────────────────────────────────────

const AREAS_OF_INTEREST = [
  "Innovation Projects",
  "Research & Patent Development",
  "Social Outreach Programs",
  "Workshops & STEM Model Development",
  "Event Management",
  "Design & Media (Poster / Social Media)",
  "Content Writing & Documentation",
  "Technical Development (Website / Tech Support)",
];

const SKILLS_LIST = [
  "Programming",
  "Electronics / Hardware",
  "Mechanical Design",
  "Creative Design",
  "Video Editing",
  "Public Speaking",
  "Teaching / Mentoring",
  "Research & Documentation",
];

const INITIATIVE_PREFERENCES = [
  "Inclusive STEM & Accessibility Projects",
  "Innovation Workshops",
  "Research & Patents",
  "Social Outreach",
  "Environmental Initiatives",
  "Entrepreneurship",
];

// ─── Join Form Dialog ─────────────────────────────────────────────────────────

function JoinFormDialog({
  open,
  onOpenChange,
}: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    collegeId: "",
    department: "",
    year: "",
    areasOfInterest: [] as string[],
    skills: [] as string[],
    hadProject: "",
    projectDesc: "",
    availability: "",
    motivation: "",
    github: "",
    portfolio: "",
    researchLink: "",
    linkedin: "",
    initiatives: [] as string[],
    consent: false,
  });

  const toggleArrayField = (
    field: "areasOfInterest" | "skills" | "initiatives",
    value: string,
  ) => {
    setForm((prev) => {
      const arr = prev[field];
      return {
        ...prev,
        [field]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-ocid="join_form.dialog"
        className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0"
      >
        <div className="sticky top-0 z-10 bg-white border-b border-waves-gold/20 px-6 py-4">
          <DialogHeader>
            <div className="flex flex-col items-center mb-2">
              <img
                src="/assets/uploads/waves_logo-1.png"
                alt="WAVES"
                className="w-auto object-contain mb-2"
                style={{ height: "40px" }}
              />
              <DialogTitle className="font-heading text-waves-blue text-xl text-center">
                Join the Wave
              </DialogTitle>
              <p className="font-body text-gray-500 text-sm text-center mt-1">
                Student Interest Form
              </p>
            </div>
          </DialogHeader>
        </div>
        <div className="px-6 py-6">
          {submitted ? (
            <div
              data-ocid="join.success_state"
              className="bg-white rounded-2xl shadow-waves p-12 text-center border border-waves-gold/20"
            >
              <div className="mb-6 flex justify-center">
                <svg
                  width="64"
                  height="32"
                  viewBox="0 0 64 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 C10 2, 18 14, 26 8 C34 2, 42 14, 50 8 C56 4, 60 6, 62 8"
                    stroke="#D4AF37"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M2 16 C10 10, 18 22, 26 16 C34 10, 42 22, 50 16 C56 12, 60 14, 62 16"
                    stroke="#D4AF37"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M2 24 C10 18, 18 30, 26 24 C34 18, 42 30, 50 24 C56 20, 60 22, 62 24"
                    stroke="#D4AF37"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-extrabold text-3xl text-waves-blue mb-4">
                Welcome to WAVES!
              </h3>
              <p className="font-body text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
                Thank you for your interest. Our team will review your response
                and connect with you soon regarding upcoming initiatives,
                projects, and opportunities.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-waves p-8 md:p-10 border border-waves-gold/10"
            >
              <h3 className="font-heading font-extrabold text-2xl text-waves-blue mb-1">
                WAVES – Join the Wave
              </h3>
              <p className="font-body text-gray-400 text-sm mb-8">
                Fill in the form below and become part of the movement.
              </p>

              {/* Section 1 */}
              <div className="mb-8">
                <h4 className="font-heading font-bold text-waves-blue text-base mb-4 pb-2 border-b border-waves-gold/20">
                  1. Basic Information
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="font-body text-sm text-gray-600 mb-1.5 block">
                      Full Name *
                    </Label>
                    <Input
                      required
                      data-ocid="join_form.input"
                      className="waves-input-focus"
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, fullName: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <Label className="font-body text-sm text-gray-600 mb-1.5 block">
                      Email Address *
                    </Label>
                    <Input
                      required
                      type="email"
                      data-ocid="join_form.input"
                      className="waves-input-focus"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <Label className="font-body text-sm text-gray-600 mb-1.5 block">
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      data-ocid="join_form.input"
                      className="waves-input-focus"
                      placeholder="WhatsApp preferred"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <Label className="font-body text-sm text-gray-600 mb-1.5 block">
                      College ID / Roll Number
                    </Label>
                    <Input
                      data-ocid="join_form.input"
                      className="waves-input-focus"
                      placeholder="e.g. CE21B012"
                      value={form.collegeId}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, collegeId: e.target.value }))
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h4 className="font-heading font-bold text-waves-blue text-base mb-4 pb-2 border-b border-waves-gold/20">
                  2. Academic Details
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="font-body text-sm text-gray-600 mb-1.5 block">
                      Department / Branch *
                    </Label>
                    <Select
                      required
                      value={form.department}
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, department: v }))
                      }
                    >
                      <SelectTrigger data-ocid="join_form.select">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Computer Engineering">
                          Computer Engineering
                        </SelectItem>
                        <SelectItem value="Mechanical Engineering">
                          Mechanical Engineering
                        </SelectItem>
                        <SelectItem value="Electronics Engineering">
                          Electronics Engineering
                        </SelectItem>
                        <SelectItem value="IT">IT</SelectItem>
                        <SelectItem value="Civil">Civil</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="font-body text-sm text-gray-600 mb-1.5 block">
                      Year of Study *
                    </Label>
                    <Select
                      required
                      value={form.year}
                      onValueChange={(v) => setForm((p) => ({ ...p, year: v }))}
                    >
                      <SelectTrigger data-ocid="join_form.select">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FY">FY</SelectItem>
                        <SelectItem value="SY">SY</SelectItem>
                        <SelectItem value="TY">TY</SelectItem>
                        <SelectItem value="Final Year">Final Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h4 className="font-heading font-bold text-waves-blue text-base mb-4 pb-2 border-b border-waves-gold/20">
                  3. Areas of Interest
                </h4>
                <p className="font-body text-gray-400 text-xs mb-3">
                  Multiple selection allowed
                </p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {AREAS_OF_INTEREST.map((area) => (
                    <Label
                      key={area}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <Checkbox
                        data-ocid="join_form.checkbox"
                        checked={form.areasOfInterest.includes(area)}
                        onCheckedChange={() =>
                          toggleArrayField("areasOfInterest", area)
                        }
                      />
                      <span className="font-body text-sm text-gray-600 group-hover:text-waves-blue transition-colors">
                        {area}
                      </span>
                    </Label>
                  ))}
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h4 className="font-heading font-bold text-waves-blue text-base mb-4 pb-2 border-b border-waves-gold/20">
                  4. Skills / Strengths
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {SKILLS_LIST.map((skill) => (
                    <Label
                      key={skill}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <Checkbox
                        data-ocid="join_form.checkbox"
                        checked={form.skills.includes(skill)}
                        onCheckedChange={() =>
                          toggleArrayField("skills", skill)
                        }
                      />
                      <span className="font-body text-sm text-gray-600 group-hover:text-waves-blue transition-colors">
                        {skill}
                      </span>
                    </Label>
                  ))}
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h4 className="font-heading font-bold text-waves-blue text-base mb-4 pb-2 border-b border-waves-gold/20">
                  5. Innovation Interest
                </h4>
                <p className="font-body text-sm text-gray-600 mb-3">
                  Have you previously worked on any project, innovation, or
                  research idea?
                </p>
                <RadioGroup
                  value={form.hadProject}
                  onValueChange={(v) =>
                    setForm((p) => ({ ...p, hadProject: v }))
                  }
                  className="flex gap-6 mb-4"
                >
                  <Label className="flex items-center gap-2 cursor-pointer">
                    <RadioGroupItem data-ocid="join_form.radio" value="yes" />
                    <span className="font-body text-sm text-gray-600">Yes</span>
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer">
                    <RadioGroupItem data-ocid="join_form.radio" value="no" />
                    <span className="font-body text-sm text-gray-600">No</span>
                  </Label>
                </RadioGroup>
                {form.hadProject === "yes" && (
                  <div>
                    <Label className="font-body text-sm text-gray-600 mb-1.5 block">
                      Briefly describe your project or idea
                    </Label>
                    <Textarea
                      data-ocid="join_form.textarea"
                      placeholder="Tell us about your project or innovation idea..."
                      rows={3}
                      value={form.projectDesc}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, projectDesc: e.target.value }))
                      }
                    />
                  </div>
                )}
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h4 className="font-heading font-bold text-waves-blue text-base mb-4 pb-2 border-b border-waves-gold/20">
                  6. Availability
                </h4>
                <RadioGroup
                  value={form.availability}
                  onValueChange={(v) =>
                    setForm((p) => ({ ...p, availability: v }))
                  }
                  className="grid sm:grid-cols-2 gap-2.5"
                >
                  {[
                    "2–3 hours",
                    "4–6 hours",
                    "6+ hours",
                    "Event-based participation",
                  ].map((opt) => (
                    <Label
                      key={opt}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <RadioGroupItem data-ocid="join_form.radio" value={opt} />
                      <span className="font-body text-sm text-gray-600 group-hover:text-waves-blue transition-colors">
                        {opt}
                      </span>
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              {/* Section 7 */}
              <div className="mb-8">
                <h4 className="font-heading font-bold text-waves-blue text-base mb-4 pb-2 border-b border-waves-gold/20">
                  7. Motivation
                </h4>
                <Textarea
                  data-ocid="join_form.textarea"
                  placeholder="Tell us what motivates you to be part of innovation and social impact initiatives."
                  rows={4}
                  value={form.motivation}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, motivation: e.target.value }))
                  }
                />
              </div>

              {/* Section 8 */}
              <div className="mb-8">
                <h4 className="font-heading font-bold text-waves-blue text-base mb-1 pb-2 border-b border-waves-gold/20">
                  8. Portfolio / Work{" "}
                  <span className="text-gray-400 font-normal text-sm">
                    (Optional)
                  </span>
                </h4>
                <p className="font-body text-gray-400 text-xs mb-4">
                  Share links to your work if available
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="font-body text-sm text-gray-600 mb-1.5 block">
                      GitHub
                    </Label>
                    <Input
                      type="url"
                      data-ocid="join_form.input"
                      className="waves-input-focus"
                      placeholder="https://github.com/username"
                      value={form.github}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, github: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <Label className="font-body text-sm text-gray-600 mb-1.5 block">
                      Portfolio / Design Work
                    </Label>
                    <Input
                      type="url"
                      data-ocid="join_form.input"
                      className="waves-input-focus"
                      placeholder="https://yourportfolio.com"
                      value={form.portfolio}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, portfolio: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <Label className="font-body text-sm text-gray-600 mb-1.5 block">
                      Research / Project Report
                    </Label>
                    <Input
                      type="url"
                      data-ocid="join_form.input"
                      className="waves-input-focus"
                      placeholder="https://drive.google.com/..."
                      value={form.researchLink}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, researchLink: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <Label className="font-body text-sm text-gray-600 mb-1.5 block">
                      LinkedIn
                    </Label>
                    <Input
                      type="url"
                      data-ocid="join_form.input"
                      className="waves-input-focus"
                      placeholder="https://linkedin.com/in/username"
                      value={form.linkedin}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, linkedin: e.target.value }))
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Section 9 */}
              <div className="mb-8">
                <h4 className="font-heading font-bold text-waves-blue text-base mb-4 pb-2 border-b border-waves-gold/20">
                  9. Initiative Preference
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {INITIATIVE_PREFERENCES.map((pref) => (
                    <Label
                      key={pref}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <Checkbox
                        data-ocid="join_form.checkbox"
                        checked={form.initiatives.includes(pref)}
                        onCheckedChange={() =>
                          toggleArrayField("initiatives", pref)
                        }
                      />
                      <span className="font-body text-sm text-gray-600 group-hover:text-waves-blue transition-colors">
                        {pref}
                      </span>
                    </Label>
                  ))}
                </div>
              </div>

              {/* Section 10 */}
              <div className="mb-8">
                <h4 className="font-heading font-bold text-waves-blue text-base mb-4 pb-2 border-b border-waves-gold/20">
                  10. Consent
                </h4>
                <Label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox
                    data-ocid="join_form.checkbox"
                    className="mt-0.5"
                    checked={form.consent}
                    onCheckedChange={(checked) =>
                      setForm((p) => ({ ...p, consent: !!checked }))
                    }
                  />
                  <span className="font-body text-sm text-gray-600 leading-relaxed">
                    I am interested in contributing to WAVES initiatives and
                    participating in innovation, outreach, and student-led
                    impact activities.
                  </span>
                </Label>
              </div>

              <Button
                type="submit"
                data-ocid="join_form.submit_button"
                disabled={!form.consent}
                className="w-full py-4 text-base font-heading font-bold rounded-full bg-waves-gold hover:bg-waves-gold-light text-waves-blue transition-all hover:shadow-waves-lg disabled:opacity-50"
              >
                Join the Wave
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function JoinSection({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <section
      id="join"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FDFBF5 0%, #f5f0e4 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-hidden="true"
        >
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z"
            fill="#D4AF37"
            fillOpacity="0.07"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-waves-gold/15 text-waves-blue font-body font-semibold text-xs px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
            Get Involved
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-waves-blue mb-4">
            Be Part of the{" "}
            <span className="text-waves-gold">Wave of Change</span>
          </h2>
          <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you want to volunteer, lead, innovate, or create — there's a
            place for you in WAVES.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-14">
          {JOIN_OPPORTUNITIES.map((opp, idx) => (
            <div
              key={opp.title}
              data-ocid={`join.item.${idx + 1}`}
              className="bg-white rounded-2xl p-6 border-2 border-blue-100 hover:border-waves-gold/40 shadow-xs hover:shadow-waves transition-all hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#0F2B5B] border border-[#D4AF37] flex items-center justify-center mb-4 mx-auto">
                <opp.Icon className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-heading font-bold text-waves-blue text-lg mb-2">
                {opp.title}
              </h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">
                {opp.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            type="button"
            onClick={onJoinClick}
            data-ocid="join_form.open_modal_button"
            className="bg-waves-gold hover:bg-waves-gold-light text-waves-blue font-heading font-bold px-10 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-waves-lg shadow-waves"
          >
            Join the Wave
          </button>
          <p className="font-body text-gray-400 text-sm mt-3">
            Takes 5 minutes. Be part of the movement.
          </p>
        </div>
      </div>{" "}
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Initiatives", href: "#initiatives" },
    { label: "Events", href: "#events" },
  ];

  return (
    <footer
      className="py-14"
      style={{
        background: "linear-gradient(180deg, #2B4C86 0%, #1F3C6D 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img
              src="/assets/uploads/waves_logo-1.png"
              alt="WAVES"
              className="w-auto object-contain mb-3"
              style={{ height: "58px" }}
            />
            <div
              className="font-heading font-bold mb-1 flex items-center gap-2"
              style={{ color: "#D4AF37", fontSize: "15px" }}
            >
              <span className="footer-gold-dot" aria-hidden="true" />
              Exploring the Rhythm of Life &amp; Living
            </div>
            <div className="font-body text-white/60 text-sm mb-2">
              A student-led initiative at MIT Academy of Engineering
            </div>
            <p className="font-body text-white/45 text-xs leading-relaxed">
              Empowering students through innovation, outreach, and community
              impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-4">
              Quick Links
            </div>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    data-ocid="footer.link"
                    className="font-body text-white/60 hover:text-waves-gold text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-4">
              Contact
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&to=teamwaves.mit@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-white/60 hover:text-waves-gold text-sm transition-colors break-all"
            >
              teamwaves.mit@gmail.com
            </a>
            <p className="font-body text-white/40 text-xs mt-3 leading-relaxed">
              MIT Academy of Engineering,
              <br />
              Alandi (D), Pune – 412105
            </p>
          </div>

          {/* Social */}
          <div>
            <div className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-4">
              Follow WAVES
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="flex items-center gap-2 bg-white/10 hover:bg-waves-gold/20 text-white/70 hover:text-waves-gold px-4 py-2.5 rounded-xl transition-all text-sm font-body w-fit footer-social-link"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="flex items-center gap-2 bg-white/10 hover:bg-waves-gold/20 text-white/70 hover:text-waves-gold px-4 py-2.5 rounded-xl transition-all text-sm font-body w-fit footer-social-link"
              >
                <Youtube size={16} /> YouTube
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="flex items-center gap-2 bg-white/10 hover:bg-waves-gold/20 text-white/70 hover:text-waves-gold px-4 py-2.5 rounded-xl transition-all text-sm font-body w-fit footer-social-link"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/40 text-sm">
            © {year} WAVES – MIT Academy of Engineering. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-white/30 hover:text-white/50 text-xs transition-colors"
          >
            Built with <Heart className="w-3.5 h-3.5 inline text-[#D4AF37]" />{" "}
            using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Initiative Detail Page ────────────────────────────────────────────────────

function InitiativeDetailPage({
  slug,
  onBack,
}: {
  slug: string;
  onBack: () => void;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const initiative = INITIATIVES.find((i) => slugify(i.name) === slug);

  if (!initiative) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-body text-gray-500 mb-4">Initiative not found.</p>
          <button
            type="button"
            onClick={onBack}
            data-ocid="initiative.back_button"
            className="bg-waves-blue text-white font-body font-semibold px-6 py-3 rounded-full"
          >
            ← Back to Initiatives
          </button>
        </div>
      </div>
    );
  }

  const media = (
    initiative as typeof initiative & {
      media?: {
        event?: {
          location: string;
          date: string;
          attendees: string;
          description: string;
        };
        images?: Array<{
          src: string;
          caption: string;
          category: string;
          title?: string;
          date?: string;
          attendees?: string;
          location?: string;
        }>;
        videos?: Array<{ youtubeId: string; title: string; label: string }>;
        studentProjects?: Array<{
          name: string;
          student: string;
          image: string;
          hasVideo?: boolean;
        }>;
        timeline?: Array<{ year: string; event: string; images: string[] }>;
      };
    }
  ).media;
  const images = media?.images ?? [];
  const videos = media?.videos ?? [];
  const studentProjects = media?.studentProjects ?? [];
  const timeline = media?.timeline ?? [];
  const eventInfo = media?.event;
  const isWorkshop = slug === "workshops";

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % images.length);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          type="button"
          onClick={onBack}
          data-ocid="initiative.back_button"
          className="flex items-center gap-2 text-waves-blue font-body font-semibold text-sm hover:text-waves-gold transition-colors group"
        >
          <ChevronLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Initiatives
        </button>
      </div>

      {/* Hero Banner */}
      <div className="relative bg-waves-blue overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${initiative.image})` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white mb-4 leading-tight">
              {initiative.name}
            </h1>
            <p className="font-body text-white/80 text-lg leading-relaxed mb-6">
              {initiative.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {initiative.sdgs.map((sdg) => (
                <span
                  key={sdg}
                  className="inline-block bg-waves-gold/20 text-waves-gold font-body font-semibold text-xs px-3 py-1.5 rounded-full border border-waves-gold/40"
                >
                  {sdg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Impact Numbers */}
      {isWorkshop && (
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "60+", label: "Students Engaged" },
                { number: "3+", label: "Workshops Held" },
                { number: "1", label: "Partner School" },
                { number: "2026", label: "Active Since" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-extrabold text-3xl md:text-4xl text-waves-gold mb-1">
                    {stat.number}
                  </div>
                  <div className="font-body text-gray-500 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Media Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-waves-gold/15 text-waves-blue font-body font-semibold text-xs px-4 py-2 rounded-full mb-4 tracking-widest uppercase">
            Media & Stories
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-waves-blue">
            Media <span className="text-waves-gold">Highlights</span>
          </h2>
        </div>

        {/* Image Grid */}
        {images.length > 0 && (
          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <div
                  key={img.caption}
                  className="rounded-xl overflow-hidden shadow-xs hover:shadow-waves transition-shadow duration-300 cursor-pointer group"
                  onClick={() => openLightbox(idx)}
                  onKeyDown={(e) => e.key === "Enter" && openLightbox(idx)}
                >
                  <div className="overflow-hidden aspect-video">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-white px-3 py-3">
                    <p className="font-body font-semibold text-gray-800 text-sm leading-snug">
                      {img.title ?? img.caption}
                    </p>
                    {(img.date || img.attendees || eventInfo) && (
                      <p className="font-body text-gray-500 text-xs mt-1">
                        {[
                          img.date ?? eventInfo?.date,
                          img.attendees ?? eventInfo?.attendees,
                        ]
                          .filter(Boolean)
                          .join(" • ")}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Demonstrations */}
        {videos.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-waves-blue">
                Video <span className="text-waves-gold">Demonstrations</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <div
                  key={video.youtubeId + video.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-xs border border-gray-100"
                >
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-heading font-bold text-waves-blue text-base mb-1">
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-1 text-waves-gold font-body text-sm font-semibold">
                      <Play size={14} />
                      {video.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Student Project Outcomes */}
        {studentProjects.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-waves-blue">
                Student Project{" "}
                <span className="text-waves-gold">Outcomes</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentProjects.map((project) => (
                <div
                  key={project.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-xs border border-gray-100"
                >
                  <div className="overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-heading font-bold text-waves-blue text-base mb-1">
                      {project.name}
                    </h4>
                    <p className="font-body text-gray-500 text-sm">
                      {project.student}
                    </p>
                    {project.hasVideo && (
                      <span className="inline-flex items-center gap-1 mt-2 bg-waves-gold/15 text-waves-blue font-body text-xs font-semibold px-2 py-1 rounded-full">
                        <Play size={10} />
                        Video Demo
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline */}
        {isWorkshop && timeline.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-waves-blue">
                Our <span className="text-waves-gold">Journey</span>
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-waves-gold/30 transform md:-translate-x-1/2" />
              <div className="space-y-10">
                {timeline.map((item, idx) => (
                  <div
                    key={item.year}
                    className={`relative flex gap-6 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-waves-gold rounded-full border-2 border-white shadow-sm transform -translate-x-1/2 mt-1.5" />
                    <div
                      className={`pl-14 md:pl-0 ${idx % 2 === 0 ? "md:pr-8 md:text-right md:w-1/2" : "md:pl-8 md:w-1/2"}`}
                    >
                      <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
                        <div className="font-heading font-extrabold text-waves-gold text-lg mb-1">
                          {item.year}
                        </div>
                        <div className="font-heading font-bold text-waves-blue text-base mb-3">
                          {item.event}
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          {item.images.map((imgSrc, i) => (
                            <img
                              key={`${item.year}-${i}`}
                              src={imgSrc}
                              alt={`${item.year} - ${item.event}`}
                              className="w-20 h-14 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Upcoming Events Teaser */}
        <div className="bg-gradient-to-r from-waves-blue to-waves-blue-dark rounded-2xl p-8 text-white text-center">
          <h3 className="font-heading font-bold text-xl md:text-2xl mb-2">
            Upcoming Events
          </h3>
          <p className="font-body text-white/80 mb-5">
            Stay updated with our latest activities and register early to secure
            your spot.
          </p>
          <a
            href="#events"
            className="inline-block bg-waves-gold hover:bg-waves-gold-light text-waves-blue font-heading font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
          >
            View Events →
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && images.length > 0 && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={(e) => e.key === "Escape" && closeLightbox()}
          tabIndex={-1}
        >
          <button
            type="button"
            data-ocid="initiative.lightbox.close_button"
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          <button
            type="button"
            data-ocid="initiative.lightbox.pagination_prev"
            className="absolute left-4 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            data-ocid="initiative.lightbox.pagination_next"
            className="absolute right-4 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight size={24} />
          </button>
          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].caption}
              className="w-full rounded-xl"
            />
            <p className="text-white/80 font-body text-sm text-center mt-3">
              {images[lightboxIndex].caption}
            </p>
            <p className="text-white/50 font-body text-xs text-center mt-1">
              {lightboxIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [joinOpen, setJoinOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState<
    "home" | { view: "initiative"; slug: string }
  >("home");
  const openJoin = () => setJoinOpen(true);

  const navigateToInitiative = (slug: string) => {
    setCurrentPage({ view: "initiative", slug });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      const el = document.getElementById("initiatives");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (
    currentPage !== "home" &&
    typeof currentPage === "object" &&
    currentPage.view === "initiative"
  ) {
    return (
      <div className="min-h-screen font-body">
        <JoinFormDialog open={joinOpen} onOpenChange={setJoinOpen} />
        <Navbar onJoinClick={openJoin} />
        <InitiativeDetailPage slug={currentPage.slug} onBack={navigateHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-body">
      <JoinFormDialog open={joinOpen} onOpenChange={setJoinOpen} />
      <Navbar onJoinClick={openJoin} />
      <main>
        <HeroSection onJoinClick={openJoin} />
        <ImpactStrip />
        <AboutSection />
        <InitiativesSection onNavigate={navigateToInitiative} />
        <InnovationsSection />
        <StudentInnovatorsSection />
        <EventsSection />
        <ImpactSection />
        <WavesInActionSection />
        <GallerySection />
        <JoinSection onJoinClick={openJoin} />
      </main>
      <Footer />
    </div>
  );
}
