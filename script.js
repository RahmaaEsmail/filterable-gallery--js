const ul = document.querySelector('ul')
const li = document.querySelectorAll('.item')
const images = document.querySelectorAll('.images')

const removeActiveItem = function () {
    li.forEach(item => {
        item.classList.remove('active')
    })

    images.forEach(img => {
        img.classList.add('hide')
    })
}

const setActiveItem = function (e) {
    if (e.target.className == 'item') {
        e.target.classList.add('active')
        const content = e.target.textContent;
        if (content === 'All') {
            document.querySelector('.images-all').classList.remove('hide')
        }
        if (content === 'Logo Design')
            document.querySelector('.logo-design').classList.remove('hide')

        if (content === 'Web Design')
            document.querySelector('.web-design').classList.remove('hide')

        if (content === 'Mobile Design')
            document.querySelector('.mobile-design').classList.remove('hide')
    }
}

ul.addEventListener('click', function (e) {
    removeActiveItem()
    setActiveItem(e)
})
