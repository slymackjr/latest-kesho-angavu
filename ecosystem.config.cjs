module.exports = {
  apps: [
    {
      name: "kesho-angavu",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env: {
        PORT: 3009,
        NODE_ENV: "production"
      },
      instances: 1,
      exec_mode: "fork",
      watch: false,
      error_file: "./logs/kesho-angavu-error.log",
      out_file: "./logs/kesho-angavu-out.log",
    //   max_memory_restart: "500M",
      autorestart: true
    }
  ]
};