import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todoState", {
  state: () => ({ todos: [] }),
  getters: {
    totalTodos: (state) => state.todos.length,
  },
  actions: {
    addTodo(title, description) {
      const todo = {
        id: Math.floor(Math.random() * 10000), // random ID
        title,
        description,
      };
      this.todos = [todo, ...this.todos];
    },

    async removeTodo(id) {
      // example of an async request
      const response = await axios.get(
        "https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain"
      );
      console.log("received data ", response.data);

      // remove todos
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
});
