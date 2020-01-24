'use strict';

function addCopyButtons() {
    let actions = document.querySelectorAll('.edit .model_details div.actions');
    if (actions.length) {
        actions.forEach((container) => {
            container.parentElement.style.width = '320px';
            let newBtn = document.createElement("button");
            newBtn.type = 'button';
            newBtn.textContent = 'Cp';
            newBtn.classList.add('clipboard_button');
            newBtn.classList.add('hoverable');
            newBtn.classList.add('use_click_to_copy');
            newBtn.classList.add('autosaves');

            let id = container.querySelector('input.id.text_value').value;
            if (id) {
                id = id.replace('#', '');
                let titleTextarea = container.closest('.story_' + id).querySelector('textarea');
                let name = (titleTextarea) ? titleTextarea.value : 'Name Not Found';
                newBtn.dataset.clipboardText = `[#${id}] ${name}`;
                newBtn.onclick = () => {
                    console.log('=== Copied: ' + name);
                };
                container.insertAdjacentElement('beforeend', newBtn);
            }
        });
    }
}

let container = document.getElementsByClassName('panels');
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('expander')) {
        setTimeout(addCopyButtons, 500);
    }
}, false);