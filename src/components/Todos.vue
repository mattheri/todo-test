<script setup>
import { ref, onMounted, onUpdated } from "vue";
import TodosService from "../services/todos-service";

const todosService = new TodosService();

const todos = ref([]);
const getTodos = async () => (todos.value = await todosService.getTodos());

onMounted(getTodos);
</script>

<template>
  <div class="todos">
    {{ todos }}
  </div>
</template>
