const sliders = document.querySelectorAll('input[type="range"]');

console.table("id", "name");
sliders.forEach(slider => {
  slider.addEventListener('input', function() {
    // Get the output element for this slider
    const output = document.getElementById(`${this.id}-output`);
    
    // Update the output value with the current slider value
    output.textContent = this.value;
  });
});

const dice = () => {
  return generateRandomBetween(1, 6);
}

const generateRandomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}