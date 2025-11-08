import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = S =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog Content')
            .items([
              S.listItem()
                .title('Posts')
                .schemaType('blogPost')
                .child(S.documentTypeList('blogPost').title('Blog Posts')),

              S.listItem()
                .title('Authors')
                .schemaType('author')
                .child(S.documentTypeList('author').title('Authors')),
            ])
        ),

      S.divider(),

    ]);
