module.exports = {
  apps : [
      {
        name: "dijkstra",
        script: "./server.js",
        watch: true,
        env: {
          "NODE_ENV": "production",
        }
      }
  ]
}