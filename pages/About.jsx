import {
  BriefcaseIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";

function AboutMe() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
            About Ottawa Bites
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            We bring your favorite fast food to your doorstep
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Ottawa Bites is dedicated to providing high-quality fast food to our
            customers. We are passionate about what we do and strive to exceed
            our customers&apos; expectations every time.
          </p>
        </div>
        <div className="mt-16  ">
          <dl className="text-center space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 ">
            <div className="text-center">
              <dt className="">
                <p className="text-lg leading-6 font-medium text-gray-900 flex items-center justify-center">
                  <BriefcaseIcon
                    className="h-7 w-7 text-green-600 mr-2"
                    aria-hidden="true"
                  />
                  Address
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                123 Main St, Ottawa, ON, Canada
              </dd>
            </div>
            <div className="text-center">
              <dt>
                <p className="text-lg leading-6 font-medium text-gray-900 flex items-center justify-center">
                  <PhoneIcon
                    className="h-7 w-7 text-green-600 mr-2"
                    aria-hidden="true"
                  />
                  Phone
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                +1 (613) 123-4567
              </dd>
            </div>
            <div className="text-center">
              <dt>
                <p className="text-lg leading-6 font-medium text-gray-900 flex items-center justify-center">
                  <MailIcon
                    className="h-7 w-7 text-green-600 mr-2"
                    aria-hidden="true"
                  />
                  Email
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                info@ottawabites.com
              </dd>
            </div>
            <div className="text-center">
              <dt>
                <p className="text-lg leading-6 font-medium text-gray-900 flex items-center justify-center">
                  <LocationMarkerIcon
                    className="h-7 w-7 text-green-600 mr-2"
                    aria-hidden="true"
                  />
                  Hours of Operation
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Monday-Sunday: 10am-10pm
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
