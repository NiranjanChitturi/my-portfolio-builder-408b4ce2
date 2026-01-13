import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code, Database, Server } from "lucide-react";

const certifications = [
  { name: "Microsoft Certified Professional", icon: Award },
  { name: "Red Hat Certified Engineer", icon: Server },
];

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "10+", label: "Companies Served" },
  { number: "2", label: "Certifications" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Know Me <span className="text-gradient">Better</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Senior Technical Consultant & Web Developer
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With 15 years of overall expertise in Web Application Development and SharePoint development, 
              I bring extensive experience in design and implementation of software solutions, specializing 
              in Microsoft technology with around 5 years of experience in MOSS 2007, SharePoint 2010/2013/2016.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              I have participated in all phases of the software life cycle beginning with gathering requirements, 
              design, implementation, test, deployment and support phases. I'm a self-starter, highly motivated, 
              able to operate under critical circumstances, both self-managed or team environments.
            </p>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Certifications</h4>
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3"
                  >
                    <cert.icon className="text-primary" size={20} />
                    <span className="text-sm font-medium">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="card-gradient border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors duration-300"
              >
                <motion.p 
                  className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1, type: "spring" }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
