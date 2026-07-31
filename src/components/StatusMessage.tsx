import { LANGUAGES } from "./Languages";

function getStatusBackgroundColor(
    isGameOver: boolean,
    isGameWon: boolean,
    wrongGuessCount: number
): string {
    if (isGameOver) {
        return isGameWon ? "#2e7d32" : "#c62828";
    }

    if (wrongGuessCount > 0) {
        return "#7b1fa2";
    }

    return "transparent";
}

function getStatusMessageText({ hasGameEnded, wrongGuessCount, success, languages }: { hasGameEnded: boolean; wrongGuessCount: number; success: boolean; languages: { name: string }[] }): string {
    if (hasGameEnded) {
        return success
            ? "You win! You saved the programming world from Assembly!"
            : "Game over! Better start learning Assembly";
    }

    if (wrongGuessCount > 0 && wrongGuessCount <= languages.length) {
        const lastDeadLanguage = languages[wrongGuessCount - 1].name;
        return `Farewell ${lastDeadLanguage} 🫡`;
    }

    return "";
}

export default function StatusMessage({ hasGameEnded, success, wrongGuessCount }: { hasGameEnded: boolean; success: boolean; wrongGuessCount: number }) {
    return (

        <div className="status-message"
            style={{ backgroundColor: getStatusBackgroundColor(hasGameEnded, success, wrongGuessCount) }}>
            {getStatusMessageText({ hasGameEnded, wrongGuessCount, success, languages: LANGUAGES as { name: string }[] })}
        </div>
    )
}
