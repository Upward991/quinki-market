
module.exports = {
  rpc: {
    'knowledge:stats': async (params, ctx) => {
      const fs = require('fs');
      const path = require('path');
      const f = path.join(ctx.dataDir, 'stats.json');
      let stats = { asks: 0, saved: 0 };
      try { stats = JSON.parse(fs.readFileSync(f, 'utf8')); } catch {}
      if (params && params.action === 'save') stats.saved = (stats.saved || 0) + 1;
      if (params && params.action === 'ask') stats.asks = (stats.asks || 0) + 1;
      fs.writeFileSync(f, JSON.stringify(stats));
      return stats;
    }
  }
}
