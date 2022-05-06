import asyncHandler from 'express-async-handler'
import nodemailer from 'nodemailer'

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PW,
  },
})

contactEmail.verify((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Ready to Send')
  }
})

// @desc  Send email from contact form
// @route POST /api/contact
// @access Public
const sendEmail = asyncHandler(async (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const mail = {
    from: name,
    to: process.env.EMAIL,
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  }
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR' })
    } else {
      res.json({ status: 'Message Sent' })
    }
  })
})

export default sendEmail
