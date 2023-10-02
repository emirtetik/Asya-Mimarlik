import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'AsyaİnşaatMimarlık',

  projectId: '5p2659w8',
  dataset: 'production',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
   