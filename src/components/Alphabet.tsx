export default function Alphabet({ guessedLetters, currentWord, handleGuess, isGameOver }: { guessedLetters: string[]; currentWord: string; handleGuess: (letter: string) => void; isGameOver: boolean }) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <section style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
            {alphabet.map((letter) => {
                const isGuessed = guessedLetters.includes(letter);
                const isCorrect = isGuessed && currentWord.includes(letter);
                const isWrong = isGuessed && !currentWord.includes(letter);

                let bgColor = "#e0e0e0";
                if (isCorrect) bgColor = "#4CAF50"; // Grün für richtig
                if (isWrong) bgColor = "#F44336";   // Rot für falsch

                return (
                    <button
                        key={letter}
                        onClick={() => handleGuess(letter)}
                        disabled={isGameOver || isGuessed}
                        style={{
                            width: "40px",
                            height: "40px",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            backgroundColor: bgColor,
                            color: isGuessed ? "#fff" : "#000",
                            border: "none",
                            borderRadius: "4px",
                            cursor: isGameOver || isGuessed ? "not-allowed" : "pointer"
                        }}
                    >
                        {letter}
                    </button>
                );
            })}
        </section>
    );
}
