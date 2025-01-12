module.exports = {
  apps: [
    {
      name: 'front',
      cwd: './front',
      script: 'npm',
      args: 'run dev',
      env: {
        NODE_ENV: 'development',
      },
      watch: false,
    },
    {
      name: 'server',
      cwd: './server',
      script: 'npm',
      args: 'run dev',
      env: {
        NODE_ENV: 'development',
      },
      watch: true,
    },
  ],
}
