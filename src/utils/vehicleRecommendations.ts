import { VEHICLES_DATA } from '../data/vehicles';
import { Vehicle } from '../types/travel';

export interface VehicleRecommendationItem {
  vehicle: Vehicle;
  quantity: number;
}

export type PassengerRecommendation =
  | { status: 'empty'; items: [] }
  | { status: 'invalid'; items: [] }
  | { status: 'single'; items: [VehicleRecommendationItem] }
  | { status: 'combination'; items: VehicleRecommendationItem[] };

export function getPassengerRecommendation(
  rawPassengerCount: string,
  vehicles: Vehicle[] = VEHICLES_DATA
): PassengerRecommendation {
  const passengerCountText = rawPassengerCount.trim();
  if (!passengerCountText) return { status: 'empty', items: [] };
  if (!/^\d+$/.test(passengerCountText)) return { status: 'invalid', items: [] };

  const passengerCount = Number(passengerCountText);
  if (!Number.isSafeInteger(passengerCount) || passengerCount < 1 || vehicles.length === 0) {
    return { status: 'invalid', items: [] };
  }

  const maxCapacity = Math.max(...vehicles.map((vehicle) => vehicle.passengerRange.max));
  if (passengerCount <= maxCapacity) {
    const bestFit = vehicles
      .filter((vehicle) =>
        vehicle.passengerRange.min <= passengerCount &&
        passengerCount <= vehicle.passengerRange.max
      )
      .sort((a, b) => a.passengerRange.max - b.passengerRange.max)[0];

    return bestFit
      ? { status: 'single', items: [{ vehicle: bestFit, quantity: 1 }] }
      : { status: 'invalid', items: [] };
  }

  const vehicleCount = Math.ceil(passengerCount / maxCapacity);
  const remainder = passengerCount % maxCapacity;
  const availableSlack = remainder === 0 ? 0 : maxCapacity - remainder;
  const smallVehicles = vehicles
    .map((vehicle, index) => ({
      index,
      deficit: maxCapacity - vehicle.passengerRange.max,
    }))
    .filter(({ deficit }) => deficit > 0 && deficit <= availableSlack);

  const smallestDeficit = Math.min(...smallVehicles.map(({ deficit }) => deficit));
  const maxSmallVehicleCount = smallestDeficit === Infinity
    ? 0
    : Math.min(vehicleCount, Math.floor(availableSlack / smallestDeficit));
  const combinations: (number[] | null)[][] = Array.from(
    { length: availableSlack + 1 },
    () => Array(maxSmallVehicleCount + 1).fill(null)
  );
  combinations[0][0] = Array(vehicles.length).fill(0);

  for (const { index, deficit } of smallVehicles) {
    for (let slack = deficit; slack <= availableSlack; slack += 1) {
      for (let count = 1; count <= maxSmallVehicleCount; count += 1) {
        const previous = combinations[slack - deficit][count - 1];
        if (previous && !combinations[slack][count]) {
          const next = [...previous];
          next[index] += 1;
          combinations[slack][count] = next;
        }
      }
    }
  }

  let selectedCounts: number[] | null = null;
  for (let slack = availableSlack; slack >= 0 && !selectedCounts; slack -= 1) {
    for (let count = 0; count <= maxSmallVehicleCount; count += 1) {
      if (combinations[slack][count]) {
        selectedCounts = combinations[slack][count];
        break;
      }
    }
  }

  if (!selectedCounts) return { status: 'invalid', items: [] };

  const largestVehicleIndex = vehicles.findIndex(
    (vehicle) => vehicle.passengerRange.max === maxCapacity
  );
  const smallVehicleCount = selectedCounts.reduce((sum, count) => sum + count, 0);
  selectedCounts[largestVehicleIndex] += vehicleCount - smallVehicleCount;

  const items = vehicles.flatMap((vehicle, index) =>
    selectedCounts[index] > 0
      ? [{ vehicle, quantity: selectedCounts[index] }]
      : []
  );

  return { status: 'combination', items };
}
