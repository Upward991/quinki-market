
return function KnowledgeTab({ quinki }) {
  const [text, setText] = quinki.useState(quinki.notes.read())
  const [summary, setSummary] = quinki.useState('')
  const [stats, setStats] = quinki.useState(null)
  const save = () => { quinki.notes.write(text); quinki.ui.toast('Saved'); quinki.call('knowledge:stats', { action: 'save' }).then(setStats).catch(() => {}) }
  const ask = () => {
    quinki.agent.ask('Summarize this note in one line: ' + text).then((r) => setSummary(r || '')).catch(() => setSummary('(agent not available in simulation)'));
    quinki.call('knowledge:stats', { action: 'ask' }).then(setStats).catch(() => {})
  }
  return quinki.React.createElement('div', { style: { height: '100%', padding: '24px 32px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' } },
    quinki.React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' } },
      quinki.React.createElement('span', { style: { fontSize: '20px' } }, '📚'),
      quinki.React.createElement('span', { style: { color: 'var(--q-text)', fontSize: '17px', fontWeight: 700, fontFamily: 'var(--font-interface)' } }, 'Knowledge'),
      quinki.React.createElement('span', { style: { color: 'var(--q-text-tertiary)', fontSize: '11px', fontFamily: 'var(--font-interface)', marginLeft: 'auto' } }, 'installed tab · v' + quinki.manifest.version)
    ),
    quinki.React.createElement('textarea', {
      value: text,
      onChange: (e) => setText(e.target.value),
      placeholder: 'Your knowledge base…',
      style: { flex: 1, resize: 'none', backgroundColor: 'var(--q-bg-panel)', border: '1px solid var(--q-border)', borderRadius: 'var(--radius-md)', padding: '14px', color: 'var(--q-text)', fontSize: '14px', fontFamily: 'var(--font-interface)', outline: 'none' }
    }),
    quinki.React.createElement('div', { style: { display: 'flex', gap: '8px', marginTop: '12px', alignItems: 'center' } },
      quinki.React.createElement('button', { onClick: save, style: { padding: '7px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--q-tab-accent)', background: 'transparent', color: 'var(--q-tab-accent)', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-interface)', cursor: 'pointer' } }, 'Save'),
      quinki.React.createElement('button', { onClick: ask, style: { padding: '7px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--q-tab-accent)', background: 'transparent', color: 'var(--q-tab-accent)', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-interface)', cursor: 'pointer' } }, 'Ask AI'),
      summary && quinki.React.createElement('span', { style: { color: 'var(--q-text-secondary)', fontSize: '13px', fontFamily: 'var(--font-interface)' } }, summary)
    ),
    stats && quinki.React.createElement('div', { style: { marginTop: '10px', color: 'var(--q-text-tertiary)', fontSize: '12px', fontFamily: 'var(--font-interface)' } }, 'back-end: ' + stats.asks + ' asks · ' + stats.saved + ' saves')
  )
}
