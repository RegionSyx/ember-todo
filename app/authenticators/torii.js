import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import config from '../config/environment';

export default ToriiAuthenticator.extend({
    torii: Ember.inject.service(),
    ajax: Ember.inject.service(),

    authenticate() {
        const ajax = this.get('ajax');
        const tokenExchangeUri = config.torii.providers['github-oauth2'].tokenExchangeUri;
        console.log(config.torii.providers['github-oauth2']);

        return this._super(...arguments).then(data => {
            console.log(tokenExchangeUri);
            return ajax.request(tokenExchangeUri, {
                type: 'POST',
                crossDomain: true,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify({
                    authorizationCode: data.authorizationCode,
                }),
            }).then(response => {
                return {
                    access_token: JSON.parse(response).access_token,
                    provider: data.provider,
                };
            });
        });
    }

});
