<template>
  <div class="container">
    <div class="containerlogo">
      <img class="logo" src="../../assets/logo.png" alt="Logo SystemPOS">
    </div>
  </div>
</template>

<script setup>
//
</script>

<style>
.container{
  display:flex;
  flex-direction: column;
  align-items: center;
}
.containerlogo{
  position: absolute;
  width: 272px;
  height: 272px;
  top: 50px;
  border: solid 1px #FFF;

  background: #D9D9D9;
}

.logo{
  width: 270px;
  height: 270px;
  top: 115px;
  object-fit: cover;

}
</style>

