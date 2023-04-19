export default function MenuButton() {
  return (
    <button
      type="button"
      className="text-gray-100 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
    >
      <span className="sr-only">Open menu</span>
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
}
