import popularDestinations from "./popularDestinations";

export function DestinationCard(destination) {
  return `<div
    class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden"
  >
    <img
      class="h-32 w-32 flex-shrink-0 object-cover object-center"
      src="${destination.imageUrl}"
      alt="${destination.imageAlt}"
    />
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">
        ${destination.city}
      </h3>

      <p class="text-gray-600">
        ${destination.averagePrice} / night average
      </p>
      <div class="mt-4">
        <a
          href="#"
          class="text-brand-dark hover:text-brand font-semibold text-sm"
        >
          Explore ${destination.propertyCount} properties
        </a>
      </div>
    </div>
  </div> `;
}

const renderList = (destinations) =>
  destinations.map((dest) => `${DestinationCard(dest)}`);

function DestinationList(destinations) {
  return `<div class="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
    ${renderList(destinations).join("")}
  </div>`;
}

document
  .getElementById("root")
  .insertAdjacentHTML("afterbegin", DestinationList(popularDestinations));
