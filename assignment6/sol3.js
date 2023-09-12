const printNumbers = (from, to) => {
    let currentNumber = from;
  
    const intervalId = setInterval(() => {
      console.log(currentNumber);
  
      if (currentNumber === to) {
        clearInterval(intervalId);
      }
  
      currentNumber++;
    }, 2000);
  };

  printNumbers(1, 10);