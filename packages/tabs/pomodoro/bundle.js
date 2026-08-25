
return function PomodoroTab({ quinki }) {
  const [secs, setSecs] = quinki.useState(25 * 60)
  const [run, setRun] = quinki.useState(false)
  quinki.useEffect(() => { if (!run) return; const t = setInterval(() => setSecs(s => s <= 0 ? 0 : s - 1), 1000); return () => clearInterval(t) }, [run])
  const mm = String(Math.floor(secs / 60)).padStart(2, '0')
  const ss = String(secs % 60).padStart(2, '0')
  return quinki.React.createElement('div', { style: { height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '18px', padding: '24px' } },
    quinki.React.createElement('div', { style: { fontSize: '64px', fontWeight: 700, fontFamily: 'var(--font-code)', color: 'var(--q-text)' } }, mm + ':' + ss),
    quinki.React.createElement('div', { style: { display: 'flex', gap: '8px' } },
      quinki.React.createElement('button', { onClick: () => setRun(!run), style: { padding: '7px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--q-tab-accent)', background: 'transparent', color: 'var(--q-tab-accent)', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-interface)', cursor: 'pointer' } }, run ? 'Pause' : 'Start'),
      quinki.React.createElement('button', { onClick: () => { setRun(false); setSecs(25 * 60) }, style: { padding: '7px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--q-border)', background: 'transparent', color: 'var(--q-text-secondary)', fontSize: '13px', fontFamily: 'var(--font-interface)', cursor: 'pointer' } }, 'Reset')
    )
  )
}
