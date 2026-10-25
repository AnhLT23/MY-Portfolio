export function publicAssetPath(path) {
  return path.startsWith("/") ? `${process.env.PUBLIC_URL || ""}${path}` : path;
}
