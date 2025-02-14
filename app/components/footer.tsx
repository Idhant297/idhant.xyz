import { Clock } from './clock'

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
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 hover:underline"
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
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 hover:underline"
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
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/idhant297/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">instagram</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 hover:underline"
            href="mailto:idhant.gulati@gmail.com"
          >
            <ArrowIcon /> <p className="ml-2 h-7"> mail</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 hover:underline"
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
          <a
            className=""
            rel=""
            target=""
            href=""
          >

            <p className="ml-2 h-7"></p>
          </a>
        </li>

        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://idhant.xyz/"
          >
            <p className="ml-0 h-4">idhant.xyz</p>
          </a>
        </li>
      </ul>
      <div className="flex justify-between items-center mt-4">
        <p className="text-xs text-neutral-500">v1.04.5</p>
        <Clock />
      </div>
    </footer>
  )
}
