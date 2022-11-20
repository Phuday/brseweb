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
//scroll top
const scrollUp = document.querySelector('.scroll-top');
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
  if (window.pageYOffset > 100) {
    scrollUp.classList.add('active');
  } else {
    scrollUp.classList.remove('active');
  }
});

// progress
const progress = document.querySelector('.progress');
window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const width = (scrollTop / height) * 100;
  progress.style.width = `${width}%`;
});

//event slide

const root = document.documentElement;
const eventElementsDisplayed = getComputedStyle(root).getPropertyValue('$event-elements-displayed');
const eventContent = document.querySelector('ul.event-list');

root.style.setProperty('$event-elements', eventContent.children.length);

for (let i = 0; i < eventElementsDisplayed; i++) {
  eventContent.appendChild(eventContent.children[i].cloneNode(true));
}

// campus modal

const modalWrapper = document.querySelector('.modal');
if (modalWrapper) {
  setTimeout(function () {
    modalWrapper.classList.add('is-show');
  }, 15000);
}
document.body.addEventListener('click', function (event) {
  if (event.target.matches('.modal-close')) {
    const modal = event.target.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
  } else if (event.target.matches('.modal')) {
    event.target.parentNode.removeChild(event.target);
  }
});

// course hover

$(document).ready(function () {
  $(window).on('load', function () {
    setTimeout(function () {
      $('.loader-wrapper').fadeOut(1000);
    }, 5000);
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

// scroll animation
ScrollReveal({ reset: true, distance: '60px', duration: 1600, delay: 100 });
ScrollReveal().reveal(
  '.wrapper-title, .wrapper-desc, .course-left-title, .about-content, .introduce-video, .price-title h3, .banner-text-content, .quote, .footer-human1',
  {
    delay: 500,
    origin: 'left',
  },
);

ScrollReveal().reveal('.course-left-info, .course-left-campus, .intro-img, .intro-img2,  .footer-human2', {
  delay: 600,
  origin: 'left',
});
ScrollReveal().reveal(
  '.intro-img2, .opencampus, .support-item, .about-img, .accordion-body, .footer-top,  .opencampus-img, .opencampus-text',
  {
    delay: 500,
    origin: 'bottom',
    interval: 200,
  },
);
ScrollReveal().reveal(
  '.intro-img, .course-left-info, .course-left-campus, .price-img, .bonus-container, .footer-main__list, .footer-main__map, .footer-main__assess, .header-nav-list__link,  .opencampus-btn ',
  {
    delay: 600,
    origin: 'bottom',
  },
);
ScrollReveal().reveal('.header-nav-list__link, .price-desc-item ', {
  delay: 600,
  origin: 'left',
  interval: 200,
});
ScrollReveal().reveal('.arrow-img', {
  delay: 600,
  origin: 'top',
});
ScrollReveal().reveal('.arrow-img', {
  delay: 600,
  scale: 0.85,
  rotate: {
    x: 20,
    z: 20,
  },
});
ScrollReveal().reveal('.course-img, .footer-main__list li, .header-top-content__info', {
  mobile: false,
  desktop: true,
  delay: 500,
  origin: 'bottom',
  interval: 200,
});
