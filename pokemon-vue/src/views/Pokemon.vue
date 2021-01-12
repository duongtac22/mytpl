<template>
    <div class="about">
    <div
      v-if="pokemonInfo"
      className="w-3/12 m-auto bg-purple-100 mt-4 shadow-2xl flex justify-center flex-col items-center"
    >
      <h3 className="text-2xl text-green-900 uppercase">{{ pokemonInfo.name }}</h3>
      <div class="flex justify-center">
        <img className="w-48" :src="pokemonInfo.sprites.front_shiny" alt="" />
        <img className="w-48" :src="pokemonInfo.sprites.back_shiny" alt="" />
      </div>

    <div>

        <p  class="text-left"> Type</p>
        <div class="flex justify-center" v-for="(pokemon,idx )  in pokemonInfo.types " :key="{idx}">

            <router-link :to="`/filter/${idx + 1}`">
                {{ pokemon.type.name }}
            </router-link>

        </div>
    </div>

    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";

export default {
    setup() {
        const router = useRoute();
        const pokemons = reactive({
            pokemonInfo : '' 
        })

        fetch(`https://pokeapi.co/api/v2/pokemon/${router.params.slug}/`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            pokemons.pokemonInfo = data;
        });
        return { ...toRefs(pokemons) };
    }
}
</script>