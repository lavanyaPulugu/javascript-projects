/* add and change html element */
/* 
example <h1> */

/* step1 create the element */

const newH1 = document.createElement("h1");

/* step 2 add  attributes/properties */
newH1.textContent = "i like pizza";
newH1.id = "myh1";
newH1.style.color = "red";
newH1.style.textAlign = "center";
/* step 3 append element to dom */
// document.body.append(newH1);
// document.body.prepend(newH1);

// document.getElementById("box2").append(newH1);
document.getElementById("box2").prepend(newH1);

const box2 = document.getElementById("box2");

document.body.insertBefore(newH1, box2);

/* remove HTML elemet */
