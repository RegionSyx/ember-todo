import Ember from 'ember';
import Controller from '@ember/controller';
import config from '../config/environment';

export default Controller.extend({
    session: Ember.inject.service(),
    config: config.torii.providers['github-oauth2'],

    actions: {
        logout() {
            this.get('session').invalidate().then(() => {
                this.transitionToRoute('login');
            });
        },
        login() {
            this.get('session').authenticate('authenticator:torii', 'github').then(() => {
                console.log("Transition");
                this.transitionToRoute('home');
            });
        }
    },
});
