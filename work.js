// JavaScript to control Nav items fullscreen background visibility
document.querySelector('.burger-icon').addEventListener('click', function() {
  // Toggle class to rotate bars and change to X
  document.querySelector('.burger-icon').classList.toggle('open');
  
  // Toggle fullscreen background visibility
  document.querySelector('.collapsed-bg').classList.toggle('open');
  document.querySelector('.collapsed-nav-items').classList.toggle('visible');
}); 

// script for <main> container-work slider
document.getElementById('next').onclick = function(){
let lists = document.querySelectorAll('.item');
document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
let lists = document.querySelectorAll('.item');
document.getElementById('slide').prepend(lists[lists.length - 1]);
};

// script for sub-page button going back to work page
document.getElementById('scrollButton').addEventListener('click', function() {
  window.location.href = "work.html";
});

