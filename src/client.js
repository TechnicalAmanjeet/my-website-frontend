import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_MY_WEBSITE_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_MY_WEBSITE_SANITY_DATASET,
    apiVersion: process.env.REACT_APP_MY_WEBSITE_SANITY_API_VERSION,
    token: process.env.REACT_APP_MY_WEBSITE_SANITY_TOKEN,
    useCdn: process.env.REACT_APP_MY_WEBSITE_SANITY_USE_CDN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
