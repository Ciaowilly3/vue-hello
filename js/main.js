const { createApp } = Vue;

createApp({
  data() {
    return {
      scritta: "Made using Vue",
      classiScritta: "text-primary text-center",
      srcImmagine: `https://www.rainews.it/dl/img/2022/05/29/1653823359813_Immagine__.png`,
      classiImmagine: "m-auto d-block",
    };
  },
}).mount("#app");
