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

  if (query.toLowerCase().includes("plus")) {
    const matches = query.match(/\d+/g);
    if (matches == null || matches.length < 2){
      return "";
    }
    return String(Number(matches[0]) + Number(matches[1]));
  }

  if (query.toLowerCase().includes("andrew id")){
    return "rchernof";
  }

  return "";
}
