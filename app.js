// mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.header-mobile');
menuToggle.addEventListener('click', function () {
  menu.classList.toggle('is-show');
  menuToggle.classList.toggle('fa-bars');
  menuToggle.classList.toggle('fa-times');
});
document.addEventListener('click', function (event) {
  if (!menu.contains(event.target) && !event.target.matches('.menu-toggle')) {
    menu.classList.remove('is-show');
    menuToggle.classList.remove('fa-times');
    menuToggle.classList.add('fa-bars');
  }
});
// header sticky
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// course hover
$(document).ready(function () {
  $('.course-img').hover(
    function () {
      $('.item1').removeClass('active');
      $(this).addClass('box-hover');
    },
    function () {
      $(this).removeClass('box-hover');
      $('.item1').addClass('active');
    },
  );
  $('.course-btn').click(function () {
    $('.course-img-desc').toggle();
  });

  //accordion video
  $('.accordion-desc').hide();
  $('.accordion-desc.active').show();
  $('.accordion-title').on('click', function () {
    $('.accordion-title.active').removeClass('active');
    $(this).next().slideToggle('slow');
    $(this).parent().toggleClass('active');
    $('.accordion-title').not(this).next().slideUp('slow');
    $('.accordion-title').not(this).parent().removeClass('active');
    $('.accordion-desc').removeClass('active');
  });
});
