const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://sifedikwa_db_user:IFEdikwa@2018@cluster0.zh7wawb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri);

    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);