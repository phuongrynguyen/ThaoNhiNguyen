// By Code : No longer Exists Exists!

// Scroll head img + name
const container_head_x = document.querySelector(".container-head-x");

let max = 55;

window.addEventListener('scroll', function(){
  if(window.scrollY > max|| document.documentElement.scrollTop > max)
  {
    container_head_x.classList.add("sezi-monthemo");
  }
  else
  {
    container_head_x.classList.remove("sezi-monthemo");
  }
});

// By Code : No longer Exists Exists!

/* sáng tối */
let b0, b1, b2;
b0 = document.querySelector(".container-head-x");
b1 = document.body;
b2 = document.querySelector(".menu");
let x = false;

function theme(){
  x =!x;
  x ? s() : u();
}

function s(){
  b0.classList.add("vdiv")
  b1.classList.add("vdiv")
  b2.classList.add("vdiv")
  
  b0.classList.remove("vdiv0")
  b1.classList.remove("vdiv0")
  b2.classList.remove("vdiv0")
}

function u(){
  b0.classList.add("vdiv0")
  b1.classList.add("vdiv0")
  b2.classList.add("vdiv0")
  
  b0.classList.remove("vdiv")
  b1.classList.remove("vdiv")
  b2.classList.remove("vdiv")
}

/* music */
let beYeu = false;

function chill(){
  beYeu = !beYeu;
  beYeu ? beYeuV0() : beYeuV1();
}

function beYeuV0(){
  document.getElementById("music").play();
}

function beYeuV1(){
  document.getElementById("music").pause();
}