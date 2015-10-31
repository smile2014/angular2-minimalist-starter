import {TodoService} from './todo_service';

export function main() {
  describe('Todo Service', () => {
    
    let todoService: TodoService;

    beforeEach(() => {
      todoService = new TodoService;
    });

    it('should return the list of todos', () => {
      let todos = todoService.find();
      expect(todos).toEqual(jasmine.any(Array));
    });
  });
}