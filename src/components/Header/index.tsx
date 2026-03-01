import Link from "next/link";
import Image from "next/image";
import { IconChevronDown } from "@tabler/icons-react";
import { Button } from "@mantine/core";

import s from "./styles.module.scss";

export default function Header() {
  return (
    <header className={s.header}>
      <nav className={`container-lg ${s.nav}`}>
        <Link href={"#"} className={s.logoLink}>
          <Image
            src="/logo.svg"
            alt=""
            width="180"
            height="50"
            className={s.logo}
          />
        </Link>

        {/* Mobile burger - checkbox toggle */}
        <input type="checkbox" id="menuToggle" className={s.menuToggle} />
        <label htmlFor="menuToggle" className={s.burger}>
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className={s.navContent}>
          <ul className={s.list}>
            <li className={s.listItem}>
              <Link href={"#"} className={s.listLink}>
                <span className={s.listLinkText}>Home</span>
              </Link>
            </li>
            <li className={s.listItem}>
              <div className={`${s.listLink} ${s.listLinkDropdown}`}>
                <span className={s.listLinkText}>Careers</span>
                <IconChevronDown className={s.listLinkIcon} />
              </div>
              <div className={s.dropdown}>
                <div className={s.dropdownInner}>
                  <div className={s.dropdownArea}>
                    <div className={s.dropdownGroup}>
                      <p className={s.dropdownLabel}>Industries</p>
                      <ul className={s.dropdownList}>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            E-commerce
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Cybersecurity
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            GameDev
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            AI / Machine Learning
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Cloud & DevOps
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Blockchain
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={s.dropdownArea}>
                    <div className={s.dropdownGroup}>
                      <p className={s.dropdownLabel}>Technologies</p>
                      <ul className={s.dropdownList}>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            React / Next.js
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Python / Django
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Node.js
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Go / Rust
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Kotlin / Swift
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={s.dropdownArea}>
                    <div className={s.dropdownGroup}>
                      <p className={s.dropdownLabel}>Locations</p>
                      <ul className={s.dropdownList}>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Warsaw
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Krakow
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Wroclaw
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Berlin
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={s.listItem}>
              <div className={`${s.listLink} ${s.listLinkDropdown}`}>
                <span className={s.listLinkText}>Companies</span>
                <IconChevronDown className={s.listLinkIcon} />
              </div>
              <div className={s.dropdown}>
                <div className={s.dropdownInner}>
                  <div className={s.dropdownArea}>
                    <div className={s.dropdownGroup}>
                      <p className={s.dropdownLabel}>Featured companies</p>
                      <ul className={s.dropdownList}>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Allegro Tech
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            CD Projekt RED
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Docplanner
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            STX Next
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Brainly
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            LiveChat
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Codewise
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={s.dropdownArea}>
                    <div className={s.dropdownGroup}>
                      <p className={s.dropdownLabel}>Company types</p>
                      <ul className={s.dropdownList}>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            SaaS Products
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Software Houses
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Startups
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Enterprises
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Digital agencies
                          </Link>
                        </li>
                        <li>
                          <Link href={"#"} className={s.dropdownLink}>
                            Product companies
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={s.dropdownArea}>
                    <div className={s.dropdownGroup}>
                      <p className={s.dropdownLabel}>From the blog</p>
                      <Link href={"#"} className={s.blogPost}>
                        <img
                          src="https://picsum.photos/300/180"
                          alt=""
                          className={s.blogPostImage}
                        />
                        <h2 className={s.blogPostTitle}>
                          How AI is reshaping developer hiring in 2026
                        </h2>
                        <p className={s.blogPostText}>
                          Discover which skills will matter most in the years
                          ahead.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={s.listItem}>
              <Link href={"#"} className={s.listLink}>
                <span className={s.listLinkText}>Remote</span>
              </Link>
            </li>
          </ul>
          <div className={s.navButtons}>
            <Button variant="outline" color="#ffffff">
              Sign In
            </Button>
            <Button>Post a job</Button>
          </div>
        </div>
        {/* end navContent */}
      </nav>
    </header>
  );
}
