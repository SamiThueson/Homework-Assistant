<template>
  <main>
    <h1>Create Assignment</h1>
    <TaskCreator @create-task="createTask" />
    <ul class="task-list" v-if="taskList.length > 0">
      <TaskItem v-for="(task, index) in taskList" :task="task" :index="index" @toggle-complete="toggleTodoComplete" @edit-task="toggleEditTask" @update-task="updateTask" @delete-task="deleteTask" />
    </ul>
    <p class="tasks-msg" v-else>
      <Icon icon="noto-v1:sad-but-relieved-face" width="22"/>
      <span>You have no assignment's to complete! Add one!</span>
    </p>
    <p v-if="taskCompleted && taskList.length > 0" class="tasks-msg">
      <Icon icon="noto-v1:party-popper" />
      <span>You have completed all of your assignments!</span>
    </p>
  </main>
  <Footer/>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import {uid} from "uid";
import { Icon } from "@iconify/vue";
import axios from 'axios';
import TaskCreator from '../components/assignment/TaskCreator.vue';
import TaskItem from "../components/assignment/TaskItem.vue";
import Footer from "../components/Footer.vue";
const taskList = ref([]);

const taskCompleted = computed(() => {
  return taskList.value.every((task) => task.isCompleted);
});

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:5050/assignment');
    taskList.value.push({
    id: uid(),
    task: response.data[0].assignment_name,
    isCompleted: null,
    isEditing: null,
  });
  //  = response.data[0].assignment_name;
    console.log(response.data[0].assignment_name)

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(fetchData);

const createTask = (task) => {
  taskList.value.push({
    id: uid(),
    task,
    isCompleted: null,
    isEditing: null,
  });
};

const toggleTodoComplete = (taskPos) => {
  taskList.value[taskPos].isCompleted = !taskList.value[taskPos].isCompleted
};

const toggleEditTask = (taskPos) => {
  taskList.value[taskPos].isEditing = !taskList.value[taskPos].isEditing
};

const updateTask = (taskVal, taskPos) => {
  taskList.value[taskPos].task = taskVal;
};

const deleteTask = (taskId) => {
  taskList.value = taskList.value.filter((task) => task.id !== taskId);
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }
  .task-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
  }

  .tasks-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
}
</style>