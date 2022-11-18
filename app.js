const loading = document.querySelector('.loader');

// mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.header-mobile');
menuToggle.addEventListener('click', function () {
  menu.classList.toggle('is-show');
  menuToggle.classList.toggle('fa-bars-staggered');
  menuToggle.classList.toggle('fa-times');
});
document.addEventListener('click', function (event) {
  if (!menu.contains(event.target) && !event.target.matches('.menu-toggle')) {
    menu.classList.remove('is-show');
    menuToggle.classList.remove('fa-times');
    menuToggle.classList.add('fa-bars-staggered');
  }
});
// header sticky
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// progress
const progress = document.querySelector('.progress');
window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const width = (scrollTop / height) * 100;
  progress.style.width = `${width}%`;
});
// course hover

$(document).ready(function () {
  $(window).on('load', function () {
    setTimeout(function () {
      $('.loader-wrapper').fadeOut(1000);
    }, 0);
  });
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

  // slick slider
  $('.quote-container').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right' aria-hidden='true'></i></button>",
  });

  $('.bonus-container').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true,
    dots: true,

    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  });
});
