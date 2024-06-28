function createMessage(){
    let message ={}
    message.sender = prompt("What is your name?");
    message.request = prompt("How much do you love Beyonce?");
    
      beyoncealbumParagraph.innerHTML =  `Dear Beyhive, Hi this is ${message.sender}, I would like to join the Beyhive. I love Beyonce! ${message.request} , ${message.sender}`;
    
    }
    joinbeyhive.onclick = createMessage;