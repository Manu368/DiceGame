// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// let a = document.getElementById("resim");

// // Function to shuffle an array using Fisher-Yates algorithm
// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = getRandomInt(0, i);
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// }

// var numberButtons = document.querySelectorAll('.butn03');
// for (var i = 0; i < numberButtons.length; i++) {
//   numberButtons[i].addEventListener('click', function() {
//     resetSelection(); // Call the resetSelection function to hide previous result messages
//     var prevSelected = document.querySelector('.butn03.selected');
//     if (prevSelected) {
//       prevSelected.classList.remove('selected');
//       prevSelected.style.backgroundColor = '';
//     }
//     this.classList.add('selected');
//   });
// }

// function resetSelection() {
//   var selectedButton = document.querySelector('.butn03.selected');
//   var resultElement = document.getElementById('manu');
//   if (selectedButton) {
//     selectedButton.classList.remove('selected');
//   }
//   resultElement.innerHTML = '';
//   resultElement.style.color = '';
// }

// document.getElementById('button02').addEventListener('click', function() {

//   var playButton = document.getElementById('button02');
//   playButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
//   var selectedNumber = null;
//   var numberButtons = document.querySelectorAll('.butn03');
//   var resultElement = document.getElementById('manu');
//   var diceElement = document.getElementById('dice');

//   for (var i = 0; i < numberButtons.length; i++) {
//     if (numberButtons[i].classList.contains('selected')) {
//       selectedNumber = numberButtons[i];
//       break;
//     }
//   }

//   if (!selectedNumber) {
//    alert("Please select a Dice Face first.");
//    playButton.innerHTML = 'PLAY NOW';
    
//     return;
//   }

//   diceElement.style.animation = 'rotate 5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards';
//   var diceSound = new Audio('diceanimation.mp3');
//   diceSound.play();

//   setTimeout(function() {
//     diceElement.style.animation = 'none';
//     diceSound.pause();

//     var faces = diceElement.getElementsByClassName('face');
//     var randomNumbers = shuffleArray([1, 2, 3, 4, 5, 6]); // Shuffle the array of numbers

//     for (var i = 0; i < faces.length; i++) {
//       var dots = faces[i].getElementsByTagName('div');
//       for (var j = 0; j < dots.length; j++) {
//         dots[j].innerText = '.';
//       }
//     }

//     var generatedIndex = getRandomInt(0, faces.length - 1);
//     var generatedFace = faces[generatedIndex];
//     var generatedNumber;
//     var message = "The generated number is: ";

//     switch (generatedFace.getAttribute('id')) {
//       case 'front':
//         generatedNumber = 1;
//         message += generatedNumber;
//         break;
//       case 'back':
//         generatedNumber = 6;
//         message += generatedNumber;
//         break;
//       case 'right':
//         generatedNumber = 2;
//         message += generatedNumber;
//         break;
//       case 'left':
//         generatedNumber = 5;
//         message += generatedNumber;
//         break;
//       case 'top':
//         generatedNumber = 4;
//         message += generatedNumber;
//         break;
//       case 'bottom':
//         generatedNumber = 3;
//         message += generatedNumber;
//         break;
//       default:
//         generatedNumber = null;
//         message = "Invalid face generated.";
//         break;
//     }
//     var selectedNumberId = selectedNumber.getAttribute('id').slice(-2);
//     if (selectedNumberId === generatedNumber.toString().padStart(2, '0')) {

//       a.src = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-win-neon-signs-style-text-vector-removebg-preview_thyqjb.png";
//       resultElement.innerText =  message;
//       resultElement.style.color = "#fff";
//     } else {
//       a.src="https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-lose-comic-speech-bubble-cartoon-game-assets-vector-9673681-removebg-preview_dowzhf.png";
//       resultElement.innerText =  message;
//       resultElement.style.color = "#fff";
//     }

//     // Show the generated face on the front of the dice
//     var frontFace = document.getElementById('front');
//     frontFace.innerHTML = generatedFace.innerHTML;
//     playButton.innerHTML = 'PLAY NOW';

//     setTimeout(function() {
//       frontFace.style.transition = "background-color 0.5s"; // Apply transition effect for 0.5 seconds
//       frontFace.style.backgroundColor = "";
//       playButton.innerHTML = 'PLAY NOW'; // Remove the background color after 0.5 seconds
//     }, 5000);

//     setTimeout(function() {
//       diceElement.style.animation = 'mahi 15s infinite linear'; 
//       playButton.innerHTML = 'PLAY NOW';
//      // Resume the mahi animation after 8 seconds
//     }, 2000); // 8000 milliseconds = 8 seconds

//     // Display the modal after animation and result
//     setTimeout(function() {
//       $('#exampleModal').modal('show'); // Adjust the ID to match your modal's ID
//     }, 1000);
//   }, 2000);
// });


// var numberButtons = document.querySelectorAll('.butn03');
// for (var i = 0; i < numberButtons.length; i++) {
//   numberButtons[i].addEventListener('click', function() {
//     resetSelection(); // Call the resetSelection function to hide previous result messages
//     var prevSelected = document.querySelector('.butn03.selected');
//     if (prevSelected) {
//       prevSelected.classList.remove('selected');
//       prevSelected.style.backgroundColor = '';
//     }
//     this.classList.add('selected');
//   });
// }

// function resetSelection() {
//   var selectedButton = document.querySelector('.butn03.selected');
//   var resultElement = document.getElementById('manu');
//   if (selectedButton) {
//     selectedButton.classList.remove('selected');
//   }
//   resultElement.innerHTML = '';
//   resultElement.style.color = '';
// }




// Function to get a random integer between min and max (inclusive)
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Function to shuffle an array using Fisher-Yates algorithm
// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = getRandomInt(0, i);
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// }

// // Function to reset the selection
// function resetSelection() {
//   var selectedButton = document.querySelector('.butn03.selected');
//   var resultElement = document.getElementById('manu');
//   if (selectedButton) {
//     selectedButton.classList.remove('selected');
//   }
//   resultElement.innerHTML = '';
//   resultElement.style.color = '';
// }

// // Event listener for image selection
// function handleImageSelection() {
//   resetSelection();
//   var prevSelected = document.querySelector('.butn03.selected');
//   if (prevSelected) {
//     prevSelected.classList.remove('selected');
//     prevSelected.style.backgroundColor = '';
//   }
//   this.classList.add('selected');
// }

// // Add event listeners for image selection
// var numberButtons = document.querySelectorAll('.butn03');
// numberButtons.forEach(function (button) {
//   button.addEventListener('click', handleImageSelection);
// });

// // Function to start the timer
// function startTimer() {
//   var timerElement = document.getElementById('timer02');
//   var remainingTime = 20; // Initial time in seconds

//   // Update the timer every second
//   var timerInterval = setInterval(function () {
//     remainingTime--;
//     timerElement.textContent = remainingTime;

//     if (remainingTime <= 0) {
//       clearInterval(timerInterval); // Stop the timer when it reaches 0
//       handleTimerZeroSeconds();
//     } else if (remainingTime <= 10) {
//       disableUserInput();
//     }
//   }, 1000); // 1000 milliseconds = 1 second
// }

// // Function to disable user input (image selection and input field)
// function disableUserInput() {
//   var numberButtons = document.querySelectorAll('.butn03');
//   var inputField = document.querySelector('.form01');

//   numberButtons.forEach(function (button) {
//     button.removeEventListener('click', handleImageSelection);
//   });

//   inputField.setAttribute('disabled', true);
// }

// // Function to handle the timer reaching 0 seconds
// function handleTimerZeroSeconds() {
//   // Start "mahi" animation and display results here
//   var diceElement = document.getElementById('dice');
//   diceElement.style.animation = 'mahi 15s infinite linear';

//   var resultElement = document.getElementById('manu');
//   var selectedNumber = null;

//   for (var i = 0; i < numberButtons.length; i++) {
//     if (numberButtons[i].classList.contains('selected')) {
//       selectedNumber = numberButtons[i];
//       break;
//     }
//   }

//   if (!selectedNumber) {
//     alert('Please select a Dice Face first.');
//     return;
//   }

//   diceElement.style.animation = 'rotate 5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards';
//   var diceSound = new Audio('diceanimation.mp3');
//   diceSound.play();

//   setTimeout(function () {
//     diceElement.style.animation = 'none';
//     diceSound.pause();

//     var faces = diceElement.getElementsByClassName('face');
//     var randomNumbers = shuffleArray([1, 2, 3, 4, 5, 6]); // Shuffle the array of numbers

//     for (var i = 0; i < faces.length; i++) {
//       var dots = faces[i].getElementsByTagName('div');
//       for (var j = 0; j < dots.length; j++) {
//         dots[j].innerText = '.';
//       }
//     }

//     var generatedIndex = getRandomInt(0, faces.length - 1);
//     var generatedFace = faces[generatedIndex];
//     var generatedNumber;
//     var message = 'The generated number is: ';

//     switch (generatedFace.getAttribute('id')) {
//       case 'front':
//         generatedNumber = 1;
//         message += generatedNumber;
//         break;
//       case 'back':
//         generatedNumber = 6;
//         message += generatedNumber;
//         break;
//       case 'right':
//         generatedNumber = 2;
//         message += generatedNumber;
//         break;
//       case 'left':
//         generatedNumber = 5;
//         message += generatedNumber;
//         break;
//       case 'top':
//         generatedNumber = 4;
//         message += generatedNumber;
//         break;
//       case 'bottom':
//         generatedNumber = 3;
//         message += generatedNumber;
//         break;
//       default:
//         generatedNumber = null;
//         message = 'Invalid face generated.';
//         break;
//     }

//     var selectedNumberId = selectedNumber.getAttribute('id').slice(-2);
//     var a = document.getElementById('resim');

//     if (selectedNumberId === generatedNumber.toString().padStart(2, '0')) {
//       a.src = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-win-neon-signs-style-text-vector-removebg-preview_thyqjb.png';
//       resultElement.innerText = message;
//       resultElement.style.color = '#fff';
//     } else {
//       a.src = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-lose-comic-speech-bubble-cartoon-game-assets-vector-9673681-removebg-preview_dowzhf.png';
//       resultElement.innerText = message;
//       resultElement.style.color = '#fff';
//     }

//     // Show the generated face on the front of the dice
//     var frontFace = document.getElementById('front');
//     frontFace.innerHTML = generatedFace.innerHTML;

//     setTimeout(function () {
//       frontFace.style.transition = 'background-color 0.5s'; // Apply transition effect for 0.5 seconds
//       frontFace.style.backgroundColor = '';
//     }, 5000);

//     setTimeout(function () {
//       diceElement.style.animation = 'mahi 15s infinite linear';
//     }, 2000);
//     setTimeout(function() {
//       $('#exampleModal').modal('show'); // Adjust the ID to match your modal's ID
//     }, 1000);
//   }, 2000);
  
// }

// // Call the startTimer function when the game loads
// window.addEventListener('load', startTimer);





function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = getRandomInt(0, i);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// Function to reset the selection
function resetSelection() {
  var selectedButton = document.querySelector('.butn03.selected');
  var resultElement = document.getElementById('manu');
  if (selectedButton) {
    selectedButton.classList.remove('selected');
  }
  resultElement.innerHTML = '';
  resultElement.style.color = '';
}

// Event listener for image selection
function handleImageSelection() {
  resetSelection();
  var prevSelected = document.querySelector('.butn03.selected');
  if (prevSelected) {
    prevSelected.classList.remove('selected');
    prevSelected.style.backgroundColor = '';
  }
  this.classList.add('selected');
}

// Add event listeners for image selection
var numberButtons = document.querySelectorAll('.butn03');
numberButtons.forEach(function (button) {
  button.addEventListener('click', handleImageSelection);
});

// Function to start the timer
function startTimer() {
  var timerElement = document.getElementById('timer02');
  var remainingTime = 150; // Initial time in seconds

  // Update the timer every second
  var timerInterval = setInterval(function () {
    remainingTime--;
    timerElement.textContent = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timerInterval); // Stop the timer when it reaches 0
      handleTimerZeroSeconds();
    } else if (remainingTime <= 10) {
      timerElement.style.color = 'red'; 
      disableUserInput();
      var elementsToFade = document.querySelectorAll('.input-group, .butn03, .button02');
      elementsToFade.forEach(function (element) {
        element.classList.add('opacity-05');
      });
    }
  }, 1000); // 1000 milliseconds = 1 second
}

// Function to disable user input (image selection and input field)
function disableUserInput() {
  var numberButtons = document.querySelectorAll('.butn03');
  var inputField = document.querySelector('.form01');

  numberButtons.forEach(function (button) {
    button.removeEventListener('click', handleImageSelection);
  });

  inputField.setAttribute('disabled', true);
}

// Function to handle the timer reaching 0 seconds
function handleTimerZeroSeconds() {
  // Start "mahi" animation and display results here
  var diceElement = document.getElementById('dice');
  diceElement.style.animation = 'mahi 15s infinite linear';

  var resultElement = document.getElementById('manu');
  var selectedNumber = null;

  for (var i = 0; i < numberButtons.length; i++) {
    if (numberButtons[i].classList.contains('selected')) {
      selectedNumber = numberButtons[i];
      break;
    }
  }

  if (!selectedNumber) {
    alert('Please select a Dice Face first.');
    return;
  }

  diceElement.style.animation = 'rotate 5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards';
  var diceSound = new Audio('diceanimation.mp3');
  diceSound.play();

  setTimeout(function () {
    diceElement.style.animation = 'none';
    diceSound.pause();

    var faces = diceElement.getElementsByClassName('face');
    var randomNumbers = shuffleArray([1, 2, 3, 4, 5, 6]); // Shuffle the array of numbers

    for (var i = 0; i < faces.length; i++) {
      var dots = faces[i].getElementsByTagName('div');
      for (var j = 0; j < dots.length; j++) {
        dots[j].innerText = '.';
      }
    }

    var generatedIndex = getRandomInt(0, faces.length - 1);
    var generatedFace = faces[generatedIndex];
    var generatedNumber;
    var message = 'The Generated Number is: ';

    switch (generatedFace.getAttribute('id')) {
      case 'front':
        generatedNumber = 1;
        message += generatedNumber;
        break;
      case 'back':
        generatedNumber = 6;
        message += generatedNumber;
        break;
      case 'right':
        generatedNumber = 2;
        message += generatedNumber;
        break;
      case 'left':
        generatedNumber = 5;
        message += generatedNumber;
        break;
      case 'top':
        generatedNumber = 4;
        message += generatedNumber;
        break;
      case 'bottom':
        generatedNumber = 3;
        message += generatedNumber;
        break;
      default:
        generatedNumber = null;
        message = 'Invalid face generated.';
        break;
    }

    var selectedNumberId = selectedNumber.getAttribute('id').slice(-2);
    var a = document.getElementById('resim');

    if (selectedNumberId === generatedNumber.toString().padStart(2, '0')) {
      a.src = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-win-neon-signs-style-text-vector-removebg-preview_thyqjb.png';
      resultElement.innerText = message;
      resultElement.style.color = 'green';
    } else {
      a.src = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-lose-comic-speech-bubble-cartoon-game-assets-vector-9673681-removebg-preview_dowzhf.png';
      resultElement.innerText = message;
      resultElement.style.color = 'red';
    }

    // Show the generated face on the front of the dice
    var frontFace = document.getElementById('front');
    frontFace.innerHTML = generatedFace.innerHTML;

    setTimeout(function () {
      frontFace.style.transition = 'background-color 0.5s'; // Apply transition effect for 0.5 seconds
      frontFace.style.backgroundColor = '';
    }, 5000);

    setTimeout(function () {
      diceElement.style.animation = 'mahi 15s infinite linear';
    }, 2000);

    setTimeout(function () {
      $('#exampleModal').modal('show'); // Adjust the ID to match your modal's ID
    }, 1000);
  }, 2000);
}

function enableUserInput() {
  var numberButtons = document.querySelectorAll('.butn03');
  var inputField = document.querySelector('.form01');

  numberButtons.forEach(function (button) {
    button.addEventListener('click', handleImageSelection);
  });

  inputField.removeAttribute('disabled');
}

const ab = document.getElementById("close01");
ab.addEventListener("click", function(){
  startTimer();
  resetSelection();
  enableUserInput();
  var elementsToFade = document.querySelectorAll('.input-group, .butn03, .button02');
  elementsToFade.forEach(function (element) {
    element.classList.remove('opacity-05');
    
  });

})
window.addEventListener('load', startTimer);






