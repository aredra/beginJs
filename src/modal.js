const open = document.getElementById('opener');
const close = document.getElementById('closer');
const modal = document.querySelector('.modal-wrapper');

open.onclick = () => {
    modal.style.display = 'flex';
}

close.onclick = () => {
    modal.style.display = 'none';
}