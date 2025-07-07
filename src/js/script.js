const jokeBtn = document.querySelector('#getJokeBtn');
const loadingMsg = document.querySelector('#loadingMsg');
const jokeList = document.querySelector('#jokeList')

//click button
jokeBtn.addEventListener('click', e => {
  e.preventDefault();
  showLoadingMsg();
  getJoke();
});

const showLoadingMsg = () => {
  loadingMsg.classList.toggle('shown')
}

const getJoke = () => {
  console.log('function runs');
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(data => console.log(data.punchline))
}
//show loading message
//fetch joke from API
//Display joke setup + punchline
//Hide loading message
//if error, show friendly message