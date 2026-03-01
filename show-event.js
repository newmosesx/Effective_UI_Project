let xuser_input;

const chatHistory = document.getElementById('chat-history');

document.getElementById("send-entry").onclick = function(){
    xuser_input = document.getElementById("user-input").innerText;
    document.getElementById("user-input").innerText = "";
    addMessage(xuser_input, "user-message");

    setTimeout(() => {
                addMessage("Wait I'm thinking...", 'ai-message');
    }, 600);
}


// 6. This function creates a new HTML "bubble"
function addMessage(text, className) {
    // Create a new div element
    const messageDiv = document.createElement('div');
    
    // Add classes to it (for CSS styling)
    messageDiv.classList.add('message', className);
    
    // Set the text inside
    messageDiv.innerText = text;
    
    // Add it to the history container
    chatHistory.appendChild(messageDiv);

    // Scroll to the bottom so we see the new message
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

fetch('http://localhost:8080/interactions')
    .then(response=>{
        return response.json();
    })

    .then(data=> {
        console.log(data);

        console.log("The ID is: " + data.id);
        console.log("The Message is: " + data.content);
    })
