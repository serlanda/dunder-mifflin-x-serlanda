export default function Footer({ position }) {
  return (
    <footer className={`text-gray-600 w-full bg-[#FFFF] border-t border-gray-200 py-4 mt-7 ${position}`}>
      <div className="container mx-auto flex items-center sm:flex-row flex-col">
        <p className="ml-6">
          @ 2024 React Router -
          <a
            href="https://twitter.com/efealprgn"
            className="ml-1 text-gray-800 hover:text-[#7856ff] transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            @efealprgn
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://twitter.com/efealprgn" target="_blank">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 hover:text-[#ffbe0b] transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/efealprgn/?hl=tr"
            className="ml-5"
            target="_blank"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 hover:text-[#ffbe0b] transition-colors mr-6"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
