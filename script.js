const contents = document.querySelectorAll('.content')
const listedItems = document.querySelectorAll('nav ul li')

listedItems.forEach((item,idx) => {
  item.addEventListener('click', () => {
    hideAllContents()
    hideAllItems()

    item.classList.add('active')
    contents[idx].classList.add('show')
  })
})


function hideAllContents(){
  contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems(){
  listedItems.forEach(item => item.classList.remove('active'))
}

