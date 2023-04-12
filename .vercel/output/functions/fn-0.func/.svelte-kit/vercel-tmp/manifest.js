export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["avatar.png","favicon.ico","favicon.png","image-placeholder.png","Vector-1.png","Vector.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a9e96f53.js","imports":["_app/immutable/entry/start.a9e96f53.js","_app/immutable/chunks/index.c1267f9a.js","_app/immutable/chunks/singletons.2d7ccb68.js","_app/immutable/chunks/index.c5f87819.js","_app/immutable/chunks/parse.d12b0d5b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.4b590879.js","imports":["_app/immutable/entry/app.4b590879.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/supabase.1462ff8c.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/public.a3178c66.js","_app/immutable/chunks/index.c1267f9a.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/chatbot",
				pattern: /^\/api\/chatbot\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/chatbot/_server.ts.js')
			},
			{
				id: "/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/dashboard/[id]",
				pattern: /^\/dashboard\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/logout/_server.ts.js')
			},
			{
				id: "/[id]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
