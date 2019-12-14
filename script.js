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
const work1 = document.getElementById("work1");
const work2 = document.getElementById("work2");
const work3 = document.getElementById("work3");
workContent.onscroll = function(){
  console.log("entered");
  var y = workContent.scrollTop;
  console.log(y + "px");
  if (y <= 650) {
    if (work2.classList.contains("visible")) {
      work2.classList.remove("visible");
      work2.classList.add("hidden");
    }
    if (work3.classList.contains("visible")) {
      work3.classList.remove("visible");
      work3.classList.add("hidden");
    }
    if (work1.classList.contains("hidden")) {
      work1.classList.remove("hidden");
      work1.classList.add("visible");
    }
    if (work4.classList.contains("visible")) {
      work4.classList.remove("visible");
      work4.classList.add("hidden");
    }
    if (work5.classList.contains("visible")) {
      work5.classList.remove("visible");
      work5.classList.add("hidden");
    }
    if (work6.classList.contains("visible")) {
      work6.classList.remove("visible");
      work6.classList.add("hidden");
    }
    if (work7.classList.contains("visible")) {
      work7.classList.remove("visible");
      work7.classList.add("hidden");
    }
  } else if (y > 650 & y < 1200) {
    if (work1.classList.contains("visible")) {
      work1.classList.remove("visible");
      work1.classList.add("hidden");
    }
    if (work3.classList.contains("visible")) {
      work3.classList.remove("visible");
      work3.classList.add("hidden");
    }
    if (work2.classList.contains("hidden")) {
      work2.classList.remove("hidden");
      work2.classList.add("visible");
    }
    if (work4.classList.contains("visible")) {
      work4.classList.remove("visible");
      work4.classList.add("hidden");
    }
    if (work5.classList.contains("visible")) {
      work5.classList.remove("visible");
      work5.classList.add("hidden");
    }
    if (work6.classList.contains("visible")) {
      work6.classList.remove("visible");
      work6.classList.add("hidden");
    }
    if (work7.classList.contains("visible")) {
      work7.classList.remove("visible");
      work7.classList.add("hidden");
    }
  } else if (y > 1200 & y < 1750) {
    if (work1.classList.contains("visible")) {
      work1.classList.remove("visible");
      work1.classList.add("hidden");
    }
    if (work2.classList.contains("visible")) {
      work2.classList.remove("visible");
      work2.classList.add("hidden");
    }
    if (work3.classList.contains("hidden")) {
      work3.classList.remove("hidden");
      work3.classList.add("visible");
    }
    if (work4.classList.contains("visible")) {
      work4.classList.remove("visible");
      work4.classList.add("hidden");
    }
    if (work5.classList.contains("visible")) {
      work5.classList.remove("visible");
      work5.classList.add("hidden");
    }
    if (work6.classList.contains("visible")) {
      work6.classList.remove("visible");
      work6.classList.add("hidden");
    }
    if (work7.classList.contains("visible")) {
      work7.classList.remove("visible");
      work7.classList.add("hidden");
    }
  } else if (y > 1750 & y < 2300) {
    if (work1.classList.contains("visible")) {
      work1.classList.remove("visible");
      work1.classList.add("hidden");
    }
    if (work2.classList.contains("visible")) {
      work2.classList.remove("visible");
      work2.classList.add("hidden");
    }
    if (work3.classList.contains("visible")) {
      work3.classList.remove("visible");
      work3.classList.add("hidden");
    }
    if (work4.classList.contains("hidden")) {
      work4.classList.remove("hidden");
      work4.classList.add("visible");
    }
    if (work5.classList.contains("visible")) {
      work5.classList.remove("visible");
      work5.classList.add("hidden");
    }
    if (work6.classList.contains("visible")) {
      work6.classList.remove("visible");
      work6.classList.add("hidden");
    }
    if (work7.classList.contains("visible")) {
      work7.classList.remove("visible");
      work7.classList.add("hidden");
    }
  } else if (y > 2300 & y < 2850) {
    if (work1.classList.contains("visible")) {
      work1.classList.remove("visible");
      work1.classList.add("hidden");
    }
    if (work2.classList.contains("visible")) {
      work2.classList.remove("visible");
      work2.classList.add("hidden");
    }
    if (work3.classList.contains("visible")) {
      work3.classList.remove("visible");
      work3.classList.add("hidden");
    }
    if (work4.classList.contains("visible")) {
      work4.classList.remove("visible");
      work4.classList.add("hidden");
    }
    if (work5.classList.contains("hidden")) {
      work5.classList.remove("hidden");
      work5.classList.add("visible");
    }
    if (work6.classList.contains("visible")) {
      work6.classList.remove("visible");
      work6.classList.add("hidden");
    }
    if (work7.classList.contains("visible")) {
      work7.classList.remove("visible");
      work7.classList.add("hidden");
    }
  } else if (y > 2850 & y < 3400) {
    if (work1.classList.contains("visible")) {
      work1.classList.remove("visible");
      work1.classList.add("hidden");
    }
    if (work2.classList.contains("visible")) {
      work2.classList.remove("visible");
      work2.classList.add("hidden");
    }
    if (work3.classList.contains("visible")) {
      work3.classList.remove("visible");
      work3.classList.add("hidden");
    }
    if (work4.classList.contains("visible")) {
      work4.classList.remove("visible");
      work4.classList.add("hidden");
    }
    if (work5.classList.contains("visible")) {
      work5.classList.remove("visible");
      work5.classList.add("hidden");
    }
    if (work6.classList.contains("hidden")) {
      work6.classList.remove("hidden");
      work6.classList.add("visible");
    }
    if (work7.classList.contains("visible")) {
      work7.classList.remove("visible");
      work7.classList.add("hidden");
    }
  } else if (y >= 3400) {
    if (work1.classList.contains("visible")) {
      work1.classList.remove("visible");
      work1.classList.add("hidden");
    }
    if (work2.classList.contains("visible")) {
      work2.classList.remove("visible");
      work2.classList.add("hidden");
    }
    if (work3.classList.contains("visible")) {
      work3.classList.remove("visible");
      work3.classList.add("hidden");
    }
    if (work4.classList.contains("visible")) {
      work4.classList.remove("visible");
      work4.classList.add("hidden");
    }
    if (work5.classList.contains("visible")) {
      work5.classList.remove("visible");
      work5.classList.add("hidden");
    }
    if (work6.classList.contains("visible")) {
      work6.classList.remove("visible");
      work6.classList.add("hidden");
    }
    if (work7.classList.contains("hidden")) {
      work7.classList.remove("hidden");
      work7.classList.add("visible");
    }
  }
}
