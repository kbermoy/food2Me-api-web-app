document.getElementById("myinput").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #6030B1 0%, #6030B1 ' + value + '%, #fff ' + value + '%, white 100%)'
  };


// object
const response = {
  matchingResults: 85,
  resturants: [
    {
      id: 1,
      name: 'wingstop'
    },
    {
      id: 2,
      name: 'chiptole'
    },
    {
      id: 3,
      name: 'burger king'
    }
  ]
}

console.log(typeof response)
const responseArr = response['resturants']
console.log(typeof responseArr)

for(let i = 0; i < responseArr.length; i++) {
  console.log(responseArr[i].name)
}