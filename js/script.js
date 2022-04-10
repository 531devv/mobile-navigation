const contents = document.querySelectorAll('.content');
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents();
        hideAllItems();
        contents.item(idx).classList.add('show');
        navItems.item(idx).classList.add('active');
    });
});

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'));
}

function hideAllItems() {
    navItems.forEach(item => item.classList.remove('active'));
}
