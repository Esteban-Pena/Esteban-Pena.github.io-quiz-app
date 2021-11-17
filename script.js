function check()
{
    var score=0;

    var q1=document.quiz.q1.value;

  
  
    var q3=document.quiz.q3.value;



    var q5=document.quiz.q5.value;



    var q7=document.quiz.q7.value;


    var q9=document.quiz.q9.value;






    
    if(q1=="A"){score++;}
    
    if(document.quiz.q21.checked  && document.quiz.q23.checked && document.quiz.q24.checked){
        score++;
    }

    if(q3=="B"){score++;}

    if(document.quiz.q41.checked  && document.quiz.q44.checked && document.quiz.q45.checked){
        score++;
    }

    if(q5=="C"){score++;}
  
    if(  document.quiz.q62.checked  && document.quiz.q65.checked && document.quiz.q66.checked){
        score++;
    }

    if(q7=="C"){score++}

    if(document.quiz.q81.checked  && document.quiz.q84.checked && document.quiz.q86.checked){
        score++;
    }

    if(q9=="A"){score++}

  if(document.quiz.q104.checked  && document.quiz.q105.checked && document.quiz.q106.checked){
        score++;
    }
    
    var percent= (score/10)*100;
  
 document.getElementById('result').innerHTML= "Your Score is : " + parseInt(percent)+"%";
}