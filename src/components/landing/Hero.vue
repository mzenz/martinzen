<template>
  <div class="hero">
    <img
      class="hero-image"
      src="@/assets/images/martian.png"
      alt="DJ Martian's face"
    />
    <div class="content">
      <h1>Martin Zen</h1>
      <h1>{ a.k.a. Martian }</h1>
      <h2>DJ & Producer</h2>
      <ul>
        <li class="enter" style="animation-delay: .1s"><a>bio</a></li>
        <li class="enter" style="animation-delay: .5s"><a>live mixes</a></li>
        <li class="enter" style="animation-delay: 1s"><a>productions</a></li>
        <li class="enter" style="animation-delay: 1.4s"><a>bookings</a></li>
      </ul>

      <svg class="arrow bounce" width="52" height="70" viewBox="0 0 52 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 1V69M26 69L1 41.7749M26 69L51 41.7749" stroke="#58008E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  display: block;
  background: linear-gradient(270deg, #7124BE 0%, #C496FF 100%);

  width: 100%;
  height: 100vh;
}

.hero-image {
  display: flow-root;
  position: relative;
  float: right;
  shape-outside: url('@/assets/images/martian.png');
  height: 100%;
}

@media only screen and (max-width: 500px) {
  .hero-image {
    float: none;
    position: absolute;
    opacity: .4;
    right: 0;
  }
}

.content {
  padding-top: 5rem;
  margin-left: 4rem;
}

.arrow {
  position: absolute;
  bottom: 1rem;
  transform-origin: center center;
  left: 50%;
  transform: translateX(-50%);
}
</style>
