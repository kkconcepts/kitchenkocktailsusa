import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  console.log('Handler called')
  const { email, name } = await readBody(event)
  const config = useRuntimeConfig()

  const MAILCHIMP_API_KEY = config.mailchimp.apiKey
  const MAILCHIMP_LIST_ID = config.mailchimp.listID
  const MAILCHIMP_SERVER = config.mailchimp.server

  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      MMERGE8: name
    }
  }

  try {
    const response = await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.detail || 'Failed to subscribe')
    }

    return { success: true }
  } catch (error: any) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    }
  }
})
