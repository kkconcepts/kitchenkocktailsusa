import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Event End Date',
      type: 'datetime',
      description: 'Optional: Only needed for multi-day events',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'specials',
      title: 'Special Offers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Special Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Special Description',
              type: 'text',
            },
            {
              name: 'price',
              title: 'Price (if applicable)',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'locations',
      title: 'Available Locations',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Chicago', value: 'chicago'},
          {title: 'Dallas', value: 'dallas'},
          {title: 'Atlanta', value: 'atlanta'},
          {title: 'Charlotte', value: 'charlotte'},
          {title: 'Washington, D.C.', value: 'washington-dc'},
        ],
      },
    }),
  ],
})
