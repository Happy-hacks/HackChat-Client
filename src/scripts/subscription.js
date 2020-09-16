const convertedVapidKey = urlBase64ToUint8Array(process.env.REACT_APP_PUBLIC_VAPID_KEY);

function urlBase64ToUint8Array(base64String) {
	const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
	// eslint-disable-next-line
	const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

	const rawData = window.atob(base64);
	const outputArray = new Uint8Array(rawData.length);

	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
}

function sendSubscription(subscription) {
	return fetch(`${process.env.REACT_APP_SERVER_HOST}/subscribe`, {
		method: 'POST',
		body: JSON.stringify(subscription),
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

export async function subscribeUser() {
	if ('serviceWorker' in navigator) {
		const registration = await navigator.serviceWorker.ready;
		if (!registration.pushManager) return console.warn('Push manager unavailable.');

		const existedSubscription = await registration.pushManager.getSubscription();

		if (!existedSubscription) {
			try {
				const newSubscription = await registration.pushManager.subscribe({
					applicationServerKey: convertedVapidKey,
					userVisibleOnly: true,
				});

				sendSubscription(newSubscription);
			} catch (error) {
				if (Notification.permission !== 'granted') console.warn('Permission was not granted.');
				else console.error('An error ocurred during the subscription process.', error);
			}
		} else sendSubscription(existedSubscription);
	} else console.warn('No Service Worker detected.');
}
