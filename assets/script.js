document.addEventListener("DOMContentLoaded", async function () {
    const introText = document.getElementById("intro-text");
    const subheader = document.getElementById("subheader-text");
    const subheader2 = document.getElementById("subheader-text-2");
    const socialIcons = document.querySelector(".social-icons");
    const downArrow = document.getElementById("down-arrow");

    const typewriterEffect = async (element, text, speed = 50) => {
        for (const char of text) {
            await new Promise(resolve => setTimeout(() => {
                element.textContent += char;
                resolve();
            }, speed));
        }
    };

    // Fade in icons and intro arrow
    const fadeInIcons = async () => {
        await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 500ms after typing

        // Show the social icons with a fade-in effect
        socialIcons.style.visibility = "visible";
        socialIcons.style.opacity = 0;

        socialIcons.style.transition = "opacity 2s";
        socialIcons.style.opacity = 1;
    };

    const fadeInArrow = async () => {
        await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 500ms after typing

        // Show the arrow with a fade-in effect
        downArrow.style.visibility = "visible";
        downArrow.style.opacity = 0;

        downArrow.style.transition = "opacity 2s";
        downArrow.style.opacity = 1;
    };

    const text1 = introText.textContent;
    introText.textContent = "";

    const text2 = subheader.textContent;
    subheader.textContent = "";

    const text3 = subheader2.textContent;
    subheader2.textContent = "";

    await typewriterEffect(introText, text1);
    await typewriterEffect(subheader, text2, 50);
    await typewriterEffect(subheader2, text3, 10);
    await fadeInIcons();
    await fadeInArrow();
});
