<template>
  <div class="calendar">
    <div class="header">
      <button class="chev left-chev" @click="previousMonth">&lt;</button>
      <h2 class="month">{{ currentMonth }}</h2>
      <button class="chev" @click="nextMonth">&gt;</button>
    </div>
    <div class="grids">
      <div class="days-grid">
        <div class="day" v-for="day in daysOfWeek" :key="day">{{ day }}</div>
      </div>
      <div class="date-grid">
        <div class="date" v-for="date in dates" :key="date" @click="selectDate(date)">
          <div class="val" :class="{ today: isToday(date) }">{{ date }}</div>
        </div>
     </div>
    </div>
  </div>
  <div class="card">
    <h2>Display Events</h2>
    <p>New feature coming soon</p>
  </div>
  <footer>
    <p>&copy; 2023 Homework Assistant Co</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentMonth: '',
      currentDate: new Date(),
      daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dates: [],
    };
  },
  created() {
    this.currentMonth = this.formatMonth(this.currentDate);
    this.generateDates();
  },
  methods: {
    formatMonth(date) {
      const options = { month: 'long', year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    },
    generateDates() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      this.dates = [];
      for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
        this.dates.push(i);
      }
    },
    previousMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.currentMonth = this.formatMonth(this.currentDate);
      this.generateDates();
    },
    nextMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      this.currentMonth = this.formatMonth(this.currentDate);
      this.generateDates();
    },
    isToday(date) {
      const today = new Date();
      return (
        date === today.getDate() &&
        this.currentDate.getMonth() === today.getMonth() &&
        this.currentDate.getFullYear() === today.getFullYear()
      );
    },
    selectDate(date) {
      console.log('Selected date:', date);
    },
  },
};
</script>

<style scoped>
.calendar {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  /* align-items: center; */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #41b080;
}

.chev {
  user-select: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.5s;
}

/* .left-chev {
  transform: rotate(180deg);
} */

.month {
  font-size: 32px;
  font-weight: bolder;
  letter-spacing: 5.5px;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: space-between;
  align-items: center;
}

.day {
  text-align: center;
  font-weight: bold;
}

.date-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: space-between;
  align-items: center;
  row-gap: 10px;
}

.date {
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.val {
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #abdfc9;
}

.card {
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color: #41b080;
  padding: 25px;
}

.val.today {
  color: rgb(234, 39, 39);
}

@media(min-width: 700px){
  .grids {
    margin-left: 10%;
    margin-right: 10%;
  }

  .header {
    justify-content: space-evenly;
  }
}

@media(min-width: 935px){
  .grids, .card {
    margin-left: 20%;
    margin-right: 20%;
  }

}
</style>
