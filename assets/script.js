document.addEventListener("DOMContentLoaded", async function () {
    const introText = document.getElementById("intro-text");
    const subheader = document.getElementById("subheader-text");
    const socialIcons = document.querySelector(".social-icons");

    const typewriterEffect = async (element, text, speed = 100) => {
        for (const char of text) {
            await new Promise(resolve => setTimeout(() => {
                element.textContent += char;
                resolve();
            }, speed));
        }
    };

    const fadeInIcons = async () => {
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait for 500ms after typing

        // Show the social icons with a fade-in effect
        socialIcons.style.visibility = "visible";
        socialIcons.style.opacity = 0;

        socialIcons.style.transition = "opacity 2s";
        socialIcons.style.opacity = 1;
    };

    const text1 = introText.textContent;
    introText.textContent = "";

    const text2 = subheader.textContent;
    subheader.textContent = "";

    await typewriterEffect(introText, text1);
    await typewriterEffect(subheader, text2, 50);
    await fadeInIcons();
});
