import { Select } from "./select/select.js";
import "./select/styles.scss";

const select = new Select("#select", {
  placeholder: "Выбери пожалуйста элемент",
  //   selectedId: "4",
  data: [
    { id: "1", value: "React" },
    { id: "2", value: "Angular" },
    { id: "3", value: "Vue" },
    { id: "4", value: "React Native" },
    { id: "5", value: "Next" },
    { id: "6", value: "Nest" },
  ],
  onSelected(item) {
    console.log("Selected Item", item);
  },
});

window.s = select;
