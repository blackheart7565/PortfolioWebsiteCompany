//~~

class Tabs {
	#btnsTab
	#itemsTab
	#options = {} || null

	constructor(tabId, options) {
		const tab = document.getElementById(`${tabId}`)
		this.#options = {
			activeClass: options.activeClass,
		}

		this.#btnsTab = tab.children[0].children
		this.#itemsTab = tab.children[1].children

		this.render()
	}

	getTab() {
		return this._tab
	}

	render() {
		this.#btnsTab[0].classList.add(this.#options.activeClass)
		this.#itemsTab[0].classList.add(this.#options.activeClass)

		this.getButtonTabs(e => {
			const tabId = e.target.getAttribute('data-btn-tabs')
			const itemTab = this.getItemTabs(tabId)

			this.removeActive(Array.from(this.#btnsTab))
			this.removeActive(Array.from(this.#itemsTab))

			itemTab.classList.add(this.#options.activeClass)
			e.target.classList.add(this.#options.activeClass)
		})
	}

	getButtonTabs(callback) {
		Array.from(this.#btnsTab).forEach(btn => {
			btn.addEventListener('click', btn => {
				callback(btn)
			})
		})
	}

	getItemTabs(elementId) {
		return document.getElementById(elementId)
	}

	removeActive(types) {
		types.forEach(item => {
			item.classList.remove(this.#options.activeClass)
		})
	}
}

export { Tabs }
