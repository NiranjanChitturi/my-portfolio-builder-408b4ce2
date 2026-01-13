import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Senior Technical Consultant",
    company: "Freelance Web Developer",
    duration: "Feb 2022 - Present",
    description: "Working on applications related to educational institutions and accounting firms. Developing web applications, enhancements, support and maintenance. Creating SharePoint apps and generating management reports.",
    technologies: ["ASP.NET", "C#.NET", "SQL", "SSRS", "SharePoint"],
  },
  {
    role: "Senior Technical Analyst",
    company: "Magna Infotech (Quess Corp) - ANZ Operations",
    duration: "May 2016 - Dec 2020",
    description: "Developed automation tools using .NET and SharePoint. Created and maintained multiple SharePoint site collections for various departments. Built workflows and customized forms for different business requirements.",
    technologies: ["ASP.NET", "C#.NET", "MOSS 2007/2010", "SharePoint Designer"],
  },
  {
    role: "Lead Analyst",
    company: "CGI",
    duration: "June 2015 - Jan 2016",
    description: "Led technical initiatives and development projects, driving innovation in enterprise solutions.",
    technologies: ["SharePoint", ".NET", "SQL Server"],
  },
  {
    role: "Systems Analyst / Technical Analyst",
    company: "UST Global (Intel Technologies)",
    duration: "April 2012 - April 2015",
    description: "Developed automation tools for driver installation. Maintained SharePoint site collections for automation script management. Created InfoPath forms and customized sites for Intel users globally.",
    technologies: ["MOSS 2010", "InfoPath", "SharePoint Designer", "ASP.NET"],
  },
  {
    role: "Analyst",
    company: "Verizon",
    duration: "Sept 2010 - Jan 2012",
    description: "Developed VZ_MY_Network - a collaboration portal with modules including VZBlog, VZWiki, VZIdeas, VZForums. Built web parts and web services for dashboard components.",
    technologies: ["MOSS 2007", "WSS 3.0", "ASP.NET", "AJAX", "OBIEE"],
  },
  {
    role: "Sr. Software Developer",
    company: "System Soft Technologies",
    duration: "Nov 2009 - Sept 2010",
    description: "Developed SSTECH_PORTAL - an intranet application featuring Job Site application (Search Match Send), Company Payroll, Employee Lookup, and Document Management System.",
    technologies: ["ASP.NET", "C#.NET", "AJAX", "Crystal Reports"],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">Career Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering impactful solutions across Fortune 500 companies and leading tech organizations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-8 z-10 ring-4 ring-background" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="card-gradient border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className={`flex items-center gap-2 text-primary text-sm mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                    <p className="text-muted-foreground flex items-center gap-2 mb-4 text-sm">
                      <Briefcase size={14} className="flex-shrink-0" />
                      {exp.company}
                    </p>
                    
                    <p className={`text-muted-foreground text-sm leading-relaxed mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
