export default function MagdioLogo({ className = '' }) {
  return (
    <img
      src="/logo.webp?v=2"
      alt="MAGDIO — The AI Growth Studio"
      width="180"
      height="48"
      fetchpriority="high"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

