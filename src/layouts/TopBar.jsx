export default function TopBar() {
  return (
    <div className=" bg-[#fff] lg:flex hidden justify-between items-center py-2 border-b-2 border-[#f2f3ef] text-[15px]">
      <div className="flex ml-4">
        <a href="https://twitter.com/efealprgn" target="_blank">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5 hover:text-gray-600 transition-colors"
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
            className="w-5 h-5 hover:text-gray-600 transition-colors"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
      </div>
      <div className="tracking-widest">
        Hızlı Teslimat ve 400₺ Üzeri Ücretsiz Kargo
      </div>
      <div className="mr-4">Türkçe</div>
    </div>
  );
}
