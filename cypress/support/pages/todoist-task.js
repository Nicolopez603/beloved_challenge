export default class TodoistTaskPage {
    elements = {
        createTask: () => cy.get('.plus_add_button'),
        taskInput: () =>
            cy.get(
                '.task_editor__content_field > ._14423c92 > ._560c1e08 > .UjpFDa7 > .tiptap > .is-empty'
            ),
        addTaskButton: () =>
            cy.get('[data-testid="task-editor-submit-button"]'),
        taskItem: () =>
            cy.get(
                '#task-7926729593 > .task_list_item__body > .c3b69d70 > .task_checkbox > .PtDaWGV'
            ),
        completeTaskCheckbox: () =>
            cy.get(
                '#task-7926851087 > .task_list_item__body > .c3b69d70 > .task_checkbox > .PtDaWGV'
            ),
    }

    createATask() {
        this.elements.createTask().click()
        this.elements.taskInput().type('elpepe')
        this.elements.addTaskButton().click()
    }

    markTaskAsComplete() {
        this.elements.completeTaskCheckbox().click()
    }
}

module.exports = new TodoistTaskPage()
