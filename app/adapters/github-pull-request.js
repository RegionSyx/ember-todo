import GitHubAdapter from './github';

export default GitHubAdapter.extend({
    pathForType() {
        return `repos/enderlabs/eventboard.io/pulls?state=all`;
    },
});
