// Take pathname and generate breadcrumb array
export default (pathname: string) => {
  // Path accumulator
  let curPath = "";

  // Generate breadcrumb array
  const breadcrumb = pathname
    // Split the string with delimiter /
    .split("/")
    // Remove any empty entries
    .filter((c) => c !== "")
    // For each entry, add to curPath accumulator and return both name & curPath
    .map((c) => {
      curPath += "/" + c;
      return {
        name: c,
        path: curPath,
      };
    });

  return breadcrumb;
};
