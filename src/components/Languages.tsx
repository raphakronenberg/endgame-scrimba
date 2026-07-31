export const LANGUAGES = [
  { name: 'JavaScript', background: '#f7df1e', color: '#000000' },
  { name: 'Python', background: '#306998', color: '#ffffff' },
  { name: 'TypeScript', background: '#3178c6', color: '#ffffff' },
  { name: 'Ruby', background: '#cc342d', color: '#ffffff' },
  { name: 'Go', background: '#00ADD8', color: '#000000' },
  { name: 'Rust', background: '#dea584', color: '#000000' },
  { name: 'Kotlin', background: '#0095D5', color: '#ffffff' },
  { name: 'Swift', background: '#FA7343', color: '#000000' },
  { name: 'Assembly', background: '#f70000', color: '#ffffff' },
];

export default function Languages({ wrongGuessCount, }: { wrongGuessCount: number }) {
  return (
    <section style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "30px" }}>
      {LANGUAGES.map((lang, index) => {
        const isLost = index < wrongGuessCount;

        return (
          <span
            key={lang.name}
            style={{
              backgroundColor: lang.background,
              color: lang.color,
              padding: "6px 12px",
              borderRadius: "4px",
              opacity: isLost ? 0.2 : 1,
              textDecoration: isLost ? "line-through" : "none",
              fontWeight: "bold"
            }}
          >
            {lang.name}
          </span>
        );
      })}
    </section>
  );
}
