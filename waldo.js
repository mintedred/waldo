// The second argument/parameter is expected to be a function

var arr = ["Alice", "Bob", "Waldo", "Winston"];

arr.forEach(function(element, index) {
  if (element === "Waldo") {
    console.log("Found Waldo at index " + index + "!");
  }
})