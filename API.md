# Project structure:

```
|-- frontend
  |-- components -> folder with reusable components
  |-- data -> static data (back-end alternative)
  |-- helpers
  |-- hooks -> custom users hooks
  |-- pages -> pages and routing
      |-- projects -> pages and routing for projects
  |-- public -> images and svg, that are required to work
    |-- favicon -> favicon for the site
  |-- styles -> global styles
```

## Components API:

- ### Heading ✅

| Prop        | Default | Description                                                   |
| ----------- | ------- | ------------------------------------------------------------- |
| `tag`       | `h1`    | choose the heading types you'd need: `h1`, `h2`, `h3` or `h4` |
| `text`      | `-`     | heading text                                                  |
| `className` | `-`     | header styles                                                 |

- ### YoutubeVideo ✅

  | Prop   | Default | Description |
  | ------ | ------- | ----------- |
  | `data` | `-`     | video data  |

- ### Image ✅

  | Prop        | Default | Description         |
  | ----------- | ------- | ------------------- |
  | `image`     | `-`     | image data          |
  | `alt`       | `-`     | image alt attribute |
  | `className` | `-`     | image styles        |

- ### VideoList ✅

  | Prop        | Default | Description           |
  | ----------- | ------- | --------------------- |
  | `listData`  | `-`     | data for video list   |
  | `className` | `-`     | styles for video list |

- ### ModalBackdrop ✅

  | Prop       | Default | Description                        |
  | ---------- | :-----: | ---------------------------------- |
  | `children` |   `-`   | only as text element or component. |

  - ### Button ✅

  | Prop          | Default   | Description                                                              |
  | ------------- | --------- | ------------------------------------------------------------------------ |
  | `linkTo`      | `-`       | link to another page                                                     |
  | `text`        | `-`       | button text                                                              |
  | `buttonTheme` | `primary` | choose button theme you need: `primary`, `secondary`, `type3` or `type4` |
  | `className`   | `-`       | button styles                                                            |

  - ### DialogWindow ✅

  | Prop           | Default | Description            |
  | -------------- | ------- | ---------------------- |
  | `classNameDiv` | `-`     | container styles       |
  | `classNameP`   | `-`     | text styles            |
  | `text`         | `-`     | text for dialog window |

  - ### LinkToBook ✅

  | Prop        | Default | Description                      |
  | ----------- | ------- | -------------------------------- |
  | `className` | ` `     | link text styles                 |
  | `text`      | `-`     | text for link                    |
  | `link`      | `-`     | link to another site to buy book |

- ### ShortProject ✅

  | Prop   | Default | Description                      |
  | ------ | ------- | -------------------------------- |
  | `data` | `-`     | projects data                    |
  | `link` | `-`     | link to another site to buy book |

  - ### Head ✅

  | Prop        | Type      | Default | Description                                |
  | ----------- | --------- | ------- | ------------------------------------------ |
  | `Tag`       | `h2-h6`   | `h2`    | h2-h6 tag in markdown                      |
  | `title`     | `string`  | `-`     | text of title, required                    |
  | `showTitle` | `boolean` | `true`  | add visually-hidden if true and hide title |
  | `isColor`   | `boolean` | `false` | add brand color for the title              |
  | `className` | `string`  | `-`     | className                                  |

  - ### Collapse ✅

  .

  | Prop            | Type          | Default | Description                                                                                                                                              |
  | --------------- | ------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `children`      | `jsx-element` | `h2`    | First element of children сan be some container like div, ul, all other elements must be into this container. It's need for get height of children block |
  | `maxHeight`     | `number`      | `-`     | max-height of children in closed state, required                                                                                                         |
  | `className`     | `string`      | `-`     | className                                                                                                                                                |
  | `withoutButton` | `boolean`     | `false` | render or not more/sell button                                                                                                                           |
  | `open`          | `boolean`     | `false` | open/close children block                                                                                                                                |

- ### withShowMore ✅

Компонент высшего порядка для подключения компонент ShowMore и обработки логики.

| Prop           | Type     | Default                                           | Description                        |
| -------------- | -------- | ------------------------------------------------- | ---------------------------------- |
| `mediaOptions` | `object` | `{ mobile: 2, tablet: 4, desktop: 4, fullHd: 4 }` | item count to show in closed state |

Example usage:

```jsx
import withShowMore, { useShowMore } from 'components/reusable/ShowMore';

const SomeListComponent = ({ dataListArray }) => {
  const { normalizedListData } = useShowMore(modules);

  return (
    <ul>
      {normalizedListData.map(item => (
        <li key={item.id}>...</li>
      ))}
    </ul>
  );
};

export default withShowMore(Modules);
```

```jsx
import SomeListComponent from '../path_to_component';

const ParentComponent = ({ dataListArray }) => {
  return (
    <div>
      {!!dataListArray.length && (
        <SomeListComponent
          dataListArray={dataListArray}
          // optional props for ShowMore
          // pass item count to show in closed state
          mediaOptions={{ mobile: 2, tablet: 2, desktop: 4, fullHd: 4 }}
        />
      )}
    </div>
  );
};
```

- ### Slider ✅

  | Prop            | Type          | Default     | Description                                                       |
  | --------------- | ------------- | ----------- | ----------------------------------------------------------------- |
  | `children`      | `SwiperSlide` | `-`         | list of slides, watch swiper docs                                 |
  | `className`     | `string`      | `-`         | className                                                         |
  | `slidesPerView` | `number`      | `1`         | watch swiper docs                                                 |
  | `spaceBetween`  | `number`      | `40`        | watch swiper docs                                                 |
  | `onSlideChange` | `function`    | `-`         | watch swiper docs                                                 |
  | `onSwiper`      | `function`    | `-`         | watch swiper docs                                                 |
  | `style`         | `object`      | `-`         | inline styles                                                     |
  | `btnClass`      | `string`      | `fill-main` | classNames for Buttons, use when you need change color of buttons |
  | `innerButtons`  | `boolean`     | `false`     | pass true if need place buttons into swiper container             |

- ## Hooks

- ### useObserver hook

Usage:

```jsx
const Component = () => {
  const containerRef = useRef();

  const [showElement, getContainerRef] = useObserver();

  useEffect(() => {
    if (!container.current || !getRef) return;
    getRef(container);
  }, [getRef]);

  return <div ref={containerRef}>{showElement && <ObservedComponent />}</div>;
};
```

- ### useShowElement hook

  | params     | Type   | Default  | Description                                      |
  | ---------- | ------ | -------- | ------------------------------------------------ |
  | `duration` | `emun` | `middle` | `fast` (100ms), `medium` (200ms), `slow` (500ms) |

`classes` based on transition opacite from 0 to 100% You can use `classes` or
you can use boolean `showElement` for customize animation

flow:

1. onToggle
2. `renderElement` change to `true`
3. After duration time `showElement` change to `true`
4. onToggle
5. After duration time `showElement` change to `false`
6. `renderElement` change to `false`

usage:

```jsx
const Component = () => {
  const containerRef = useRef();

  const [renderElement, showElement, classes, onToggle] = useShowElement();

  return (
    <div>
      {renderElement && <div className={classes}></div>}
      <button type="button" onClick={onToggle}>
        CLICK BUTTON
      </button>
    </div>
  );
};
```

- ### useTranslations hook

this hook get properties from `translation` object

usage:

```jsx
const Component = () => {
  const button = useTranslations('buttonKey'); // undefined if not found
  // or
  const { buttonKey1, buttonKey2, undefinedKey } = useTranslations([
    'buttonKey1',
    'buttonKey2',
    'undefinedKey',
  ]); // undefinedKey = undefined
  // or
  const allTranslation = useTranslations();

  return (
    <div>
      <button type="button">{button}</button>
    </div>
  );
};
```
