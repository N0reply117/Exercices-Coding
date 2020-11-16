
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
const newQuoteButton = document.querySelector('#js-new-quote');
const spinner = document.querySelector('#js-spinner');
const twitterButton = document.querySelector('#js-tweet');



newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
    console.log("quote button was clicked");
}

async function getQuote() {
  // remove the "hidden" class on the spinner
  spinner.classList.remove('hidden');
  // disable the quote button
  newQuoteButton.disabled = true;

    try {
      const response = await fetch(endpoint)
      // If the response is not 200 OK...
      if (!response.ok) {
        // ...throw an error. This causes control flow
        // to skip to the `catch` block below.
        throw Error(response.statusText)
      }
  
      const json = await response.json();
      displayQuote(json.message);
      setTweetButton(json.message);
    } catch (err) {
      console.log(err)
      alert('Failed to fetch new quote');
    } finally {
      // enable the quote button
      newQuoteButton.disabled = false;
      // add the "hidden" class back again
      spinner.classList.add('hidden');
    }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

function setTweetButton(quote) {
  twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
}

getQuote();


  

 