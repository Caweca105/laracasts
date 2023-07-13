import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },

  template: `
    <section class="flex gap-8">
        <assignment-list :assignments="filter.inProgress" title="In Progress">
          <assignment-create @add="add"></assignment-create>
        </assignment-list>

        <div v-if="showCompleted">
          <assignment-list 
            :assignments="filter.completed" 
            title="Completed" 
            can-toggle 
            @toggle="showCompleted = !showCompleted"
          ></assignment-list>
        </div>
        
    </section>
  `,

  data() {
    return {
      assignments: [],
      showCompleted: true,
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
