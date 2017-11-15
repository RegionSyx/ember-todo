import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
    session: Ember.inject.service(),
    openPullRequests: Ember.computed.filterBy('model.pull_requests', 'state', 'open'),
    closedPullRequests: Ember.computed.filterBy('model.pull_requests', 'state', 'closed'),
});
