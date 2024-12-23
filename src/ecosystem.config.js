module.exports = {
  apps: [
    {
      name: 'front',
      cwd: './front',
      script: 'npm',
      args: 'run dev:front',
      watch: false,
    },
    {
      name: 'server',
      cwd: './server',
      script: 'npm',
      args: 'run dev:server',
      watch: true,
    },
  ],
}
