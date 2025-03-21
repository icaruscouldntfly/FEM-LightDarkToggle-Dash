console.log('Hello World')
console.log ('Dev12: Hey Dave left some stuff in the code that still needs to be ironed out. have a look when you get the chance.')
console.log ('Dev14: Thanks Rich, I have left it in the comments for now we can sort it out another time')
console.log ('Dev13: Dave Richard stop having conversations in the Console log')
console.log ('Dev12: Bugger off Ron')
console.log ('Dev14: Leave our chats alone Ron')
console.log ('Dev12: Hey Rich, Management said we need to stop leaving the code here it can be bad for them to see')
console.log ('Dev14: Screw Management man it does not matter they can complain all they want')
console.log ('Dev12: Hey man they are cutting the terminal idea so we can just cut it from the project')
console.log ('Dev14: Leave it for the next guy to sort out')

function changeBackground(imageUrl) {
  setTimeout(() => {
      document.body.style.backgroundImage = `url(${imageUrl})`;
      document.body.classList.remove('slide-up');
  }, 1000);
}

document.querySelector('.btnlight').addEventListener('click', function() {
  document.body.style.backgroundImage = 'url("C:/Users/andre/Documents/GitHub/FEM-LightDarkToggle-Dash/backgrounds/light.png")';
});

document.querySelector('.btndark').addEventListener('click', function() {
  document.body.style.backgroundImage = 'url("C:/Users/andre/Documents/GitHub/FEM-LightDarkToggle-Dash/backgrounds/dark.png")';
});

document.querySelector('.btnopt').addEventListener('click', function() {
  document.body.style.backgroundImage = 'url("C:/Users/andre/Documents/GitHub/FEM-LightDarkToggle-Dash/backgrounds/option.png")';
});

function detectSystemColorScheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    changeBackground('C:/Users/andre/Documents/GitHub/FEM-LightDarkToggle-Dash/backgrounds/dark.png');
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    changeBackground('C:/Users/andre/Documents/GitHub/FEM-LightDarkToggle-Dash/backgrounds/light.png');
  } else {
    changeBackground('C:/Users/andre/Documents/GitHub/FEM-LightDarkToggle-Dash/backgrounds/option.png');
  }
}

// Call the function to set the initial background based on system preference
detectSystemColorScheme();
