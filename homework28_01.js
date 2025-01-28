function frequencyAnalysis(s) {
 
  const freq = {};

  for (let char of s.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
      
      freq[char] = (freq[char] || 0) + 1; 
    }
  }

  
  for (let char in freq) {
    console.log(`${char} - ${freq[char]}`);
  }
}


const inputString = 'AbraСadabra';
frequencyAnalysis(inputString);
