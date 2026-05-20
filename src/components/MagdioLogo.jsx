export default function MagdioLogo({ className = '' }) {
  return (
    <img
      src="/logo.webp"
      alt="MAGDIO — The AI Growth Studio"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

