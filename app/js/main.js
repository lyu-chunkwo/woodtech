$(function () {


  var location = window.location.href;
  var cur_url = '/' + location.split('/').pop();
  // alert(cur_url);
  $('.menu-page__item, .menu__item, .aside-menu__item').each(function () {
    var link = $(this).find('a').attr('href');

    if (cur_url == link) {
      $(this).addClass('current');
    }
  });


  $('body').on('mouseover', '.benefits__link', function (e) {
    e.preventDefault();
    $(this).closest('benefits__item-title').find('.benefits__item-title').toggleClass('active');
  });


  //  ! Добавление классов при скролле
  $(document).scroll(function () {

    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 50) {
      $('.menu-scroll, .footer__up-button').addClass("scroll");
    }
    else {
      $('.menu-scroll, .footer__up-button').removeClass("scroll");
    }
  });

  $(document).scroll(function () {

    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 1550) {
      $('.footer__up-button').addClass("scroll");
    }
    else {
      $('.footer__up-button').removeClass("scroll");
    }
  });


  // ! Функция для плавного скрола наверх
  $(function () {
    $(".footer__up-button").on("click", "a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор блока с атрибута href
      var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

      //анимируем переход на расстояние - top за 800 мс
      $('body,html').animate({ scrollTop: top }, 800);
    });
  });



  // !Синхронизированные слайдеры - index page
  $('.slider__list').slick({
    asNavFor: '.slider__navigate-list',
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: true,
    infinite: true,
    dots: true,
    prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/arrow-right.svg" alt="next"></button>'
  });

  $('.slider__navigate-list').slick({
    asNavFor: '.slider__list',
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    focusOnSelect: true,
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
  });

  // ! BLOG slider
  $('.blog__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });


  // !Синхронизированные слайдеры (single-page)
  $('.single-slider__list').slick({
    asNavFor: '.single-slider__bottom-list',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    dots: false
  });

  $('.single-slider__bottom-list').slick({
    asNavFor: '.single-slider__list',
    slidesToShow: 8,
    focusOnSelect: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 3
        }
      },
    ]
  });


  $('.menu__btn, .menu-page__btn').on('click', function () {
    $('.menu__btn, .menu__list, .header__socials-list, .menu-page__btn, .menu-page__item, .menu-page__list, .header-page__socials-list').toggleClass('active');
    $('body').toggleClass('lock'); // ! No scroll
  });


  $('.about-page__btn').on('click', function () {
    $('.about-page__btn, .aside-menu').toggleClass('active');
    $('body').toggleClass('lock'); // ! No scroll
  });


  $('.aside-menu__close').on('click', function () {
    $('.aside-menu__close').toggleClass('active');
    $('body').toggleClass('lock'); // ! No scroll
  });
});