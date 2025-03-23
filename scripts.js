const quotes = [
    "Success is born from desire, determination, and persistence in achieving a goal.",
    "Believe in yourself and your potential. You are capable of great achievements!",
    "Every new day brings new opportunities. Take advantage of them!",
    "No obstacle is too big when your will to win is greater.",
    "Be the change you want to see in the world.",
    "Failure is just an opportunity to start over with more intelligence.",
    "Dream big and dare to fail.",
    "Do what you can, with what you have, where you are.",
    "The only way to do great work is to love what you do.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for."
];

function showQuote() {
    const quoteElement = document.getElementById("quote");
    const index = Math.floor(Math.random() * quotes.length);
    quoteElement.style.opacity = 0;
    setTimeout(() => {
        quoteElement.innerText = quotes[index];
        quoteElement.style.opacity = 1;
    }, 300);
}

const button = document.getElementById("btn-quote");
    button.addEventListener("click", () => {
        button.disabled = true;
        showQuote();
        setTimeout(() => {
            button.disabled = false;
        }, 50000);
    })

function copyQuote() {
    const quoteText = document.getElementById("quote").innerText;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert("Quote copied to clipboard!");
    }).catch(err => {
        console.error("Error copying the quote: ", err);
    });
}