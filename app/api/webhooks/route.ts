import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'
import supabase from '@/lib/supabase/client'

export async function POST(req: NextRequest) {
    try {
        const evt = await verifyWebhook(req)

        const { id } = evt.data
        const eventType = evt.type

        if (eventType === 'user.created') {
            const { data, error } = await supabase.from('users').insert({
                id: id,
                email: evt.data.email_addresses[0].email_address,
                first_name: evt.data.first_name,
                last_name: evt.data.last_name,
                image_url: evt.data.image_url
            })
        }

        return new Response('Webhook received', { status: 200 })
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error verifying webhook', { status: 400 })
    }
}