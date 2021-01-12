<template>
  <div class="mt-10 p-4 flex flex-wrap flex-col">
    <div
      class="ml-4 text-2xl text-blue-400 underline"
      v-for="(pokemon, idx) in pokemons"
      :key="idx"
    >
        
        <router-link :to="`/pokemon/${idx + 1}`">
        {{ pokemon.name }}
        </router-link>
      
    </div>
  </div>
</template>

<script>
import { reactive , toRefs} from "vue";
export default {
  name: 'Home',
  setup() {
     const pokemonList = reactive({
      pokemons: []
    });
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        pokemonList.pokemons = data.results;
    });
    return { ...toRefs(pokemonList) };
  }
}
</script>
