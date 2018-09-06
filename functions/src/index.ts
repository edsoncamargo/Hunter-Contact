import * as functions from 'firebase-functions';

const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

const sender = 'yoursender';
const pass = 'yourpass';
const sendingTo = 'to'

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// Criando o transportador do e-mail, utilizando nodemailer
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Serviço responsável pelo envio do e-mail (gmail, outlook ou sua hospedagem) - Esse host, possuí um limite de 500 e-mails por dia
    port: 587,
    secure: false,
    auth: { // Autentificação de envio
        user: sender,
        pass: pass
    }
});

export const email = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        nodemailer.createTestAccount({ pool: true }, () => {
            const html = `
            <h3>DE: </h3><p>${req.body.email}</p>
            <h3>NOME: </h3><p>${req.body.name}</p>
            <h3>MENSAGEM: </h3><p>${req.body.message}</p>
            `;

            let options = {
                from: sender, // O email remetente, exemplo (b3appcorp@gmail.com)
                to: sendingTo, // O email dos participantes
                subject: req.body.subject, // O assunto do email
                html: html // A mensagem em forma de html
            };

            transporter.sendMail(options, (err) => {
                if (err) {
                    res.json({
                        msg: "fail" // Finalizando a requisição e enviando uma resposta para a rota respectiva
                    });
                } else {
                    res.json({
                        msg: "success" // Finalizando a requisição e enviando uma resposta para a rota respectiva
                    });
                }
            });
        });
    });
});
