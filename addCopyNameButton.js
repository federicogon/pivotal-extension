'use strict';
console.log('== INIT Pivotal extension.');

function addCopyButtons() {
    let actions = document.querySelectorAll('.edit .model_details div.actions');
    if (actions.length) {
        actions.forEach((container) => {
            if (container.querySelector('.copy_id_name_button')) return;
            container.parentElement.style.width = '320px';
            let newBtn = document.createElement("button");
            newBtn.type = 'button';
            newBtn.textContent = 'Cp';
            newBtn.classList.add('clipboard_button');
            newBtn.classList.add('hoverable');
            newBtn.classList.add('left_endcap');
            newBtn.classList.add('copy_id_name_button');

            let id = container.querySelector('input.id.text_value').value;
            if (id) {
                id = id.replace('#', '');
                let titleTextarea = container.closest('.story_' + id).querySelector('textarea');
                let name = (titleTextarea) ? titleTextarea.value : 'Name Not Found';
                let clipboard = `[#${id}] ${name}`;
                newBtn.dataset.clipboardText = clipboard;
                newBtn.onclick = () => {
                    console.log('=== Copied: ' + clipboard);
                };
                container.insertAdjacentElement('afterbegin', newBtn);
            }
        });
    }
}

document.addEventListener('click', function (e) {
    if ((e.target.tagName === 'SPAN' && e.target.classList.contains('labels')) ||
        (e.target.tagName === 'SPAN' && e.target.classList.contains('tracker_markup')) ||
        (e.target.tagName === 'SPAN' && e.target.classList.contains('story_name')) ||
        (e.target.tagName === 'HEADER' && e.target.classList.contains('preview'))
    ) {
        setTimeout(addCopyButtons, 500);
    }
}, false);