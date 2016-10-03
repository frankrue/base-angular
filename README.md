# Base-Angular

To make things easier for my team, we have developed a good template for building
our single-page web applications. None of this technology is marvel or new
compared to many of the other, very efficient tools of the same category, but
this one suits our particular needs.

## TL;DR

Get it going.
1. Clone the git repository in your favorite manner
2. ```npm install``` to get all the goods
3. ```npm install -g gulp``` (if you don't already have Gulp globally)
4. ```gulp``` to crack open a browser, pointed to `localhost:3000` while you develop
5. Open (Atom[https://atom.io]), (Sublime[https://www.sublimetext.com]),
   (VIM[http://www.vim.org/download.php]), etc. and enjoy
6. `gulp build` to create an uglified/minified version in a `build` folder

## Source Code Languages
Base-Angular uses our three "shortcut" languages for its source code:
(CoffeeScript[https://github.com/jashkenas/coffeescript]) for the JavaScript,
(Pug[https://github.com/pugjs/pug]) for the HTML, and
(SASS[https://github.com/sass/sass]) for the CSS.

## Scripting/Compilation

Base-Angular uses (Gulp[https://github.com/gulpjs/gulp]) to do some pretty
significant scripting for both development and final distribution. My goal in
this is to minimize storage of compiled code inside of the repository, since it
is, by nature, immediately out of date when a change is made to the underlying
source. Thus, the `.gitignore` is loaded with the folders and files finally
output by the development and distribution scripts.

Knowing that my team's products are almost always standalone, and must have a
level of internal reliance on packages/dependencies built and versioned at the
time of the development, I found that using
(AMD[http://requirejs.org/docs/whyamd.html]) in production was less reliable
than either, ultimately,
(packing it up[http://requirejs.org/docs/optimization.html]), or just using a
different approach entirely. This led me to using
(Browserify[https://github.com/substack/node-browserify]) from the start. Due
to the ease of `require()` written in CommonJS-form, and the use of
(Node Package Manager[https://www.npmjs.com]) for all development installs
(rather than adding (Bower[https://github.com/bower/bower]) into the mix), it
became clear this was my more desired approach.

## To Be Continued...
