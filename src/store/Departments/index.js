import callServer from "../../assets/js/callServer/callServer.ts";
import { defineStore } from "pinia";
import { ref } from "vue";
export const UseDepartments = defineStore("Departments", () => {
  const Departments = ref([
    {
      id: 0,
      Department: "إداره 1",
    },
    {
      id: 1,
      Department: "إداره 2",
    },
    {
      id: 2,
      Department: "إداره 3",
    },
    {
      id: 3,
      Department: "إداره 4",
    },
    {
      id: 4,
      Department: "إداره 5",
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

  return {
    Departments,
    get_Bloges,
  };
});
