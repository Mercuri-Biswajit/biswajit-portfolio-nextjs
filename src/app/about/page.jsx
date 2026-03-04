'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig, skills, education } from '@/data/index';
import styles from './page.module.css';

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === 'up' ? 28 : 0, x: direction === 'left' ? -28 : direction === 'right' ? 28 : 0 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ── Bio Section ──────────────────────────────────────────────
function BioSection() {
  return (
    <section className={`section ${styles.bioSection}`}>
      <div className="container">
        <div className="grid-2">
          {/* Left: visual */}
          <FadeIn direction="left">
            <div className={styles.profileVisual}>
              <div className={styles.profileBg} />
              <div className={styles.profileImg}>
                <img
                  src="/assets/icons/logo.webp"
                  alt="Er. Biswajit Deb Barman"
                  className={styles.profileLogo}
                />
              </div>
              <div className={styles.profileBadge}>
                <span className={styles.profileDot} />
                Available for Projects
              </div>
            </div>
            <div className={styles.bioStats}>
              {siteConfig.stats.map((s, i) => (
                <div key={i} className={styles.bioStatItem}>
                  <span className={styles.bioStatVal}>{s.value}</span>
                  <span className={styles.bioStatLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: text */}
          <FadeIn direction="right" delay={0.1}>
            <span className="eyebrow">About Me</span>
            <h1 className="section-title" style={{ margin: '1rem 0 1.5rem' }}>
              Er. Biswajit<br />Deb Barman
            </h1>
            <div className={styles.bioParagraphs}>
              {[
                {
                  icon: '🏗️',
                  heading: 'Engineering Background',
                  text: 'B.Tech Civil Engineer with 8+ years of hands-on experience in structural design, AutoCAD drafting, and construction supervision across North Bengal. Specialized in IS 456:2000 compliant RCC structures.'
                },
                {
                  icon: '📐',
                  heading: 'Design Philosophy',
                  text: 'Every structure I design prioritizes safety, economy, and buildability. From isolated footings to mat foundations, I ensure IS code compliance at every stage of the structural lifecycle.'
                },
                {
                  icon: '📍',
                  heading: 'Local Expertise',
                  text: 'Based in Raiganj, Uttar Dinajpur, I serve clients across Raiganj, Dalkhola, Islampur, Itahar, Chopra, Kaliaganj, and Hemtabad with intimate knowledge of local soil conditions and PWD rates.'
                }
              ].map((p, i) => (
                <div key={i} className={styles.bioPara}>
                  <span className={styles.bioParaIcon}>{p.icon}</span>
                  <div>
                    <span className={styles.bioParaHeading}>{p.heading}</span>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.bioTags}>
              {['IS 456:2000', 'RCC Design', 'AutoCAD', 'STAAD.Pro', 'WB PWD SOR', 'ETABS', 'BOQ', 'Seismic Design'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ── Skills & Education ───────────────────────────────────────
function SkillsEdu() {
  return (
    <section className={`section ${styles.skillsEduSection}`}>
      <div className="container">
        <FadeIn>
          <span className="eyebrow">Expertise & Training</span>
          <h2 className="section-title" style={{ margin: '1rem 0 3rem' }}>Skills & Education</h2>
        </FadeIn>
        <div className="grid-2">
          {/* Skills */}
          <div>
            <FadeIn delay={0.05}>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--copper)', marginBottom: '1.25rem' }}>
                Technical Skills
              </h3>
            </FadeIn>
            <div className={styles.skillsGrid}>
              {skills.map((s, i) => (
                <FadeIn key={s.name} delay={i * 0.07}>
                  <div className={styles.skillCard}>
                    <div className={styles.skillCardIcon}>{s.icon}</div>
                    <div className={styles.skillCardName}>{s.name}</div>
                    <ul className={styles.skillCardItems}>
                      {s.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <FadeIn delay={0.05}>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--copper)', marginBottom: '1.25rem' }}>
                Education & Certifications
              </h3>
            </FadeIn>
            <div className={styles.eduTimeline}>
              {education.map((e, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div className={styles.eduItem}>
                    <span className={styles.eduIcon}>{e.icon}</span>
                    <div className={styles.eduContent}>
                      <div className={styles.eduYear}>{e.year}</div>
                      <div className={styles.eduDegree}>{e.degree}</div>
                      <div className={styles.eduSchool}>{e.school}</div>
                      <ul className={styles.eduDetails}>
                        {e.details.map(d => <li key={d}>{d}</li>)}
                      </ul>
                    </div>
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

// ── Contact Section ──────────────────────────────────────────
function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, wire up to an API route or email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        <FadeIn>
          <div className={styles.contactHeader}>
            <span className="eyebrow">Get in Touch</span>
            <h2 className="section-title" style={{ margin: '1rem 0 0.75rem' }}>Start a Project</h2>
            <p className="section-subtitle">
              Ready to build? Reach out for a consultation, structural design quote, or BOQ estimate.
            </p>
          </div>
        </FadeIn>

        <div className="grid-2">
          {/* Left: contact info */}
          <FadeIn direction="left" delay={0.1}>
            <div className={styles.contactMethods}>
              {[
                { icon: '📞', title: 'Phone', desc: 'Mon–Sat, 9am–7pm IST', val: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s|-/g, '')}` },
                { icon: '✉️', title: 'Email', desc: 'Usually respond within 24 hours', val: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: '📍', title: 'Location', desc: 'Serving North Bengal', val: siteConfig.location, href: null },
              ].map((c, i) => (
                <div key={i} className={styles.contactMethod}>
                  <span className={styles.contactMethodIcon}>{c.icon}</span>
                  <div>
                    <div className={styles.contactMethodTitle}>{c.title}</div>
                    <div className={styles.contactMethodDesc}>{c.desc}</div>
                    {c.href ? (
                      <a href={c.href} className={styles.contactMethodLink}>{c.val}</a>
                    ) : (
                      <span className={styles.contactMethodText}>{c.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.social}>
              <div className={styles.socialLabel}>Follow on Social</div>
              <div className={styles.socialLinks}>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn
                </a>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn direction="right" delay={0.15}>
            <div className={styles.contactForm}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              <p className={styles.formSubtitle}>Fill in the details and I'll get back to you promptly.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ padding: '2rem', background: 'rgba(93,187,110,0.1)', border: '1px solid rgba(93,187,110,0.3)', borderRadius: 'var(--radius-md)', textAlign: 'center', color: '#3D7A42' }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✓</div>
                  <strong>Message sent!</strong> I'll respond within 24 hours.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formRow} style={{ marginBottom: '1.25rem' }}>
                    <div className={styles.formGroup}>
                      <label className="label">Name *</label>
                      <input className="input" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label className="label">Email *</label>
                      <input className="input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className={styles.formRow} style={{ marginBottom: '1.25rem' }}>
                    <div className={styles.formGroup}>
                      <label className="label">Phone</label>
                      <input className="input" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className="label">Subject *</label>
                      <select className="input" name="subject" value={formData.subject} onChange={handleChange} required>
                        <option value="">Select service...</option>
                        <option>Architectural Plan</option>
                        <option>Structural Plan</option>
                        <option>Cost Estimate & BOQ</option>
                        <option>Site Inspection</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.formGroup} style={{ marginBottom: '1.5rem' }}>
                    <label className="label">Message *</label>
                    <textarea
                      className="input"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project — plot size, floors, location, budget range..."
                      rows={5}
                      required
                      style={{ resize: 'vertical' }}
                    />
                  </div>
                  <button type="submit" className="btn btn-copper" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div>
      <section className="page-header">
        <div className="page-header-grid" />
        <div className="page-header-lines">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="page-header-line" style={{ left: `${8 + i * 11}%` }} />
          ))}
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="page-eyebrow">About</span>
            <h1 className="page-title">Civil Engineer &<br />Structural Designer</h1>
            <p className="page-description">
              8+ years building safe, IS code-compliant structures across North Bengal —
              from ground-up residences to commercial complexes.
            </p>
          </motion.div>
        </div>
      </section>

      <BioSection />
      <SkillsEdu />
      <ContactSection />
    </div>
  );
}
