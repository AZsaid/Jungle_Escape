var stories = [
    {
        // index = 0
        "story": "its holiday today, and you have decided to go to a risky journey alone in a jungle.\nyou have parked your car in a parking spot near the jungle, and went to a cool chill journey in the jungle.\nin your way back to the car, you still inside the jungle, its just you, your knife and god watching from up, you will be facing problems, pick the right answers to get out of the jungle safe.",

        "opt1": "Play",
        "Route1": 1, // Positive: Story3
        "opt2": "Quit",
        "Route2": -0,// Negative: Ending
        "opt3": "do nothing",
        "Route3": "mabye",

    },
    {
        // index = 1
        "story": "wow!, im tierd and hungry, but i need to keep going, we are almost there. oh wait there are alot of tree branches covering the way, what do i do? ",

        "opt1": "cut them using my hand, im way too strong",
        "Route1": -1,// in endings
        "opt2": "simply cut them with my knife",
        "Route2": 2,
        "opt3": "call 911",
        "Route3": -2,// in endings

    },
    {
        // index = 2
        "story": "nice cut!, wow, there is somthing coming out of the cut branches, is that a tasty honey? what should i do?",

        "opt1": "ya ya for sure its honey, let me eat it",
        "Route1": 3,
        "opt2": "not eating it, what kind of honey can be in a jungle",
        "Route2": -3,// in endings
        "opt3": "let me just get food from other people in the jungle",
        "Route3": -4,// in endings

    },

    {
        // index = 3
        "story": "NICE TASTE, its honey.\n its night now...\nwow the car is right there i can see it!!!\nbut wait,OMG there is a bear laying near my car...what do i do??",

        "opt1": "let me sneak to the car and escape finally",
        "Route1": -7,// in endings
        "opt2": "i better climb a tree until the bear will go and then finish this journey",
        "Route2": -5,// in endings
        "opt3": "oh well, im now close to the parking, let me scream for help",
        "Route3": -6,// in endings

    },
];

var endings = [
    {
        // index = 0
        "story": "ok, well seems like your tired of journeys\n THE END.",

        "opt1": "Play again",
        "Route1": 0,// in stories
        "opt2": "Quit",
        "Route2": -8,
    },
    {
        // index = 1
        "story": "what bro? seriosly? the branches in the jungle are sharp my guy.\n THE END",

        "opt1": "Play again",
        "Route1": 0,// in stories,
        "opt2": "Quit",
        "Route2": -8,
    },
    {
        // index = 2
        "story": "\surprisingly,\ you dont have a phone .\n THE END",

        "opt1": "Play again",
        "Route1": 0,// in stories
        "opt2": "Quit",
        "Route2": -8,
    },
    {
        // index = 3
        "story": "it was honey...and you died from lack of food.\n THE END.",

        "opt1": "Play again",
        "Route1": 0,// in stories
        "opt2": "Quit",
        "Route2": -8,
    },
    {
        // index = 4
        "story": "what kind of people go to a journey in a jungle? you died from lack of food.\n THE END.",

        "opt1": "Play again",
        "Route1": 0,// in stories
        "opt2": "Quit",
        "Route2": -8,
    },
    {
        // index = 5
        "story": "unfortunatly, the bear was sleeping so you died from lack of food.\n THE END.",

        "opt1": "Play again",
        "Route1": 0,// in stories
        "opt2": "Quit",
        "Route2": -8,
    },
    {
        // index = 6
        "story": "didnt i tell you that its night already?? what kind of people will help you in night?.\n THE END.",

        "opt1": "Play again",
        "Route1": 0,// in stories
        "opt2": "Quit",
        "Route2": -8,
    },
    {
        // index = 7
        "story": "OMG what a brillent idea\ncongrats, you finally made it to the end. you finished your journey alive. now you can go back to your family\n amazing gob!!!",

        "opt1": "Play again",
        "Route1": 0,// in stories
        "opt2": "Quit",
        "Route2": -8,
    },

];

var storyTag = document.getElementById("story");
var optTag1 = document.getElementById("opt1");
var optTag2 = document.getElementById("opt2");
var optTag3 = document.getElementById("opt3");

// function playsound(i){
//     var audio = new Audio(i);
//     audio.play();

//   }

function makeStory3(i) {
   optTag1.style.display = "block";
    optTag2.style.display = "block";
    optTag3.style.display = "block";
    if (i == 0) {
        document.body.style.backgroundImage = "url('images/home_page.jpg')";
        

    }
    else if (i == 1) {
        document.body.style.backgroundImage = "url('images/branches.webp')";
        // playsound("pass-sound.wav");
    }
    else if (i == 2) {
        document.body.style.backgroundImage = "url('images/honey.jpg')";
        // playsound("pass-sound.wav");

    }
    else if (i == 3) {
        document.body.style.backgroundImage = "url('images/bear.webp')";
        // playsound("pass-sound.wav");
        
    };

    storyTag.innerHTML = stories[i]["story"];
    storyTag.style.color = "white";
    optTag1.innerHTML = stories[i]["opt1"];
    optTag1.style.color = "Green";
    optTag2.innerHTML = stories[i]["opt2"];
    optTag2.style.color = "Green";
    optTag3.innerHTML = stories[i]["opt3"];
    optTag3.style.color = "Green";

    optTag1.addEventListener('click', function() {
        var index = stories[i]["Route1"];
        if (index > 0)
            makeStory3(index);

        else
            makeEnding(index * -1)
    });
    optTag2.addEventListener('click', function() {
        var index = stories[i]["Route2"];
        if (index > 0)
            makeStory3(index);

        else
            makeEnding(index * -1)
    });
    try {
      if(i!=0){
        optTag3.addEventListener('click', function() {
            var index = stories[i]["Route3"];
            console.log('i ' + i);
            console.log('Index: ' + index);
            if (index > 0)
                makeStory3(index);
            else
                makeEnding(index * -1)
        });
    }}
    catch (err) {
    }


};




function makeEnding(i) {
    optTag2.style.display = "none";
    optTag3.style.display = "none";
    storyTag.innerHTML = endings[i]["story"];
    storyTag.style.color = "Red";
    if (i == 7) {
        storyTag.style.color = "Yellow";
        document.body.style.backgroundImage = "url('images/win.jpg')";
        // playsound("win-sound.mp3")
    }
    else {
        document.body.style.backgroundImage = "url('images/death.png')";
        // playsound("death-sound.mp3")
    }
    optTag1.innerHTML = endings[i]["opt1"];
    optTag1.style.color = "Blue";
    optTag1.addEventListener('click', function() {
        makeStory3(0);
    });

};

makeStory3(0);


