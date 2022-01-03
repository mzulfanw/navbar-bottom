// const Li = document.querySelectorAll('li')
// Li.forEach((value, index) => {
//     let string = [``]
//     string.forEach((elemen, idx) => {
//         if (index == idx) {
//             value.innerText = elemen
//         }
//     })
// });

// const isMobile = window.matchMedia("only screen and (max-width: 600px)").matches;
// if (isMobile) {
//     const li = document.querySelectorAll("li a")
//     let icons = document.createElement("i")
//     const icon = ['fas fa-home', 'fas fa-home', 'fas fa-home']
//     li.forEach((value, index) => {
//         icon.forEach((iconss, idx) => {
//             if (index == idx) {
//                 const kontol = icons.setAttribute("class", iconss)
//                 value.innerHTML += kontol
//             }
//         })
//     })
// }


const arr = ['fas fa-home', 'fas fa-home', 'fas fa-home']
const li = document.createElement('i')
const lia = document.querySelectorAll("li a")
lia.forEach((value, index) => {
    value.remove()
    arr.forEach((val, idx) => {
        if (index == idx) {
            value.innerHTML = val
        }
    })
})
// arr.forEach((value, index) => {
//     console.log(li.setAttribute("class", value[index]));

// })

const memo = li.setAttribute("class", "")

console.log(memo)