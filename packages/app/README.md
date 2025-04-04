# app

This directory contains web application by Next.js.  

## dev

```bash
npm run dev
```

## plop

Generate code in bulk with `npm run plop {{action}}`.
For detailed execution, refer to [plop-templates](./plop-templates/README.md).

## bundle analyzer

The following line should be added to the .env file.

```bash
ANALYZE=true
```

and `@next/bundle-analyzer` is enabled.  
When running build, analyzer will boot up.
