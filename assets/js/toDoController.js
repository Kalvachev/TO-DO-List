(function () {
    utils.print();
    onClick();

    SUBMIT_BUTTON.addEventListener('click', (e) => {
        e.preventDefault();

        if (INPUT.value.trim()) {
            let value = INPUT.value.trim();
            userStorage.addItem(value, utils);
            utils.print();
            onClick();
            INPUT.value = '';
        }
    });

    function onClick() {
        const binsArr = Array.from(RECYCLE_BINS);
        const todos = utils.getItem('todos');

        for (let i = 0; i < binsArr.length; i++) {
            if (binsArr[i].dataset.id) {
                continue;
            }

            binsArr[i].addEventListener('click', (e) => {
                userStorage.removeItem(e.target.parentElement.dataset.id);
                const parent = binsArr[i].parentElement.parentElement;
                const child = binsArr[i].parentElement;
                parent.removeChild(child.nextElementSibling);
                parent.removeChild(child);
            });

            binsArr[i].previousElementSibling.addEventListener('click', (e) => {
                userStorage.checkItem(todos[i].version);
                if (e.target.style.textDecoration === 'line-through') {
                    e.target.style.textDecoration = 'none';
                } else {
                    e.target.style.textDecoration = 'line-through';
                }
            });
        }
    }

    CLEAR_BUTTON.addEventListener('click', (e) => {
        e.preventDefault();
        utils.setItem('todos', new Array);
        utils.print();
        INPUT.value = '';
    });
})();