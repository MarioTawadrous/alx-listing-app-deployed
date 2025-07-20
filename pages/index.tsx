import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";

// Pill Component for Filters
const Pill = ({ label }: { label: string }) => (
  <button className="px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
    {label}
  </button>
);

// Property Card Component
const PropertyCard = ({ property }: { property: PropertyProps }) => {
  const { name, address, rating, price, discount, image } = property;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.jpg"}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        {discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            -{discount}%
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center">
            <span>★</span>
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-1">
          {address.city}, {address.country}
        </p>
        <div className="mt-4">
          <span className="font-bold text-lg">${price}</span>
          <span className="text-gray-600"> / night</span>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const filters = [
    "Top Villa",
    "Self Checkin",
    "Free Parking",
    "Mountain View",
    "Beachfront",
    "Luxury",
    "Pet Friendly",
    "Pool",
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-96 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('../public/assets/airbnb-3383993_1280.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <Pill key={filter} label={filter} />
          ))}
        </div>

        {/* Property Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
