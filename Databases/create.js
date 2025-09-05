const { MongoClient } = require('mongodb');
const env = require('dotenv').config({ path: '../.env' });

async function main() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        // Create a single new listing
        await createListing(client, {
            name: "Lovely Loft",
            summary: "A charming loft in Paris",
            bedrooms: 1,
            bathrooms: 1,
            price: 150
        });
        // Create multiple new listings
        // Create 3 new listings
        await createMultipleListings(client, [
            {
                name: "Infinite Views",
                summary: "Modern home with infinite views from the infinity pool",
                property_type: "House",
                bedrooms: 5,
                bathrooms: 4.5,
                beds: 5
            },
            {
                name: "Private room in London",
                property_type: "Apartment",
                bedrooms: 1,
                bathroom: 1
            },
            {
                name: "Beautiful Beach House",
                summary: "Enjoy relaxed beach living in this house with a private beach",
                bedrooms: 4,
                bathrooms: 2.5,
                beds: 7,
                last_review: new Date()
            }
        ]);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);


// STEP 3: Create a new listing
async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

// STEP 4: Create multiple new listings
async function createMultipleListings(client, newListings){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);

    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log(result.insertedIds);
}