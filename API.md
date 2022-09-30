# Project structure:

```
|-- frontend
  |-- components -> folder with reusable components
  |-- data -> static data (back-end alternative)
  |-- helpers
  |-- hooks -> custom users hooks
  |-- pages -> pages and routing
      |-- projects -> pages and routing for projects
  |-- public -> images та svg, that are required to work
    |-- favicon -> favicon for the site
  |-- styles -> global styles
```


## Components API:

  - ### Heading ✅

  | Prop | Default | Description |
  | ------------- | ------------- | ------------- |
  | `tag` | `h1` | choose the heading types you'd need: `h1`, `h2`, `h3` or `h4` |
  | `text` | `-` | heading text |
  | `className` | `-` | header styles |


  - ### YoutubeVideo ✅
  | Prop | Default | Description |
  | ------------- | ------------- | ------------- |
  | `data` | `-` | video data |

  -  ### Image ✅
  | Prop | Default | Description |
  | ------------- | ------------- | ------------- |
  | `image` | `-` | image data |
  | `alt` | `-` | image alt attribute |
  | `className` | `-` | image styles |

  - ### VideoList ✅
  | Prop | Default | Description |
  | ------------- | ------------- | ------------- |
  | `listData` | `-` | data for video list |
  | `className` | `-` | styles for video list |