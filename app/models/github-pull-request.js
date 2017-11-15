import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    body: DS.attr(),
    assignee: DS.attr(),
    state: DS.attr(),
    base: DS.attr(),
    head: DS.attr(),
});
