# CSS management by GULP

## Setup

If you already have `node`, `npm` or `gulp-cli`, skip the appropriate step:

1. Install `node`: https://nodejs.org/en/

2. Usually `node` installer also installs `npm`, verify that by command in your system console (*If you just installed node, you might need to close and open your console*):
```
npm -v
```

If no errors are thrown, then npm is installed.

Otherwise, you have to install it (this installs it globally on your system):
```
npm install npm@latest -g
```

3. Install gulp cli (this installs it globally on your system):
```
npm install --global gulp-cli
```

4. Copy the `assets` folder into your current project, then navigate to it and install npm packages from package.json (this installs them only for this current project):
```
cd my_project_name/assets
npm install
```

## Workflow

In order to do initial css generation and keep it in watch mode, run:
```
gulp
```

Gulp is only watching files that are in `src` folder and its' subfolders.
If you save a `.scss` file, gulp will generate appropriate css files.

To exit watch mode, press <kbd>CTRL</kbd>+<kbd>X</kbd>

## About GULP

CSS is managed by GULP, it does following:
- concatenates files (less files means less HTTP requests to server, saves bandwidth).
- minifies files (smaller file size means less data needs to be sent from server to client, saves latency)
- compiles SASS files into resulting css file(s)

Optionally, one can create gulp tasks that process javascript as well.