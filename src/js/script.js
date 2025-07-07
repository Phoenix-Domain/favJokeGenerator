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

const hideLoadingMsg = () => {
  loadingMsg.classList.remove('shown')
}

const getJoke = () => {
  console.log('function runs');
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(data => {
      jokeList.innerHTML = "";
      jokeBtn.disabled = true;
      setTimeout(() => jokeBtn.disabled = false, 1000)
      const setUp = data.setup;
      const punchLine = data.punchline;
      let joke = document.createElement('p');
      joke.innerText = `Setup: ${setUp} \n\n PunchLine: ${punchLine}`;
      jokeList.append(joke);
      hideLoadingMsg()
    })
    .catch(err => {
      hideLoadingMsg();
      let joke = document.createElement('p');
      joke.innerText = `Sorry, ${err}, Please try again`;
      jokeList.append(joke)
    })
}

//show loading message
//fetch joke from API
//Display joke setup + punchline
//Hide loading message
//if error, show friendly message