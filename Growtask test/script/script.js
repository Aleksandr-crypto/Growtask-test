'use strict'

window.addEventListener('DOMContentLoaded', () => {/*код выполняется после подгрузки содержимого страницы*/

   /*скролл к форме-------------------*/
   const scrollToForm = (btnClassName, formClassName) => {
      const formDiv = document.querySelector(formClassName),
         toFormBtn = document.querySelectorAll(btnClassName);
      toFormBtn.forEach(item => {
         item.addEventListener('click', event => {
            if (event.target) {
               formDiv.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
            }
         });
      });
   }

   scrollToForm("#scroll-to-form", ".feedback-form__container");
   /*----------------------------------------------------------------*/



   /* вспомогательная функция для показа и скрытия элементов*/
   const showContentSingle = (elem, oldClassName, newClassName) => {
      if (elem.classList.contains(oldClassName)) {
         elem.classList.remove(oldClassName);
      }
      if (!elem.classList.contains(newClassName)) {
         elem.classList.add(newClassName);
      }

   }

   const hideContentCollection = (elems, oldClassName, newClassName) => {
      elems.forEach(elem => {
         if (elem.classList.contains(oldClassName)) {
            elem.classList.remove(oldClassName);
         }
         if (!elem.classList.contains(newClassName)) {
            elem.classList.add(newClassName);
         }

      });
   }

   /*-------------------------------------------*/

   /*слайдер-----------------------------------------*/
   
   const slider = () => {
      const sliderBtnNext = document.querySelector("#slider__btn-next"),
         sliderBtnPrev = document.querySelector("#slider__btn-prev"),
         sliderContainer = document.querySelector('.slider__container'),
         sliderItem = document.querySelectorAll('.slider-item');


      console.log(sliderContainer.style.color);

      sliderBtnNext.addEventListener('click', e => {
         if (e.target) {
            sliderItem.forEach(item => {
               item.classList.remove(`slider-item-${item.id}`);
            });
               sliderItem.forEach(item => {
                  
                  item.classList.add(`slider-item-${Number(item.id) - 1}`);
               });

         }
            });
            sliderBtnPrev.addEventListener('click', e => {
               if (e.target) {
                  sliderItem.forEach(item => {
                     item.classList.remove(`slider-item-${item.id}`);
                     if (item.id == sliderItem.length) {
                        item.id = 1;
                     }
                     if (item.id == 1) {
                        item.id = sliderItem.length;
                     }
                     
                     item.classList.add(`slider-item-${Number(item.id) + 1}`);

                  });
         }
      });

   };

/*slider();*/

/*фанси бокс -----------------------------------*/
const fansyBox = () => {
   const sliderItem = document.querySelectorAll('.slider-item'),
      body = document.querySelector('body'),
      audio = new Audio('src/sound/fansy-box.mp3');

   sliderItem.forEach(item => {
      item.addEventListener('click', e => {
         /*e.stopPropagation();*/
         item.classList.add('fansy-box-incr');
         item.classList.remove('fansy-box-decr');
         audio.play();
      });
   });
   body.addEventListener('click', e => {
      sliderItem.forEach(item => {
         if (e.target != item && item.classList.contains('fansy-box-incr')) {
            item.classList.remove('fansy-box-incr');
            item.classList.add('fansy-box-decr');
         }
      });
      /*hideContentCollection(sliderItem, '.fansy-box', undefined);*/
   });
}

fansyBox();
/*------------------------------------------------------*/


   /*смена картинок -------------------------*/
   const images = () => {
      const mainImg = document.querySelectorAll('.section-4__img_big'),
         smallImg = document.querySelectorAll('.img_prev__item');
      smallImg.forEach(item => {
         item.addEventListener('click', event => {
            hideContentCollection(smallImg, 'active-small__img', undefined);
            if (item.id == event.target.id) {
               showContentSingle(item, undefined, 'active-small__img')
               mainImg.forEach(elem => {
                  /*hideContentCollection(mainImg, 'show', 'hide'); так не работает*/
                  elem.classList.remove('show');
                  elem.classList.add('hide');
                  if (elem.id == event.target.id) {
                     showContentSingle(elem, 'hide', 'show');
                  }
               });
            }
         });
      });
   };
   images();

   /*----------------------------------------------*/

/* бургер --------------------------------------*/

const burger = () => {

   const burgerBtn =  document.querySelector('.menu-burger__btn'),
    burgerMenu = document.querySelector('.header__menu'),
      burgerCloseImg = document.querySelector('.burger-open-img');

burgerBtn.addEventListener('click', e => {
   burgerMenu.style.display = 'block';
   if (burgerMenu.style.display == 'block') {
      burgerCloseImg.src = 'img/burger_close.png';
   }
   if (burgerCloseImg.src == 'img/burger_close.png'){
      
   }
});


}

burger();

});








