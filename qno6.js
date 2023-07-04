function findAnagrams(s, p) {
    const result = [];
    const targetMap = createFrequencyMap(p);
  
    let left = 0;
    let right = 0;
    let count = p.length;
  
    while (right < s.length) {
      // Expand the window by moving the right pointer
      if (targetMap[s[right]] > 0) {
        count--;
      }
      targetMap[s[right]]--;
      right++;
  
      // Contract the window by moving the left pointer
      if (count === 0) {
        result.push(left);
      }
      if (right - left === p.length) {
        if (targetMap[s[left]] >= 0) {
          count++;
        }
        targetMap[s[left]]++;
        left++;
      }
    }
  
    return result;
  }
  
  function createFrequencyMap(str) {
    const map = {};
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      map[char] = map[char] ? map[char] + 1 : 1;
    }
  
    return map;
  }
  
  // Example usage
  const s = "cbaebabacd";
  const p = "abc";
  const indices = findAnagrams(s, p);
  console.log(indices); // Output: [0, 6]
  