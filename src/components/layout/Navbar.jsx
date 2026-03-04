"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Calculator", href: "/calculator" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo}>
            {/* ─────────────────────────────────────────────────────────
                LOGO IMAGE
                Place your logo file at:  public/images/logo/logo.png
                Supported formats: .png  .jpg  .svg  .webp
                Recommended size:  260 × 72 px  (will be displayed at
                                  130 × 36 px for retina sharpness)
                The text fallback below is shown if the file is missing.
            ───────────────────────────────────────────────────────── */}
            <Image
              src="/assets/icons/logo.webp"
              alt="Er. Biswajit Deb Barman – Civil Engineer"
              width={130}
              height={36}
              className={styles.logoImg}
              priority
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            {/* Text fallback – hidden when logo image loads successfully */}
            {/* <span className={styles.logoTextFallback}>
              <span className={styles.logoName}>Biswajit</span>
              <span className={styles.logoSub}>Civil Engineer</span>
            </span> */}
          </Link>

          <div className={styles.desktopLinks}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.desktopCta}>
            <Link href="/about#contact" className="btn btn-primary">
              Hire Me ↗
            </Link>
          </div>

          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`${styles.burgerLine} ${menuOpen ? styles.open1 : ""}`}
            />
            <span
              className={`${styles.burgerLine} ${menuOpen ? styles.open2 : ""}`}
            />
            <span
              className={`${styles.burgerLine} ${menuOpen ? styles.open3 : ""}`}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileLinks}>
              <div className={styles.mobileLogo}>
                <Image
                  src="/images/logo/logo.png"
                  alt="Er. Biswajit Deb Barman"
                  width={110}
                  height={30}
                  className={styles.mobileLogoImg}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                <span className={styles.mobileLogoFallback}>
                  <span className={styles.logoName}>Biswajit</span>
                  <span className={styles.logoSub}>Civil Engineer</span>
                </span>
              </div>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileLinkActive : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <Link
                  href="/about#contact"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  Hire Me ↗
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
