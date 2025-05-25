export const asset = (path) => {
    return new URL(path, import.meta.url).href;
}
