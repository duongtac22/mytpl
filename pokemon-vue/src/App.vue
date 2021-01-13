<template>
 <div class="p-14 ">
    <!-- <router-link class="flex justify-center text-4xl text-yellow-700" to="/"
      >Pokemon Picker</router-link
    >
    <router-view /> -->
    <div id="app">
       <h1>Pokemon's</h1>
        <Home></Home>
    </div>
  </div>
  
</template>
<script>
import Home from './views/Home.vue';
export default {
  name : 'App',
  components: {
    Home
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Acme');




body {
  background: #00303f;
  line-height: 1.5;
  font-family: 'Acme', arial;
}
h1 { color: #efefef; text-align: center;}
.cart-wrapper {
  text-align: center;
  margin: 20px 0;
  padding: 14px;
  max-width: 1100px;
  margin: auto;
}

.cart-wrapper > h1 {
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 20px;
  text-transform: uppercase;
}

.cart-wrapper  {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  justify-content: center;
  align-items: center;
}

.Card {
  width: 120px auto;
  background: #5bb0ca;
  color: #e4c439;
  padding: 1rem;
  border-radius: 10px;
  border-top: 0.5px solid #e4c439;
  border-bottom: 0.5px solid #e4c439;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
}

.Card:hover {
  transform: scale(1.05);
}

.Card--id {
  background: #e4c439;
  width: 3rem;
  color: #fff;
  padding: 0.1rem;
  font-weight: 700;
  position: absolute;
  border-radius: 0 0 10px 0;
  top: 0;
  left: 0;
}
.Card--name {
  text-transform: capitalize;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-weight: 700;
}

.Card--image {
  width: 150px;
  display: block;
  margin: auto;
}

.Card--details {
  font-size: 1.3rem;
  color: #e4c439;
}

</style>
