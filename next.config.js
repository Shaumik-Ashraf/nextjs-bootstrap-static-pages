const today = new Date()
const version = `${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`
const nextConfig = {
  output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
	// distDir: 'dist',

  env: {
    'VERSION': `${version}`
  }
}
