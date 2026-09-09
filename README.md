# Quinki Market

The official package marketplace for [Quinki](https://github.com/Upward991/Quinki).

## How to publish

Publishing is done from within the Quinki app:

1. Open Quinki → Market tab
2. Click **Publish**
3. Sign in with your GitHub account
4. Select the items you want to publish (agents, skills, tabs, themes, MCP servers)
5. Click **Publish**

Your package is submitted as a pull request, validated by CI (structure check, secret scan, binary policy), and auto-merged when all checks pass.

## Recommended sources

The Quinki Market can also browse external GitHub repositories with ready-made skills and MCP servers. Here are the best ones:

### Skills (250+ available)

| Repository | Skills | Best for |
|-----------|--------|----------|
| [anthropics/skills](https://github.com/anthropics/skills) | 20 | Official Anthropic skills: canvas design, art, branding |
| [bergside/awesome-design-skills](https://github.com/bergside/awesome-design-skills) | 67 | UI/UX design, branding, layout |
| [gamedev-skills/awesome-gamedev-agent-skills](https://github.com/gamedev-skills/awesome-gamedev-agent-skills) | 74 | Game dev: Godot, Unity, Unreal |
| [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) | 78 | Security testing, pentesting |
| [obra/superpowers](https://github.com/obra/superpowers) | 14 | TDD, debugging, code review |
| [elementalsouls/Claude-OSINT](https://github.com/elementalsouls/Claude-OSINT) | 10 | OSINT, reconnaissance |

### MCP servers

| Repository | Contents |
|-----------|----------|
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Official MCP servers: filesystem, git, search, memory |

## Package structure

Each package lives in `packages/<category>/<id>/` with a `manifest.json`:

```json
{
  "id": "my-agent",
  "name": "My Agent",
  "category": "agents",
  "version": "1.0.0",
  "description": "A description of my agent",
  "author": "your-github-username",
  "icon": "🤖",
  "color": "#4ec9b0",
  "license": "MIT"
}
```

## Categories

| Category | Contents |
|----------|----------|
| `tabs` | Custom tab panels (JavaScript bundles) |
| `agents` | Agent configurations (PROMPT.md + config.json) |
| `skills` | SKILL.md files |
| `mcp` | MCP server configurations |
| `themes` | Theme JSON files |

## Rules

- No secrets, API keys, or tokens
- No binary files
- You must own the content you publish
- Content is published under MIT license by default

## License

MIT
