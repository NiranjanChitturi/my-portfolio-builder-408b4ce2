import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm font-sans">N</span>
            </div>
            <span className="font-semibold text-foreground">Niranjan Babu Chitturi</span>
          </Link>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} All Rights Reserved. Made with 
            <Heart size={14} className="text-primary fill-primary" />
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
