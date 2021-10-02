export const Size = (size: number) => {
  if (size > 50000000) return 0.0;
  else if (42511600 <= size && size <= 50000000) return 0.0;
  else if (32511600 <= size && size <= 42511600) return 0.1;
  else if (22511600 <= size && size <= 32511600) return 0.2;
  else if (12511600 <= size && size <= 22511600) return 0.3;
  else if (8511600 <= size && size <= 12511600) return 0.4;
  else if (5511600 <= size && size <= 8511600) return 0.5;
  else if (3511600 <= size && size <= 5511600) return 0.6;
  else if (2511600 <= size && size <= 3511600) return 0.7;
  else if (911600 <= size && size <= 2511600) return 0.8;
  else if (911600 > size) return 1;
};
