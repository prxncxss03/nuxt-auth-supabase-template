import { serverSupabaseClient} from '#supabase/server'

export default defineEventHandler(async (event) => {

    const client = await serverSupabaseClient(event)
    const { token, redirect_to} = getQuery(event)

    const { data, error } = await client.auth.verifyOtp({
        token_hash: token,
        type: 'email'
    })

    if (error) {
        throw new Error(error.message)
    }

    console.log('successfully verified token', data)

    await sendRedirect(event, redirect_to)

  return { data: 'verified' }
})
