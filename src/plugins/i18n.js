import { createI18n } from "vue-i18n";
import en from "../assets/local/en.json";
import ar from "../assets/local/ar.json";

const messages = {
  en,
  ar,
};

const i18n = createI18n({
  legacy: false,
  locale: "ar",
  globalInjection: true,
  messages,
});

export default i18n;
