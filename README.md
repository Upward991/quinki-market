# Quinki Market

The official marketplace for **Quinki** — tabs, skills, agents, MCP servers and themes.

The market lives here, online. The Quinki app is the client: it reads `catalog.json`, downloads packages and installs them locally.

## Structure

```
catalog.json                  ← the index (what the app fetches)
packages/
  tabs/<id>/                 ← Quinki tabs (manifest + bundle.js + optional server.js)
  skills/<id>/               ← SKILL.md
  agents/<id>/               ← config.json + PROMPT.md
  mcp/<id>/                  ← server config
  themes/<id>/               ← theme.json
```

## Package format

Every package has a `quinki.config.json` manifest:

```json
{
  "id": "knowledge",
  "name": "Knowledge",
  "version": "1.0.0",
  "author": "your-github-username",
  "description": "...",
  "icon": "📚",
  "color": "#9d8bd9",
  "category": "tab",
  "permissions": ["notes:read", "notes:write", "agent:ask"],
  "entry": "bundle.js"
}
```

- **Tabs**: `bundle.js` (the panel, evaluated by the app runtime) + optional `server.js` (back-end, loaded by the sidecar)
- **Skills**: `SKILL.md` (with YAML frontmatter: name, description, user-invocable)
- **Agents**: `config.json` + `PROMPT.md`
- **MCP**: `server.json` (type + source)
- **Themes**: `theme.json` (CSS variables)

## How to publish

1. Create your package folder in the right `packages/<category>/<id>/` directory
2. Add the entry to `catalog.json` (id, name, version, author, downloadUrl)
3. Open a Pull Request
4. After review and merge, the package is live in the market

## License

Each package is the property of its author (see `author` in the manifest).
