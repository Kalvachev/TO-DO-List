const userStorage = (function () {
    class ToDo {
        constructor(title, version) {
            this.title = title;
            this.version = version;
            this.checked = false;
        }
    }

    class UserConstructor {
        constructor() {
            if (utils.getItem('lists')) {
                this.todos = utils.getItem('lists');
            } else {
                this.todos = [];
                utils.setItem('lists', this.todos);
            }
        }

        addItem(todo, version) {
            this.todos = utils.getItem('lists');
            this.todos.push(new ToDo(todo, version));
            utils.setItem('lists', this.todos);
        }

        removeItem(version) {
            this.todos = utils.getItem('lists');
            this.todos = this.todos.filter(item => item.version === version);
            utils.setItem('lists', this.todos);
        }

        checkItem(version) {
            this.todos.forEach(todo => {
                if (todo.version === version) {
                    if (todo.checked) {
                        todo.checked = false;
                    } else {
                        todo.checked = true;
                    }

                    return utils.setItem('lists', this.todos);
                }
            });
        }
    }

    return new UserConstructor();
})();