import { Resend } from 'resend'

const config = useRuntimeConfig()
const resend = new Resend(config.RESEND_API_KEY || '')

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const response = await resend.emails.send({
      from: 'Kitchen + Kocktails <noreply@emails.kitchenkocktailsusa.com>',
      to: 'powell@kevinkelleyconcepts.com',
      subject: `New Contact Form Submission`,
      html: `
        <h2>New Contact Form</h2>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Location:</strong> ${body.location}</p>
        <p><strong>Inquiry Type:</strong> ${body.inquiryType}</p>
        <p><strong>Message:</strong><br>${body.message.replace(/\n/g, '<br>')}</p>
      `
    })

    return { success: true }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false }
  }
})
