const fs = require("fs");
const FormData = require("form-data");
const rfs = require("recursive-fs");
const basePathConverter = require("base-path-converter");
const axios = require('axios')
const config = {
    APIKey: '8837a4b62d269f297cfe',
    APISecret: 'e8f2f9f96716594f8c79b5fe7dfea54c4093e70170035557ba83401fb0a109f1',
    JWT: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4YzY3NjMwOS00NDAzLTQ2ZDQtODRmNi05ODE5MDgzNjgzOWMiLCJlbWFpbCI6ImNud2ViMDNAMTYzLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2V9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI3ZTI2MWIzNWJkMmU1MzQ3NzliYiIsInNjb3BlZEtleVNlY3JldCI6IjU2ZjYzNzJlYjY4NGNiNmIyZGNmYzg4NGM1YThiZDliMjZhOTI1M2NmNmMwMDNlMTg1MzIwZDcxZTU0YWI1ZmEiLCJpYXQiOjE2MzIyOTgyMDN9.9vd1v1h_0OP7UmuPmTas4FrPFN3QjAZlxCfNHxLdpA8'
}
const pinDirectoryToPinata = async () => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const src = "../assets/images";
    try {
        const { dirs, files } = await rfs.read(src);
        let data = new FormData();
        for (const file of files) {
            data.append(`file`, fs.createReadStream(file), {
                filepath: basePathConverter(src, file),
            });
        }
        axios.post('https://api.pinata.cloud/pinning/pinJSONToIPFS', {
            data
        }, {
            headers: {
                // "Authorization": config.JWT
                "pinata_api_key": config.APIKey,
                "pinata_secret_api_key": config.APISecret
            }
        }).then(res => {
            console.log(666)
            console.log(res)
        })
            .catch(error => {
                console.log(444)
                console.log(error)
            })
    } catch (error) {
        console.log(333)
        console.log(error);
    }
};
pinDirectoryToPinata()