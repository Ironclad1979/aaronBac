
const jokes = document.querySelector('#jokes');
const button = document.querySelector('#dadJokeButton');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText);
    const newLI = document.createElement('LI');
    
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json', } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        console.log(res.data.joke);
        return res.data.joke;
    }
    catch (e) {
        return "Sorry No Jokes right now."
    }   
}

if (button) {
    button.addEventListener('click', addNewJoke);
}

  








