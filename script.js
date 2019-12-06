const contentDivs = document.getElementsByClassName('content');
console.log(contentDivs);

let whichPage = 'home';

document.getElementById('home').onclick = function(){
  console.log("clicked");
  if (whichPage == 'work' || whichPage == 'skills') {
    toggleShown('home');
    whichPage = 'home';
  }
}

document.getElementById('work').onclick = function(){
  console.log("clicked");
  if (whichPage == 'home' || whichPage == 'skills') {
    toggleShown('work');
    whichPage = 'work';
  }
}

document.getElementById('skills').onclick = function(){
  console.log("clicked");
  if (whichPage == 'home' || whichPage == 'work') {
    toggleShown('skills');
    whichPage = 'skills';
  }
}

function toggleShown(page) {
  console.log("*hacker voice*: i'm in");
  console.log(page);
  for (var i = 0; i < contentDivs.length; i++) {
    console.log("does current div " + contentDivs[i].id + " contain " + page + " in class list?: " + (contentDivs[i].classList.contains(page)));
    if (contentDivs[i].classList.contains(page)) {
      contentDivs[i].classList.add('visible');
      contentDivs[i].classList.remove('hidden');
    } else if (contentDivs[i].classList.contains('visible')) {
      contentDivs[i].classList.add('hidden');
      contentDivs[i].classList.remove('visible');
    }
    console.log("toggled!")
  }
}

// work scrolling function
const workContent = document.getElementById("right");
const test = document.getElementById("test");
const work1 = document.getElementById("work1");
const work2 = document.getElementById("work2");
workContent.onscroll = function(){
  console.log("entered");
  var y = workContent.scrollTop;
  document.getElementById("demo").innerHTML = "Vertically: " + y + "px";
  console.log(y + "px");
  if (y <= 650) {
    if (work1.classList.contains("visible")) {
      work1.classList.remove("visible");
      work1.classList.add("hidden");
    }
    if (work2.classList.contains("visible")) {
      work2.classList.remove("visible");
      work2.classList.add("hidden");
    }
    if (test.classList.contains("hidden")) {
      test.classList.remove("hidden");
      test.classList.add("visible");
    }
  } else if (y > 650 & y < 1200) {
    if (test.classList.contains("visible")) {
      test.classList.remove("visible");
      test.classList.add("hidden");
    }
    if (work2.classList.contains("visible")) {
      work2.classList.remove("visible");
      work2.classList.add("hidden");
    }
    if (work1.classList.contains("hidden")) {
      work1.classList.remove("hidden");
      work1.classList.add("visible");
    }
  } else if (y >= 1200) {
    if (test.classList.contains("visible")) {
      test.classList.remove("visible");
      test.classList.add("hidden");
    }
    if (work1.classList.contains("visible")) {
      work1.classList.remove("visible");
      work1.classList.add("hidden");
    }
    if (work2.classList.contains("hidden")) {
      work2.classList.remove("hidden");
      work2.classList.add("visible");
    }
  }
}
