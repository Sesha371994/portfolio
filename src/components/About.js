import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="about">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <div className="header-underline"></div>
      </motion.div>

      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="about-text" variants={itemVariants}>
          <p>
            I'm a passionate developer with a keen eye for design. With 5+ years of experience
            in web development, I specialize in creating responsive, user-friendly applications
            that solve real-world problems.
          </p>
          <p>
            My journey in tech started with a curiosity about how things work. Today, I combine
            technical expertise with creative thinking to deliver exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div className="about-stats" variants={itemVariants}>
          <motion.div
            className="stat"
            whileHover={{ scale: 1.05 }}
          >
            <h3>50+</h3>
            <p>Projects Completed</p>
          </motion.div>
          <motion.div
            className="stat"
            whileHover={{ scale: 1.05 }}
          >
            <h3>30+</h3>
            <p>Happy Clients</p>
          </motion.div>
          <motion.div
            className="stat"
            whileHover={{ scale: 1.05 }}
          >
            <h3>5+</h3>
            <p>Years Experience</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
