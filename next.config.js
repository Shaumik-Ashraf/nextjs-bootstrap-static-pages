// @ts-check
 
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
 
module.exports = (phase, { defaultConfig }) => {
	const nextConfig = {
		// config options for all phases here
		output: 'export',
 
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    trailingSlash: false,
 
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
 
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',	
	}

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return Object.assign(nextConfig, {
      // development only config options here
      allowedDevOrigins: ['127.0.0.1', '::1'],
    })
  }
 
  return Object.assign(nextConfig, {
			// config options for export here
  })
}
