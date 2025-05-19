chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
	if (changeInfo.url && changeInfo.url.endsWith('/files')) {
		chrome.scripting
			.executeScript({
				target: { tabId },
				files: ['scripts/content.js']
			})
			.then(data => console.log(data))
			.catch(err => console.log(err))
	}
})
