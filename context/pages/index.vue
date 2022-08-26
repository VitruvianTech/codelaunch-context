<template>
  <v-main>
    <Html>
      <Head>
        <Title>CodeLaunch™</Title>
      </Head>
    </Html>
    <section>
      <h1>
        <span>CodeLaunch</span>
      </h1>
    </section>
  </v-main>
</template>

<script setup>
definePageMeta({
  layout: 'column'
})
</script>

<style scoped>
main {
  height: 100vh;
  display: table;
  width: 100%;
  background: #292929;
}

section {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  top: -80px;
  z-index: 1;
}

h1 {
  padding: 0;
  display: block;
  margin: auto;
  text-align: center;
  font-size: 4.5em;
  color: #f0f0f0;
  font-style: italic;
  text-shadow: 2px 1px 2px #000;
  position: relative;
  -webkit-text-fill-color: orange;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: red;
  filter: drop-shadow(2px 1px 2px #000);
}

h1:after {
  position: absolute;
  content: '';
  background: url(/insignia.png) no-repeat;
  width: 3.5em;
  height: 3.5em;
  top: 50%;
  left: 50%;
  background-size: contain;
  transform: translate(-50%, -50%);
  z-index: 1;
  filter: drop-shadow(0 0 3px #000) sepia(1);
  opacity: .9;
}

span {
  position: relative;
  z-index: 2;
}
</style>
