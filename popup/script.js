const openDetailButtons = document.querySelectorAll('[data-detail-target]')
const closeDetailButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openDetailButtons.forEach(button => {
    button.addEventListener('click', () => {
        const detail = document.querySelector(button.dataset.detailTarget)
        openDetail(detail)
    })
})


function openDetail(detail) {
    if (detail == null) return
    detail.classList.add('active')
    overlay.classList.add('active')
}
/*if (detail == null) return means if the detail is not there, then return.
detail.classList.add('active') means add the class active to the detail.
overlay.classList.add('active') means add the class active to the overlay.
*/

closeDetailButtons.forEach(button => {
    button.addEventListener('click', () => {
        const detail = button.closest('.detail')
        closeDetail(detail)
    })
})
/*button.closest('.detail') means the closest ancestor of the button element that has a class of detail.
eg, if I use button 1 to open detail 1, then the closest ancestor of button 1 that has a class of detail is detail 1.
*/
function closeDetail(detail) {
    if (detail == null) return
    detail.classList.remove('active')
    overlay.classList.remove('active')
}
overlay.addEventListener('click', () => {
    const details = document.querySelectorAll('.detail.active')
    details.forEach(detail => {
        closeDetail(detail)
    })
})
