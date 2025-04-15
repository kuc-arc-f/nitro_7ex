# react_jsr7

 Version: 0.9.1

 Author  : 

 date    : 2025/04/14

 update  :

***
### Summary

nitro + jsr (Svelte) example

***
### API Server

https://github.com/kuc-arc-f/d1-project8git

***
### setup
* nitro.config.ts
* apiUrl, apiKey set
```
export default defineNitroConfig({
  compatibilityDate: "2025-01-30",
  runtimeConfig: {
    apiUrl: "https://localhost",
    apiKey: "123",
    userName: "user123@example.com",
    userPasswd: "123",
  }
});
```

***
* dev-start

```
npm run prebuild
npm run dev

#OR
npm run prebuild && npm run dev
```

***
* edit (other window)
```
npx nodemon
```

***
### JSR package

* @kotan-kndev/ap7-svelte-task-item-create
* https://jsr.io/@kotan-kndev/ap7-svelte-task-item-create

***
* @kotan-kndev/ap7-svelte-task-item-edit
* https://jsr.io/@kotan-kndev/ap7-svelte-task-item-edit
***
* @kotan-kndev/ap7-sv-project
* https://jsr.io/@kotan-kndev/ap7-sv-project

***
* @kotan-kndev/ap7-sv-project-create
* https://jsr.io/@kotan-kndev/ap7-sv-project-create

***
* @kotan-kndev/ap7-sv-project-export
* https://jsr.io/@kotan-kndev/ap7-sv-project-export

***
* @kotan-kndev/ap7-sv-project-show
* https://jsr.io/@kotan-kndev/ap7-sv-project-show

***
# License

* MIT

***
