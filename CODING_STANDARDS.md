# Frontend coding standards 
In the interests of consistency, readability, and future extensibility, we adhere to the following standards and patterns. This will be a constant WIP, as we continue to refine and update our standards and codebase in general.

## Patterns
1. All components are named in `PascalCase`
2. All other helper files should be camelCase. (non-component files)
3. All the folder names should be camelCase. Example: components
4. All files related to any one component should be in a single folder
5. We label files with the following suffixes:  
  - `.js` denotes logic files
  - `.view.js` denotes pure presentation files
  - `.style.js` contains only styled components
  - `.test.js` contains only tests for the named file

6. *React* Components are _default exported_ at the bottom of the file (e.g. `export default x`)
7. *Styled* Components are _name exported_ at the bottom of the file with an `St` suffix (e.g. `export { xSt, ySt }`)
8. Business logic should exist in the `containers` folder only, so that it is decoupled and testable.
9. When building a component make sure you keep presentation and business logic separated. I.e. having to fetch and present some data put the APIs calls inside `containers` and the presentation code in `components`
10. *Start building a component in Storybook*. This helps building the components library and allows us to test code in isolation.
11. We use *React Function Components* and *React Hooks*
12. We don't use Styled-components theme provider; we import 'theme/default.js' as and when we need it.
13. We store environment variables (API keys, end-points...) in a `.env` file that should be created in the project root folder


## Folder structure
Below is an example and explanation of our (ideal) folder structure:
```
app/
╠ components/
║  ╠ base/ //base pure components
║  ║  ╠ ComponentName/ (e.g. Button)
║  ║  ║  ╠ Button.view.js //presentation JSX
║  ║  ║  ╠ Button.style.js //styled components
║  ║  ║  ╚ index.js //exports the component
║  ╠ ComponentName/ (e.g. SearchBox) //aka 'widget': one or more base components providing a simple function
║  ║  ╚ [...]
╠  containers/ //buisiness logic for the dumb components
╠ pages/ //top.level routes
║  ╠ PageName/ (e.g. ProductListingPage)
║  ║  ╠ ProductListingPage.container.js //page logic setup (calling APIs, reading/updating the global state..)
║  ║  ╠ ProductListingPage.view.js //presentation JSX (components + styles)
║  ║  ╚ [...]
╠ utils/ //utility functions grouped by business area
╚ [...]
```