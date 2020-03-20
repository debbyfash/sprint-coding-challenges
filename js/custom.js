

const txtMessage = document.getElementById('txtMessage');
const txtFeedback = document.getElementById('txtFeedback');

txtMessage.addEventListener('keypress',countWords);

//define the event handler function,...

function countWords(){
    //get message typed in the textarea...
    let message = txtMessage.value;

    //sanitize the retrived message by taking away repeated spaces and replacing them with a single  space.
    message = message.replace(/\s+/g, ' ' );

    //split sanitize message into word pieces
    let wordPieces = message.split(' ');

    //count the tal number of words in wordpieces
    let numWords = wordPieces.length;

    let wordsRemaining = eval(250 - numWords);

    if (wordsRemaining <= 0) {
        txtFeedback.value = "Sorry, you have exceeded the maximum number of words allowed!";
    } else   {
        txtFeedback.value = `you have ${wordsRemaining} remaining.... `;
        if (wordsRemaining <= 50){
             txtFeedback.style.backgroundColor = "orange"; 
            } 
              if(wordsRemaining <= 10){
             txtFeedback.style.backgroundColor = "red";
             }

    }
    
}