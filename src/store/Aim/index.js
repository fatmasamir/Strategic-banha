// import callServer from "../../assets/js/callServer/callServer.ts";
import { defineStore } from "pinia";
import { ref } from "vue";
export const UseAimList = defineStore("AimList", () => {
  const AimList = ref([
    {
      id: 0,
      name: "	تطوير سياسات ونظم القبول والتوزيع والتحويل.",
      rate: 20,
    },
    {
      id: 1,
      name: "	تقديم برامج تعليمية متميزة ومتطورة تواكب مستجدات سوق العمل وإحتياجاته.",
      rate: 20,
    },
    {
      id: 2,
      name: "	تحديث مستمر لإستراتيجيات التعليم/ التعلم وأساليب التدريس والتدريب والتقويم",
      rate: 15,
    },
    {
      id: 3,
      name: "	توفير بيئة محفزة للإبتكار والإختراع وريادة الأعمال",
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

  // const Bloges = [];
  //Get Bloges
  // async function get_Bloges() {
  //   const response = await callServer({
  //     url: "api/cards-category",
  //     auth: true,
  //   });
  //   if (response.ok) {
  //     response.json().then((data) => {
  //       Bloges.value = data.data;
  //       console.log("Bloges.value", Bloges.value);
  //     });
  //   } else {
  //     console.log("Has Error");
  //   }
  // }

  return {
    AimList,
  };
});
