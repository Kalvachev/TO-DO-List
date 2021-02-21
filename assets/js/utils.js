const utils = (function () {
    function getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    function setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function printTodos() {
        const toDoList = getItem('todos');
        const source = document.getElementById('source').innerHTML;
        const content = document.getElementById('dataContainer');
        const template = Handlebars.compile(source);
        const html = template(toDoList);

        content.innerHTML = html;

        if (toDoList.length > 0) {
            CLEAR_BUTTON.style.display = 'block';
        } else {
            CLEAR_BUTTON.style.display = 'none';
        }
    }

    return {
        getItem,
        setItem,
        printTodos
    }
})();