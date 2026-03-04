"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/index";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Calculator", href: "/calculator" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top band */}
      <div className={styles.topBand}>
        <div className={`container ${styles.topInner}`}>
          <div>
            <div className={styles.topName}>{siteConfig.name}</div>
            <div className={styles.topTagline}>{siteConfig.tagline}</div>
          </div>
          <Link href="/about#contact" className="btn btn-copper">
            Start a Project →
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className={`container ${styles.main}`}>
        {/* Col 1 */}
        <div className={styles.col}>
          <div className={styles.brand}>
            <Image
              src="/assets/icons/logo.webp"
              alt="Er. Biswajit Deb Barman – Civil Engineer"
              width={130}
              height={62}
              className={styles.logoImg}
              priority
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
          </div>
          <p className={styles.tagline}>
            Building safe, lasting structures for homes and businesses across
            North Bengal.
          </p>
          <div className={styles.contactList}>
            {[
              {
                icon: "📍",
                label: "Address",
                val: siteConfig.location,
                href: null,
              },
              {
                icon: "📞",
                label: "Phone",
                val: siteConfig.phone,
                href: `tel:${siteConfig.phone.replace(/\s|-/g, "")}`,
              },
              {
                icon: "✉️",
                label: "Email",
                val: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
            ].map((c) =>
              c.href ? (
                <a key={c.label} href={c.href} className={styles.contactRow}>
                  <span className={styles.contactIcon}>{c.icon}</span>
                  <div>
                    <span className={styles.contactLabel}>{c.label}</span>
                    <span className={styles.contactVal}>{c.val}</span>
                  </div>
                </a>
              ) : (
                <div key={c.label} className={styles.contactRow}>
                  <span className={styles.contactIcon}>{c.icon}</span>
                  <div>
                    <span className={styles.contactLabel}>{c.label}</span>
                    <span className={styles.contactVal}>{c.val}</span>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Col 2 */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navigation</h4>
          <nav className={styles.navList}>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={styles.navItem}>
                <span>{l.label}</span>
                <span className={styles.arrow}>›</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3 */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Service Areas</h4>
          <div className={styles.areaList}>
            {siteConfig.serviceAreas.map((area) => (
              <span key={area} className={styles.area}>
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Col 4 */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Connect</h4>
          <div className={styles.socialLinks}>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </a>
          </div>
          <div className={styles.availBadge}>
            <span className={styles.availDot} />
            Available for Projects
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>© 2024 Er. Biswajit Deb Barman. All rights reserved.</p>
          <p className={styles.bottomRight}>
            Built with Next.js + Three.js + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
