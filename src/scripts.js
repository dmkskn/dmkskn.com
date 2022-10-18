document.getElementById('intro').classList.add('block--hidden')
document.getElementById('u1-ma').classList.add('block--hidden')
document.getElementById('list-of-websites').classList.add('block--hidden')
document.getElementById('photo').classList.add('block--hidden')

Array.from(document.querySelectorAll('a[href="#intro"]')).forEach(a => {
	a.addEventListener('click', function(event) {
		event.preventDefault()
		
		Array.from(document.querySelectorAll('a[href="#intro"]')).forEach(a => { a.classList.add('disabled-link')})

		const block = document.getElementById('intro')
		block.classList.remove('block--hidden')

		window.scrollTo({
			top: block.offsetTop - window.innerHeight / 4,
			left: 0,
			behavior: 'smooth'
		})
	}, false)
})

Array.from(document.querySelectorAll('a[href="#u1-ma"]')).forEach(a => {
	a.addEventListener('click', function(event) {
		event.preventDefault()
		
		Array.from(document.querySelectorAll('a[href="#u1-ma"]')).forEach(a => { a.classList.add('disabled-link')})

		const block = document.getElementById('u1-ma')
		block.classList.remove('block--hidden')

		window.scrollTo({
			top:  block.offsetTop - window.innerHeight / 4,
			left: 0,
			behavior: 'smooth'
		})
	}, false)
})

Array.from(document.querySelectorAll('a[href="#list-of-websites"]')).forEach(a => {
	a.addEventListener('click', function(event) {
		event.preventDefault()

		Array.from(document.querySelectorAll('a[href="#list-of-websites"]')).forEach(a => { a.classList.add('disabled-link')})

		const block = document.getElementById('list-of-websites')
		block.classList.remove('block--hidden')

		window.scrollTo({
			top: block.offsetTop - window.innerHeight / 4,
			left: 0,
			behavior: 'smooth'
		})

	}, false)
})

Array.from(document.querySelectorAll('a[href="#photo"]')).forEach(a => {
	a.addEventListener('click', function(event) {
		event.preventDefault()

		Array.from(document.querySelectorAll('a[href="#photo"]')).forEach(a => { a.classList.add('disabled-link')})

		const block = document.getElementById('photo')
		block.classList.remove('block--hidden')

		window.scrollTo({
			top: block.offsetTop - window.innerHeight / 4,
			left: 0,
			behavior: 'smooth'
		})

	}, false)
})