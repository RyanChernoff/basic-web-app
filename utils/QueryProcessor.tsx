function isPrime(num : number) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // Other even numbers are not prime

    // Check for factors from 3 to the square root of num
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false; // num is divisible by i, so it's not prime
        }
    }

    return true; // num is prime
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Ryan";
  }

  if (query.toLowerCase().includes("largest")) {
    const matches = query.match(/\d+/g);
    if (matches == null || matches.length < 3){
      return "";
    }
    const max : number[] = [Number(matches[0]), Number(matches[1]), Number(matches[2])];
    return String(Math.max(...max));
  }

  if (query.toLowerCase().includes("prime")) {
    const matches = query.match(/\d+/g);
    if (matches == null || matches.length < 3){
      return "";
    }
    for (let i of matches){
      if(isPrime(Number(i))){
        return i;
      }
    }
    return "";
  }

  if (query.toLowerCase().includes("plus")) {
    const matches = query.match(/\d+/g);
    if (matches == null || matches.length < 2){
      return "";
    }
    let sum = 0;
    for (let i of matches){
      sum += Number(i);
    }
    return String(sum);
  }

  if (query.toLowerCase().includes("multiplied")) {
    const matches = query.match(/\d+/g);
    if (matches == null || matches.length < 2){
      return "";
    }
    return String(Number(matches[0]) * Number(matches[1]));
  }

  if (query.toLowerCase().includes("minus")) {
    const matches = query.match(/\d+/g);
    if (matches == null || matches.length < 2){
      return "";
    }
    return String(Number(matches[0]) - Number(matches[1]));
  }

  if (query.toLowerCase().includes("power of")) {
    const matches = query.match(/\d+/g);
    if (matches == null || matches.length < 2){
      return "";
    }
    return String(Math.pow(Number(matches[0]), Number(matches[1])));
  }

  if (query.toLowerCase().includes("square and cube")) {
    const matches = query.match(/\d+/g);
    if (matches == null){
      return "";
    }

    for (let i of matches){
      const n = Number(i);
      const root = Math.round(Math.pow(n, 1/6));
      if (Math.pow(root, 6) == n || true){
        return i;
      }
    }
  }

  if (query.toLowerCase().includes("andrew id")){
    return "rchernof";
  }

  return "";
}
