function tambah(a,b) {
    console.log(a+b);
}

const kali = (a,b) => {
    console.log(a*b);
};

const kurang = (a,b) => {
    return new Promise((resolve, reject) => {
        if(a < b){
            reject('error cuk');
        }
        resolve(a-b);
    });
};

const main = async () => {
    try{
        const h = await kurang(1,3);
        console.log(`hasil kurang ${h}`);
        tambah(1,2);
        kali(1,2);
    }catch (e) {
        console.log(e);
    }

};

main().then();