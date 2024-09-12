document.addEventListener('DOMContentLoaded', function () {
    const purchaseModal = document.getElementById('purchaseModal');
    const purchaseModalImage = document.getElementById('purchaseModalImage');
    const purchaseCloseButton = document.getElementById('purchaseCloseButton');
    const purchaseModalButtons = document.getElementById('purchaseModalButtons');

    document.querySelectorAll('.purchaseButton').forEach(button => {
        button.addEventListener('click', function () {
            const imgSrc = this.getAttribute('data-image');
            purchaseModalImage.src = imgSrc;
            purchase
        })})})
