const input = document.getElementById('searchInput')
const createBtn = document.getElementById('searchBtn')
const listElement = document.getElementById('list')

const notes = ['9am - get up', '10am - go to college']

function render () {
    for ( let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
    }
    
}
render()
createBtn.onclick = function () {
    if (input.value.length === 0) {
        return
    }
    listElement.insertAdjacentHTML(
    'beforeend',

    getNoteTemplate(input.value)
    )
    input.value = ""
}


function getNoteTemplate(title) {
    return `
        <li class="list-group-item d-flex justify-between align-items-center">
            <span>${title}</span>
            <span>
                <span class="btn btn-small btn-success"">Succes</span>
                <span class="btn btn-small btn-danger" id="undo">Undo</span>
            </span>
        </li>
    `
}
