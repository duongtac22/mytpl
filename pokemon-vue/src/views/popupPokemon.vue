<template>
  <div class="detail">
    <div class="detail-view">
      <div class="image">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
          alt=""
        />
      </div>
      <div class="data">
        <h2>Bubasault</h2>
        <div class="property">
          <div class="left">Base Experience</div>
          <div class="right">2400 XP</div>
        </div>
        <div class="property">
          <div class="left">Height</div>
          <div class="right">1.5 m</div>
        </div>
        <div class="property">
          <div class="left">Weight</div>
          <div class="right">10 kg</div>
        </div>
        <h3>Pokemon Types</h3>
        <div class="types">
          <div class="type">Grass</div>
        </div>
        <h3>Abilities</h3>
        <div class="abilities">
          <div class="ability">Ability</div>
        </div>
      </div>
      <button class="close" @click="closeDetail">close</button>
    </div>
  </div>
</template>

<script>
// import { computed } from 'vue'
export default {
  name: "popupDetails",
  data: () => {
    return {
      show: false,
    }      
  },
  props: {
    showDetail: Boolean
  },
  methods: {
    closeDetail() {
      this.$emit('closeDetail');
    }
  },

};
</script>


<style lang="scss" scoped>
.detail {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  padding: 90px 10px 10px;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  background: rgba($color: #000000, $alpha: 0.7);
  .detail-view {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 510px;
    padding: 50px 0 0;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);

    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -60px;
      width: 120px;
      height: 120px;
      background-color: #333;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
    }
    h2 {
      text-transform: capitalize;
    }
    .data {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin-bottom: 40px;
      .property {
        width: 90%;
        max-width: 400px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
        .left {
          float: left;
        }
        .right {
          float: right;
        }
      }
      h3 {
        width: 90%;
        max-width: 400px;
        border-bottom: 1px solid #ccc;
      }
      .types,
      .abilities {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 90%;
        max-width: 400px;
        .type,
        .ability {
          margin: 0 10px 10px 0;
          padding: 5px 10px;
          border-radius: 20px;
          color: #fff;
          font-size: 1rem;
          letter-spacing: 2px;
          text-transform: capitalize;
          word-wrap: none;
          word-break: keep-all;
        }
        .type {
          background-color: #0A2E50;
        }
        .ability {
          background-color: #C73015;
        }
      }
    }
    .close {
      outline: none;
      border: none;
      border-radius: 5px;
      background-color: #333;
      color: #efefef;
      padding: 10px 20px;
      margin-bottom: 20px;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
  i {
    font-size: 2rem;
    color: #efefef;
  }
}
</style>