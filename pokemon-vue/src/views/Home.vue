<template>
  <div class="cart-wrapper">
    <div
      class="Card"
      v-for="(pokemon, idx) in responseName"
      :key="{ idx }"
      :pokemonName = "pokemon.name"
      @click="openDetail(idx)"
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
    <button @click="loadMore(nextUrl)">Load more Pokemon</button>
  </div>
   <PokemonDetail 
      v-if="showDetail"
      :showDetail="showDetail"
      @closeDetail="closeDetail" />
</template>

<script>

import { reactive, toRefs, onMounted } from "vue";
import PokemonDetail from '../views/popupPokemon.vue';
export default {
  name: "Home",
   components: {
     PokemonDetail
  },
  data: () => {
    return {
      showDetail: false,
    }
  },
   methods: {
    closeDetail() {
      this.showDetail = false;
    },
    openDetail(pokemon) {
      console.log(pokemon);
      this.showDetail = true;
    },
  },
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
    
    const getPokemonApi = async (newUrl) => {
      let apiUrl = "";
      if (newUrl === "") {
        apiUrl = state.pokemonApi;
      } else {
        apiUrl = newUrl;
      }

      try {
        let response  = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          let res = await response.json();
          let pokemonData =  res.results;
          state.nextUrl =  res.next;
          for (let i = 0; i < pokemonData.length; i++) {
            await getpokemon(pokemonData[i].name);
            console.log(pokemonData[i].name)
          }
        }
      } catch(err) {
          console.log(err);
      }
    }

    const getpokemon = async (pokemonName) => {
      
      try {
        let response  = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          let res = await response.json();
          state.responseName.push(res);
        }
      } catch(err) {
          console.log(err);
      }
        // .then((response) => response.json())
        // .then((result) => {
        //   // console.log(result);
        //   
        // });
    }
    
    const loadMore = (newUrl) => {
      getPokemonApi(newUrl)
    }

    // const openDetail = (idx) => {
    //   state.showDetail = true;
    // }

    // const closeDetail = () => {
    //   state.showDetail = false;
    // }

    // watch(
    //   () => state.newUrl,
    //   async () => {
    //     await getPokemonApi(state.newUrl, state);
    //   }
    // );
    onMounted(async () => {
      await getPokemonApi(state.pokemonApi, state);
    });


    return { ...toRefs(state),  loadMore  };
  },
};
</script>
