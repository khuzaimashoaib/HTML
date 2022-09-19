//(function(){

    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}" class="rad_butn">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${(questionNumber+1)}. ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizBox.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerBoxs = quizBox.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerBox = answerBoxs[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerBox.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerBoxs[questionNumber].style.color = 'green';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerBoxs[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsBox.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizBox = document.getElementById('quiz');
    const resultsBox = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const myQuestions = [];
    const newObject = localStorage.getItem("questionBank");
    let dataStored = JSON.parse(newObject);

      if(dataStored != ""){
        for(i=0; i < dataStored.length; i++){
          myQuestions.push(dataStored[i]);
        }
        document.getElementById('quizLength').innerHTML = dataStored.length;
      } else {
        for(i=0; i < data.length; i++){
            myQuestions.push(data[i]);
        }
        document.getElementById('quizLength').innerHTML = data.length;
      }

    //

    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  //})();
  