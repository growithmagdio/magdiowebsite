export default function MagdioLogo({ className = '' }) {
  return (
    <img
      src="/logo.png?v=2"
      alt="MAGDIO — The AI Growth Studio"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

