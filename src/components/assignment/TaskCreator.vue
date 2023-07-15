<template>
  <div class="input-wrap" :class="{'input-err': taskState.invalid}">
    <input type="text" v-model="taskState.task">
    <button @click="createTask()">Create</button>
  </div>
  <p v-show="taskState.invalid" class="err-msg">{{ taskState.errMsg }}</p>
</template>

<script setup>
import {reactive} from 'vue';

const emit = defineEmits(["create-task"]);

const taskState = reactive({
  task: "",
  invalid: null,
  errMsg: "",
});

const createTask = () => {
  taskState.invalid = null;
  if (taskState.task !== "") { 
    emit("create-task", taskState.task);
    taskState.task = "";
    return;
  }
  taskState.invalid = true;
  taskState.errMsg = "Task value cannot be empty";
};
</script>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &.input-err {
    border-color: red;
  }

  &:focus-within {
    box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
      0 -2px 4px -2px rgb(0 0 0 / 0.1);
  }

  input {
    width: 100%;
    padding: 8px 6px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 8px 16px;
    border: none;
  }
}

.err-msg {
    margin-top: 6px;
    font-size: 12px;
    text-align: center;
    color: red;
  }
</style>