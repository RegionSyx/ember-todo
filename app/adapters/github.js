import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
    authorizer: 'authorizer:github',

    host: "https://api.github.com",

    pathforType() {
        return Ember.get(this, 'path');
    },
});
