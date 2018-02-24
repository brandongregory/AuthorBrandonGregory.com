AuthorBrandonGregory.com source code
====================================

Just a basic little site to showcase all of my writing. Built in compiled HTML using Jekyll. No frameworks or libraries of any kind.

Rundown on directory structure:

1. **src**: The raw, uncompiled files (SCSS, YAML, Jekyll partials). This is where I develop.
2. **dev**: Compiled, but not minified files. I do my testing here.
3. **dist**: Minified version of the files in dev. This is what I upload to the server.

Gulp takes care of the build process, automating everything but the Jekyll build. So, for a complete build, I enter these commands on the CLI:

1. `jekyll build`
2. `gulp`
3. `gulp package`

I chose to separate out the minification, since that's not necessary to test the code in dev. So that's a separate step that I only do when testing is done and I'm ready to upload.