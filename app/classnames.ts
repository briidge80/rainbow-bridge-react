export function classNames(
    ...items: ({[className: string]: boolean} | string)[]
): string {
    return items
        .reduce<string[]>(
            (accum, item) =>
                accum.concat(
                    typeof item === "string"
                        ? [item]
                        : Object.entries(item)
                              .filter(([_name, include]) => include)
                              .map(([name, _include]) => name)
                ),
            []
        )
        .join(" ");
}
