# app

This directory contains web application by Next.js.  

## dev

```bash
bun dev
```

and check [this](http://localhost:3000/v2/ja/admin/users) out

## plop

Generate code in bulk with `bun plop {{action}}`.  
For detailed execution, refer to [plop-templates](./plop-templates/README.md).

## bundle analyzer

The following line should be added to the .env file.

```bash
ANALYZE=true
```

and `@next/bundle-analyzer` is enabled.  
When running build, analyzer will boot up.