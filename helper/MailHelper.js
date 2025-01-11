const nodemailer = require('nodemailer');



const SendMail = async (PersonReceive ,OTP,content) =>{

    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465, // hoặc 587
      secure: true, // true cho cổng 465, false cho cổng 587
      auth: {
          user: process.env.Mail || "loikogay2003@gmail.com",
          pass: process.env.PASSWORD || "qdloebhyknahpmrg"
      },
      tls: {
          rejectUnauthorized: false // Bỏ qua lỗi chứng chỉ nếu có
      }
      });

    var mailOptions = {
        from: 'loikogay2003@gmail.com',
        to: PersonReceive,
        subject: 'Sending Email From Tash Manager',
        html: content
      }

       transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports =SendMail