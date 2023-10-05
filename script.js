// your JavaScript file
const container = document.querySelector('#container');

// Create content div
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

// Create a red paragraph
const redParagraph = document.createElement('p');
redParagraph.classList.add('red-text');
redParagraph.style.color = 'red';
redParagraph.textContent = 'Hey I\'m red!';

// Create a blue header
const blueHeader = document.createElement('h3');
blueHeader.classList.add('blue-header');
blueHeader.style.color = 'blue';
blueHeader.textContent = 'I\'m a blue h3!';

// Create a div with black border and pink background
const pinkDiv = document.createElement('div');
pinkDiv.classList.add('black-border');
pinkDiv.style.backgroundColor = 'pink';
pinkDiv.style.border = 'thick solid black';

// Create an h1 inside the pink div
const h1InPinkDiv = document.createElement('h1');
h1InPinkDiv.classList.add('h1-in-div');
h1InPinkDiv.textContent = "I'm in a div";

// Create a paragraph inside the pink div
const paraInPinkDiv = document.createElement('p');
paraInPinkDiv.classList.add('para-in-pink');
paraInPinkDiv.textContent = 'ME TOO!';

// Append elements to the pink div
pinkDiv.appendChild(h1InPinkDiv);
pinkDiv.appendChild(paraInPinkDiv);

// Append all elements to the container
container.appendChild(content);
container.appendChild(redParagraph);
container.appendChild(blueHeader);
container.appendChild(pinkDiv);


// the JavaScript file
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});