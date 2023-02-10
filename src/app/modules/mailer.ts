import nodemailer from 'nodemailer';
import path from 'path';
const hbs = require('nodemailer-express-handlebars');

const transport = nodemailer.createTransport({
  host: process.env.HOST,
  port: 2525,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

const handlebarOptions = {
  viewEngine: {
    partialDir: path.resolve('./src/resources/mail/'),
    defaultLayout: false,
    extName: '.handlebars',  
  },
  viewPath: path.resolve('./src/resources/mail/'),
  extName: '.handlebars',  
}

transport.use('compile', hbs(handlebarOptions))

export { transport } ;