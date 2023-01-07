<template>
  <div class="Loader">
    <span>#</span>
  </div>
</template>

<style scoped>
.Loader {
  position: absolute;
  width: 100%;
  height: 100%;
  top: -2em;
  left: -0.4em;
  color: hsl(203, 13%, 63%);
  text-align: center;

  font-weight: 500;
  
  display: none;
}

.Loader span {
  position: absolute;
  /* transform: scale(1.3); */
  font-size: 1.4rem;
  opacity: 0;

  animation:
    pulse 0.5s 0.1s alternate infinite,
    rotate 2s 1s forwards infinite;
}


@keyframes pulse {
  from {
    opacity: 0.8;
  }
  to {
    transform: translateY(-0.08em);
    font-size: 1.4rem;
    opacity: 0.5;
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(180deg);
  }
}

</style>