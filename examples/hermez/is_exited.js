const { getHermezClient, from, hermez } = require('../utils_hermez');

const execute = async () => {
    const client = await getHermezClient();

    const isExited = await client.isExited('0x3ce9d872a615ee7c1e78a528d9c3a75bbd4969ce5c4329e665736331fd307f15');

    console.log("isExited", isExited);
}
execute().then(() => {
}).catch(err => {
    console.error("err", err);
}).finally(_ => {
    process.exit(0);
})