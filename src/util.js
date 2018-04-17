'use strict';

const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
const DEFAULT_UUID_SIZE = 50;


function newUUID(size) {
    if (size === undefined) {
        size = DEFAULT_UUID_SIZE;
    }
    let uuid = '';
    for (let i = 0; i < size; i++) {
        uuid += CHARS[Math.floor(Math.random() * CHARS.length)];
    }
    return uuid;
}


module.exports = {
    newUUID
}

