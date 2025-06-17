export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'addOns',
      title: 'Add Ons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Add On Name',
              type: 'string',
            },
            {
              name: 'price',
              title: 'Additional Price',
              type: 'number',
              validation: (Rule: import('sanity').Rule) => Rule.min(0),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'isAvailable',
              title: 'Is Available',
              type: 'boolean',
              initialValue: true,
            },
          ],
        },
      ],
    },
    {
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          {title: 'Appetizers', value: 'appetizers'},
          {title: 'Soups & Salads', value: 'soups-salads'},
          {title: 'Entrees', value: 'entrees'},
          {title: 'Specialty Items', value: 'specialty-items'},
          {title: 'Sides', value: 'sides'},
          {title: 'Premium Sides', value: 'premium-sides'},
          {title: 'Brunch', value: 'brunch'},
          {title: 'Brunch Sides', value: 'brunch-sides'},
          {title: 'Lunch', value: 'lunch'},
          {title: 'Waffles', value: 'waffles'},
          {title: 'Desserts', value: 'desserts'},
          {title: 'Kocktails', value: 'kocktails'},
          {title: 'Frozens', value: 'frozens'},
          {title: 'To-Go Frozens', value: 'to-go-frozens'}, // correct
        ],
      },
    },
    {
      name: 'availableIn',
      title: 'Available In Cities',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Atlanta', value: 'atlanta'},
          {title: 'Charlotte', value: 'charlotte'},
          {title: 'Chicago', value: 'chicago'},
          {title: 'Dallas', value: 'dallas'},
          {title: 'Washington, D.C.', value: 'washington-dc'},
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'toastUrls',
      title: 'Toast URLs',
      type: 'object',
      fields: [
        {
          name: 'atlanta',
          title: 'Atlanta Toast URL',
          type: 'url',
        },
        {
          name: 'charlotte',
          title: 'Charlotte Toast URL',
          type: 'url',
        },
        {
          name: 'chicago',
          title: 'Chicago Toast URL',
          type: 'url',
        },
        {
          name: 'dallas',
          title: 'Dallas Toast URL',
          type: 'url',
        },
        {
          name: 'washington_dc',
          title: 'Washington DC Toast URL',
          type: 'url',
        },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'featured',
      title: 'Featured Item',
      type: 'boolean',
      description: 'Set this to true to display this item in the featured section on the homepage',
    },
    {
      name: 'featuredCategory',
      title: 'Featured Category',
      type: 'string',
      options: {
        list: [
          {title: 'Kitchen', value: 'kitchen'},
          {title: 'Kocktails', value: 'kocktails'},
        ],
      },
      hidden: ({document}: {document: {featured?: boolean}}) => !document?.featured,
    },
  ],
}
