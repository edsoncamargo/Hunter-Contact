"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const sender = 'dinhooozzcontato@gmail.com';
const pass = 'Edsoncm4+';
const sendingTo = 'dinhocmenezes@hotmail.com';
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
// Criando o transportador do e-mail, utilizando nodemailer
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: sender,
        pass: pass
    }
});
exports.email = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        nodemailer.createTestAccount({ pool: true }, () => {
            const html = `
            <h3>DE: </h3><p>${req.body.email}</p>
            <h3>NOME: </h3><p>${req.body.name}</p>
            <h3>MENSAGEM: </h3><p>${req.body.message}</p>
            `;
            let options = {
                from: sender,
                to: sendingTo,
                subject: req.body.subject,
                html: html // A mensagem em forma de html
            };
            transporter.sendMail(options, (err) => {
                if (err) {
                    res.json({
                        msg: "fail" // Finalizando a requisição e enviando uma resposta para a rota respectiva
                    });
                }
                else {
                    res.json({
                        msg: "success" // Finalizando a requisição e enviando uma resposta para a rota respectiva
                    });
                }
            });
        });
    });
});
//# sourceMappingURL=index.js.map