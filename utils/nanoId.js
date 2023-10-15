
const chars = "1234567890-qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM1234567890"

const NanoId = (length) =>{
    let result= "";
    for(let i=0;i<length;i++)
    {
        let randromIndex = Math.floor((Math.random() * (chars.length -1) ) +1)
        result += chars[randromIndex];
    }
    return result;
}

module.exports = NanoId;