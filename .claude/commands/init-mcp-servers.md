# Initialize MCP Servers

This command helps you check and install MCP servers for your environment.

## Instructions

1. First, run `claude mcp list` to check currently configured MCP servers
2. Compare with the list below and install any missing servers using the provided commands

## Available MCP Servers

### textlint

```bash
claude mcp add --scope=user textlint npx -- -y textlint --mcp
```

### deepwiki

```bash
claude mcp add --scope=user deepwiki https://mcp.deepwiki.com/sse
```

### github

```bash
claude mcp add --scope=user github https://api.githubcopilot.com/mcp
```

### ui

```bash
claude mcp add --scope=user ui npx -- -y @omni-stove/ui --mcp
```

### adrs

```bash
claude mcp add --scope=user adrs npx -- -y @omni-stove/adrs
```

### context7

```bash
claude mcp add --scope=user context7 npx -- -y @upstash/context7-mcp@latest
```

### playwright

```bash
claude mcp add --scope=user playwright npx -- -y @playwright/mcp@latest
```

## Usage

1. Run `claude mcp list` to see your current MCP servers
2. Install missing servers using the commands above
3. For serena, run the command in each project directory you want to use it with