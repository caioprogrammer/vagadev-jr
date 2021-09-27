window.onload = function() {
  $(document).ready(function(){
    $('.your-class').slick({
      infinite:true,
      slidesToShow:3,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed:1500,

      responsive: [
        {
          breakpoint:1280,
          settings: {
            slidesToShow:2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
}

console.log('Swiper Funcionando')

const btnComprar = document.querySelectorAll('.product__info button');
const marioBros = document.querySelector('.product__info button img');

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__button');



for(btn of btnComprar) {
  btn.addEventListener('click', () => {
      marioBros.style.display = "block";
      document.querySelector('.product__info button').style.background = "var(--darkblue-color)";
      document.querySelector('.product__info button p').innerText = "COMPRADO!"
      
      modal.style.display = "flex"
  })
}

closeModal.addEventListener('click', () => {
  modal.style.display = "none"
})

document.querySelector('.header__menu').addEventListener('click', () => {
  document.querySelector('.header__menu .menu-content').classList.toggle('active')
})

document.querySelector('.header__search').addEventListener('click', (e) => {
  e.preventDefault();

  document.querySelector('.header__search input').classList.toggle('active')
})


