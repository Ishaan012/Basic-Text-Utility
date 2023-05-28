import React from 'react'

export default function navbar(props) {
  return (
    // <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
    //   <div classNameName="container-fluid">
    //     <a classNameName="navbar-brand" href="/">{props.title}</a>
    //     <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span classNameName="navbar-toggler-icon"></span>
    //     </button>
    //     <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li classNameName="nav-item">
    //           <a classNameName="nav-link active" aria-current="page" href="/">{props.aboutText}</a>
    //         </li>
    //       </ul>
    //       <form classNameName="d-flex">
    //         <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //         <button classNameName="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>

    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">


          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <a href="/" className="text-white font-bold hover:bg-gray-700">Text Utility</a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">

                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Dashboard</a>
                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        </div>
      </div> */}
    </nav>

  )
}
