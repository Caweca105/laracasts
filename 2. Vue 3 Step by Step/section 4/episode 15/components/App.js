import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
  components: { Assignments, Panel },

  template: `
    <div class="grid gap-6">
        <assignments></assignments>

        <panel>
          <template v-slot:heading>
            This is my heading.
          </template>
        </panel>

        <panel>
          <template v-slot:heading>
            This is my heading.
          </template>

          This is my default content.
        </panel>

        <panel>
          <template v-slot:heading>
            This is my heading.
          </template>

          This is my default content.

          <template #footer>
            This is my footer.
          </template>  
        </panel>

        <panel theme="light">
          <template v-slot:heading>
            This is my heading.
          </template>

          This is my default content.

          <template v-slot:footer>
            This is my footer.
          </template>  
        </panel>
    </div>
    `,
};
