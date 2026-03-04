'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { projects } from '@/data/projects';
import styles from './page.module.css';

const FILTERS = ['all', 'RESIDENTIAL', 'COMMERCIAL'];

function ImageLightbox({ projects, initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const current = projects[index];

  const go = useCallback((dir) => {
    setDirection(dir);
    setIndex(i => (i + dir + projects.length) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, go]);

  return (
    <motion.div
      className={styles.lightboxBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button className={styles.lightboxClose} onClick={onClose} aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div className={styles.lightboxCounter}>{index + 1} / {projects.length}</div>

      <button className={`${styles.lightboxArrow} ${styles.lightboxArrowLeft}`} onClick={() => go(-1)} aria-label="Previous">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className={styles.lightboxStage}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            className={styles.lightboxImageWrap}
            custom={direction}
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -80 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              style={{ objectFit: 'contain' }}
              sizes="100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <motion.div
          key={`cap-${current.id}`}
          className={styles.lightboxCaption}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <span className={styles.lightboxCaptionCat} style={{ color: current.accentColor }}>
            {current.category}
          </span>
          <span className={styles.lightboxCaptionTitle}>{current.title}</span>
          {current.plotArea && (
            <span className={styles.lightboxCaptionMeta}>{current.plotArea}</span>
          )}
        </motion.div>
      </div>

      <button className={`${styles.lightboxArrow} ${styles.lightboxArrowRight}`} onClick={() => go(1)} aria-label="Next">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className={styles.lightboxStrip}>
        {projects.map((p, i) => (
          <button
            key={p.id}
            className={`${styles.lightboxThumb} ${i === index ? styles.lightboxThumbActive : ''}`}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
          >
            <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover' }} sizes="80px" />
            <div className={styles.lightboxThumbOverlay} style={{ background: i === index ? `${p.accentColor}55` : undefined }} />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function StatsBanner({ all }) {
  const res = all.filter(p => p.category === 'RESIDENTIAL').length;
  const com = all.filter(p => p.category === 'COMMERCIAL').length;
  const stats = [
    { label: 'Total Projects', val: all.length },
    { label: 'Residential', val: res },
    { label: 'Commercial', val: com },
    { label: 'Districts Served', val: 5 },
  ];
  return (
    <div className={styles.statsBanner}>
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className={styles.statItem}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <span className={styles.statVal}>{s.val}</span>
          <span className={styles.statLabel}>{s.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const [tab, setTab] = useState('specs');
  if (!project) return null;

  return (
    <motion.div
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, y: 40, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.92 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div style={{ height: 4, background: project.accentColor, borderRadius: '20px 20px 0 0' }} />

        {/* Project image in modal */}
        <div className={styles.modalImage}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
          />
          <div className={styles.modalImageOverlay} style={{ background: `linear-gradient(to top, ${project.accentColor}99, transparent)` }} />
        </div>

        <div className={styles.modalHead}>
          <div>
            <span className={styles.modalCat} style={{ color: project.accentColor }}>{project.category}</span>
            <h2 className={styles.modalTitle}>{project.title}</h2>
          </div>
          <button onClick={onClose} className={styles.modalClose}>✕</button>
        </div>

        <div className={styles.tabs}>
          {['specs', 'case study'].map(t => (
            <button
              key={t}
              className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`}
              onClick={() => setTab(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.modalBody}>
          {tab === 'specs' && (
            <div>
              <div
                className={styles.modalDesc}
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
              <div className={styles.specsGrid}>
                {[
                  ['Plot Area', project.plotArea],
                  ['Estimated Cost', project.estimatedCost],
                  ['Structure', project.structure],
                  ['Foundation', project.foundation],
                ].map(([l, v]) => (
                  <div key={l} className={styles.specCard}>
                    <span className={styles.specLabel}>{l}</span>
                    <span className={styles.specVal}>{v}</span>
                  </div>
                ))}
              </div>
              <div className={styles.tags}>
                {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          )}
          {tab === 'case study' && project.caseStudy && (
            <div>
              <div className={styles.csRow}>
                <div>
                  <span className={styles.csLabel}>🎯 Problem</span>
                  <p>{project.caseStudy.problem}</p>
                </div>
                <div>
                  <span className={styles.csLabel}>💡 Solution</span>
                  <p>{project.caseStudy.solution}</p>
                </div>
              </div>
              {project.caseStudy.challenges && (
                <div className={styles.challenges}>
                  <span className={styles.csLabel}>⚠️ Challenges</span>
                  <ul>{project.caseStudy.challenges.map(c => <li key={c}>{c}</li>)}</ul>
                </div>
              )}
              {project.caseStudy.results && (
                <div className={styles.results}>
                  {Object.entries(project.caseStudy.results).map(([k, v]) => (
                    <div key={k} className={styles.resultItem}>
                      <span className={styles.resultVal}>{v}</span>
                      <span className={styles.resultKey}>{k.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function TimelineCard({ project, index, onClick, onImageClick }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`${styles.timelineItem} ${isEven ? styles.timelineLeft : styles.timelineRight}`}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.timelineDot} style={{ background: project.accentColor }} />
      <motion.div
        className={styles.timelineCard}
        whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(28,25,23,0.12)' }}
        onClick={() => onClick(project)}
      >
        <div style={{ height: 3, background: project.accentColor }} />

        {/* Project thumbnail image — click opens lightbox */}
        <div
          className={styles.tcImage}
          onClick={(e) => { e.stopPropagation(); onImageClick(); }}
          role="button"
          aria-label={`View image for ${project.title}`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={(e) => {
              e.currentTarget.parentElement.classList.add(styles.tcImageFallback);
              e.currentTarget.parentElement.style.background = `linear-gradient(135deg, ${project.accentColor}22, ${project.accentColor}44)`;
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className={styles.tcImageOverlay} />
          {/* Gallery icon hint on hover */}
          <div className={styles.tcImageGalleryHint}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
          <span className={styles.tcImageCat} style={{ background: project.accentColor }}>{project.category}</span>
        </div>
        <div className={styles.tcHeader}>
          <span className={styles.tcCat} style={{ color: project.accentColor }}>{project.category}</span>
          <span className={styles.tcId}>#{String(project.id).padStart(2, '0')}</span>
        </div>
        <h3 className={styles.tcTitle}>{project.title}</h3>
        <div
          className={styles.tcDesc}
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <div className={styles.tcGrid}>
          {[['Plot Area', project.plotArea], ['Est. Cost', project.estimatedCost], ['Structure', project.structure], ['Foundation', project.foundation]].map(([l, v]) => (
            <div key={l}>
              <span className={styles.tcMetaLabel}>{l}</span>
              <span className={styles.tcMetaVal}>{v}</span>
            </div>
          ))}
        </div>
        <div className={styles.tcTags}>
          {project.tags.slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className={styles.tcAction}>
          <span>View Details</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const sorted = [...projects].sort((a, b) => b.id - a.id);
  const filtered = filter === 'all' ? sorted : sorted.filter(p => p.category === filter);

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
            <span className="page-eyebrow">Portfolio</span>
            <h1 className="page-title">My Projects</h1>
            <p className="page-description">
              A showcase of structural engineering projects demonstrating precision,
              innovation, and IS code compliance across North Bengal.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container"><StatsBanner all={sorted} /></div>
      </section>

      <section className={styles.filterSection}>
        <div className="container">
          <motion.div className={styles.filters} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {FILTERS.map(f => (
              <motion.button
                key={f}
                className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`}
                onClick={() => setFilter(f)}
                whileTap={{ scale: 0.95 }}
              >
                {f === 'all' ? 'All Projects' : f.charAt(0) + f.slice(1).toLowerCase()}
                {f !== 'all' && (
                  <span className={styles.filterCount}>{sorted.filter(p => p.category === f).length}</span>
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.countBar}>
            <span className={styles.countText}>
              <strong>{filtered.length}</strong> project{filtered.length !== 1 ? 's' : ''} found
            </span>
            <div className={styles.countPills}>
              {['RESIDENTIAL', 'COMMERCIAL'].map(cat => (
                <span key={cat} className={`${styles.pill} ${styles[`pill${cat.charAt(0) + cat.slice(1).toLowerCase()}`]}`}>
                  <span className={styles.pillDot} />
                  {cat.charAt(0) + cat.slice(1).toLowerCase()} ({sorted.filter(p => p.category === cat).length})
                </span>
              ))}
            </div>
          </div>
          <div className={styles.timeline}>
            <div className={styles.timelineSpine} />
            {filtered.map((p, i) => (
              <TimelineCard
                key={p.id}
                project={p}
                index={i}
                onClick={setSelected}
                onImageClick={() => setLightboxIndex(sorted.findIndex(s => s.id === p.id))}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        {lightboxIndex !== null && (
          <ImageLightbox
            projects={sorted}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}