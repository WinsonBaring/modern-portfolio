import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
    MapPin,
    Mail,
    Phone,
    ExternalLink,
    Github,
    Linkedin,
    Download,
    Code,
    Database,
    Cloud,
    Smartphone,
    Award,
    ChevronDown,
    Sparkles,
    BrainCircuit
} from "lucide-react"
import { ParallaxSection } from "@/components/parallax-section"
import { AnimatedText } from "@/components/animated-text"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TypewriterText } from "@/components/typewriter-text"
import { MagneticButton } from "@/components/magnetic-button"
import { ProgressBar } from "@/components/progress-bar"
import { SideNavigation } from "@/components/side-navigation"
import { EnhancedCursor } from "@/components/enhanced-cursor"
import Link from "next/link"

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-black overflow-x-hidden">
            <ProgressBar />
            <EnhancedCursor />
            <SideNavigation />

            {/* Main Content with left margin for desktop */}
            <div className="lg:ml-80">
                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden pt-20 lg:pt-0">
                    <ParallaxSection speed={0.3} className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 dark:from-blue-500/10 dark:to-purple-600/10" />
                    </ParallaxSection>

                    <div className="container mx-auto max-w-4xl text-center relative z-10">
                        <ScrollReveal direction="fade" delay={200}>
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700 mb-8">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-slate-700 dark:text-slate-300 text-sm">Available for work</span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={400}>
                            <h1 className="text-5xl md:text-8xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                                <AnimatedText text="Winson Baring" className="block" />
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <div className="text-2xl md:text-4xl text-slate-600 dark:text-slate-400 mb-8 h-16">
                                <TypewriterText
                                    texts={["Software Developer", "AI Enthusiast", "Problem Solver", "Code Artist"]}
                                    className="font-medium"
                                />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <p className="text-lg text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                                A passionate software developer based in Cebu, specializing in full-stack development and AI
                                integration. Currently completing a Bachelor's in Computer Science at Cebu Institute of Technology
                                University, with hands-on experience in modern web technologies and cloud services.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1000}>
                            <div className="flex justify-center gap-4 flex-wrap mb-12">
                                <MagneticButton
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl text-white px-8 py-4"
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    Download Resume
                                </MagneticButton>
                                <MagneticButton
                                    size="lg"
                                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 shadow-lg hover:shadow-xl px-8 py-4"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    Schedule a call
                                </MagneticButton>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1200}>
                            <div className="flex justify-center gap-6">
                                <Link href={"https://github.com/WinsonBaring"}>
                                <MagneticButton
                                    size="lg"
                                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    GitHub
                                </MagneticButton>
                                </Link>
                                <Link href={"https://www.linkedin.com/in/winson-baring-a1329b219/"}>
                                <MagneticButton
                                    size="lg"
                                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                                >
                                    <Linkedin className="w-5 h-5 mr-2" />
                                    LinkedIn
                                </MagneticButton>
                                </Link>
                                <Link href={"mailto:winsonbaring10@gmail.com"}>
                                <MagneticButton
                                    size="lg"
                                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    Email
                                </MagneticButton>
                                </Link>

                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-6 h-6 text-slate-400" />
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 px-6 lg:px-12 relative">
                    <ParallaxSection speed={0.2}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-600/5 dark:from-blue-500/10 dark:to-purple-600/10 rounded-full blur-3xl" />
                    </ParallaxSection>

                    <div className="container mx-auto max-w-4xl relative z-10">
                        <ScrollReveal direction="up">
                            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-slate-900 dark:text-white">
                                <AnimatedText text="Work Experience" />
                            </h2>
                        </ScrollReveal>

                        <div className="space-y-8">
                            <ScrollReveal direction="left" delay={200}>
                                <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500 hover:scale-[1.02] shadow-2xl">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <CardTitle className="text-2xl text-slate-900 dark:text-white mb-2">
                                                    Hatchit Solutions
                                                </CardTitle>
                                                <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                                                    Software Developer
                                                </CardDescription>
                                            </div>
                                            <div className="text-right">
                                                <Badge className="bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30 mb-2">
                                                    Current
                                                </Badge>
                                                <div className="text-slate-600 dark:text-slate-400 text-sm">2021 - Present</div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ScrollReveal direction="up" delay={400}>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {["NestJS", "NextJS", "Twilio", "OpenAI", "Express", "Ngrok"].map((tech, index) => (
                                                    <Badge
                                                        key={index}
                                                        variant="secondary"
                                                        className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform duration-300 cursor-pointer"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </ScrollReveal>

                                        <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                                            {[
                                                "Developed a full-stack RSVP Reservation System using Next.js and Nest.js, integrating Twilio for automated calls and reservations",
                                                "Implemented dynamic multi-step forms with SSR, Server Actions, and Partial Prerendering for CMS-driven form creation",
                                                "Built a Retrieval-Augmented Generation (RAG) chatbot using OpenAI APIs for seamless file interaction",
                                                "Collaborated on policy reports and client communication to ensure business goal alignment",
                                                "Improved applications by integrating React Query and Zustand for better scalability",
                                            ].map((item, index) => (
                                                <ScrollReveal key={index} direction="right" delay={600 + index * 100}>
                                                    <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                </ScrollReveal>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-20 px-6 lg:px-12 relative">
                    <div className="container mx-auto max-w-4xl relative z-10">
                        <ScrollReveal direction="up">
                            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-slate-900 dark:text-white">
                                <AnimatedText text="About Me" />
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={200}>
                            <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500 hover:scale-[1.02] shadow-2xl mb-8">
                                <CardContent className="p-8">
                                    <div className="space-y-6">
                                        <ScrollReveal direction="left" delay={400}>
                                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                                I'm a passionate{" "}
                                                <span className="font-semibold text-blue-600 dark:text-blue-400">
                                                    Full-Stack Software Developer
                                                </span>{" "}
                                                with expertise in modern web technologies and AI integration. Graduate of Bachelor of
                                                Science in Computer Science at Cebu Institute of Technology University.
                                            </p>
                                        </ScrollReveal>

                                        <ScrollReveal direction="right" delay={600}>
                                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                                My experience spans from developing{" "}
                                                <span className="font-semibold text-purple-600 dark:text-purple-400">
                                                    RSVP reservation systems
                                                </span>{" "}
                                                with Twilio integration to building{" "}
                                                <span className="font-semibold text-green-600 dark:text-green-400">AI-powered chatbots</span>{" "}
                                                using OpenAI APIs.
                                            </p>
                                        </ScrollReveal>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={400}>
                            <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500 hover:scale-[1.02] shadow-2xl">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-2xl text-slate-900 dark:text-white">
                                        <Award className="w-6 h-6 text-yellow-500" />
                                        <AnimatedText text="Education & Achievements" delay={600} />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6">
                                        <ScrollReveal direction="up" delay={600}>
                                            <div>
                                                <h3 className="font-semibold text-xl text-slate-900 dark:text-white mb-2">
                                                    Bachelor of Science in Computer Science
                                                </h3>
                                                <p className="text-slate-600 dark:text-slate-400">Cebu Institute of Technology University</p>
                                            </div>
                                        </ScrollReveal>

                                        <Separator className="bg-slate-200 dark:bg-slate-700" />

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {[
                                                { title: "CP-gifts Scholar", desc: "Academic scholarship recipient", delay: 800 },
                                                { title: "GDSC CTO", desc: "Google Developers Student Club", delay: 900 },
                                                { title: "Java Certified", desc: "Codechum Java Certification", delay: 1000 },
                                            ].map((achievement, index) => (
                                                <ScrollReveal key={index} direction="up" delay={achievement.delay}>
                                                    <div className="text-center p-4 rounded-lg hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors duration-300">
                                                        <Badge
                                                            variant="secondary"
                                                            className="mb-3 text-sm px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                                                        >
                                                            <Sparkles className="w-3 h-3 mr-1" />
                                                            {achievement.title}
                                                        </Badge>
                                                        <p className="text-sm text-slate-600 dark:text-slate-400">{achievement.desc}</p>
                                                    </div>
                                                </ScrollReveal>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20 px-6 lg:px-12 relative">
                    <ParallaxSection speed={0.15}>
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-green-500/5 to-blue-600/5 dark:from-green-500/10 dark:to-blue-600/10 rounded-full blur-3xl" />
                    </ParallaxSection>

                    <div className="container mx-auto max-w-4xl relative z-10">
                        <ScrollReveal direction="up">
                            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-slate-900 dark:text-white">
                                <AnimatedText text="Featured Projects" />
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Code,
                                    title: "Resume AI ",
                                    desc: "AI-Powered Resume Builder",
                                    detail: "Generate a professional resume instantly using AI",
                                    techs: ["supabase", "clerk", "next"],
                                    date: "June 2025",
                                    color: "blue",
                                    github: "https://github.com/WinsonBaring/ResumeAI",
                                    link: "https://resume-ai-olive-kappa.vercel.app/",
                                    delay: 200,

                                },
                                {
                                    icon: Code,
                                    title: "Rad AI",
                                    desc: "Kidney Stone Detection",
                                    detail: "Early detection of kidney stone",
                                    techs: ["google cloud run", "flask", "vercel", "ultralytics", "docker"],
                                    date: "Feb 2025",
                                    color: "blue",
                                    github: "https://github.com/jmarcbalbada/radai-analyzer/commits/main/",
                                    link: "https://radai-v2.vercel.app/",
                                    delay: 200,
                                },
                                {
                                    icon: Code,
                                    title: "Jungle Guardians",
                                    desc: "AI-Powered Animal Identifier",
                                    detail: "Our WildCat Classifier is the perfect tool for nature enthusiasts and conservationists who want to experience the thrill of the jungle in a whole new way! ",
                                    techs: ["streamlit", "github", "collabs"],
                                    date: "May 2024",
                                    color: "blue",
                                    github: "https://github.com/WinsonBaring/Machine-Learning-Classification",
                                    link: "https://identify-your-animal.streamlit.app/",
                                    delay: 200,
                                },

                                {
                                    icon: Code,
                                    title: "Techno Dynamic V2",
                                    desc: "AI-Powered Learning Platform",
                                    detail: "Created dynamic content improvement using linked list chaining and AI tokenizing",
                                    techs: ["Vite", "AI/LLM", "AWS S3", "Django", "Heroku"],
                                    date: "Feb 2024",
                                    color: "blue",
                                    github: "https://github.com/jmarcbalbada/techno-dynamic-v2",
                                    link: "https://technodynamic.vercel.app/login",
                                    delay: 200,
                                },
                                {
                                    icon: Smartphone,
                                    title: "Laundirii",
                                    desc: "Online Laundry Service Platform",
                                    detail: "Created a comprehensive Washer Dashboard with transaction flow and CRUD operations",
                                    techs: ["Android", "Java", "RecyclerView"],
                                    date: "May 2023",
                                    color: "purple",
                                    github: "https://github.com/jmarcbalbada/laundirii",
                                    delay: 600,
                                },
                            ].map((project, index) => (
                                <ScrollReveal key={index} direction="up" delay={project.delay}>
                                    <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500 hover:scale-105 shadow-2xl group cursor-pointer">
                                        <CardHeader>
                                            <div className="flex items-center justify-between mb-4">
                                                <project.icon
                                                    className={`w-10 h-10 text-${project.color}-600 dark:text-${project.color}-500 group-hover:scale-110 transition-transform duration-300`}
                                                />
                                                <Badge className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700">
                                                    {project.date}
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                {project.title}
                                            </CardTitle>
                                            <CardDescription className="text-base text-slate-600 dark:text-slate-400">
                                                {project.desc}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                                                {project.detail}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.techs.map((tech, techIndex) => (
                                                    <Badge
                                                        key={techIndex}
                                                        variant="secondary"
                                                        className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform duration-300"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <a href={project.link}>

                                                <MagneticButton
                                                    variant="outline"
                                                    size="sm"
                                                    className="w-full border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                                                >
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    View Project
                                                </MagneticButton>
                                            </a>
                                            <a href={project.github}>

                                                <MagneticButton
                                                    variant="outline"
                                                    size="sm"
                                                    className="w-full border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                                                >
                                                    <Github className="w-4 h-4 mr-2" />
                                                    View Source Code
                                                </MagneticButton>
                                            </a>

                                        </CardContent>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-20 px-6 lg:px-12 relative">
                    <div className="container mx-auto max-w-4xl relative z-10">
                        <ScrollReveal direction="up">
                            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-slate-900 dark:text-white">
                                <AnimatedText text="Technical Skills" />
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {[
                                {
                                    icon: Code,
                                    title: "Frontend",
                                    skills: ["ReactJS", "Next.js", "Vite", "TypeScript", "HTML/CSS"],
                                    color: "blue",
                                    delay: 200,
                                },
                                {
                                    icon: Database,
                                    title: "Backend",
                                    skills: ["NestJS", "Django", "Spring Boot", "Express", "REST API"],
                                    color: "green",
                                    delay: 400,
                                },
                                {
                                    icon: BrainCircuit,
                                    title: ":AI",
                                    skills: ["ultralytics", "openai", "n8n","vector db"],
                                    color: "purple",
                                    delay: 600,
                                },
                                {
                                    icon: Cloud,
                                    title: "Cloud & DevOps",
                                    skills: ["AWS", "Vercel", "CloudFlare", "Nginx", "Docker","Google","Ultralytics"],
                                    color: "purple",
                                    delay: 600,
                                },
                                {
                                    icon: Smartphone,
                                    title: "Other",
                                    skills: ["Android Dev", "AI/ML", "SQL", "Git", "Jira"],
                                    color: "orange",
                                    delay: 800,
                                },
                            ].map((category, index) => (
                                <ScrollReveal key={index} direction="up" delay={category.delay}>
                                    <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500 hover:scale-105 shadow-2xl group">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-3 text-lg text-slate-900 dark:text-white">
                                                <category.icon
                                                    className={`w-6 h-6 text-${category.color}-600 dark:text-${category.color}-500 group-hover:scale-110 transition-transform duration-300`}
                                                />
                                                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                    {category.title}
                                                </span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-wrap gap-2">
                                                {category.skills.map((skill, skillIndex) => (
                                                    <Badge
                                                        key={skillIndex}
                                                        variant="secondary"
                                                        className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform duration-300 cursor-pointer"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal direction="up" delay={1000}>
                            <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500 hover:scale-[1.02] shadow-2xl">
                                <CardHeader>
                                    <CardTitle className="text-xl text-slate-900 dark:text-white">Programming Languages</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-3">
                                        {["TypeScript", "JavaScript", "Python", "Java", "C#", "SQL"].map((lang, index) => (
                                            <Badge
                                                key={index}
                                                className="text-sm px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-110 transition-transform duration-300 cursor-pointer"
                                            >
                                                {lang}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 px-6 lg:px-12 relative">
                    <div className="container mx-auto max-w-4xl text-center relative z-10">
                        <ScrollReveal direction="up">
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900 dark:text-white">
                                <AnimatedText text="Let's Work Together" />
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={200}>
                            <p className="text-xl text-slate-700 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                                want to say hi, feel free to reach out!
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {[
                                { icon: Mail, title: "Email", info: "winsonbaring10@gmail.com", color: "blue", delay: 400 },
                                { icon: Phone, title: "Phone", info: "(+63) 9760392357", color: "green", delay: 600 },
                                { icon: MapPin, title: "Location", info: "Cebu City, Philippines", color: "red", delay: 800 },
                            ].map((contact, index) => (
                                <ScrollReveal key={index} direction="up" delay={contact.delay}>
                                    <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500 hover:scale-105 shadow-2xl group cursor-pointer">
                                        <CardContent className="p-8 text-center">
                                            <contact.icon
                                                className={`w-10 h-10 text-${contact.color}-600 dark:text-${contact.color}-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                                            />
                                            <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                {contact.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400">{contact.info}</p>
                                        </CardContent>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal direction="up" delay={1000}>
                            <div className="flex justify-center gap-4 flex-wrap">
                                <Link href={"mailto:winsonbaring10@gmail.com"}>
                                <MagneticButton
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl text-white px-8 py-4"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    Send Email
                                </MagneticButton>
                                </Link>
                                <Link href={"https://github.com/WinsonBaring/"}>
                                    <MagneticButton
                                        size="lg"
                                        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 px-8 py-4"
                                    >
                                        <Github className="w-5 h-5 mr-2" />
                                        GitHub
                                    </MagneticButton><></>
                                </Link>

                                <Link
                                    href={"https://www.linkedin.com/in/winson-baring-a1329b219/"}
                                >

                                    <MagneticButton
                                        size="lg"
                                        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 px-8 py-4"
                                    >
                                        <Linkedin className="w-5 h-5 mr-2" />
                                        LinkedIn
                                    </MagneticButton>
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 px-6 lg:px-12 bg-slate-100/50 dark:bg-black/50 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800 relative">
                    <div className="container mx-auto max-w-4xl text-center relative z-10">
                        <ScrollReveal direction="up">
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                                © 2024 Winson Baring. Built with ❤️ using Next.js and Tailwind CSS.
                            </p>
                        </ScrollReveal>
                    </div>
                </footer>
            </div>
        </div>
    )
}
