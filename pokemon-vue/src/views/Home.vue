<template>
  <div class="cart-wrapper">
    <div
      class="Card"
      v-for="(pokemon, idx) in responseName"
      :key="{ idx }"
      @click="openDetail"
    >
      <span class="Card--id">#{{ pokemon.id }}</span>
      <img
        class="Card--image"
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name"
      />
      <h1 className="Card--name">{{ pokemon.name }}</h1>
      <span className="Card--details">
        {{ pokemon.types.map((poke) => poke.type.name).join(", ") }}
      </span>
    </div>

    <!-- <input type="hidden" id="checkbox" v-model="nextUrl" > -->
    <button @click="newUrl = nextUrl">Load more Pokemon</button>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, watch } from "vue";
export default {
  name: "Home",
  setup() {
    //  const pokemonList = reactive({
    //   pokemons: []
    // });
    //ở trong vue3 có hàm onMounted
    // đây là đống a muốn fetch khi vào trang đúng k ?   đúng . nhưng lấy xong link này nó phải lấy cái name để lấy thêm thông tin
    // oke bh e code kiểu cũ cho a xem
    // sau đó e sẽ hướng dẫn a code theo async await
    // a đọc thêm nhé

    // fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50")
    //   .then((res) => {
    //     // ví dụ ở đâu res.name = name
    //     const name = res.name
    //     //theo kiểu cũ là
    //     fetch(`url?name=${name}`).then(result => {
    //       console.log(result)
    //     })
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     pokemonList.pokemons = data.results;
    // });
    //commnet dong tren lai a
    // nhưng bỏ hết đi bh làm kiểu mới
    const state = reactive({
      responseName: [],
      nextUrl: null,
      newUrl: null,
      pokemonApi: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10",
      showDetail: false,
    });
    async function getPokemonApi(newUrl, state) {
      let apiUrl = "";
      if (newUrl === "") {
        apiUrl = state.pokemonApi;
      } else {
        apiUrl = newUrl;
      }
      await fetch(apiUrl)
        .then((response) => response.json())
        .then(async (res) => {
          let pokemonData = res.results;
          state.nextUrl = res.next;
          for (let i = 0; i < pokemonData.length; i++) {
            await getpokemon(pokemonData[i].name, state.responseName);
          }
        });
    }
    async function getpokemon(pokemonName, data) {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((result) => {
          // console.log(result);
          data.push(result);
        });
    }

    function openDetail() {
      state.showDetail = true;
    }

    function closeDetail() {
      state.showDetail = false;
    }

    watch(
      () => state.newUrl,
      async () => {
        await getPokemonApi(state.newUrl, state);
      }
    );
    onMounted(async () => {
      await getPokemonApi(state.pokemonApi, state);
    });

    return { ...toRefs(state), closeDetail, openDetail };
  },
};
</script>
