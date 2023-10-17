//~~

class HeaderTopScroll {
	selector = 'data-scroll-top'

	constructor() {
		this.scrollHeaderTopHandler(`[${this.selector}]`)
	}

	scrollHeaderTopHandler(type) {
		const header = document.querySelector(type)
		let classEl = header.getAttribute(this.selector)

		document.addEventListener('scroll', () => {
			const scroll = window?.scrollY

			if (scroll > header.clientHeight / 2) {
				header.classList.add(`${classEl}`)
			} else {
				header.classList.remove(`${classEl}`)
			}
		})
	}
}

export { HeaderTopScroll }
