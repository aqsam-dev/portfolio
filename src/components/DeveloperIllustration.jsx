function DeveloperIllustration() {
  return (
    <svg
      viewBox="0 0 420 500"
      role="img"
      aria-label="Developer illustration"
      className="h-auto w-full max-w-sm"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* soft background shape */}
      <circle cx="210" cy="235" r="165" fill="#0F9B8E" opacity="0.1" />
      <circle cx="332" cy="105" r="38" fill="#0F9B8E" opacity="0.18" />

      {/* laptop */}
      <rect x="70" y="350" width="280" height="20" rx="8" fill="#101820" />
      <rect
        x="94"
        y="225"
        width="232"
        height="132"
        rx="12"
        fill="#101820"
      />
      <rect x="105" y="237" width="210" height="108" rx="6" fill="#E8F4F2" />
      <path d="M150 270h50M150 285h95M150 300h72" stroke="#0F9B8E" strokeWidth="7" strokeLinecap="round" />
      <path d="M130 255l-12 12 12 12M270 255l12 12-12 12" fill="none" stroke="#0F9B8E" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />

      {/* body */}
      <path
        d="M142 350c5-92 25-132 68-132s63 40 68 132H142Z"
        fill="#101820"
      />
      <path
        d="M172 226h76l18 124H154l18-124Z"
        fill="#0F9B8E"
      />

      {/* neck */}
      <path d="M188 198h44v45h-44z" fill="#C98F72" />

      {/* face */}
      <ellipse cx="210" cy="154" rx="56" ry="67" fill="#D79E80" />

      {/* hair */}
      <path
        d="M156 151c-3-56 32-87 76-76 28 7 45 31 39 72-16-19-36-27-62-20-22 6-37 17-53 24v0Z"
        fill="#101820"
      />
      <path
        d="M159 128c22-45 84-53 110-5-25-17-71-16-110 5Z"
        fill="#101820"
      />

      {/* ear */}
      <circle cx="157" cy="160" r="12" fill="#D79E80" />

      {/* face details */}
      <path d="M185 158h15M221 158h15" stroke="#101820" strokeWidth="4" strokeLinecap="round" />
      <path d="M199 183c8 7 17 7 25 0" fill="none" stroke="#101820" strokeWidth="4" strokeLinecap="round" />

      {/* arms */}
      <path
        d="M165 247c-35 20-48 61-34 105l24-6c-7-28 0-55 27-70l-17-29Z"
        fill="#D79E80"
      />
      <path
        d="M255 247c35 20 48 61 34 105l-24-6c7-28 0-55-27-70l17-29Z"
        fill="#D79E80"
      />

      {/* small floating code badges */}
      <rect x="38" y="158" width="70" height="38" rx="9" fill="#101820" />
      <text
        x="73"
        y="183"
        textAnchor="middle"
        fill="#F3F5F6"
        fontFamily="monospace"
        fontSize="18"
      >
        {"</>"}
      </text>

      <rect x="312" y="182" width="68" height="38" rx="9" fill="#0F9B8E" />
      <text
        x="346"
        y="207"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="monospace"
        fontSize="18"
      >
        {"{ }"}
      </text>
    </svg>
  );
}

export default DeveloperIllustration;