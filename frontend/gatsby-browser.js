/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import 'firebase/auth';
import './static/css/global.css';

export const onServiceWorkerUpdateReady = () => {
	/**
	 * what it does: Inform plugins when a service worker has been updated in the background and the page is ready to reload to apply changes.
	 * docs: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#onServiceWorkerUpdateReady
	 */

	/**
	 * We remove redux state as we want them to have a fresh pull of the redux-store, this removes some possibility of state change problems
	 */
	localStorage.removeItem('redux-state');

	/**
	 * We reload the current page as this is a proxy to clearing some amount of cache,
	 * All though it doesnt literally empty it, it helps with any existing data that needs to be cleared
	 */
	window.location.reload();
};
