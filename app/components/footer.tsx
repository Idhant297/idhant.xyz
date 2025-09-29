'use client';

import { Clock } from './clock'
import ThemeToggle from './theme-toggle'
import AnimationToggle from './animation-toggle'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <style jsx>{`
        .footer-links {
          color: var(--footer-text);
        }
        .footer-link:hover {
          color: var(--footer-text-hover);
        }
        .footer-version {
          color: var(--footer-version);
        }
      `}</style>
      <div className="flex justify-between items-center mt-8">
        <ul className="font-sm flex flex-col space-x-0 space-y-2 footer-links md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="footer-link flex items-center transition-all hover:underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Idhant297"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="footer-link flex items-center transition-all hover:underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://scholar.google.com/citations?hl=en&user=3ABAsUkAAAAJ&view_op=list_works&gmla=AH8HC4xPmA4CllE6w05CUvgZdfEn4oK-Hq_9DSJ83WAzKZrOFSDZSOOmZaoSxMrytgPBX1XbyKSuKdGuz6tAteEZ"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">scholar</p>
          </a>
        </li>
        <li>
          <a
            className="footer-link flex items-center transition-all hover:underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/Idhant297"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">twitter (x)</p>
          </a>
        </li>
        <li>
          <a
            className="footer-link flex items-center transition-all hover:underline"
            rel="noopener noreferrer"
            target="_blank"
            href="/doc/resume.pdf"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">resume</p>
          </a>
        </li>

        {/* just a spacer */}
        <li>
          <a className="" rel="" target="" href="">
            <p className="ml-2 h-7"></p>
          </a>
        </li>

        </ul>
        <div className="flex items-center gap-2">
          {/* <AnimationToggle /> comment this out before pushing */}
          <ThemeToggle />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="footer-version text-sm">v2.00.3 (sept 2025)</p>
        <Clock />
      </div>
    </footer>
  )
}
