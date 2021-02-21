const userStorage = (function () {
    class Todo {
        constructor(title, version) {
            this.title = title;
            this.version = version;
            this.checked = false;
        }
    }

    class UserStorage {
        constructor() {
            if (utils.getItem('todos')) {
                this.todos = utils.getItem('todos');
            } else {
                this.todos = [];
                utils.setItem('todos', this.todos);
            }
        }

        addItem(todo, version) {
            this.todos = utils.getItem('todos');
            this.todos.push(new Todo(todo, version));
            utils.setItem('todos', this.todos);
        }

        removeItem(version) {
            this.todos = utils.getItem('todos');
            this.todos = this.todos.filter(item => item.version === version);
            utils.setItem('todos', this.todos);
        }

        checkItem(version) {
            this.todos.forEach(todo => {
                if (todo.uuid === version) {
                    if (todo.checked) {
                        todo.checked = false;
                    } else {
                        todo.checked = true;
                    }

                    return utils.setItem('todos', this.todos);
                }
            });
        }
    }

    return new UserStorage();
})();