export default {
  template: `
    <button 
      :class="{
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed': true,
        'bg-gray-500 hover:bg-gray-700': type === 'muted',
        'bg-green-500 hover:bg-green-700': type === 'primary',
        'bg-purple-500 hover:bg-purple-700': type === 'secondary',
        'is-loading': processing,
      }" 
      :disabled="processing"
    >
        <slot />
    </button>
  `,

  props: {
    type: {
      type: String,
      default: "primary",
    },

    processing: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      processing: true,
    };
  },
};
