// var name = document.querySelector(".name")
var nameTitle;
var change = document.querySelector('button')
var qouteOne = '"'


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function getRandomNumber() {
   
    return Math.floor(Math.random()* 1000) + 1
}


change.addEventListener('click', () => {
    let any = document.querySelector('#any')
    any.style.display = 'block'
    fetch("https://icanhazdadjoke.com/slack")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    
    //   let predictedQoute =data[getRandomNumber()]
    //   nameTitle = `joke by: ${predictedQoute.author}`
    //   console.log(nameTitle)
      
    //   let b = `" ${predictedQoute.text}" `
    
    //   document.querySelector('.jokeBy').innerHTML = nameTitle
      document.querySelector('.container-joke').innerHTML = data.attachments[0].text
      console.log(data.attachments[0])
      
  });
})





