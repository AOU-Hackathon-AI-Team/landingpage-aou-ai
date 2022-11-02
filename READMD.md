# AOU Hackathon Landing Page
## Changes

- project structure needs to separate what can be shared across components or html-files in this
  case.
- styling with vanilla css will get very tedious the bigger the project becomes so `main.css` needs
  to contain only the necessary properties like colors and such **BUT NOT EVERYTHING**
- this project now supports [WindiCSS](https://windicss.org/features/) which way faster styling
  solution. you can try it out with `npm try_windi`

## Better Conventions

- components refer to the page not the html files, a component usually comprises of html, css and
  js.
- Keep component html, styling and scripts files under 1 folder
- Commits need to start with one of the following, if there's any suggestions let's talk about it:
  - `task`: new feature/page/component
  - `update`: changes to feature/task/component
  - `bug`: bug resolved or a fix
  - `pause`: stopped mid task
- app has no bundler and will use `vscode`'s `Live Server` extension to develop and test components.
- component testing techniques are going to be placed in the future.

git commit -am "milestone: sellers pages"

## Development server

## Production server