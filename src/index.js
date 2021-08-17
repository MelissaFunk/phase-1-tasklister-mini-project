document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    newListItem(e.target['new-task-description'].value)
  })
  // const dropDown = document.createElement('dropdown') // create dropdown element?
  // form.insertBefore(dropDown, form.childNodes[1]) // placing element?
})

function newListItem(input){
  const li = document.createElement('li')
  const btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn. textContent = 'x'
  li.textContent = `${input} `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}

// function changeColor(e){
  
// } // function for changing li text color based on dropdown selection