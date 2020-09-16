self.addEventListener('push', (event) => {
	const { title, ...options } = event.data.json();
	event.waitUntil(self.registration.showNotification(title, options));
});
