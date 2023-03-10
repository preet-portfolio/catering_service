import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
const benefits = [
  {
    name: "Quality Food",
    description: "Delicious and freshly made food to impress your guests.",
  },
  {
    name: "Customization",
    description:
      "We can customize the menu to suit your preferences, dietary needs, and budget.",
  },
  {
    name: "Convenience",
    description:
      "We take care of the food, so you can focus on your guests and enjoy the party.",
  },
  {
    name: "Professional Service",
    description:
      "Our team is trained to provide excellent service and ensure your satisfaction.",
  },
  {
    name: "Variety",
    description:
      "We offer a wide range of options, including appetizers, mains, desserts, and drinks.",
  },
  {
    name: "Local Ingredients",
    description:
      "We use locally sourced, fresh ingredients to support the community and ensure quality.",
  },
];

export default function Example() {
  return (
    <div className="bg-white mx-auto">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-6 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Ottawa Bites for Your House Party?
          </h2>
          <p className="mt-4 text-gray-500">
            At Ottawa Bites, we understand the importance of a good party.
            That&apos;s why we offer quality food, customized menus,
            professional service, and more to make your house party a success.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{benefit.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            src="https://images.pexels.com/photos/3807044/pexels-photo-3807044.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 saturate-190"
            width={300}
            height={300}
          />
          <Image
            src="https://images.pexels.com/photos/3807054/pexels-photo-3807054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
            width={300}
            height={300}
          />
          <Image
            src="https://images.pexels.com/photos/3807029/pexels-photo-3807029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
            width={300}
            height={300}
          />
          <Image
            src="https://images.pexels.com/photos/3807027/pexels-photo-3807027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
