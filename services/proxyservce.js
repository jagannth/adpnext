import crypto from 'crypto-js';
const secretKey = process.env.secretKey;
const baseUrl = process.env.baseUrl;

export const getAllData = (url) => {
    var data = fetch(baseUrl + url)
        .then((response) => response.json())
        .then((data) => {
            const bytes = crypto.AES.decrypt(data.token, secretKey);
            const decryptedData = bytes.toString(crypto.enc.Utf8);
            return { data: JSON.parse(decryptedData), status: data.success };
        }).catch(error => {
            return { message: error.message, status: false };
        })
    return data;
}
export const createData = (url, body) => {
    var data = fetch(baseUrl + url, {
        'Content-Type': 'application/json'
    }, JSON.stringify(body))
        .then((response) => response.json()).then(data => {
            const bytes = crypto.AES.decrypt(data.token, secretKey);
            const decryptedData = bytes.toString(crypto.enc.Utf8);
            return { data: JSON.parse(decryptedData), status: data.success };
        }).catch(error => {
            return { message: error.message, status: false };
        })
    return data;
}