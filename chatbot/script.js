// Get references to DOM elements
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendMessageButton = document.getElementById("sendMessage");

// Function to add a user message to the chat
function addUserMessage(message) {
    const userMessage = document.createElement("div");
    userMessage.className = "chat-message user-message";
    userMessage.textContent = message;
    chatBox.appendChild(userMessage);
    userInput.value = ""; // Clear the input field
}

// Function to add a bot message to the chat
function addBotMessage(message) {
    // Add "Bot is typing..." message
    const botIsTypingMessage = document.createElement("div");
    botIsTypingMessage.className = "chat-message bot-message";
    botIsTypingMessage.textContent = "Bot is typing...";
    chatBox.appendChild(botIsTypingMessage);

    // Simulate delay before bot responds
    setTimeout(() => {
        // Remove the "Bot is typing..." message
        chatBox.removeChild(botIsTypingMessage);

        // Add the actual bot response
        const botMessage = document.createElement("div");
        botMessage.className = "chat-message bot-message";
        botMessage.textContent = message;
        chatBox.appendChild(botMessage);
    }, 1000); // Simulating a delay for the bot's response (you can adjust this)

}

// Function to handle user input and send messages
function sendMessage(message) {
    addUserMessage(message);

    // Handle user messages here and generate bot responses
    if (message.toLowerCase() === "get started") {
        // Respond to "Get Started" message
        addBotMessage("Great! How can I assist you with your career?");
    } else if (message.toLowerCase().includes("career advice")) {
        // Respond to questions about career advice
        addBotMessage("I can provide advice on various career topics. What specific question do you have?");
    } else if (message.toLowerCase() === "goodbye") {
        // Respond to "Goodbye" message
        addBotMessage("Goodbye! If you have more questions in the future, feel free to ask.");
    } else if (message.toLowerCase() === "hello") {
        // Respond to "Hello" message
        addBotMessage("Hello! How can \n I assist you?");
    } else if (message.toLowerCase() === "hellows") {
        // Respond to "Hello" message
        addBotMessage("Hello! How can I assist you?");
    } else if (message.toLowerCase().includes("networking skills")) {
        // Respond to questions about networking skills
        addBotMessage("Networking skills are important for building professional connections. They involve...");
    } else if (message.toLowerCase().includes("what is bsit")) {
        addBotMessage("Bachelor of Science in Information Technology\n(BSIT) is an undergraduate academic degree program that focuses on providing \n students with a comprehensive understanding of information technology concepts, practices, and applications.");
    } else if (message.toLowerCase().includes("is the course aligned with my skills and interest")) {
        addBotMessage("Yes, based on your skills and interests, the BSIT course is a good fit for you. You have demonstrated strong problem-solving and logical thinking skills, and if you have a genuine interest in technology, computers, and software, the BSIT program is likely to align well with your preferences.");
    } else if (message.toLowerCase().includes("what are the possible challenges i might face in this course")) {
        addBotMessage("The BSIT program, like any academic pursuit, comes with its set of challenges. It's important to be prepared for these potential obstacles to ensure a successful academic journey. Here are the possible challenges you might face: technical complexity, fast-paced evolution, workload and time management, complex problem-solving, group projects and collaboration. While these challenges exist, there are opportunities for growth and learning.");
    } else if (message.toLowerCase().includes("what are the possible jobs in this field")) {
        addBotMessage("The field of Bachelor of Science in Information Technology\noffers exciting career opportunities in various domains. Here are the possible jobs you can pursue after completing the BSIT program: Software Developer, Network Administrator, Database Administrator, Cybersecurity Administrator, System Analyst, Web Developer, IT Project Manager, IT Consultant, Business Intelligence Analyst, Cloud Solutions Architect, and Digital Marketing Technologist. These roles showcase the versatility and demand for IT professionals.");
    } else {
        // Respond to unrecognized messages
        addBotMessage("I'm here to assist with career advice. Please ask a specific question or type 'Get Started'.");
    }
}    


// Event listener for the "Send" button
sendMessageButton.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage !== "") {
        sendMessage(userMessage);
    }
});

// Event listener for the Enter key in the input field
userInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            sendMessage(userMessage);
        }
    }
});

// Initial bot message
// addBotMessage("Hello! This is the Career Advice Consultation Chatbot");
// addBotMessage("To get started, please type: Get Started");
