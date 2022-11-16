import { useOptionalUser } from "~/utils";

import logo from "~/images/bbs_logo.jpeg";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <img
              className="h-full w-full object-cover"
              src={logo}
              alt="Brennan's Bike Shop"
            />
            <div className="relative px-4 sm:px-6 lg:px-8 pt-4 pb-4">
              <h1>Brennan's Bike Shop</h1>
              <p>Brennan's Bike Shop is a full service bike shop in Lehi, UT</p>
              <p>The services we offer:</p>
              <ul className="list-disc list-inside">
                <li>Tune ups</li>
                <li>Tire repair</li>
                <li>Cleaning</li>
                <li>Drivetrain work</li>
                <li>Upgrades (just about anything)</li>
                <li>Fork and Shock services</li>
              </ul>
              <p>We work on just about any make/model including Mountain Bikes, Road Bikes, Cruisers, etc.</p>
            </div>
            {/* <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-red-700 shadow-sm hover:bg-red-50 sm:px-8"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-red-700 shadow-sm hover:bg-red-50 sm:px-8"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-red-500 px-4 py-3 font-medium text-white hover:bg-red-600"
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
