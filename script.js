const emojiContainer = document.getElementById('emoji-container');
const input = document.getElementById('emoji-input');
const addEndBtn = document.getElementById('push-btn');
const deleteBtn = document.getElementById('delete-btn');

addEndBtn.addEventListener('click', addEmojis);

function addEmojis() {
    let newElement = document.createElement('span');
    newElement.textContent = input.value
    emojiContainer.appendChild(newElement)
}

