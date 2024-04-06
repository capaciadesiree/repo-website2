// container-work script
document.getElementById('next').onclick = function(){
  let lists = document.querySelectorAll('.item');
 document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
};

// work-page script

// scroll bttn script
/* window.addEventListener('scroll', function() {
  var scrollButton = document.getElementById('scrollButton');
  if (window.scrollY > 200) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
}); */

document.getElementById('scrollButton').addEventListener('click', function() {
  window.location.href = "work.html";
});

