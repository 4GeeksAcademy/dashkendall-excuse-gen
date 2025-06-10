import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
document.getElementById("excuse").innerHTML = generateExcuse();


  //write your code here
    function generateExcuse() {

      let chore = ['Walk', 'Wash', 'Prepare', 'Tuck in', 'Feed'];
      let who = ['my cat', 'my dog', 'my grandma', 'the neighbor', 'a piece of string'];
      let when = ['before', 'after', 'during', 'in the middle of'];
      let task =['work', 'school', 'church', 'grocery shopping', 'yard work'];
    
        let randomChore = chore[Math.floor(Math.random() * chore.length)];
        let randomWho = who[Math.floor(Math.random() * who.length)];
        let randomWhen = when[Math.floor(Math.random() * when.length)];
        let randomTask = task[Math.floor(Math.random() * task.length)];

      return `${randomChore} ${randomWho} ${randomWhen} ${randomTask}`;
      
    }

  let excuse = generateExcuse();
  console.log(excuse);
};
