// multiple choice question 
var gamezone = $("#game-zone");
$(document).on("click", "#start", function(event){
	game.start();
  });
// define gamezone as var

var questions = [{
    question: "On what campus is the original Pizza Hut located ?",
    choices: ["University Cal Berkley", "Wichita State", "Florida State"],
    correctAnswer: "Wichita State"
}, 
{
	question: " What state has wild heards of Zebaras ? ",
	choices: ["Montana" ,"California" , "Iowa"],
	correctAnswer: " California "
},
{
	question: "what was Nike's original company name ?",
	choices: ["Blue Ribbon Sports" ,"Champions" , "Checkmark sports "],
	correctAnswer: " Blue Riboon Sports "
},
]
var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,

countdown: function() {
	game.counter--;
	$("#counter-number").html(game.counter);

if (game.counter === 0) {
		alert("TIME'S UP");
		game.done();

}
},
start: function() {
	timer = setInterval(game.countdown, 1000);
	$('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
	$("#start").remove();

// I have tried var panel; for undefined var questions = panel and changed the panel name to questions still wont show up??
	
	for (var i = 0; i < questions.length; i++) {
	gamezone.append('<h3>' + questions[i].question + '</h3>');
	for (var j = 0; j < questions[i].choices.length; j++){
	  gamezone.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
	  }
		}
		gamezone.append("<button id='done'>DONE</button>");
	
	},
	done: function() {

		$.each($("input[name='question-0']:checked"), function() {
			if ($(this).val() == questions[0].correctAnswer) {
				console.log(this);
				  game.correct++;
			} else {
				game.incorrect++;
			}

		});
		$.each($("input[name='question-1']:checked"), function() {
			if ($(this).val() == questions[1].correctAnswer) {
				console.log(this);
				game.correct++;
			} else {
				game.incorrect++;
			}

		});
		this.results();
	},
	results:function() {
		clearInterval(timer);

		$("#subcontainer h2").remove();
	 gamezone.html("<h2>You're Done!</h2>");
	 gamezone.append("<h3>number correct: " + this.correct + "</h3>");
	 gamezone.append("<h3>number wrong: " + this.incorrect + "</h3>");
	 gamezone.append("<h3>nunber of no answers: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
	
	}
}

