const app = Vue.createApp({
  data() {
    return {
      items: [
        { text: "fresh figs", hot: true },
        { text: "pine nuts", hot: true },
        { text: "honey", hot: true },
        { text: "balsamic vinegar", hot: false },
      ],
      newItemText: "",
      showForm: false,
    };
  },
  methods: {
    showForm() {
      this.showForm = true;
    },
    addItem() {
      this.items.push({ text: this.newItemText, hot: false }); // Add new item with hot set to false
      this.showForm = false;
      this.newItemText = "";
    },
  },
});

app.mount("#page");
