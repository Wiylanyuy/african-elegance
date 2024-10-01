// const bar = document.getElementById('bar');
// const nav = document.getElementById('navbar');
// if (bar) {
//     bar.addEventListener('click', () => {
//         nav.classList.toggle('active');
//     })
// }

let nav = document.getElementById('navbar');
document.querySelector('#bar').onclick = () => {
    console.log('clicked');
    
    nav.classList.toggle('active')
}