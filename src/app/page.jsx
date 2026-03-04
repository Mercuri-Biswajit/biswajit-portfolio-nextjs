'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { siteConfig, skills, services } from '@/data/index';
import { projects } from '@/data/projects';
import styles from './page.module.css';

// ── Critical fix: disable SSR for Three.js canvas components ──
const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false });
const SkillsScene = dynamic(() => import('@/components/three/SkillsScene'), { ssr: false });

// ── Fade-in wrapper ──────────────────────────────────────────
function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const variants = {
    hidden: { opacity: 0, y: direction === 'up' ? 32 : 0, x: direction === 'left' ? -32 : direction === 'right' ? 32 : 0 },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ── Hero ─────────────────────────────────────────────────────
function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background grid */}
      <div className={styles.heroGrid} />
      <div className={styles.heroLines}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={styles.heroLine} style={{ left: `${10 + i * 16}%` }} />
        ))}
      </div>

      <div className={`container ${styles.heroInner}`}>
        {/* Left: text */}
        <div className={styles.heroText}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Available for Projects
            </span>
          </motion.div>

          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Structural<br />
            <em>Engineering</em><br />
            Excellence
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Civil & Structural Engineer specialising in RCC design, IS 456:2000 compliance,
            cost estimation and BOQ for residential &amp; commercial projects across North Bengal.
          </motion.p>

          <motion.div
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
          >
            <Link href="/projects" className="btn btn-primary">View Projects →</Link>
            <Link href="/about#contact" className="btn btn-outline">Hire Me</Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {siteConfig.stats.map((s, i) => (
              <div key={i} className={styles.heroStat}>
                <span className={styles.heroStatVal}>{s.value}</span>
                <span className={styles.heroStatLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D canvas */}
        <motion.div
          className={styles.heroCanvas}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <HeroScene />
          <div className={styles.heroCanvasBadge}>
            <span>3D Structural Model</span>
            <span className={styles.heroCanvasBadgeSub}>Interactive Wireframe</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollHint}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

// ── Services ─────────────────────────────────────────────────
function Services() {
  return (
    <section className={`section ${styles.servicesSection}`}>
      <div className="container">
        <FadeIn>
          <div className={styles.sectionHeader}>
            <span className="eyebrow">What I Offer</span>
            <h2 className="section-title" style={{ marginTop: '1rem' }}>Engineering Services</h2>
            <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>
              Comprehensive civil and structural solutions tailored to your project needs.
            </p>
          </div>
        </FadeIn>

        <div className={`grid-3 ${styles.servicesGrid}`} style={{ marginTop: '3rem' }}>
          {services.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.1}>
              <div className={`card ${styles.serviceCard} ${s.popular ? styles.serviceCardPopular : ''}`}>
                {s.popular && <div className={styles.popularBadge}>Most Popular</div>}
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceName}>{s.name}</h3>
                <p className={styles.serviceDesc}>{s.description}</p>
                <ul className={styles.serviceFeatures}>
                  {s.features.map(f => (
                    <li key={f}>
                      <span className={styles.featureCheck}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className={styles.servicePrice}>{s.price}</div>
                <Link href="/about#contact" className={`btn ${s.popular ? 'btn-copper' : 'btn-outline'}`} style={{ width: '100%', justifyContent: 'center' }}>
                  Get a Quote
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Featured Projects ─────────────────────────────────────────
function FeaturedProjects() {
  const featured = projects.slice(0, 3);
  return (
    <section className={`section ${styles.featuredSection}`}>
      <div className="container">
        <FadeIn>
          <div className={styles.sectionHeaderRow}>
            <div>
              <span className="eyebrow">Portfolio</span>
              <h2 className="section-title" style={{ marginTop: '1rem' }}>Featured Projects</h2>
            </div>
            <Link href="/projects" className="btn btn-outline">View All →</Link>
          </div>
        </FadeIn>

        <div className={`grid-3 ${styles.projectsGrid}`} style={{ marginTop: '3rem' }}>
          {featured.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <Link href="/projects" className={`card ${styles.projectCard}`}>
                <div className={styles.projectAccent} style={{ background: p.accentColor }} />
                <div className={styles.projectBody}>
                  <span className={styles.projectCat} style={{ color: p.accentColor }}>{p.category}</span>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  <p className={styles.projectDesc}>{p.description}</p>
                  <div className={styles.projectMeta}>
                    <span><strong>Area:</strong> {p.plotArea}</span>
                    <span><strong>Cost:</strong> {p.estimatedCost}</span>
                  </div>
                  <div className={styles.projectTags}>
                    {p.tags.slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Skills ────────────────────────────────────────────────────
function Skills() {
  return (
    <section className={`section ${styles.skillsSection}`}>
      <div className="container">
        <div className={styles.skillsInner}>
          {/* Left: 3D canvas */}
          <FadeIn direction="left">
            <div className={styles.skillsCanvas}>
              <SkillsScene />
            </div>
          </FadeIn>

          {/* Right: skill cards */}
          <div className={styles.skillsContent}>
            <FadeIn direction="right">
              <span className="eyebrow">Expertise</span>
              <h2 className="section-title" style={{ margin: '1rem 0 0.75rem' }}>Core Skills</h2>
              <p className="section-subtitle">
                From structural design to cost estimation — a full-stack engineering toolkit.
              </p>
            </FadeIn>
            <div className={styles.skillsGrid} style={{ marginTop: '2rem' }}>
              {skills.map((s, i) => (
                <FadeIn key={s.name} delay={i * 0.07}>
                  <div className={styles.skillChip}>
                    <span className={styles.skillChipIcon}>{s.icon}</span>
                    <div>
                      <div className={styles.skillChipName}>{s.name}</div>
                      <div className={styles.skillChipBar}>
                        <motion.div
                          className={styles.skillChipFill}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                    <span className={styles.skillChipLevel}>{s.level}%</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────
function CtaBanner() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <FadeIn>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaEyebrow}>Let's Build Together</span>
              <h2 className={styles.ctaTitle}>Ready to Start Your Project?</h2>
              <p className={styles.ctaSub}>
                Get a professional structural design, BOQ estimate, or AutoCAD drawing
                for your residential or commercial project in North Bengal.
              </p>
              <div className={styles.ctaBtns}>
                <Link href="/about#contact" className="btn btn-copper">Get in Touch →</Link>
                <Link href="/calculator" className="btn btn-ghost">Try Calculator</Link>
              </div>
            </div>
            <div className={styles.ctaDeco}>
              {['🏗️', '📐', '⚙️', '💰'].map((icon, i) => (
                <motion.div
                  key={i}
                  className={styles.ctaDecoIcon}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2 + i * 0.4, delay: i * 0.3 }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Skills />
      <CtaBanner />
    </div>
  );
}
