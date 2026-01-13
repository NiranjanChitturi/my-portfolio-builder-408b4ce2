import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Layout } from "@/components/Layout";

const projects = [
  {
    title: "VZ_MY_Network Portal",
    description: "A collaboration portal with VZBlog, VZWiki, VZIdeas, VZForums modules. Built for Verizon to enhance internal communication and knowledge sharing.",
    technologies: ["MOSS 2007", "WSS 3.0", "ASP.NET", "AJAX"],
    category: "Enterprise Portal",
  },
  {
    title: "SSTECH_PORTAL",
    description: "Intranet application featuring Job Site application (Search Match Send), Company Payroll, Employee Lookup, and Document Management System.",
    technologies: ["ASP.NET", "C#.NET", "AJAX", "Crystal Reports"],
    category: "Intranet Application",
  },
  {
    title: "Intel Automation Tools",
    description: "Developed automation tools for driver installation and maintained SharePoint site collections for automation script management.",
    technologies: ["MOSS 2010", "InfoPath", "SharePoint Designer", "ASP.NET"],
    category: "Automation",
  },
  {
    title: "ANZ SharePoint Solutions",
    description: "Created and maintained multiple SharePoint site collections for various departments. Built workflows and customized forms for different business requirements.",
    technologies: ["ASP.NET", "C#.NET", "MOSS 2007/2010", "SharePoint Designer"],
    category: "SharePoint Development",
  },
  {
    title: "Educational Institution Apps",
    description: "Web applications for educational institutions including student management, course registration, and academic reporting systems.",
    technologies: ["ASP.NET", "C#.NET", "SQL", "SSRS"],
    category: "Web Application",
  },
  {
    title: "Accounting Firm Solutions",
    description: "Custom applications for accounting firms including client management, financial reporting, and document management systems.",
    technologies: ["ASP.NET", "C#.NET", "SQL", "Crystal Reports"],
    category: "Business Application",
  },
];

export const PortfolioPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Layout>
      <section className="section-padding relative">
        <div className="container-custom" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">My Work</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of enterprise solutions and web applications I've built over my 15+ years of experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-gradient border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Folder className="text-primary" size={24} />
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4">
                  {project.category}
                </span>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary/50 text-foreground text-xs rounded-md border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
