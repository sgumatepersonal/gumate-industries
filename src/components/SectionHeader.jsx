function SectionHeader({ eyebrow, title, dark = false }) {
  return (
    <div className="container section-head">
      <p className={`eyebrow ${dark ? 'dark' : ''}`}>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeader;
