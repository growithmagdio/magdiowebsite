export default function MagdioLogo({ className = '' }) {
  return (
    <img
      src="/logo.png"
      alt="MAGDIO — The AI Growth Studio"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

