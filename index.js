// import nodeMailer from "nodemailer";
// import IEmail from "../models/email.model";

// class sendEmailService {
//   handle = () => {
//     try {
//       const transporter = nodeMailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: "22203109@aluno.cotemig.com.br",
//           ,
//         },
//       });

//       const mailOptions = {
//         from: "22203109@aluno.cotemig.com.br",
//         to: props.to,
//         subject: props.subject,
//         text: props.text,
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.log(error);
//         }

//         console.log("Email enviado: " + info.response);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// export default sendEmailService;

const express = require("express");

const app = express();

const cors = require("cors");

const body = require("body-parser");

const nodemailer = require("nodemailer");

app.use(cors());
app.use(body.json());
app.use(body.urlencoded({ extended: true }));

const senha = process.env.PASSWORD;

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "OLA" });
});

app.post("/sendEmail", (req, res) => {
  const { subject, text } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "22203109@aluno.cotemig.com.br",
        pass: senha,
      },
    });

    const mailOptions = {
      from: "22203109@aluno.cotemig.com.br",
      to: "victoriopinto@gmail.com",
      subject: subject,
      text: text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }

      console.log("Email enviado: " + info.response);
    });

    res.status(200).json("Email enviado!");
  } catch (error) {
    console.log(error);
  }
});
