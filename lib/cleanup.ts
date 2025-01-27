// Embedding function

import { getEmbeddings } from './openai';
import { askme } from './pinecone';

// Your data.json object
const userData = {
  user: {
    name: 'John Doe',
    bio: 'Software engineer passionate about building innovative solutions.',
    hobbies: ['Reading', 'Coding'],
    goals: ['Learn advanced AI', 'Contribute to open-source projects'],
  },
};

// Function to process and upsert data
export async function upsertUserData() {
  const { user } = userData;

  // Define fields to generate embeddings
  const fieldsToEmbed = [
    { id: 'bio', text: user.bio },
    { id: 'hobbies', text: user.hobbies.join(', ') },
    { id: 'goals', text: user.goals.join(', ') },
  ];

  const embeddings = await Promise.all(
    fieldsToEmbed.map(async (field) => {
      const embedding = await getEmbeddings(field.text); // Generate embedding
      return {
        id: field.id,
        values: embedding, // Embedding vector
        metadata: { description: field.text },
      };
    })
  );

  // Upsert embeddings into Pinecone
  const index = askme;

  // Upsert embeddings into Pinecone
  await index.upsert(embeddings);

  console.log('Data successfully added to Pinecone.');
}

upsertUserData().catch((err) => console.error(err));
