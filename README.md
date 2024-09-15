# Next.js Template

## Requirements

- [bun](https://bun.sh/)
- [Docker](https://www.docker.com/)

## Installation

```bash
make setup
```

## How to start local environment

```bash
make dev
```

## Packages

### app

Web application built with Next.js.  
[read this](./packages/app/README.md)

### shared

Module referenced by multiple packages.  
[read this](./packages/shared/README.md)

### ui

UI component library called by the web application.
It is planned to be managed as a separate library in the future.  
[read this](./packages/ui/README.md)

## Development

### How to develop UI Component

```bash
bun ui storybook
```

```bash
bun app storybook
```
