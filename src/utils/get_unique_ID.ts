function getUniqueID(): string {
  const uniqueID: string = crypto.randomUUID();
  return uniqueID;
}

export default getUniqueID;
