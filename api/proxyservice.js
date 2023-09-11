import crypto from 'crypto-js';
// const baseUrl = "http://localhost:1445/api/v1/"
const secretKey = "ea156f27ad2ca956aa71c45961d0b613";
const baseUrl = "https://node.additionalsheet.com/api/v1/"

export const getAllData = (url) => {
    var response = fetch(baseUrl + url)
        .then((response) => response.json())
        .then((data) => {
            const bytes = crypto.AES.decrypt(data.token, secretKey);
            const decryptedData = bytes.toString(crypto.enc.Utf8);
            return { data: JSON.parse(decryptedData), status: data.success };
        }).catch(error => {
            return { message: error.message, status: false };
        })
    return response;
}
export const createData = (url, body) => {
    var data = fetch(baseUrl + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then((response) => response.json()).then(data => {
            const bytes = crypto.AES.decrypt(data.token, secretKey);
            const decryptedData = bytes.toString(crypto.enc.Utf8);
            return { data: JSON.parse(decryptedData), status: data.success };
        }).catch(error => {
            return { message: error.message, status: false };
        })
    return data;
}