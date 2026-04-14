import { motion } from "framer-motion";

function Skills() {
  const skills = ["Java", "Python", "ML", "DL", "React", "Spring Boot"];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-tags">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="tag"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

export default Skills;