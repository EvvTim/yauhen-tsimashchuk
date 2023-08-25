const setClassName = (title) => {
  if (typeof title !== "string") {
    throw new Error("Title must be a string");
  }
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
};

export default setClassName;
