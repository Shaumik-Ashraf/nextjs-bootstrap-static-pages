import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'
 
module.exports = (phase, { defaultConfig }) => {
  const date = new Date()
	const version = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`
  const nextConfig = {
    // config options for all phases here
    output: 'export',

    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    trailingSlash: false,
 
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
 
		env: {
		  "VERSION": `${version}-dev`
		}
	}

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return Object.assign(nextConfig, {
      // development only config options here
      allowedDevOrigins: ['127.0.0.1', '::1'],
    })
  }
 
  return Object.assign(nextConfig, {
    // config options for export here
    env: {
      "VERSION": version
    }
  })
}
