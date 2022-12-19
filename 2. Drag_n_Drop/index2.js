const item = document.querySelector('.item')
// console.log('item', iten)
const placeholders = document.querySelectorAll(".placeholder")
// console.log('placeholders', placeholders)

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    // console.log('placeholder', placeholder)
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    // console.log('drag start', this) лучше THIS не использовать для подобного функционала
//    console.log('drag start', event.target)
   event.target.classList.add('hold')
   setTimeout(() => event.target.classList.add('hide'), 0)
   
   
}

function dragend() {
    // console.log('drag end')
    event.target.classList.remove('hold', 'hide')
    // event.target.classList.remove('hold')
    // event.target.classList.remove('hide')
//    а можно вообще перетереть класы
    // event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()
    
    // console.log('drag over')
}

function dragenter(event) {
    event.target.classList.add('hovered')
    console.log('drag enter')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
    console.log('drag leave')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
    // console.log('drag drop')
}

