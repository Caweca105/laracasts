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
      assignments: [],
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

  created() {
    fetch("http://localhost:3001/assignments")
      .then((response) => response.json())
      .then((assignments) => {
        this.assignments = assignments;
      });
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
