<template>
    <h1>Hello Vue World</h1>
  <div v-if="loaded">
    <section class="text-3xl flex justify-center content-center flex-col mx-auto text-center">
      <h1 v-if="!expired">Buy Now</h1>
      <h5 v-else>Timer is Done!</h5>
    </section>
    <section class="flex text-6xl justify-center content-center">
      <div class="days mr-2 relative">
        {{ displayDays }}
        <div class="label text-sm absolute bottom-0">Days</div>
      </div>
      <span class="leading-snug -mt-3">:</span>
      <div class="hours mx-2 relative">
      {{ displayHours }}
      <div class="label text-sm absolute bottom-0">hours</div>
      </div>
      <span class="leading-snug -mt-3">:</span>
      <div class="minutes mx-2 relative">
        {{ displayMinutes }}
        <div class="label text-sm absolute bottom-0">Minutes</div>
      </div>
      <span class="leading-snug -mt-3">:</span>
      <div class="seconds ml-2 relative">
        {{ displaySeconds }}
        <div class="label text-sm absolute bottom-0">Seconds</div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    // props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
    props: {
      year: {
        type: Number,
        default: 2022
      },
      month: {
        type: Number,
        default: 7
      },
      date: {
        type: Number,
        default: 9
      },
      hour: {
        type: Number,
        default: 0
      },
      minute: {
        type: Number,
        default: (0 - 9)
      },
      second: {
        type: Number,
        default: (0 - 20)
      },
      millisecond: {
        type: Number,
        default: 0
      },
    },
   data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
    loaded: false,
    expired: false,
   }),
   computed: {
      _seconds: () => 1000,
      _minutes() {
        return this._seconds * 60;
      },
      _hours() {
        return this._minutes * 60;
      },
      _days() {
        return this._hours * 24;
      },
      end() {
        return new Date(
          this.year,
          this.month,
          this.date,
          this.hour,
          this.minute,
          this.second,
          this.millisecond,
        );
      },
   },
   mounted() {
    this.showRemaining();
   },
   methods: {
    formatNum: (num) => (num < 10 ? "0" + num : num),
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        // const end = new Date(2022, 7, 9, 0, (0 - 11), 0, 0);
        const distance = this.end.getTime() - now.getTime(); 

        if(distance < 0) {
          clearInterval(timer);
          this.expired = true;
          this.loaded = true;
          return
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
        this.loaded = true;
      }, 1000);
    },
   },
  };
</script>

<style scoped>
  .seconds {
    max-width: 60px;
  }
</style>