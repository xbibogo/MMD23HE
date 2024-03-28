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

      count: 0,
      goals: ["hjkl"],
      currentGoal: "",
    };
  },
  methods: {
    incrementCount() {
      this.count++;
      console.log(this.count);
    },
    addGoal() {
      console.log(this.currentGoal);
      if (this.currentGoal != "") {
        this.goals.push(this.currentGoal);
        this.currentGoal = "";
        console.log(this.goals);
      }
    },
  },
});

app.mount("#app");
