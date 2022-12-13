<script setup>
import { ref, onMounted, onUpdated } from "vue";
import TodosService from "../services/todos-service";

const todosService = new TodosService();

const todos = ref([]);
const getTodos = async () => (todos.value = await todosService.getTodos());

onMounted(getTodos);
</script>

<template>
  <pre>{{ todos }}</pre>
  <div v-for="todo in todos" class="todos"></div>
</template>
