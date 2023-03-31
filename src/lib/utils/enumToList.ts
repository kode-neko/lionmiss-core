function enumStringToList(obj: Record<string, string>): string[] {
  return Object.values(obj).map((value) => value);
}

function enumNumberToList(obj: Record<string, string | number>): number[] {
  return Object.keys(obj)
    .filter((key) => Number(key))
    .map((ele) => Number(ele));
}

export { enumStringToList, enumNumberToList };
