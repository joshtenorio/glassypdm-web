import React from 'react'

function Page() {
  return (
    <div>
    <h1 className="text-3xl mx-8 mt-5 mb-2">About</h1>
    <div className="mx-5">
    <p>
      glassyPDM is a PDM solution for teams looking to collaborate on hardware design.
    </p>
    <br></br>
    <h2 className="text-2xl">Source Code</h2>
    <p>glassyPDM is 100% free and open source software.</p>
    <p>The source code for this website is hosted on <a className="underline" href="https://github.com/joshtenorio/glassypdm-web" target='_blank'>GitHub</a>.</p>
    <br></br>
    <h2 className="text-2xl">License</h2>
    <p>The glassyPDM webapp is licensed under the GNU Affero General Public License.</p>
    </div>
    </div>
  )
}

export default Page