import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },

  template: `
    <section class=space-y-6>
        <assignment-list :assignments="filter.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filter.completed" title="Completed"></assignment-list>

        <assignment-create @add="add"></assignment-create>
    </section>
  `,

  data() {
    return {
      assignments: [
        { name: "Finish Project", completed: false, id: 1, tag: "Science" },
        { name: "Read Chapter 4", completed: false, id: 2, tag: "English" },
        { name: "Turn in Homework", completed: false, id: 3, tag: "Math" },
      ],
    };
  },

  computed: {
    filter() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.completed
        ),
        completed: this.assignments.filter(
          (assignment) => assignment.completed
        ),
      };
    },
  },

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
