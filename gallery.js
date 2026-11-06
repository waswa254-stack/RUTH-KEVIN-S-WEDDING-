const photoViewer = document.querySelector('#photo-viewer');

if (photoViewer) {
	const viewerImage = photoViewer.querySelector('img');
	const viewerCaption = photoViewer.querySelector('figcaption');

	document.querySelectorAll('[data-photo-trigger]').forEach((trigger) => {
		trigger.addEventListener('click', () => {
			const photo = trigger.querySelector('img');
			const caption = trigger.closest('figure').querySelector('figcaption');

			viewerImage.src = photo.src;
			viewerImage.alt = photo.alt;
			viewerCaption.textContent = caption.textContent;
			photoViewer.showModal();
		});
	});

	photoViewer.querySelector('[data-photo-close]').addEventListener('click', () => photoViewer.close());
	photoViewer.addEventListener('click', (event) => {
		if (event.target === photoViewer) {
			photoViewer.close();
		}
	});
}