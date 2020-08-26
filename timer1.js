var args = process.argv.slice(2);
if (args.length <= 0) {
  console.log("please enter values")
}
  for (let i of args) {
    if (!isNaN(Number(i)) && Number(i) > 0) {
      setTimeout(() => {
        console.log(`${i} seconds`)
    }, i)
  } else {
    console.log("Invalid value")
  }
}
  
