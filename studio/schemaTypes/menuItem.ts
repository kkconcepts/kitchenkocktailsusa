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
          {title: 'Desserts', value: 'desserts'},
          {title: 'Cocktails', value: 'cocktails'},
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
  ],
}
