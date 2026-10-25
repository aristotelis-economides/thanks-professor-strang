import { error } from '@sveltejs/kit';

// Workaround for GHSA-pfhg-q3qv-9q6r (open redirect via `//` paths with use:enhance),
// which is only patched in SvelteKit 3. Remove after upgrading to SvelteKit 3.
export async function handle({ event, resolve }) {
	if (event.url.pathname.startsWith('//')) {
		error(400, 'Bad request');
	}
	return resolve(event);
}
