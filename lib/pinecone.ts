import { Pinecone } from '@pinecone-database/pinecone';

// const coneApiKey = process.env.PINECONE_API_KEY;

const coneApiKey =
  'pcsk_6sKUp9_2awhB4L12ptoLkDBEBcRZ9yaLdwmwqrfcxQHrkPmqi2jhCEPzPVNDgYAJWsrevn';

if (!coneApiKey) {
  throw new Error('Pinecone API key not found in environment variables.');
}

const pinecone = new Pinecone({
  apiKey: coneApiKey,
  controllerHostUrl:
    'https://aksme-anything-yiudje9.svc.aped-4627-b74a.pinecone.io',
});

export const askme = pinecone.Index('aksme-anything');
