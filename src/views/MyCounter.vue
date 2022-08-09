<template>
  <div>
   <section>Beli Sekarang</section>
   <section class="flex">
    <div title="hari">
      {{ tampilkanHari }}
    </div>
    <span>:</span>
    
    <div title="jam">
      {{ tampilkanJam }}
    </div>
    <span>:</span>

    <div title="menit">
      {{ tampilkanMenit }}
    </div>
    <span>:</span>

    <div title="detik">
      {{ tampikanDetik }}
    </div>

   </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
      tampilkanHari: 0,
      tampilkanJam: 0,
      tampilkanMenit: 0,
      tampikanDetik: 0,
    }),
    computed: {
      _detik: () => 1000,
      _menit() {
        return this._detik * 60; // 60000
      },
      _jam() {
        return this._menit * 60; // 3.600.000
      },
      _hari() {
        return this._jam * 24; // 86.400.000
      },
    },
    mounted() {
      this.tampilkanWaktuTersisa()
    },
    methods: {
      tampilkanWaktuTersisa() {
        const hitungMundurWaktu = setInterval(() => {
          const awal = new Date(); // hari ini
          const akhir = new Date(2022, 7, 10, 10, 10, 0, 0); // waktu expired
          const selisih = akhir.getTime() - awal.getTime(); // selsisih antara awal dan akhir
        
          if(selisih < 0) {
            clearInterval(hitungMundurWaktu);
            return
          }

          this.tampilkanHari = Math.floor((selisih / this._hari));
          this.tampilkanJam = Math.floor((selisih % this._jam) / this._jam);
          this.tampilkanMenit = Math.floor((selisih % this._jam) / this._menit);
          this.tampikanDetik = Math.floor((selisih % this._menit) / this._detik);
        },1000);
      },
    },
  };
</script>

<style scoped>

</style>