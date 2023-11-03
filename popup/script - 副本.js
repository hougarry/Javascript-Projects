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


closeDetailButtons.forEach(button => {
    button.addEventListener('click', () => {
        const detail = button.closest('.detail')
        closeDetail(detail)
    })
})

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
