const form = document.querySelector('form')
form?.addEventListener('submit', event => {
	event.preventDefault()

	const input: HTMLInputElement =
		document.querySelector('form > input') || document.createElement('input')

	chrome.storage.local
		.set({ gh_token: input.value })
		.then(() => console.log('save successful'))
		.catch(e => console.log('e', e))
})
//
// chrome.storage.local
// 	.get('gh_token')
// 	.then(result => console.log(result))
// 	.catch(e => console.log(e))
