import ActiveModelAdapter from 'active-model-adapter';
import Ember from 'ember';

export default ActiveModelAdapter.extend({
  headers: {
    "X-CSRF-Token": Ember.$('meta[name="csrf-token"]').attr('content')
  }
});
