const sentence = "hello there from lighthouse labs";


const typeWriter = function(sentence) {
  let delay = 0
  for (const char of sentence) { 
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 500
  }
  setTimeout(() => {
    console.log('');
  }, delay);

}

typeWriter(sentence)



