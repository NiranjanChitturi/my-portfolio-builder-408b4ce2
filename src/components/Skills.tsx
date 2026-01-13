import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, GitBranch, Server, Globe, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Technologies",
    icon: Globe,
    skills: ["MOSS 2007", "SharePoint 2010/2013", "WSS 3.0", "ASP.NET", "HTML/XHTML", "XML/XSLT", "CSS", "AJAX", "JavaScript", "Crystal Report", "Python"],
  },
  {
    title: "Languages",
    icon: Code,
    skills: ["C#.NET", "VB.NET", "PL/SQL", "Python"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL Server 2000/2005/2016", "MySQL"],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Visual Source Safe 6.0", "Perforce V4.0", "Git"],
  },
  {
    title: "Servers",
    icon: Server,
    skills: ["IIS", "Apache/Tomcat"],
  },
  {
    title: "Other Tools",
    icon: Layers,
    skills: ["SAP", "InfoPath Forms", "SharePoint Designer", "K2 Workflows"],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">My Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set built over 15+ years of professional experience in enterprise software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="card-gradient border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 bg-secondary/50 text-foreground text-sm rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
