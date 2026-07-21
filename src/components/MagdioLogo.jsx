export default function MagdioLogo({ className = '' }) {
  return (
    <img
      src="/logo.webp"
      alt="MAGDIO — The AI Growth Studio"
      width="180"
      height="48"
      fetchpriority="high"
      decoding="async"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

