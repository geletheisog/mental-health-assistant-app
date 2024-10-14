gameFrame.src = 'game.html'; // Adjust according to your actual game file name


const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Did you hear about the mathematician who’s afraid of negative numbers? He'll stop at nothing to avoid them!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised!",
    "If you are so down?? So does Sencil and Calago 😒😭😭",
    "Wan't to be Happy? look at the face of the person beside you,, for 1 hour "


];

let jokeSent = false; // Flag to track if a joke was sent

const analyzeSentiment = (text) => {
    const lowerCaseText = text.toLowerCase().trim(); // Convert input to lowercase and trim whitespace

    // Handle the case when a joke was sent and the user is now happy
    if (jokeSent) {
        if (lowerCaseText.includes("happy") || lowerCaseText.includes("good") ||
            lowerCaseText.includes("better") || lowerCaseText.includes("hahaha") ||
            lowerCaseText.includes("funny") || lowerCaseText.includes("cheerful") || lowerCaseText.includes("silly")) {
            jokeSent = false; // Reset the flag
            return "I'm so glad to see you're feeling better! Keep smiling!";
        }
    }

    // Check for extreme distress
    if (lowerCaseText.includes("kill myself") || lowerCaseText.includes("want to die") ||
        lowerCaseText.includes("suicidal") || lowerCaseText.includes("end my life")) {
        return "I'm really sorry to hear that you're feeling this way. It's important to talk about these feelings. You are not alone, and there are people who care about you. Let's find a way to get through this together. What’s on your mind?";
    }

    // Check for negative emotions
    else if (lowerCaseText.includes("sad") || lowerCaseText.includes("stressed") ||
        lowerCaseText.includes("bad") || lowerCaseText.includes("down") ||
        lowerCaseText.includes("upset") || lowerCaseText.includes("not good")) {
        jokeSent = false; // Ensure no joke is sent now
        return "I'm really sorry to hear that you're feeling this way. It's important to talk about it. How can I support you?";
    }

    // Check for desire to have friends
    else if (lowerCaseText.includes("want to have friends") || lowerCaseText.includes("let's be friends") ||
        lowerCaseText.includes("want to be friends") || lowerCaseText.includes("friends")) {
        return "I’d love to be your friend! It's wonderful to connect with you. What do you like to do for fun?";
    } else if (lowerCaseText.includes("fine") || lowerCaseText.includes("alright") || lowerCaseText.includes("how are you")) {
        return "Don't mind how I feel, I'm an AI built by SC, let's mind your feelings instead. So how are you feeling today?";
    } else if (lowerCaseText.includes("hi")) {
        return "Hello!! How are you feeling today?";
    } else if (lowerCaseText.includes("really") || lowerCaseText.includes("sure ba?")) {
        return "Really jud, maayo pag mag dula ka";
    } else if (lowerCaseText.includes("sure uy")) {
        return "Trust me cause I'm an AI not a boy";
    } else if (lowerCaseText.includes("hello")) {
        return "Hi!! How are you feeling today?";
    } else if (lowerCaseText.includes("gwapo") || lowerCaseText.includes("cute") || lowerCaseText.includes("gwapa") || lowerCaseText.includes("bright") ||
        lowerCaseText.includes("pogi")) {
        return "Very Confident👏👏. What’s been on your mind instead?";
    } else if (lowerCaseText.includes("my course")) {
        return "You're course must be ComScie I guest hahahahah, What do you like to do for fun?";
    } else if (lowerCaseText.includes("depressed")) {
        return "Cheer up! Do you want a friend? Because I can be a friend just for you!";
    } else if (lowerCaseText.includes("crazy")) {
        return "Crazy you! Pagtarong diha ";
    } else if (lowerCaseText.includes("play") || lowerCaseText.includes("some game") ||
        lowerCaseText.includes("recommend a game")) {
        return "Sure!! I have that in here. Just press the button Play";
    } else if (lowerCaseText.includes("really?")) {
        return "Of course! So how about we play a simple game instead, To boost your mood and energy?";
    } else if (lowerCaseText.includes("have you been depressed") || lowerCaseText.includes("have you ever been sad?") ||
        lowerCaseText.includes("are you happy?") || lowerCaseText.includes("anxiety") || lowerCaseText.includes("feelings")) {
        return "As an AI, I don't have feelings, but I'm here to help you talk about yours. What’s been on your mind?";
    } else if (lowerCaseText.includes("do you have a name") || lowerCaseText.includes("your name") || lowerCaseText.includes(" you")) {
        return "You can call me your friendly assistant! I'm here to help you. What's on your mind?";
    } else if (lowerCaseText.includes("confused") || lowerCaseText.includes("scrambled")) {
        return "It sounds like you're feeling a bit mixed up. Can you share what’s on your mind? I’m here to listen.";
    } else if (lowerCaseText.includes("just later")) {
        return "That's totally fine! Whenever you're ready to share or talk more, I'm here for you.";
    } else if (lowerCaseText.includes("blank") || lowerCaseText.includes("none") || lowerCaseText.includes("miss")) {
        return "That's sad news, but I'm here to be your chat friend. How about reading my notes?";
    } else if (lowerCaseText.includes("sure") || lowerCaseText.includes("make me happy") || lowerCaseText.includes("go on ")) {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        jokeSent = true; // Set the flag indicating a joke was sent
        return `Sure! Here’s a joke for you: ${randomJoke}`;
    } else if (lowerCaseText.includes("happy") || lowerCaseText.includes("good") ||
        lowerCaseText.includes("great") || lowerCaseText.includes("fine") ||
        lowerCaseText.includes("hahaha")) {
        return "I'm thrilled to hear that you're in such a good mood! Laughter is the best medicine. What else has been making you smile today?";
    } else if (lowerCaseText.includes("joke") || lowerCaseText.includes("tell me a joke") || lowerCaseText.includes("more") || lowerCaseText.includes("another")) {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        jokeSent = true; // Set the flag indicating a joke was sent
        return `Sure! Here’s a joke for you: ${randomJoke}`;
    } else {
        return "Kindly type only words that are in the dictionary or recognizable";
    }
};


// Event Listener for Send Button
document.getElementById('sendBtn').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;
    if (userInput) {
        const userMessage = `<p><strong>You:</strong> ${userInput}</p>`;
        document.getElementById('conversation').innerHTML += userMessage;

        // Get AI response
        const response = analyzeSentiment(userInput);
        const aiMessage = `<p><strong>Assistant:</strong> ${response}</p>`;
        document.getElementById('conversation').innerHTML += aiMessage;

        // Check if the response is about playing and create a button
        if (response.includes("Just press the button Play")) {
            const playButton = document.createElement('button');
            playButton.textContent = "Play";
            playButton.id = "playBtn";

            playButton.addEventListener('click', () => {
                // Hide the mental health app
                const assistantContainer = document.querySelector('.app-container');
                assistantContainer.style.display = 'none'; // Hide the assistant app

                // Show the game iframe and load the game HTML
                const gameFrame = document.getElementById('gameFrame');
                gameFrame.src = 'game.html'; // Set the correct path to your game
                gameFrame.style.display = 'block'; // Show the iframe

                // Display message in the conversation
                const playMessage = `<p><strong>Assistant:</strong> Let's start playing! 🎮</p>`;
                document.getElementById('conversation').innerHTML += playMessage;
            });

            // Append the play button to the conversation
            document.getElementById('conversation').appendChild(playButton);
        }


        // Add to mood tracker only if it's not a duplicate
        const moodTracker = document.getElementById('moodHistory');
        const moodExists = Array.from(moodTracker.getElementsByTagName('li')).some(li => li.textContent === `You felt: ${userInput}`);

        if (!moodExists) {
            const newMood = document.createElement('li');
            newMood.textContent = `You: ${userInput}`;
            moodTracker.appendChild(newMood);
        }

        // Clear input field
        document.getElementById('userInput').value = '';
    }
});