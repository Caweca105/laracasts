import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },

  template: `
    <section class=space-y-6>
        <assignment-list :assignments="filter.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filter.completed" title="Completed"></assignment-list>

        <form @submit.prevent="add">
        <div class="border border-gray-600 text-black">
          <input v-model="newAssignment" placeholder="New Assignment..." class="p-2" />
          <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
        </form>
    </section>
  `,

  data() {
    return {
      newAssignment: "",

      assignments: [
        { name: "Finish Project", completed: false, id: 1 },
        { name: "Read Chapter 4", completed: false, id: 2 },
        { name: "Turn in Homework", completed: false, id: 3 },
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
    add(event) {
      this.assignments.push({
        name: this.newAssignment,
        completed: false,
        id: this.assignments.length + 1,
      });

      this.newAssignment = "";
    },
  },
};
