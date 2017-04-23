const mass = 0.45359237

export const convertKg = (...kilogramos) => kilogramos.map(kilogramo => (kilogramo / mass).toFixed(5))

export const convertLb = (...pounds) => pounds.map(pound => (pound * mass).toFixed(5))
