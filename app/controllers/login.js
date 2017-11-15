import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
    session: Ember.inject.service(),

    actions: {
        login() {
            this.get('session').authenticate('authenticator:torii', 'github').then(() => {
                console.log("Transition");
                this.transitionToRoute('home');
            });
        }
    }
});
