console.log("begin");

const questions = [
	{
		ques: "A complete graph can have",
		opt1: "n2 spanning trees",
		opt2: "nn - 2 spanning trees",
		opt3: "nn - 3 spanning trees",
		opt4: "nn - 4 spanning trees",
		ans: "opt2",
		getans: function () {
			return this.opt2;
		}
	},
	{
		ques: "What is full form of CSS",
		opt1: "javascript",
		opt2: "java",
		opt3: "HTML",
		opt4: "none of these",
		ans: "opt4",
		getans: function () {
			return this.opt4;
		}
	},
	{
		ques: "How to include javascript in HTML document",
		opt1: "Download",
		opt2: "title",
		opt3: "script",
		opt4: "none of these",
		ans: "opt3",
		getans: function () {
			return this.opt3;
		}
	},
	{
		ques: "How to declare variable in javascript",
		opt1: "var",
		opt2: "int",
		opt3: "both",
		opt4: "none of these",
		ans: "opt1",
		getans: function () {
			return this.opt1;
		}
	},
	{
		ques: "What => means in javascript",
		opt1: "function",
		opt2: "Arrow function",
		opt3: "func",
		opt4: "none of these",
		ans: "opt2",
		getans: function () {
			return this.opt2;
		}
	},
	{
		ques: "which of these is not a javascript framework",
		opt1: "react.js",
		opt2: "jQuery",
		opt3: "Angular",
		opt4: "Django",
		ans: "opt4",
		getans: function () {
			return this.opt4;
		}
	},
	{
		ques: "How do you define objects in js",
		opt1: "()",
		opt2: "[]",
		opt3: "{}",
		opt4: "none of these",
		ans: "opt3",
		getans: function () {
			return this.opt3;
		}
	},
	{
		ques: "which of these is not a valid js version",
		opt1: "EX19",
		opt2: "ES1",
		opt3: "ES3",
		opt4: "none of these",
		ans: "opt1",
		getans: function () {
			return this.opt1;
		}
	},
	{
		ques: "What is the output of '2'+2 ",
		opt1: "4",
		opt2: "5",
		opt3: "22",
		opt4: "none of these",
		ans: "opt3",
		getans: function () {
			return this.opt3;
		}
	},
	{
		ques: "What is the output of '2'-1 ",
		opt1: "3",
		opt2: "1",
		opt3: "6",
		opt4: "none of these",
		ans: "opt2",
		getans: function () {
			return this.opt2;
		}
	},
	{
		ques: "How to check if a value is NaN in js ",
		opt1: "NaN(val)",
		opt2: "isNaN()",
		opt3: "isNaN(val)",
		opt4: "none of these",
		ans: "opt3",
		getans: function () {
			return this.opt3;
		}
	},
];

var index = 0;
var score = 0;
const ques_id = document.getElementById("ques");
const a = document.getElementById("opt1");
const b = document.getElementById("opt2");
const c = document.getElementById("opt3");
const d = document.getElementById("opt4");
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
const submit = document.getElementById("submit-btn");
const next = document.getElementById("next-btn");
const ansKey = document.getElementById("ans-key");
const reset = document.getElementById("reset");
const ansDiv = document.getElementById("quiz-answers");
const quesDiv = document.getElementById("quiz-questions");


loadQues();
getAnswers();

function loadQues() {
	deselectPrevious();

	ques_id.innerText = questions[index].ques;
	aText.innerText = questions[index].opt1;
	bText.innerText = questions[index].opt2;
	cText.innerText = questions[index].opt3;
	dText.innerText = questions[index].opt4;
	correct.style.display = "none";
	incorrect.style.display = "none";
	next.style.display = "none";
	ansKey.style.display = "none";
	reset.style.display = "none";
	submit.style.display = "block";
}

function deselectPrevious() {
	a.checked = false;
	b.checked = false;
	c.checked = false;
	d.checked = false;
}

function checkedOption(){
	if(a.checked)
		return a;
	else if(b.checked)
		return b;
	else if(c.checked)
		return c;
	else
		return d;
}

function resetQuiz(){
	index = 0;
	score = 0;
	ansDiv.style.display = "none";
	quesDiv.style.display = "block";
	document.getElementById("header-content").innerText = "Quiz";
	loadQues();
}

submit.addEventListener("click", function (){
	if(!a.checked && !b.checked && !c.checked && !d.checked){
		alert("Please select an option.");	
	}
	else {
		var selected = checkedOption();
		if(selected.id == questions[index].ans){
			console.log("correct");
			score++;
			correct.style.display = "block";
			incorrect.style.display = "none";
		}
		else{
			console.log("incorrect");
			incorrect.style.display = "block";
			correct.style.display = "none";	
		}

		submit.style.display = "none";
		next.style.display = "block";
	}
});

function getAnswers(){
	var list = document.createElement("ul");
	for(var i=0;i<questions.length;i++){
		var element = document.createElement("li");
		element.setAttribute("class","ansLi");
		var question = document.createTextNode(questions[i].ques +" - ");
		element.appendChild(question);
		var span = document.createElement("span");
		span.setAttribute("class","correctAns");
		var ans = document.createTextNode(questions[i].getans());
		span.appendChild(ans);
		element.appendChild(span);
		list.appendChild(element);
	}
	ansDiv.appendChild(list);
}

next.addEventListener("click",function (){
	index++;

	if(index < questions.length){
		loadQues();
	}

	else{
		ansKey.style.display = "block";
		next.style.display = "none";
		reset.style.display = "block";
		ansDiv.style.display = "block";
		quesDiv.style.display = "none";
		document.getElementById("header-content").innerText = `Score: ${score}`;
	}
});

reset.addEventListener("click",function (){
	resetQuiz();
});