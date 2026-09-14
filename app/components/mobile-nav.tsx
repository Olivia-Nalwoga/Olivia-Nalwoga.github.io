"use client";

import { useEffect, useRef } from "react";

export function MobileNav({
  links,
}: {
  links: readonly (readonly [string, string])[];
}) {
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !menu.current?.contains(event.target)
      ) {
        menu.current?.removeAttribute("open");
      }
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    }
    const desktop = window.matchMedia("(min-width: 1024px)");
    function closeOnDesktop() {
      if (desktop.matches) menu.current?.removeAttribute("open");
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  return (
    <details
      ref={menu}
      className="mobile-nav"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          event.currentTarget.open = false;
        }
      }}
    >
      {/* Native details/summary exposes expanded state and works without JavaScript. */}
      <summary aria-controls="mobile-navigation">
        <span>Menu</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 5h14M3 10h14M3 15h14"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </summary>
      <nav id="mobile-navigation" aria-label="Mobile navigation">
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={() => {
              menu.current?.removeAttribute("open");
              document
                .getElementById(href.slice(1))
                ?.focus({ preventScroll: true });
            }}
          >
            {label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            menu.current?.removeAttribute("open");
            menu.current?.querySelector("summary")?.focus();
          }}
        >
          Resume <span className="nav-file-type">PDF ↗</span>
        </a>
      </nav>
    </details>
  );
}
