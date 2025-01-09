// schemas/category.js
export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Category Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title', // Slug will be generated based on title
          maxLength: 96,
        },
      },
    ],
  }
  