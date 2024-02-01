// fórmula de Haversine.

export function calculateDistanceToOrigin(
  destinationLat: number,
  destinationLon: number,
): number {
  const R: number = 6371;

  const dLat: number = toRadians(destinationLat);
  const dLon: number = toRadians(destinationLon);

  const a: number =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(0)) *
      Math.cos(toRadians(destinationLat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance: number = R * c; // Distance in kilometers.

  return distance;
}

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}
