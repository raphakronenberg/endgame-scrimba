export default function Word({ currentWord, guessedLetters, isGameLost }: { currentWord: string; guessedLetters: string[]; isGameLost: boolean }) {
  return (
    <section style={{ display: "flex", gap: "5px", justifyContent: "center", marginBottom: "30px" }}>
      {currentWord.split("").map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter);
        const shouldReveal = isGuessed || isGameLost;

        return (
          <span
            key={index}
            style={{
              color: isGameLost && !isGuessed ? "#c62828" : "#fff",
              backgroundColor: "#333",
              borderBottom: "3px solid #d2d2d2",
              width: "40px",
              height: "50px",
              fontSize: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {shouldReveal ? letter : ""}
          </span>
        );
      })}
    </section>
  );
}
