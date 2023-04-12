export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["avatar.png","favicon.ico","favicon.png","image-placeholder.png","Vector-1.png","Vector.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a9e96f53.js","imports":["_app/immutable/entry/start.a9e96f53.js","_app/immutable/chunks/index.c1267f9a.js","_app/immutable/chunks/singletons.2d7ccb68.js","_app/immutable/chunks/index.c5f87819.js","_app/immutable/chunks/parse.d12b0d5b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.4b590879.js","imports":["_app/immutable/entry/app.4b590879.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/supabase.1462ff8c.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/public.a3178c66.js","_app/immutable/chunks/index.c1267f9a.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
