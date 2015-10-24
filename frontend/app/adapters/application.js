import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  headers: {
    "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
  }
});
