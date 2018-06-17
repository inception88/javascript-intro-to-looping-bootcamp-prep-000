var gifts = ['teddy bear', 'drone', 'doll'];
var array = [];
function forLoop(array) {
  for (var i=0; i<25;i++) {
  if (i==1)  array.push('I am 1 strange loop.');
  else
    array.push(`I am ${i} strange loops.`);
  }
  return array;
}

function whileLoop(x) {
  while(x>0){
    console.log(x)
    x--
    }
     return 'done'
  }

<<<<<<< HEAD
  function maybeTrue() {
=======
function maybeTrue() {
>>>>>>> 5cb055ec0a8648daab97403bdc84e8a5fb3024fa
  return Math.random() >= 0.5
}

  function doWhileLoop(array) {
  do {
<<<<<<< HEAD
    if (array.length>0) array.pop();
    else 
    return array;
    
}   while (maybeTrue());
return array
=======
    if (array >0) array.pop();
    else return;
    
}   while (maybeTrue());
>>>>>>> 5cb055ec0a8648daab97403bdc84e8a5fb3024fa
}