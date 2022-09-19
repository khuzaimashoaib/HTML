function submitForm(event){
    event.preventDefault();
}
function getMyData(){
    const question = document.getElementById("q").value;
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const d = document.getElementById("d").value;
    const correctAnswer = document.getElementById("ca").value;
    const newData = { question, answers: { a, b, c, d }, correctAnswer }
    if(question != "" && a != "" && b != "" && c != "" && d != "" && correctAnswer != ""){
        questionBank.push(newData);
        document.getElementById('qCount').innerHTML = questionBank.length;
        document.getElementById("addQuestion").reset();
    }
    return questionBank;
}
function saveMyFile(){
    //saveTextAsFile(JSON.stringify(questionBank));
    localStorage.setItem("questionBank", JSON.stringify(questionBank));
    location.replace("quiz.html")
}


/*function saveTextAsFile(data){
    localStorage.setItem("questionBank", data);
    location.replace("quiz.html")
}*/

const questionBank = [];
const newObject = localStorage.getItem("questionBank");
let dataStored = JSON.parse(newObject);
  if(dataStored != ""){
    for(i=0; i < dataStored.length; i++){
      questionBank.push(dataStored[i]);
    }
  } else {
    for(i=0; i < data.length; i++){
        questionBank.push(data[i]);
    }
  }

document.getElementById('qCount').innerHTML = questionBank.length;
const addQuestionButton = document.getElementById("submitQuestion");
const saveButton = document.getElementById("saveQuestionBank");
addQuestionButton.addEventListener("click", getMyData);
saveButton.addEventListener("click", saveMyFile);