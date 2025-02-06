interface TLinks {
  self: string;
}

interface TItem<T> {
  id: number;
  attributes: T;
  links: TLinks;
}

interface TImages {
  preview: string;
  detail: string | null;
}
