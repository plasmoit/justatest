import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary, {
  excludeParentKeys: true,
});
//register(StyleDictionary);

const sd = new StyleDictionary({
  source: ['tokens.json'],
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: 'build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          //filter: {
          //  attributes: {
          //    category: 'components'
          //  }
          //}
        },
      ],
    },
  },
  log: {
    verbosity: 'verbose'
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
