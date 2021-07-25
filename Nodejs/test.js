// console.log('Hello World');
// let a = 5;
// let b = 3;
// let c = a+b;
// console.log('c =' ,c);

const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "17e4a8e9c0f00f",
      pass: "416b1c84851c6a"
    }
};
const send = async(option) =>  {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error){
            console.log(error);
        }
        else{
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: 'yyh7654@gmail.com',
    to: 'yyh7654@gmail.com',
    subject: '테스트 메일 입니다.',
    text: 'nodejs 예제입니다.'
}

send(email_data);
