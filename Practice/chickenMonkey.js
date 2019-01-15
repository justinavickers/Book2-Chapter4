for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {

  let output = `${currentNumber}: `

  if (currentNumber % 5 === 0) {
    output += "Chicken"
  }

  if (currentNumber % 7 === 0) {
    output += "Monkey"
  }

  console.log(output)

}
