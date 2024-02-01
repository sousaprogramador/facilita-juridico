import { calculateDistanceToOrigin } from '.';

describe('CalculateDistanceToOrigin', () => {
  describe('calculateDistanceToOrigin', () => {
    it('should return 0 when destination is the origin', () => {
      const result = calculateDistanceToOrigin(0, 0);
      expect(result).toBe(0);
    });

    it('should calculate the distance accurately', () => {
      const destinationLat = 37.7749;
      const destinationLon = -122.4194;
      const expectedDistance = 12795.416794470317;

      const result = calculateDistanceToOrigin(destinationLat, destinationLon);
      expect(result).toBeCloseTo(expectedDistance, 4);
    });

    it('should handle negative latitude and longitude', () => {
      const destinationLat = -37.7749;
      const destinationLon = -122.4194;
      const expectedDistance = 12795.416794470317;

      const result = calculateDistanceToOrigin(destinationLat, destinationLon);
      expect(result).toBeCloseTo(expectedDistance, 4);
    });
  });
});
