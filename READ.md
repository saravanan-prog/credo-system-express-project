### 1. MOUDLE INSTALLATION
```
npm i nodemon --save-dev
```


### 2. PROJECT BAISC SETUP

**Step 1** : npm init -y

**Stpe 2** : open package.json change **main** key value `index.js` to `app.js` 

**Step 3** : add `scripts` inside

```
dev :  node --watch app.js
prod : nodemon app.js
```

**Stpe 4** : open package.json change **type** key value `commonjs` to `module` 



**Step 5** : execute this `npm i express`

**Step 6** : after code complete execute ***npm run dev***