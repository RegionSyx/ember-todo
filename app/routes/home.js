import Ember from 'ember';
import Route from '@ember/routing/route';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    model() {
        return {
            pull_requests: this.store.findAll('github-pull-request'),
        }
    },
});
