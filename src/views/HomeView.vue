<template>
  <div class="home">
    <header>
      <h1>Welcome to Homework Assistant</h1>
    </header>
    <main>
      <section class="img">
        <img src="../assets/homework.jpg" alt="homework image">
      </section>
      <section>
        <h2>About the App</h2>
        <p>
          The purpose of this web app is to provide an option for students to plan out their homework in a more productive and purposeful way. The main goal is to solve the problem of students who struggle with managing their homework and time effectively.
        </p>
      </section>
    </main>
  </div>
  <Footer />
</template>

<script setup>
import Footer from '../components/Footer.vue';
// No need for explicit import of 'reactive', 'computed', etc. 
// They are automatically imported in <script setup>

// Any setup code can be placed here, if needed.
</script>

<style lang="scss" scoped>
.home {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  padding-top: 40px;

  header {
    // background-color: #333;
    // color: white;
    padding: 10px;

    h1 {
      margin: 0;
    }
  }

  main {
    margin-top: 30px;
    padding: 20px;

    section {
      margin: 10px;
      border: 7px solid #41b080;
      border-radius: 10px;
      height: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        margin-bottom: 20px;
      }

      p {
        padding: 15px;
      }

      img {
        height: 19.2rem;

        // width: fit-content;
      }
    }
  }

  @media(min-width: 800px){
    main {
      display: flex;
    }
  }
}
</style>
