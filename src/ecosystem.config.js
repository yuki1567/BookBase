module.exports = {
  apps: [
    {
      name: 'front',
      cwd: './front',
      script: 'npm',
      args: 'run dev',
      watch: false,
    },
    {
      name: 'server',
      cwd: './server',
      script: 'npm',
      args: 'run dev',
      watch: true,
    },
  ],
}
