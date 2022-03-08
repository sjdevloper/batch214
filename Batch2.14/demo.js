let optionList = document.getElementById("rec_mode").options;
let array = [
  {
    text: "Option 1",
    value: "Value 1",
  },
  {
    text: "Option 2",
    value: "Value 2",
    selected: true,
  },
  {
    text: "Option 3",
    value: "Value 3",
  },
];

array.forEach((option) =>
  optionList.add(new Option(option.text, option.value, option.selected))
);
