// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'overview',
        type: 'string',
        title: 'Overview',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
        },
      },
      {
        name:'images',
        title: 'Images',
        type: 'image', 
        options:{
          hotspot:true
        },
        fields:[
          {
            name:'alt',
            title:'Alt',
            type:'string'
          }
        ]
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block',
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative Text',
              },
            ],
          },
        ],
      },
    ],
  };
  