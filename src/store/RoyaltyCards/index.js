import callServer from "../../assets/js/callServer/callServer.ts";
import { defineStore } from "pinia";
import { ref } from "vue";
export const UseRoyaltyCards = defineStore("RoyaltyCards", () => {
  const RoyaltyLists = ref([
    {
      id: 1,
      title: "Black",
      img: new URL(`@/assets/images/Premium.png`, import.meta.url).href,
      name: "169 AED",
      description: "The best vip card",
    },
    {
      id: 2,
      title: "light wood",
      img: new URL(`@/assets/images/Free.png`, import.meta.url).href,
      name: "169 AED",
      description: "The best vip card",
    },
    {
      id: 3,
      title: "Black&White",
      img: new URL(`@/assets/images/Premium.png`, import.meta.url).href,
      name: "169 AED",
      description: "The best vip card",
    },
    {
      id: 4,
      title: "White",
      img: new URL(`@/assets/images/Free.png`, import.meta.url).href,
      name: "169 AED",
      description: "The best vip card",
    },
    {
      id: 5,
      title: "red",
      img: new URL(`@/assets/images/Premium.png`, import.meta.url).href,
      name: "169 AED",
      description: "The best vip card",
    },
    {
      id: 6,
      title: "Blue",
      img: new URL(`@/assets/images/Free.png`, import.meta.url).href,
      name: "169 AED",
      description: "The best vip card",
    },
    {
      id: 7,
      title: "Green",
      img: new URL(`@/assets/images/Premium.png`, import.meta.url).href,
      name: "169 AED",
      description: "The best vip card",
    },
  ]);
  const Bloges = [];
  //Get Bloges
  async function get_Bloges() {
    const response = await callServer({
      url: "api/cards-category",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Bloges.value = data.data;
        console.log("Bloges.value", Bloges.value);
      });
    } else {
      console.log("Has Error");
    }
  }

  // //Get Bloge
  // async function get_Blog(slug) {
  //   console.log("slug =", slug);
  //   const response = await callServer({
  //     url: "api/blogs/" + slug,
  //     auth: true,
  //   });
  //   if (response.ok) {
  //     response.json().then((data) => {
  //       Blog.value = data.data;
  //       console.log("Blog.value", Blog.value);
  //     });
  //   } else {
  //     toast.error("Has Error");
  //   }
  // }

  return {
    RoyaltyLists,
    get_Bloges,
  };
});
