const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
    question.innerHTML = "Love you!!!!!!!!!!!!!";
    gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGRsbnQxdWVtNTMxejl1c2VjMnR5N203dmUxeG95OGdjOXowbzFxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kVUyaJy5RZ6OCtRppP/giphy.gif";

    noBtn.removeEventListener("mouseover", handleNoMouseOver);

    noBtn.remove();

    const dateIdeas = [
        "How about go for a walk?",
        "How about playing board games or card games together?",
        "How about having a home spa night with face masks, massages, and relaxation?",
        "How about plaing video games together?"
    ];

    const letsGoBtn = document.createElement("button");
    letsGoBtn.textContent = "Let's Go!";
    letsGoBtn.classList.add("letsgo-btn");
    letsGoBtn.style.position = "absolute";

    if (window.innerWidth <= 800) {
        letsGoBtn.style.left = "95%";
    } else {
        letsGoBtn.style.left = "63%";
    }

    letsGoBtn.style.transform = "translate(-50%, -50%)";
    letsGoBtn.style.width = "200px";

    letsGoBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * dateIdeas.length);
        const selectedDateIdea = dateIdeas[randomIndex];

        alert( selectedDateIdea);
    });

    yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
    const { width, height } = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - width;
    const maxY = window.innerHeight - height;

    noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
    noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);