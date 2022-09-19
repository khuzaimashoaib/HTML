function submitRemoveForm(event){
    event.preventDefault();
}
function showQuestions(){
const questionHolder = document.getElementById('showQstn');
questionToShow = [];
const newObject = localStorage.getItem("questionBank");
let dataStored = JSON.parse(newObject);
  if(dataStored != ""){
    for(i=0; i < dataStored.length; i++){
        questionToShow.push(
            `<label>
            <input type="checkbox" name="${i}" value="${i}" class="chk_butn">
            ${i+1}. ${dataStored[i].question.substring(0, 32)}...
            </label><br>`
        );  
    }
  } else {
    for(i=0; i < data.length; i++){
        questionToShow.push(
            `<label>
            <input type="checkbox" name="${i}" value="${i}" class="chk_butn">
            ${i+1}. ${data[i].question.substring(0, 32)}...
            </label><br>`
        );  
    }
}
    questionHolder.innerHTML = questionToShow; 
    return questionToShow;
}
function removeQuestion(){
    const questionHolder = document.getElementById('showQstn');
    questionsToRemove = [];  
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    for (var c = 0; c < checkboxes.length; c++) {
      //questionsToRemove.push(checkboxes[c].value);
      questionToShow[checkboxes[c].value] = "";
      questionBank.splice(checkboxes[c].value,1);
    }
    questionHolder.innerHTML = questionToShow;
    //myQuestions = questionToShow;
}
function saveMyFile(){
    localStorage.setItem("questionBank", JSON.stringify(questionBank));
    location.replace("quiz.html")
}
showQuestions();
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
const removeButton = document.getElementById("removeQuestions");
const saveButton = document.getElementById("saveQuestions");
removeButton.addEventListener("click", removeQuestion);
saveButton.addEventListener("click", saveMyFile);