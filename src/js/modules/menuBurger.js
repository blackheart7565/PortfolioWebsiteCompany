//~~

const isNaN = value => {
	return value === null || value === undefined
}

export const activeMenuBurger = (menu, activeClass, option = {}) => {
	const { nameClassBlockedScroll, btnOpenSelector, btnCloseSelector } = option

	function openMenu() {
		if (isNaN(menu)) {
			console.error(`Елемент не передан в параметр`)
			return
		}
		menu.classList.add(activeClass)
		document.body.classList.add(
			nameClassBlockedScroll || 'menu__blocked-scroll-content'
		)
	}
	function closeMenu() {
		if (isNaN(menu)) {
			console.error(`Елемент не передан в параметр`)
			return
		}
		if (menu.classList.contains(activeClass)) {
			menu.classList.remove(activeClass)
		}
		document.body.classList.remove(
			nameClassBlockedScroll || 'menu__blocked-scroll-content'
		)
	}
	function toggleMenu() {
		if (isNaN(menu)) {
			console.error(`Елемент не передан в параметр`)
			return
		}
		menu.classList.toggle(activeClass)
		document.body.classList.toggle(
			nameClassBlockedScroll || 'menu__blocked-scroll-content'
		)
	}
	function openBtnActionMenu() {
		if (isNaN(btnOpenSelector)) {
			console.error(`Елемент не найден`)
			return
		}
		document.getElementById(btnOpenSelector).addEventListener('click', () => {
			this.openMenu()
		})
	}
	function closeBtnActionMenu() {
		if (isNaN(btnCloseSelector)) {
			console.error(`Елемент не найден`)
			return
		}
		document.getElementById(btnCloseSelector).addEventListener('click', () => {
			if (menu.classList.contains(activeClass)) {
				this.closeMenu()
			}
		})
	}
	function init() {
		this.openBtnActionMenu()
		this.closeBtnActionMenu()

		document.querySelectorAll('.menu-burger__item').forEach(item => {
			item.addEventListener('click', () => {
				if (menu.classList.contains(activeClass)) {
					this.closeMenu()
				}
			})
		})

		const handleClickOutside = e => {
			if (
				menu &&
				!menu.contains(e.target) &&
				menu.classList.contains(activeClass)
			) {
				this.closeMenu()
			}
		}
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}

	return {
		openMenu,
		closeMenu,
		toggleMenu,
		openBtnActionMenu,
		closeBtnActionMenu,
		init,
	}
}
