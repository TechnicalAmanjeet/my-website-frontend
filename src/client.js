import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// export const client = sanityClient({
//     projectId: process.env.MY_WEBSITE_SANITY_PROJECT_ID,
//     dataset: process.env.MY_WEBSITE_SANITY_DATASET,
//     apiVersion: process.env.MY_WEBSITE_SANITY_API_VERSION,
//     token: process.env.MY_WEBSITE_SANITY_TOKEN,
//     useCdn: process.env.MY_WEBSITE_SANITY_USE_CDN,
// });

export const client = sanityClient({
    projectId: "upl574tz",
    dataset: "production",
    apiVersion: "2021-12-21",
    token: "skHd3MoNZdTx30yAJdKP58rmsYLPF7v98nVayj21IATrvhEcH3vurHz43XeZdCeZyKdSieeALsZCEMyGEsTS6927foxtQw5bBXap9RIyFnFLLHOPQi7JzwAkdb9Oe2ToJCSbgQAyCJ307rEI53YDBJpkcx2b9owxCxq7KBU68syHy2XScw5m",
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
