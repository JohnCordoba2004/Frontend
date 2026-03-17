import { createApp } from "vue";
// IMPORTANTE: Usa createHead de @unhead/vue
import { createHead } from "@unhead/vue/client";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";

const app = createApp(App);

// Crea la instancia de head usando createHead()
const head = createHead();

router.afterEach((to) => {
  const desc = to.meta.description as string;
  if (desc) {
    // Busca la etiqueta meta description y le cambia el contenido
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", desc);
  }
});

app.use(head); // Ahora sí lo reconocerá como un Plugin de Vue
app.use(router);
app.mount("#app");
