// Define svg paths and style properties
const logo = document.querySelectorAll('#logo path'),
styles = ['stroke', 'delay', 'array', 'offset'];
let delay = 0;
// Iterate through svg paths
for (let i = 0; i < logo.length; i++) {
  // Define each path and its length
  const letter = logo[i],
  totalLength = letter.getTotalLength();
  // Iterate through path style properties
  for (let o = 0; o < styles.length; o++) {
    // Define style property
    const s = styles[o];
    // Set each path style property
    letter.style.setProperty(
      s == 'stroke' ? 'stroke' : s == 'delay' ? '--delay' : `stroke-dash${s}`,
      s == 'stroke' ? 'white' : s == 'delay' ? `${2}s` : totalLength
    );
  }
  // Increment delay property
  delay += 0.03;
}
document.styleSheets[0].insertRule(`#logo { 
  animation: fill 2s ease forwards ${delay+2}s
}`);