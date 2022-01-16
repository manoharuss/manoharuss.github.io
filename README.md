# Manohar's Portfolio website

Website link: [manoharuss.github.io](manoharuss.github.io)

## Attribution

This portfolio uses the amazing template open sourced by Suresh Murali over at https://github.com/sureshmurali/sureshmurali.github.io.


## How to deploy?

1. Clone repo and make sure you're in the `main` branch
2. Run `npm ci && npm run dev`.
3. Make changes in code and debug in `localhost:1234` by running `npm run dev`. (No Hot reload available)
4. Commit code in `main` branch.
5. Run `npm run build` to create build files in dist folder
6. When a local build is complete, run `npm run deploy` to push to a gh-pages branch. 
7. To do the deploy manually - Copy dist files temporarily to clipboard. Switch to `gh-pages` branch
8. Overwite manually saved dist files in to the root directory of `gh-pages` branch. Replace all files.
9. Updated code in `gh-pages` branch reflects in live site. Point Github pages to `gh-pages` branch.

