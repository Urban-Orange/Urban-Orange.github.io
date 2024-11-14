const codes = [
    // Strictly Come Dancing
    { code: "382917", category: "Strictly Come Dancing", type: "trivia", question: "When did Strictly Come Dancing first air on our TV screens?", answer: "2004", prize: "No washing up week" },
    { code: "529768", category: "Strictly Come Dancing", type: "trivia", question: "Which professional dancer has the most wins?", answer: "Aliona Vilani", prize: "Cups of Tea - dont need a wee!" },
    { code: "283561", category: "Strictly Come Dancing", type: "trivia", question: "It's a ten from ___", answer: "Len", prize: "80s playlist" },
    { code: "143582", category: "Strictly Come Dancing", type: "trivia", question: "Strictly has one dance type named after a fizzy drink, what is it?", answer: "tango", prize: "Personalised Painting" },
    { code: "935104", category: "Strictly Come Dancing", type: "trivia", question: "In which ballroom dance would you expect to see a fleckerl?", answer: "Viennese Waltz", prize: "Five FREE Massages" },
    { code: "631950", category: "Strictly Come Dancing", type: "trivia", question: "The 'Couples’ Choice' category was introduced in what year?", answer: "2018", prize: "Relaxing swimming session" },
    { code: "509837", category: "Strictly Come Dancing", type: "trivia", question: "Who was the first celebrity to win Strictly?", answer: "Natasha Kaplinsky", prize: "Gym membership" },
    { code: "849231", category: "Strictly Come Dancing", type: "trivia", question: "What memorable (one word) type of dance did Bill Bailey perform to 'Rapper’s Delight'?", answer: "Street", prize: "Meal out with family" },
    { code: "318467", category: "Strictly Come Dancing", type: "trivia", question: "Who scored the first perfect 40 in Strictly history?", answer: "Jill Halfpenny", prize: "London Theatre trip" },
    { code: "598247", category: "Strictly Come Dancing", type: "trivia", question: "Who set the record for the most perfect scores in a single season?", answer: "Ashley Roberts", prize: "Sunday lunch with Family" },

    // General/Riddles
    { code: "562304", category: "General", type: "riddle", question: "I have keys but can’t open doors. What am I?", answer: "keyboard", prize: "CHOCKLATE CAKE" },
    { code: "724650", category: "General", type: "riddle", question: "I can travel all around the world without moving. What might I be?", answer: "stamp", prize: "Cinema trip" },
    { code: "615783", category: "General", type: "riddle", question: "The more of me you take, the more you leave behind. What am I?", answer: "Footsteps", prize: "" },
    { code: "430681", category: "General", type: "riddle", question: "What appears once in a minute, twice in a moment, but never in a thousand years?", answer: "M", prize: "Cider and crisps" },
    { code: "709428", category: "General", type: "riddle", question: "I have a lot of teeth but can’t bite. Any guesses?", answer: "comb", prize: "Christmas photo album" },
    { code: "680139", category: "General", type: "riddle", question: "I'm tall when I’m young, and short when I’m old. What am I?", answer: "candle", prize: "SUPER socks" },
    { code: "510473", category: "General", type: "riddle", question: "I have hands but can’t clap. What might I be?", answer: "clock", prize: "Record & CD player" },
    { code: "142960", category: "General", type: "riddle", question: "I have a head, a tail, and no legs. What am I?", answer: "coin", prize: "Teapot and loose-leaf tea" },
    { code: "675109", category: "General", type: "riddle", question: "The more I dry, the wetter I get. What am I?", answer: "towel", prize: "Forza Ferrai CAP" },
    { code: "501642", category: "General", type: "riddle", question: "I’m something you can catch but never throw. What am I?", answer: "cold", prize: "Oh so fine Flowers" },

    // Formula 1
    { code: "790145", category: "Formula 1", type: "trivia", question: "Where was the first-ever Formula 1 race held?", answer: "Silverstone", prize: "Baked goods" },
    { code: "924675", category: "Formula 1", type: "trivia", question: "Which F1 driver earned the nickname 'The Iceman'?", answer: "Kimi Raikkonen", prize: "Poem" },
    { code: "653971", category: "Formula 1", type: "trivia", question: "Which team has claimed the most championships in F1 history?", answer: "Ferrari", prize: "Dinner by Kai" },
    { code: "375092", category: "Formula 1", type: "trivia", question: "Who never gets driver of the day?", answer: "Max Verstappen", prize: "Funny Film Trailer" },
    { code: "980324", category: "Formula 1", type: "trivia", question: "What’s the fastest recorded speed in F1? (only need the number)", answer: "231", prize: "Piece of art" },
    { code: "807514", category: "Formula 1", type: "trivia", question: "What track has the slowest corner?", answer: "Monaco", prize: "Bucksfizz" },
    { code: "248906", category: "Formula 1", type: "trivia", question: "Who qualified in the top ten for over 130 races in a row?", answer: "Bottas", prize: "Homemade bread" },
    { code: "174859", category: "Formula 1", type: "trivia", question: "How many pole positions does Lewis Hamilton have?", answer: "104", prize: "Original music composition" },
    { code: "742861", category: "Formula 1", type: "trivia", question: "Which team did Ayrton Senna drive for in 1991?", answer: "McLaren", prize: "Playhouse drama" },
    { code: "505050", category: "Formula 1", type: "trivia", question: "Which team did Vettel get his first win in?", answer: "Torro Rosso", prize: "Victory Scones - You completed all QUESTIONS WOOO! 🎉 " },

    // Disney
    { code: "186572", category: "Disney", type: "trivia", question: "Who says, 'To infinity and beyond!'?", answer: "Buzz Lightyear", prize: "More flowers" },
    { code: "614870", category: "Disney", type: "trivia", question: "Which Disney movie has Rowan Atkinson play a bird?", answer: "The Lion King", prize: "Karaoke Party" },
    { code: "304561", category: "Disney", type: "trivia", question: "Who is the monkey in 'Aladdin'?", answer: "Abu", prize: "Breakfast in bed" },
    { code: "251084", category: "Disney", type: "trivia", question: "What’s the name of the snowman in 'Frozen'?", answer: "Olaf", prize: "Podcast / trailer" },
    { code: "631472", category: "Disney", type: "trivia", question: "In 'The Little Mermaid,' who is Ariel's fish friend?", answer: "Flounder", prize: "3D sculpture/craft" },
    { code: "749820", category: "Disney", type: "trivia", question: "Who is Bambi’s rabbit friend?", answer: "Thumper", prize: "17 loving texts" },
    { code: "836150", category: "Disney", type: "trivia", question: "What colour is Cinderella’s ballroom dress?", answer: "Blue", prize: "Even more flowers" },
    { code: "978314", category: "Disney", type: "trivia", question: "Who is the henchman who works alongside Horace?", answer: "Jasper", prize: "Nature Walk" },
    { code: "520648", category: "Disney", type: "trivia", question: "What is the name of Mickey Mouse's dog?", answer: "Pluto", prize: "Out to lunch" },
    { code: "905318", category: "Disney", type: "trivia", question: "Who sings 'Under the Sea'?", answer: "Sebastian", prize: "Flowers - your pick" },

    // Flowers/Birds
    { code: "187230", category: "Flowers", type: "riddle", question: "Which flower loves to follow the sun?", answer: "sunflower", prize:"Wholesome Hugs" },
    { code: "569102", category: "Flowers", type: "trivia", question: "This flower is named after a Greek hero known for his good looks.", answer: "Narcissus", prize: "New pajamas" },
    { code: "459231", category: "Birds", type: "trivia", question: "Which bird is known for its colorful tail feathers?", answer: "peacock", prize: "Spa day" },
    { code: "320148", category: "Birds", type: "trivia", question: "The largest bird in the world, which can’t fly?", answer: "ostrich", prize: "Evening under stars (Camping)" },
    { code: "105836", category: "Flowers/Birds", type: "trivia", question: "Which bird symbolizes wisdom?", answer: "Owl", prize: "Apple Cakes by Kai" },
    { code: "562073", category: "Flowers/Birds", type: "trivia", question: "What’s the main food for hummingbirds?", answer: "Nectar", prize: "Wii Fitafon" },
    { code: "354687", category: "Flowers/Birds", type: "trivia", question: "Which flower is known as the 'queen of the night'?", answer: "Orchid", prize: "Lemon drizzle cakes" },
    { code: "784659", category: "Flowers/Birds", type: "trivia", question: "What bird of prey is named in aircraft (HINT: F-16 Fighting _______) ?", answer: "Falcon", prize: "Roulade" },
    { code: "104267", category: "Flowers/Birds", type: "trivia", question: "What bird can run up to 70km/h?", answer: "Ostrich", prize: "Evening out with Daddy" },
    { code: "682374", category: "Flowers/Birds", type: "trivia", question: "What flower’s seeds are often used in cooking and baking?", answer: "Poppy", prize: "Crazyy Crumble" },
];

const congratulatoryPhrases = [
    "The Winner TAKES IT ALL!",
    "Fantastic! Smooth Operator!",
    "Your having the time of my life!",
    "A whole new world, you're correct!",
    "You are the dancing queen!",
    "Your a cool chameleon!",
    "You got the eye of the tiger girl!",
    "I wanna dance with somebody who got the answer correctomondo!",
    "Gonna run to you quiz master!",
    "Don't stop you NOW your onnn a roll!",
    "Takke on youuu you got it bang on!"
];

// Function to check the entered code and display the associated question or puzzle
function checkCode() {
    const codeInput = document.getElementById("codeInput").value;
    const resultDiv = document.getElementById("result");
    const codeData = codes.find(c => c.code === codeInput);

    if (codeData) {
        let challengeHTML = `<strong>${codeData.category}:</strong> `;

        // Display based on the type of challenge
        switch (codeData.type) {
            case "trivia":
                challengeHTML += `${codeData.question} <br>
                    <input type="text" id="answerInput" placeholder="Your answer here">
                    <button onclick="checkAnswer('${codeData.answer}', '${codeData.prize}')">Submit Answer</button>`;
                break;
                
            case "wordsearch":
                challengeHTML += `${codeData.puzzle} <br>
                    <input type="text" id="answerInput" placeholder="Fill in the blanks">
                    <button onclick="checkAnswer('${codeData.answer}', '${codeData.prize}')">Submit Answer</button>`;
                break;
                
            case "crossword":
                challengeHTML += `Crossword Hint: ${codeData.hint} <br>
                    <input type="text" id="answerInput" placeholder="Enter your answer">
                    <button onclick="checkAnswer('${codeData.answer}', '${codeData.prize}')">Submit Answer</button>`;
                break;
                
            case "visual":
                challengeHTML += `<br><img src="${codeData.image}" alt="Visual puzzle" style="width:150px;"><br>
                    ${codeData.question} <br>
                    <input type="text" id="answerInput" placeholder="Your answer here">
                    <button onclick="checkAnswer('${codeData.answer}', '${codeData.prize}')">Submit Answer</button>`;
                break;

            case "riddle":
                challengeHTML += `${codeData.question} <br>
                    <input type="text" id="answerInput" placeholder="Your answer here">
                    <button onclick="checkAnswer('${codeData.answer}', '${codeData.prize}')">Submit Answer</button>`;
                break;

            default:
                challengeHTML = "Challenge type not recognized!";
                break;
        }

        resultDiv.innerHTML = challengeHTML;
        resultDiv.style.display = "block";
    } else {
        resultDiv.innerHTML = "Invalid code. Please try again!";
        resultDiv.style.display = "block";
    }
}

function checkAnswer(correctAnswer, prize, isFinalQuestion = false) {
    const answerInput = document.getElementById("answerInput").value;
    const resultDiv = document.getElementById("result");

    if (answerInput.toLowerCase() === correctAnswer.toLowerCase()) {
        // Play the celebratory message or music based on the phrase
        if (isFinalQuestion) {
            resultDiv.innerHTML = "🎉 Correct! You've completed all the questions! 🎉<br> <strong>Surprise:</strong> Enjoy a special video or message for you!";
            document.body.style.backgroundColor = "#ffd700";
        } else {
            const randomPhrase = congratulatoryPhrases[Math.floor(Math.random() * congratulatoryPhrases.length)];
            resultDiv.innerHTML = `${randomPhrase}<br><strong>Your prize:</strong> ${prize}`;

            // Dynamically create a new Audio object for each successful correct answer
            let audio;
            if (randomPhrase === "The Winner TAKES IT ALL!") {
                audio = new Audio('winner_takes_it_all_only.mp3');
            } else if (randomPhrase === "Fantastic! Smooth Operator!") {
                audio = new Audio('smooth_operator.mp3');
            } else if (randomPhrase === "Your a cool chameleon!") {
                audio = new Audio('chameleon.mp3');
            } else if (randomPhrase === "You got the eye of the tiger girl!") {
                audio = new Audio('eye_tiger.mp3');
            } else if (randomPhrase === "I wanna dance with somebody who got the answer correctomondo!") {
                audio = new Audio('dance_somebody.mp3');
            } else if (randomPhrase === "You're having the time of my life!") {
                audio = new Audio('time_of_your_life.mp3');
            } else if (randomPhrase === "A whole new world, you're correct!") {
                audio = new Audio('whole_new_world.mp3');
            } else if (randomPhrase === "You are the dancing queen!") {
                audio = new Audio('dancing_queen.mp3');
            } else if (randomPhrase === "Don't stop you NOW your onnn a roll!") {
                audio = new Audio('stop_me.mp3');
            } else if (randomPhrase === "Gonna run to you quiz master!") {
                audio = new Audio('run_to_you.mp3');
            } else if (randomPhrase === "Takke on youuu you got it bang on!") {
                audio = new Audio('take_me.mp3');
            }

            // Play the audio if it was set
            if (audio) {
                audio.play();
            }
        }
    } else {
        resultDiv.innerHTML = `Incorrect! Please try again :) .`;
        document.getElementById("answerInput").value = ""; // Clear input on incorrect attempt
    }

    resultDiv.style.display = "block";
}
