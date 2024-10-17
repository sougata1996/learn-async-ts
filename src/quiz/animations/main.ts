const aliceTumbling1: Keyframe[] = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

async function animateAlices() {
  try {
    if (!alice10 || !alice20 || !alice30) {
      console.warn("#alice elements not found");
      return;
    }

    // Using async/await to wait for each animation to finish before starting the next one
    await alice10.animate(aliceTumbling1, aliceTiming1).finished;
    await alice20.animate(aliceTumbling1, aliceTiming1).finished;
    await alice30.animate(aliceTumbling1, aliceTiming1).finished;
  } catch (err) {
    // Check if the error has a message property
    if (err instanceof Error) {
      alert(`Error during animation: ${err.message}`);
    } else {
      // Fallback for unknown error types
      alert(`An unknown error occurred during animation.`);
    }
  }
}

// Call the async function to animate the elements sequentially
animateAlices();
