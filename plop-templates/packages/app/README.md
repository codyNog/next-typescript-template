# plop-templates

This directory stores templates for file generation using `plop`.

The following code generators are set up.

## cc

Generates files for Client Components in bulk.

`bun plop cc foo`

```sh
✔  ++ /src/components/Foo/index.tsx
✔  ++ /src/components/Foo/hooks/index.ts
✔  ++ /src/components/Foo/modules/index.ts
✔  ++ /src/components/Foo/modules/index.test.ts
✔  ++ /src/components/Foo/types/index.ts
✔  ++ /src/components/Foo/index.stories.tsx
✔  ++ /src/components/Foo/index.module.css
```

## sc

Generates files for Server Components in bulk.

`bun plop sc foo`

```sh
✔  ++ /src/components/Foo/index.tsx
✔  ++ /src/components/Foo/index.stories.tsx
✔  ++ /src/components/Foo/index.module.css
```

## page

Generates files for Page Components in bulk for the App Router.

`bun plop page foo`

```sh
✔  ++ /app/[locale]/foo/page.tsx
✔  ++ /src/page-components/foo/index.tsx
✔  ++ /src/page-components/foo/index.module.css
```

## layout

Generates files for Layouts in bulk for the App Router.

`bun plop layout foo`

```sh
✔  ++ /src/layouts/foo/index.tsx
✔  ++ /src/layouts/foo/index.module.css
✔  ++ /app/[locale]/foo/layout.tsx
```

## action

Generates files for Server Actions in bulk.

`bun plop action foo`

```sh
✔  ++ /src/actions/foo/index.ts
✔  ++ /src/actions/foo/index.test.ts
✔  ++ /src/actions/foo/types/index.ts
```

## form

Generates files for Form Components, which are Client Components, in bulk.

`bun plop form foo`

```sh
✔  ++ /src/components/FooForm/index.tsx
✔  ++ /src/components/FooForm/hooks/index.ts
✔  ++ /src/components/FooForm/modules/index.ts
✔  ++ /src/components/FooForm/modules/index.test.ts
✔  ++ /src/components/FooForm/types/index.ts
✔  ++ /src/components/FooForm/index.stories.tsx
✔  ++ /src/components/FooForm/index.module.css
```

## table

Generates files for Table Components, which are Server Components, in bulk.

`bun plop table foo`

```sh
✔  ++ /src/components/FooTable/index.tsx
✔  ++ /src/components/FooTable/types/index.ts
✔  ++ /src/components/FooTable/index.stories.tsx
✔  ++ /src/components/FooTable/index.module.css
```
