(function () {
    utils.print();
    onClick();

    SUBMIT_BUTTON.addEventListener('click', (e) => {
        e.preventDefault();

        if (INPUT.value) {
            let value = INPUT.value;
            userStorage.addItem(value, utils);
            utils.print();
            onClick();
            INPUT.value = "";
        }
    });

    function onClick() {
        const removeBinsArr = Array.from(RECYCLE_BINS);
        const todos = utils.getItem('lists');

        for (let i = 0; i < removeBinsArr.length; i++) {
            if (removeBinsArr[i].dataset.id) {
                continue;
            }

            removeBinsArr[i].addEventListener('click', (e) => {
                userStorage.removeItem(e.target.parentElement.dataset.id);
                const parent = removeBinsArr[i].parentElement.parentElement;
                const child = removeBinsArr[i].parentElement;
                parent.removeChild(child.nextElementSibling);
                parent.removeChild(child);
            });

            removeBinsArr[i].previousElementSibling.addEventListener('click', (e) => {
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
        utils.setItem('lists', new Array);
        utils.print();
        INPUT.value = '';
    });
})();