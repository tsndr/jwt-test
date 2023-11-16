import jwt from '@tsndr/cloudflare-worker-jwt'

export type Env = {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const secret = 'super-secret'

		const token = await jwt.sign({ sub: 'test', more: '@test' }, secret)
		console.log({ token })

		const verified = await jwt.verify(token, secret)
		console.log({ verified })

		return Response.json({ token, verified })
	}
}
