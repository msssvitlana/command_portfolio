import author from './author';
import blogPost from './blogPost';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, blogPost],
};
