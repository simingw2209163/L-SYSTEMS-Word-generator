//Line tress, 28.11.2022, Siming Wang
//Instructions ： change the rule to break the L-system

//Acknowledgements //Reference tutoruial：https://www.youtube.com/watch?v=E1B4UoSQMFw&t=480s

var axiom = "A";
var sentence = axiom;
var len =400;
var angle;
var co;

var rules = [];
rules[0] = {
  a:"A", b: "ABACBABCAAABB"
}

function generate(){
  len *= 0.5;
  var nextSentence = "";
  
  for(var i = 0; i < sentence.length; i++){
    var letter = sentence.charAt(i);
    var found = false;
    for(var j = 0; j < rules.length; j++){
      
      if (letter == rules[j].a){   
        found = true;
      nextSentence += rules[j].b;    
    }
  }
    if(found == false){
      nextSentence += letter;
    }
}

 sentence = nextSentence;
 createP(sentence);
  turtle();
}

function turtle(){
  background(0);
  resetMatrix();
  translate(width/2, height);

  for(var i = 0; i < sentence.length; i++){
    var letter = sentence.charAt(i);
    strokeWeight(random(1,10));
    if(letter == "A"){
      stroke(255);
     
      line(0,0,0,-len);
      translate(0,-len);
    }else if(letter == "AB"){
      rotate(angle)
      }else if(letter == "BA"){
          rotate(-angle)
        }else if(letter == "B"){
              rotate(-PI/4);
           }else{
                len =random(100,300);
}
}
}

function setup() {
  createCanvas(400, 400);
  angle = -radians(random(20,30));
  createP(axiom);
  
  turtle();
  var button = createButton("Go")
  button.mousePressed(generate);
}