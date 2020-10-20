Vue.component('errors', {
    props: ['errors'],
    template: `
      <div class="errors text-danger ml-1" v-if="errors">
        <small class="error" v-for="error in errors">{{ error }}</small>
      </div>
    `
});

var vm = new Vue({
    el: '#app',
    data: {
      name: '',
      errors: {
        name: [],
      }
    },
    methods: {
      validate: function () {
        var errors = {
          name: []
        };
        if (!this.name　) {
          errors.name.push('必須項目が入力されていません');
        } 
        this.errors = errors;
      }
    }
});