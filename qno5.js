function compress(chars) {
    let anchor = 0; // Anchor point for the start of each group
    let write = 0; // Write position for the compressed characters
  
    for (let read = 0; read < chars.length; read++) {
      // Check if the current character is different from the next character or if it's the last character
      if (read + 1 === chars.length || chars[read] !== chars[read + 1]) {
        chars[write] = chars[anchor]; // Write the character
  
        // If the group has more than one character, write the group length
        if (read > anchor) {
          const count = read - anchor + 1;
          const countChars = count.toString().split('');
  
          for (let i = 0; i < countChars.length; i++) {
            write++;
            chars[write] = countChars[i]; // Write the digit of the group length
          }
        }
  
        write++; // Move the write pointer forward
        anchor = read + 1; // Move the anchor point to the next group
      }
    }
  
    return write; // Return the new length of the array
  }
  
  // Example usage
  const chars = ["a", "a", "b", "b", "c", "c", "c"];
  const newLength = compress(chars);
  const compressedChars = chars.slice(0, newLength);
  console.log(newLength); // Output: 6
  console.log(compressedChars); // Output: ["a", "2", "b", "2", "c", "3"]
  