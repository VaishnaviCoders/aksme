import OpenAI from 'openai';

// const apiKey = process.env.OPENAI_API_KEY;

// this is vaishnabh's key
const apiKey =
  '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';

console.log(apiKey);

if (!apiKey) {
  throw new Error('openAi API key not found in environment variables.');
}

const openAi = new OpenAI({
  apiKey: apiKey,
  organization: 'AskMe',
  project: 'aske-project',
});

export default openAi;

export async function getEmbeddings(text: string) {
  const response = await openAi.embeddings.create({
    model: 'text-embedding-ada-002',
    input: text,
  });

  const embedding = response.data[0].embedding;

  if (!embedding) {
    throw new Error('Embedding not found');
  }

  console.log('Embedding: ', embedding);

  return embedding;
}
