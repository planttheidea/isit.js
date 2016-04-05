// simple polyfill for Number.EPSILON

export default ("EPSILON" in Number ? Number.EPSILON : 2.220446049250313e-16);