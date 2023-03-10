/* eslint-disable @next/next/no-img-element */
const products = [
  {
    id: 1,
    name: "Classic Burger",
    href: "#",
    price: "$10",
    imageSrc:
      "https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fENsYXNzaWMlMjBCdXJnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    imageAlt: "A delicious classic burger with lettuce, tomato, and cheese.",
  },
  {
    id: 2,
    name: "Crispy Chicken Sandwich",
    href: "#",
    price: "$8",
    imageSrc:
      "https://images.unsplash.com/photo-1603903631889-b5f3ba4d5b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Q3Jpc3B5JTIwQ2hpY2tlbiUyMFNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    imageAlt: "A crispy chicken sandwich with lettuce and mayo on a bun.",
  },
  {
    id: 3,
    name: "Loaded Fries",
    href: "#",
    price: "$6",
    imageSrc:
      "https://images.pexels.com/photos/6428247/pexels-photo-6428247.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Fries loaded with cheese, bacon bits, and green onions.",
  },
  {
    id: 4,
    name: "Veggie Wrap",
    href: "#",
    price: "$7",
    imageSrc:
      "https://images.pexels.com/photos/14077456/pexels-photo-14077456.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "A delicious veggie wrap with lettuce, tomato, and avocado.",
  },
  {
    id: 5,
    name: "Meatball Sub",
    href: "#",
    price: "$9",
    imageSrc:
      "https://i.pinimg.com/474x/4c/2a/fc/4c2afca93ffbc85617fd7e188d85fc8b.jpg",
    imageAlt: "A hearty meatball sub with melted cheese and tomato sauce.",
  },
  {
    id: 6,
    name: "Cheese Pizza",
    href: "#",
    price: "$12",
    imageSrc:
      "https://images.pexels.com/photos/9552572/pexels-photo-9552572.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "A hot and delicious cheese pizza straight from the oven.",
  },
  {
    id: 7,
    name: "Chicken Burger",
    href: "#",
    price: "$7",
    imageSrc:
      "https://images.pexels.com/photos/4062272/pexels-photo-4062272.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "A delicious chicken burger with fries and sauce.",
  },
  {
    id: 8,
    name: "Chocolate Shake",
    href: "#",
    price: "$4",
    imageSrc:
      "https://images.pexels.com/photos/11512980/pexels-photo-11512980.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "A cold and creamy chocolate shake with whipped cream on top.",
  },
];
export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
