# react_jsr3auth

 Version: 0.9.1

 Author  : 

 date    : 2025/03/20

 update  :

***
### Summary

nitro + JSR , auth example

* nitro.config.ts : user data read

***
### Setup
* nitro.config.ts
* runtimeConfig: add

```
export default defineNitroConfig({
  compatibilityDate: "2025-01-30",
  runtimeConfig: {
    userName: "user1@example.com",
    userPasswd: "1234",
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

* @kotan-kndev/sv-login-250403
* https://jsr.io/@kotan-kndev/sv-login-250403

***
# License

* MIT

***