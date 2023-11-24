import { serveDir } from 'https://deno.land/std@0.207.0/http/file_server.ts';

Deno.serve((req: Request) => {
	const pathname = new URL(req.url).pathname;
	console.log(`${pathname}`);

	return serveDir(req, {
		fsRoot: './build',
		// urlRoot: '/',
		showIndex: true,
		showDirListing: true
	});
});
