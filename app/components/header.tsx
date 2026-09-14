import { MobileNav } from "./mobile-nav";

const navigation = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Research", "#research"],
  ["Education", "#education"],
  ["Contact", "#contact"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="wordmark"
          href="#home"
          aria-label="Olivia Nalwoga, back to top"
        >
          <span className="monogram" aria-hidden="true">
            ON<span>.</span>
          </span>
          <span>Olivia Nalwoga</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a
            className="button button-small button-primary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <MobileNav links={navigation} />
      </div>
    </header>
  );
}
