(function () {
    utils.printTodos();
    onTodoClick();

    SUBMIT_BUTTON.addEventListener('click', (e) => {
        e.preventDefault();

        if (INPUT.value.trim()) {
            let value = INPUT.value.trim();
            // value = value[0].toUpperCase() + value.substring(1);
            userStorage.add(value, utils);
            utils.printTodos();
            onTodoClick();
            INPUT.value = '';
        }
    });

    function onTodoClick() {
        const binsArr = Array.from(RECYCLE_BINS);
        // const todos = utils.getItem('todos');

        for (let i = 0; i < binsArr.length; i++) {
            if (binsArr[i].dataset.id) {
                continue;
            }

            binsArr[i].addEventListener('click', (e) => {
                userStorage.remove(e.target.parentElement.dataset.id);
                const parent = binsArr[i].parentElement.parentElement;
                const child = binsArr[i].parentElement;
                parent.removeChild(child.nextElementSibling);
                parent.removeChild(child);
            });
        }
    }

    CLEAR_BUTTON.addEventListener('click', (e) => {
        e.preventDefault();
        utils.setItem('todos', new Array);
        utils.printTodos();
        INPUT.value = '';
    });
})();