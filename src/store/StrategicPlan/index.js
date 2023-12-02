import callServer from "../../assets/js/callServer/callServer.ts";
import { defineStore } from "pinia";
import { ref } from "vue";
export const UseStrategicPlan = defineStore("StrategicPlan", () => {
  const Strategic_Plan = ref([
    {
      id: 0,
      name: "طلاب 123 وخريجون متميزون وقادرون على المنافسة والابتكار",
      rate: 20,
    },
    {
      id: 1,
      name: "	جودة منظومة الدراسات العليا وأخلاقيات البحث العلمي والابتكار",
      rate: 20,
    },
    {
      id: 2,
      name: "	كسب ثقة المجتمع",
      rate: 15,
    },
    {
      id: 3,
      name: "	ضمان جودة الأداء المؤسسي والتنمية المستدامة",
      rate: 70,
    },
    {
      id: 4,
      name: "	تنمية الموارد المالية",
      rate: 70,
    },
    {
      id: 5,
      name: "	زيادة القدرة الاستيعابية للجامعة",
      rate: 70,
    },
    {
      id: 6,
      name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
      rate: 100,
    },
    {
      id: 7,
      name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
      rate: 70,
    },
    {
      id: 8,
      name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
      rate: 70,
    },
    {
      id: 9,
      name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
      rate: 70,
    },
    {
      id: 10,
      name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
      rate: 70,
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
    Strategic_Plan,
    get_Bloges,
  };
});
