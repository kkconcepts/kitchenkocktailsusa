import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    console.log('Body received:', body)

    const {
      location,
      date,
      time,
      guests,
      purpose,
      specialRequests,
      firstName,
      lastName,
      email,
      phone,
      company,
      notes
    } = body

    const subject = `Kitchen + Kocktails ${location}: New private event inquiry from ${firstName} ${lastName}`

    const message = `
Private Event Request

Location: ${location}
Date: ${date}
Time: ${time === 'lunch' ? 'Lunch (11:00 AM - 3:00 PM)' : 'Dinner (5:00 PM - 10:00 PM)'}
Guests: ${guests}
Purpose: ${purpose}
Special Requests: ${specialRequests || 'None'}

Contact Info:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Company: ${company || 'N/A'}
Additional Notes: ${notes || 'None'}
    `.trim()

    console.log('Sending email...')

    const response = await resend.emails.send({
      from: 'Private Events <no-reply@emails.kitchenkocktailsusa.com>',
      to: ['powell@kevinkelleyconcepts.com'],
      subject,
      text: message
    })

    console.log('Resend response:', response)

    if (response.data?.id) {
      return { status: 'ok', id: response.data.id }
    } else {
      console.error('Resend error structure:', response)
      throw new Error('Resend did not return an ID')
    }
  } catch (error) {
    console.error('Server error:', error)
    return sendError(event, createError({ statusCode: 500, message: 'Email failed to send' }))
  }
})
