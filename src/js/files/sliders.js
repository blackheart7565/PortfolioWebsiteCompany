/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import '../../scss/base/swiper.scss'
// Повний набір стилів з scss/libs/swiper.scss
// import '../../scss/libs/swiper.scss'
// Повний набір стилів з node_modules
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.swiper')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		// Вказуємо склас потрібного слайдера
		new Swiper('.swiper', {
			grabCursor: true,
			slidesPerView: 1,
			spaceBetween: 5,
			speed: 500,
			loop: true,
			effect: 'fade',
			fadeEffect: {
				// Enables slides cross fade ( Включает плавное затухание слайдов )
				crossFade: true,
			},
			observer: true,
			observeParents: true,
			//autoHeight: true,
			// touchRatio: 0,
			// simulateTouch: false,
			// preloadImages: false,
			//lazy: true,

			// effect: 'cube',
			// cubeEffect: {
			// 	shadow: true,
			// 	slideShadows: true,
			// 	shadowOffset: 20,
			// 	shadowScale: 0.94,
			// },

			// effect: 'coverflow',
			// coverflowEffect: {
			// 	depth: 100, // Depth offset in px (slides translate in Z axis)
			// 	modifier: 1, //Effect multiplier
			// 	rotate: 50, //Slide rotate in degrees
			// 	scale: 1, //Slide scale effect
			// 	slideShadows: true, //Enables slides shadows
			// 	stretch: 0, //Stretch space between slides (in px)
			// },

			// effect: 'flip',
			// flipEffect: {
			// 	limitRotation: true, // Limit edge slides rotation
			// 	slideShadows: true, // Enables slides shadows
			// },

			// effect: 'creative',
			// creativeEffect: {
			// 	prev: {
			// 		// will set `translateZ(-400px)` on previous slides
			// 		translate: [0, 0, -400],
			// 	},
			// 	next: {
			// 		// will set `translateX(100%)` on next slides
			// 		translate: ['100%', 0, 0],
			// 	},
			// },

			// Афтопролистование
			/*
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація

			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],

			// Події
			// on: {},
		})
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll')
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index]
			const sliderScrollBar =
				sliderScrollItem.querySelector('.swiper-scrollbar')
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			})
			sliderScroll.scrollbar.updateSize()
		}
	}
}

window.addEventListener('load', function (e) {
	// Запуск ініціалізації слайдерів
	initSliders()
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
})
