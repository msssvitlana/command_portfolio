// import type {StructureResolver} from 'sanity/structure'

// // https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title('Content')
//     .items(S.documentTypeListItems())
import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = S =>
  S.list()
    .title('Content')
    .items([
      // Випадаюче меню "Blog"
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
