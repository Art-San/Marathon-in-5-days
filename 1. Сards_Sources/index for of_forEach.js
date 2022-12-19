const slades = document.querySelectorAll('.slide')
console.log('slades', slades)

for (const slade of slades) {
    slade.addEventListener('click', () => {
        clearActiveClasses()
        
        
        slade.classList.add('active')
    })
}


function clearActiveClasses (params) {
    slades.forEach((slade) => {
        slade.classList.remove('active')
    })
}




//////// for of --- forEach ///////////////////
// for (const slade of slades) {
//     slade.addEventListener('click', () => {
//         slades.forEach((slade) => {
//             slade.classList.remove('active')
//         });
        
//         slade.classList.add('active')
//     })
// }
///////////////   forEach ////////////////////
// slades.forEach((slade) => {
//     slade.addEventListener('click', (event) => {
//         slades.forEach((slade) => {
//             slade.classList.remove('active')
//         });
//         const { target } = event;
//         target.classList.add('active');
//     });
// });